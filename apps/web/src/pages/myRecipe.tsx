import React from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { useGetMyRecipeList } from '@/hooks/useGetMyRecipeList';
import { useSearchLogic } from '@/hooks/useSearchLogic';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import PrimarySpinner from '@/components/common/PrimarySpinner';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { SearchBar } from '@/components/common/SearchBar';
import { useNavigate } from 'react-router-dom';
import { MyRecipeCardList } from '@/components/myRecipe/MyRecipeCardList';

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

  return (
    <PageLayout isBottomSpace isHeaderVisible={!isSearching} isTopNavBarVisible>
      {isSearching ? (
        <TopNavBar showBackButton onBackButtonClick={handleGoBack} childrenPosition="center" order="first">
          <SearchBar onSearchClick={handleSearchSubmit} searchQuery={searchQuery} />
        </TopNavBar>
      ) : (
        <>
          <TopNavBar order="first" onBackButtonClick={() => navigate('/my')} />
          <Header title="내가 작성한 레시피" order="second" />
          <div className="px-4 py-1 flex-[1_0_100%]">
            <SearchBar onSearchClick={handleSearchSubmit} searchQuery={searchQuery} />
          </div>
        </>
      )}
      {isLoading ? (
        <PrimarySpinner />
      ) : myRecipeInfosList.length === 0 ? (
        <div className="px-4 py-4 text-center">
          <p className="text-regular16 text-gray-500">검색된 레시피가 없어요</p>
        </div>
      ) : (
        <>
          {myRecipeInfosList !== undefined && <MyRecipeCardList recipeInfosList={myRecipeInfosList} />}
          <div ref={ref}>{isFetchingNextPage && <PrimarySpinner />}</div>
        </>
      )}
    </PageLayout>
  );
}
