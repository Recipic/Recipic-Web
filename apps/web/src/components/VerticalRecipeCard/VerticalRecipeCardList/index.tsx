import React from 'react';
import { VerticalRecipeCard } from '@/components/VerticalRecipeCard';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { useNavigate } from 'react-router-dom';
import { Carousel } from '@recipic-packages/ui';

type TRecipeCardListProps = {
  recipeInfosList: TRecipeCardInfo[];
};

export function VerticalRecipeCardList({ recipeInfosList }: TRecipeCardListProps) {
  const navigate = useNavigate();

  return (
    <Carousel slidesToShow={2} freeScroll>
      {recipeInfosList.map((recipeInfo: TRecipeCardInfo) => (
        <div key={recipeInfo.recipeId} className="px-4 py-2 flex">
          <VerticalRecipeCard
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
    </Carousel>
  );
}
