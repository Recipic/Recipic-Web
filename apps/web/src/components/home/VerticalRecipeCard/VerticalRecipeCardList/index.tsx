import React from 'react';
import { VerticalRecipeCard } from '@/components/home/VerticalRecipeCard';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { Carousel } from '@recipic-packages/ui';

type TRecipeCardListProps = {
  recipeInfosList: TRecipeCardInfo[];
};

export function VerticalRecipeCardList({ recipeInfosList }: TRecipeCardListProps) {
  return (
    <Carousel slidesToShow={2} freeScroll>
      {recipeInfosList.map((recipeInfo: TRecipeCardInfo) => (
        <div key={recipeInfo.recipeId} className="px-4 py-2 flex">
          <VerticalRecipeCard
            route={`/recipe/${recipeInfo.recipeId}`}
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
    </Carousel>
  );
}
