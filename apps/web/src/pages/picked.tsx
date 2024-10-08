import React from 'react';
import { Header, PageLayout } from '@recipic-packages/ui';
import { RecipeCardList } from '@/components/common/RecipeCard/RecipeCardList';
import { useGetPickedRecipeList } from '@/hooks/useGetPickedRecipeList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import PrimarySpinner from '@/components/common/PrimarySpinner';
import BrandsPopUpIconsContainer from '@/components/picked/BrandsPopUpIconsContainer';

export default function Picked() {
  const { pickedRecipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useGetPickedRecipeList();

  const { ref } = useInfiniteScroll({
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  });

  return (
    <PageLayout isTabBarVisible isBottomSpace isHeaderVisible>
      <Header title="찜" order="first" />
      {isLoading ? (
        <PrimarySpinner />
      ) : pickedRecipeInfosList.length === 0 ? (
        <div className="flex flex-col gap-4 p-4 text-center">
          <p className="text-regular16 text-gray-500 whitespace-pre">{`레시피를 찜해서\n나만의 레시피 북을 만들어보아요!`}</p>
          <BrandsPopUpIconsContainer />
        </div>
      ) : (
        <>
          <div className="p-4">
            <BrandsPopUpIconsContainer />
          </div>
          <RecipeCardList recipeInfosList={pickedRecipeInfosList} />
          <div ref={ref}>{isFetchingNextPage && <PrimarySpinner />}</div>
        </>
      )}
    </PageLayout>
  );
}
