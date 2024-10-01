import React, { useEffect, useState } from 'react';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { SwipeableRecipeCard } from '@/components/myRecipe/SwipeableRecipeCard';
import { useDeleteMyRecipe } from '@/hooks/useDeleteMyRecipe';
import { useGetRecipeDetail } from '@/hooks/useGetRecipeDetail';
import { WriteRecipeDrawer } from '@/components/recipe/WriteRecipeDrawer';
import { useDrawer } from '@/hooks/useDrawer';
import { TFormatedRecipeData, TRecipeDetail } from '@/types/recipe';

type TRecipeCardListProps = {
  recipeInfosList: TRecipeCardInfo[];
};

export function MyRecipeCardList({ recipeInfosList }: TRecipeCardListProps): React.ReactElement {
  const { mutate: mutateDeleteMyRecipe } = useDeleteMyRecipe();
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | undefined>(undefined);
  const { recipeDetailData, isFetching } = useGetRecipeDetail({ recipeId: selectedRecipeId });
  const { isOpen, open, close } = useDrawer();
  const [formattedRecipeData, setFormattedRecipeData] = useState<TFormatedRecipeData | undefined>(undefined);

  const handleDeleteRecipe = ({ recipeId }: { recipeId: number }) => {
    mutateDeleteMyRecipe({ recipeId: recipeId });
  };

  const handleEditRecipe = ({ recipeId }: { recipeId: number }) => {
    setSelectedRecipeId(recipeId);
  };

  useEffect(() => {
    if (recipeDetailData && !isFetching) {
      const formattedData = formatRecipeData(recipeDetailData);
      setFormattedRecipeData(formattedData);
      open();
    }
  }, [recipeDetailData, isFetching, open]);

  const handleCloseDrawer = () => {
    close();
    setSelectedRecipeId(undefined);
    setFormattedRecipeData(undefined);
  };

  return (
    <>
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
      <WriteRecipeDrawer isOpen={isOpen} onClose={handleCloseDrawer} editRecipeData={formattedRecipeData} />
    </>
  );
}

/** 레시피 게시글 수정을 위해 데이터 포멧팅을 하는 함수 */
function formatRecipeData(recipeDetailData: TRecipeDetail): TFormatedRecipeData {
  return {
    recipeId: recipeDetailData.recipeId,
    title: recipeDetailData.title,
    brand: recipeDetailData.brandName,
    images: [
      {
        file: new File([], recipeDetailData.thunbnailUrl.split('/').pop() || 'image.jpg'),
        preview: recipeDetailData.thunbnailUrl,
      },
    ],
    description: recipeDetailData.description,
    isCelebrity: recipeDetailData.isCelebrity,
  };
}
