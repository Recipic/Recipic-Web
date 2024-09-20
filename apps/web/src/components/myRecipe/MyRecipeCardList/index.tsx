import React from 'react';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { SwipeableRecipeCard } from '@/components/myRecipe/SwipeableRecipeCard';

type TRecipeCardListProps = {
  recipeInfosList: TRecipeCardInfo[] | undefined;
  onDeleteRecipe: (recipeId: number) => void;
  onEditRecipe: (recipeId: number) => void;
};
export function MyRecipeCardList({
  recipeInfosList,
  onDeleteRecipe,
  onEditRecipe,
}: TRecipeCardListProps): React.ReactElement {
  return (
    <div className="px-4 flex-[1_0_100%]">
      {recipeInfosList?.map((recipeInfo: TRecipeCardInfo) => (
        <SwipeableRecipeCard
          key={recipeInfo.recipeId}
          recipeInfo={recipeInfo}
          onDelete={onDeleteRecipe}
          onEdit={onEditRecipe}
        />
      ))}
    </div>
  );
}
