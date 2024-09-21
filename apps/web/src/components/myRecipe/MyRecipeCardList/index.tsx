import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { SwipeableRecipeCard } from '@/components/myRecipe/SwipeableRecipeCard';
import { useDeleteMyRecipe } from '@/hooks/useDeleteMyRecipe';

type TRecipeCardListProps = {
  recipeInfosList: TRecipeCardInfo[];
};

export function MyRecipeCardList({ recipeInfosList }: TRecipeCardListProps): React.ReactElement {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const { mutate: mutateDeleteMyRecipe } = useDeleteMyRecipe();

  const handleDeleteRecipe = ({ recipeId }: { recipeId: number }) => {
    mutateDeleteMyRecipe({ recipeId, keyword });
  };

  const handleEditRecipe = ({ recipeId }: { recipeId: number }) => {
    console.log('edit recipeId', recipeId);
    //TODO: 수정 api 로직 추가하기
  };

  return (
    <div className="px-4 flex-[1_0_100%]">
      {recipeInfosList.map((recipeInfo: TRecipeCardInfo) => (
        <SwipeableRecipeCard
          key={recipeInfo.recipeId}
          recipeInfo={recipeInfo}
          onDelete={() => handleDeleteRecipe({ recipeId: recipeInfo.recipeId })}
          onEdit={() => handleEditRecipe({ recipeId: recipeInfo.recipeId })}
        />
      ))}
    </div>
  );
}
