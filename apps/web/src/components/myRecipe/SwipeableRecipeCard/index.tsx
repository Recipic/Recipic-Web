import React, { useCallback, useRef, useEffect } from 'react';
import { RecipeCard } from '@/components/common/RecipeCard';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { useSwipe } from '@/hooks/useSwipe';
import { Button } from '@recipic-packages/ui';

export function SwipeableRecipeCard({
  recipeInfo,
  onDelete,
  onEdit,
}: {
  recipeInfo: TRecipeCardInfo;
  onDelete: (recipeId: number) => void;
  onEdit: (recipeId: number) => void;
}): React.ReactElement {
  const cardRef = useRef<HTMLDivElement>(null);
  const [{ offset, isDragging }, swipeHandlers] = useSwipe(100);

  const handleDelete = useCallback(() => {
    if (recipeInfo.recipeId === undefined) {
      return;
    }
    onDelete(recipeInfo.recipeId);
  }, [onDelete, recipeInfo.recipeId]);

  const handleEdit = useCallback(() => {
    if (recipeInfo.recipeId === undefined) {
      return;
    }
    onEdit(recipeInfo.recipeId);
  }, [onEdit, recipeInfo.recipeId]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        swipeHandlers.handleMouseMove(e as unknown as React.MouseEvent);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        swipeHandlers.handleMouseUp();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, swipeHandlers]);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden mb-4 touch-none"
      onTouchStart={swipeHandlers.handleTouchStart}
      onTouchMove={swipeHandlers.handleTouchMove}
      onTouchEnd={swipeHandlers.handleTouchEnd}
      onMouseDown={swipeHandlers.handleMouseDown}
    >
      <div className="absolute inset-0 flex">
        <div
          className="flex text-white absolute left-0 h-full transition-opacity duration-300"
          style={{
            width: `${Math.max(offset, 0)}px`,
            opacity: offset > 0 ? 1 : 0,
          }}
        >
          <Button variant="defaultSub" onClick={handleEdit} className="text-semibold18 text-center w-full h-full">
            수정
          </Button>
        </div>
        <div
          className="flex text-white absolute right-0 h-full transition-opacity duration-300"
          style={{
            width: `${Math.max(-offset, 0)}px`,
            opacity: offset < 0 ? 1 : 0,
          }}
        >
          <Button variant="destructive" onClick={handleDelete} className="text-semibold18 text-center w-full h-full">
            삭제
          </Button>
        </div>
      </div>
      <div
        className="relative bg-white"
        style={{
          transform: `translateX(${offset}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
        }}
      >
        <RecipeCard
          route={`/recipe/${recipeInfo.recipeId}`}
          thumbnailUrl={recipeInfo.thumbnailUrl}
          scrapCount={recipeInfo.scrapCount}
          commentCount={recipeInfo.commentCount}
          userNickName={recipeInfo.userNickName}
          title={recipeInfo.title}
          description={recipeInfo.description}
          brandName={recipeInfo.brandName}
          recipeId={recipeInfo.recipeId}
        />
      </div>
    </div>
  );
}
