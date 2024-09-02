import React from 'react';
import { RecipeCard } from '@/components/common/RecipeCard';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { useNavigate } from 'react-router-dom';

type TRecipeCardListProps = {
  recipeInfosList: TRecipeCardInfo[] | undefined;
};

export function RecipeCardList({ recipeInfosList }: TRecipeCardListProps) {
  const navigate = useNavigate();

  return (
    <div className="px-4 flex-[1_0_100%]">
      {recipeInfosList !== undefined &&
        recipeInfosList.map((recipeInfo: TRecipeCardInfo) => (
          <div key={recipeInfo.recipeId} className="mb-4">
            <RecipeCard
              onClick={() => navigate(`/recipe/${recipeInfo.recipeId}`)}
              thumbnailUrl={recipeInfo.thumbnailUrl}
              scrapCount={recipeInfo.scrapCount}
              commentCount={recipeInfo.commentCount}
              userNickName={recipeInfo.userNickName}
              title={recipeInfo.title}
              description={recipeInfo.description}
              brandName={recipeInfo.brandName}
            />
          </div>
        ))}
    </div>
  );
}
