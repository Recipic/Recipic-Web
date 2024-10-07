import {
  LOTTIE_SHRINK_DURATION,
  MAX_LOTTIE_SIZE,
  MIN_ANIMATION_DURATION,
  MIN_LOTTIE_SIZE,
  REFRESH_THRESHOLD,
} from '@/constants/pullToRefresh';
import { delay } from '@/utils/timeUtils';
import React, { useCallback, useRef, useEffect, useState } from 'react';

type TUsePullToRefresh = {
  scrollRef: React.RefObject<HTMLDivElement>;
  onRefresh?: () => Promise<void>;
};

export function usePullToRefresh({ scrollRef, onRefresh }: TUsePullToRefresh) {
  const [pullHeight, setPullHeight] = useState<number>(0); // 현재 당겨진 높이를 저장하는 state
  const [lottieSize, setLottieSize] = useState<number>(MIN_LOTTIE_SIZE); // Lottie 애니메이션의 현재 크기를 저장하는 state

  const shrinkingLottieRef = useRef<boolean>(false); // Lottie 애니메이션이 축소 중인지 여부를 나타내는 ref
  const refreshPromiseRef = useRef<Promise<void> | null>(null); // 현재 실행 중인 새로고침 Promise를 저장하는 ref
  const startYRef = useRef<number | null>(null); // 터치 시작 위치를 저장하는 ref
  const lastYRef = useRef<number | null>(null); // 마지막으로 기록된 터치 위치를 저장하는 ref

  /** pullHeight와 lottieSize를 동시에 업데이트하는 함수 */
  const updatePullHeight = useCallback(({ newHeight }: { newHeight: number }) => {
    setPullHeight(newHeight);
    // lottieSize를 pullHeight에 비례해서 계산
    const sizeRange = MAX_LOTTIE_SIZE - MIN_LOTTIE_SIZE;
    const progress = Math.min(newHeight / REFRESH_THRESHOLD, 1);
    setLottieSize(MIN_LOTTIE_SIZE + sizeRange * progress);
  }, []);

  /** 새로고침 로직을 처리하는 함수 */
  const handleRefresh = useCallback(async () => {
    // 이미 새로고침 중이거나 onRefresh 콜백이 없으면 early return
    if (refreshPromiseRef.current || !onRefresh || !scrollRef.current) {
      return;
    }

    const promise = onRefresh();
    refreshPromiseRef.current = promise;

    // 최소 애니메이션 시간을 보장하기 위한 로직
    const refreshStart = Date.now();
    await promise; // onRefresh 비동기 작업이 완료될 때까지 기다림
    const elapsed = Date.now() - refreshStart; // 새로고침 작업에 걸린 시간
    const remainingTime = Math.max(0, MIN_ANIMATION_DURATION - elapsed); // 새로고침이 빨리 끝났을 때를 대비한 일정 시간 로딩 애니메이션을 보여주기 위해

    await delay(remainingTime);
    shrinkingLottieRef.current = true;
    setLottieSize(MIN_LOTTIE_SIZE);

    // Lottie 축소 애니메이션을 위한 지연
    await delay(LOTTIE_SHRINK_DURATION);
    shrinkingLottieRef.current = false;
    updatePullHeight({ newHeight: 0 });
    refreshPromiseRef.current = null;
    startYRef.current = null;
    lastYRef.current = null;
  }, [onRefresh, scrollRef, updatePullHeight]);

  /** 터치 시작 시 초기 위치를 기록하기 위한 핸들러 */
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!scrollRef.current || scrollRef.current.scrollTop > 0 || refreshPromiseRef.current) {
        return;
      }
      startYRef.current = e.touches[0].pageY;
      lastYRef.current = e.touches[0].pageY;
    },
    [scrollRef],
  );

  /** 터치 이동 시 pullHeight를 업데이트하기 위한 핸들러 */
  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (startYRef.current === null || !scrollRef.current || refreshPromiseRef.current) {
        return;
      }
      const currentY = e.touches[0].pageY; // 현재 터치 이벤트의 Y 좌표(세로 위치)
      const deltaY = currentY - (lastYRef.current ?? startYRef.current); // 이전 위치와 현재 위치의 차이
      lastYRef.current = currentY; // 현재 Y 좌표를 lastYRef에 저장하여 다음 움직임을 계산할 때 사용

      // 스크롤이 최상단에 있을 때만 pullHeight를 업데이트.
      if (scrollRef.current.scrollTop === 0) {
        const newPullHeight = Math.max(0, pullHeight + deltaY * 0.5);
        updatePullHeight({ newHeight: newPullHeight });
      }
    },
    [pullHeight, scrollRef, updatePullHeight],
  );

  /** 터치 종료 시 새로고침 여부를 결정하기 위한 핸들러 */
  const handleTouchEnd = useCallback(() => {
    if (!scrollRef.current) {
      return;
    }
    if (pullHeight >= REFRESH_THRESHOLD) {
      handleRefresh();
    } else {
      updatePullHeight({ newHeight: 0 });
    }
    startYRef.current = null;
    lastYRef.current = null;
  }, [scrollRef, pullHeight, handleRefresh, updatePullHeight]);

  // 클린업 함수: 컴포넌트 언마운트 시 모든 ref를 초기화
  useEffect(() => {
    return () => {
      shrinkingLottieRef.current = false;
      refreshPromiseRef.current = null;
      startYRef.current = null;
      lastYRef.current = null;
    };
  }, []);

  return {
    pullHeight,
    lottieSize,
    shrinkingLottie: shrinkingLottieRef.current,
    refreshPromise: refreshPromiseRef.current,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
