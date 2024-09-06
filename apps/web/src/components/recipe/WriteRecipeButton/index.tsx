import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Button } from '@recipic-packages/ui';
import { Pencil1Icon } from '@radix-ui/react-icons';

type TWriteRecipeButtonProps = {
  onClick: () => void;
};

export function WriteRecipeButton({ onClick }: TWriteRecipeButtonProps) {
  const [rightOffset, setRightOffset] = useState(0);

  /** 버튼의 위치(레이아웃 기준 우측 하단)를 결정하는 함수 */
  const updateRightOffset = useCallback(() => {
    // 페이지 레이아웃 요소를 선택
    const pageLayout = document.querySelector('.max-w-lg');
    if (pageLayout) {
      // 페이지 레이아웃의 위치와 크기 정보를 가져옴
      const rect = pageLayout.getBoundingClientRect();
      // 윈도우 우측 끝에서 레이아웃 우측 끝까지의 거리를 계산
      const offset = window.innerWidth - rect.right;
      setRightOffset(offset);
    }
  }, []);

  useEffect(() => {
    const pageLayout = document.querySelector('.max-w-lg');
    if (pageLayout) {
      // ResizeObserver를 생성하여 페이지 레이아웃의 크기 변화를 감지
      const resizeObserver = new ResizeObserver(updateRightOffset);
      resizeObserver.observe(pageLayout);
      updateRightOffset();
      return () => resizeObserver.disconnect();
    }
  }, [updateRightOffset]);

  const buttonStyle = useMemo(() => ({ right: `${rightOffset + 16}px` }), [rightOffset]);

  return (
    <Button
      className="fixed bottom-24 w-14 h-14 rounded-full bg-primary-500 hover:bg-primary-100 shadow-lg z-10"
      style={buttonStyle}
      onClick={onClick}
    >
      <Pencil1Icon className="w-6 h-6 text-white" />
    </Button>
  );
}
