import React, { useCallback, useRef, useState } from 'react';

type TUseSwipe = {
  threshold: number;
  minSwipeDistance: number;
};

export function useSwipe({ threshold = 20, minSwipeDistance = 5 }: TUseSwipe) {
  const [state, setState] = useState({
    offset: 0,
    isDragging: false,
  });
  const startXRef = useRef<number>(0);
  const startYRef = useRef<number>(0);
  const isVerticalRef = useRef<boolean | null>(null);

  const handleStart = useCallback((clientX: number, clientY: number): void => {
    setState(prev => ({ ...prev, isDragging: true }));
    startXRef.current = clientX;
    startYRef.current = clientY;
    isVerticalRef.current = null;
  }, []);

  const handleMove = useCallback(
    (clientX: number, clientY: number): void => {
      if (!state.isDragging) {
        return;
      }

      const diffX = clientX - startXRef.current;
      const diffY = clientY - startYRef.current;

      if (isVerticalRef.current === null) {
        if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > minSwipeDistance) {
          isVerticalRef.current = true;
        } else if (Math.abs(diffX) > minSwipeDistance) {
          isVerticalRef.current = false;
        }
      }

      if (isVerticalRef.current === false) {
        setState(prev => ({
          ...prev,
          offset: Math.max(-threshold, Math.min(threshold, diffX)),
        }));
      }
    },
    [state.isDragging, threshold, minSwipeDistance],
  );

  const handleEnd = useCallback((): void => {
    setState(prev => ({
      isDragging: false,
      offset: Math.abs(prev.offset) < threshold / 2 ? 0 : prev.offset > 0 ? threshold : -threshold,
    }));
    isVerticalRef.current = null;
  }, [threshold]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent): void => {
      handleStart(e.touches[0].clientX, e.touches[0].clientY);
    },
    [handleStart],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent): void => {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    },
    [handleMove],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent): void => {
      handleStart(e.clientX, e.clientY);
    },
    [handleStart],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent): void => {
      handleMove(e.clientX, e.clientY);
    },
    [handleMove],
  );

  return [
    state,
    {
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd: handleEnd,
      handleMouseDown,
      handleMouseMove,
      handleMouseUp: handleEnd,
    },
  ] as const;
}
