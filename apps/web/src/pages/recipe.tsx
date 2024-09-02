import React from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { RecipeCardList } from '@/components/RecipeCard/RecipeCardList';
import BrandButtonList from '@/components/Buttons/BrandButton/BrandButtonList';
import { brands } from '@/constants/brands';
import { SearchBar } from '@/components/SearchBar';
import { WriteRecipeButton } from '@/components/Buttons/WriteRecipeButton';
import { WriteRecipeDrawer } from '@/components/Drawers/WriteRecipeDrawer';
import { useDrawer } from '@/hooks/useDrawer';
import { useGetRecipeList } from '@/hooks/useGetRecipeList';
import { useSearchLogic } from '@/hooks/useSearchLogic';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Spinner } from '@recipic-packages/ui';

export default function Recipe() {
  const { searchQuery, isSearching, handleSearchSubmit, handleBrandClick, handleGoBack } = useSearchLogic();
  const { isOpen, open, close } = useDrawer();

  const { recipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useGetRecipeList({
    keyword: searchQuery,
  });

  const { ref } = useInfiniteScroll({
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  });

  return (
    <PageLayout isTabBarVisible isBottomSpace isHeaderVisible isTopNavBarVisible={isSearching}>
      <Header title="레시피" order="first" />
      {isSearching ? (
        <TopNavBar showBackButton onBackButtonClick={handleGoBack} childrenPosition="center" order="second">
          <SearchBar onSearchClick={handleSearchSubmit} searchQuery={searchQuery} />
        </TopNavBar>
      ) : (
        <>
          <div className="px-4 py-1 flex-[1_0_100%]">
            <SearchBar onSearchClick={handleSearchSubmit} searchQuery={searchQuery} />
          </div>
          <BrandButtonList brands={brands} onSearchClick={handleBrandClick} gridCols={3} />
        </>
      )}
      {isLoading ? (
        <Spinner className="text-primary-500" />
      ) : recipeInfosList.length === 0 ? (
        <div className="px-4 py-4 text-center">
          <p className="text-regular16 text-gray-500">검색된 레시피가 없어요</p>
        </div>
      ) : (
        <>
          <RecipeCardList recipeInfosList={recipeInfosList} />
          <div ref={ref}>{isFetchingNextPage && <Spinner className="text-primary-500" />}</div>
        </>
      )}
      <WriteRecipeButton onClick={open} />
      <WriteRecipeDrawer isOpen={isOpen} onClose={close} />
    </PageLayout>
  );
}
