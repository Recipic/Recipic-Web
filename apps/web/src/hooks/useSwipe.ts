import React, { useCallback, useRef, useState } from 'react';

type SwipeState = {
  offset: number;
  isDragging: boolean;
};

type SwipeActions = {
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
};

export function useSwipe(threshold: number): [SwipeState, SwipeActions] {
  const [state, setState] = useState<SwipeState>({
    offset: 0,
    isDragging: false,
  });
  const startXRef = useRef<number>(0);

  const handleStart = useCallback((clientX: number): void => {
    setState(prev => ({ ...prev, isDragging: true }));
    startXRef.current = clientX;
  }, []);

  const handleMove = useCallback(
    (clientX: number): void => {
      if (!state.isDragging) {
        return;
      }
      const diff = clientX - startXRef.current;
      setState(prev => ({
        ...prev,
        offset: Math.max(-threshold, Math.min(threshold, diff)),
      }));
    },
    [state.isDragging, threshold],
  );

  const handleEnd = useCallback((): void => {
    setState(prev => ({
      ...prev,
      isDragging: false,
      offset: Math.abs(prev.offset) < threshold / 2 ? 0 : prev.offset > 0 ? threshold : -threshold,
    }));
  }, [threshold]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent): void => {
      handleStart(e.touches[0].clientX);
    },
    [handleStart],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent): void => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent): void => {
      handleStart(e.clientX);
    },
    [handleStart],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent): void => {
      handleMove(e.clientX);
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
  ];
}
