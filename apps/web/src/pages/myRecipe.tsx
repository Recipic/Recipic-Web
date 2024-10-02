import React from 'react';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { useGetMyRecipeList } from '@/hooks/useGetMyRecipeList';
import { useSearchLogic } from '@/hooks/useSearchLogic';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import PrimarySpinner from '@/components/common/PrimarySpinner';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { SearchBar } from '@/components/common/SearchBar';
import { useNavigate } from 'react-router-dom';
import { MyRecipeCardList } from '@/components/myRecipe/MyRecipeCardList';
import { AnimatedRecipeShareContainer } from '@/components/myRecipe/AnimatedRecipeShareContainer';
import { useDrawer } from '@/hooks/useDrawer';
import { WriteRecipeDrawer } from '@/components/recipe/WriteRecipeDrawer';

export default function MyRecipe() {
  const navigate = useNavigate();
  const { searchQuery, isSearching, handleSearchSubmit, handleGoBack } = useSearchLogic();

  const { myRecipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useGetMyRecipeList({
    keyword: searchQuery,
    size: DEFAULT_SIZE,
  });

  const { ref } = useInfiniteScroll({
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  });

  const { isOpen, open, close } = useDrawer();

  return (
    <PageLayout isBottomSpace isHeaderVisible={!isSearching} isTopNavBarVisible>
      {isSearching ? (
        <TopNavBar showBackButton onBackButtonClick={handleGoBack} childrenPosition="center" order="first">
          <SearchBar
            onSearchClick={handleSearchSubmit}
            searchQuery={searchQuery}
            inputProps={{ placeholder: '브랜드, 재료 등' }}
          />
        </TopNavBar>
      ) : (
        <>
          <TopNavBar order="first" onBackButtonClick={() => navigate('/my')} />
          <Header title="내가 작성한 레시피" order="second" />
          <div className="px-4 py-1 flex-[1_0_100%]">
            <SearchBar
              onSearchClick={handleSearchSubmit}
              searchQuery={searchQuery}
              inputProps={{ placeholder: '브랜드, 재료 등' }}
            />
          </div>
        </>
      )}
      {isLoading ? (
        <PrimarySpinner />
      ) : myRecipeInfosList.length === 0 ? (
        <div className="flex flex-col gap-4 p-4 text-center">
          <p className="text-regular16 text-gray-500">검색된 레시피가 없어요</p>
          <AnimatedRecipeShareContainer onClick={open} />
        </div>
      ) : (
        <>
          <div className="p-4">
            <AnimatedRecipeShareContainer onClick={open} />
          </div>
          {myRecipeInfosList !== undefined && <MyRecipeCardList recipeInfosList={myRecipeInfosList} />}
          <div ref={ref}>{isFetchingNextPage && <PrimarySpinner />}</div>
        </>
      )}
      <WriteRecipeDrawer isOpen={isOpen} onClose={close} />
    </PageLayout>
  );
}
