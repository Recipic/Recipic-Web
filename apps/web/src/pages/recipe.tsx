import React, { useCallback } from 'react';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { RecipeCardList } from '@/components/common/RecipeCard/RecipeCardList';
import { brands } from '@/constants/brands';
import { WriteRecipeButton } from '@/components/recipe/WriteRecipeButton';
import { WriteRecipeDrawer } from '@/components/recipe/WriteRecipeDrawer';
import { useDrawer } from '@/hooks/useDrawer';
import { useGetRecipeList } from '@/hooks/useGetRecipeList';
import { useSearchLogic } from '@/hooks/useSearchLogic';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Spinner } from '@recipic-packages/ui';
import BrandButtonList from '@/components/common/Buttons/BrandButton/BrandButtonList';
import { SearchBar } from '@/components/common/SearchBar';
import { useAuth } from '@/contexts/authContext';
import { useNavigate } from 'react-router-dom';
import PullToRefresh from '@/components/common/PullToRefresh';
import { useRefreshQueries } from '@/hooks/useRefreshQueries';

export default function Recipe() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { searchQuery, isSearching, handleSearchSubmit, handleBrandClick, handleGoBack } = useSearchLogic();
  const { isOpen, open, close } = useDrawer();
  const { recipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useGetRecipeList({
    keyword: searchQuery,
  });
  const { refreshQueries } = useRefreshQueries();

  const { ref } = useInfiniteScroll({
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  });

  const handleOpenWriteRecipeDrawer = useCallback(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    open();
  }, [isLoggedIn, navigate, open]);

  const renderRecipeInfosListContent = () => (
    <>
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
    </>
  );

  return (
    <PageLayout isTabBarVisible isBottomSpace isHeaderVisible isTopNavBarVisible={isSearching}>
      <Header title="레시피" order="first" />
      {isSearching ? (
        <>
          <TopNavBar showBackButton onBackButtonClick={handleGoBack} childrenPosition="center" order="second">
            <SearchBar
              onSearchClick={handleSearchSubmit}
              searchQuery={searchQuery}
              inputProps={{ placeholder: '브랜드, 재료 등' }}
            />
          </TopNavBar>
          {renderRecipeInfosListContent()}
        </>
      ) : (
        <PullToRefresh onRefresh={refreshQueries}>
          <div className="px-4 py-1 flex-[1_0_100%]">
            <SearchBar
              onSearchClick={handleSearchSubmit}
              searchQuery={searchQuery}
              inputProps={{ placeholder: '브랜드, 재료 등' }}
            />
          </div>
          <BrandButtonList brands={brands} onSearchClick={handleBrandClick} gridCols={3} />
          {renderRecipeInfosListContent()}
        </PullToRefresh>
      )}
      <WriteRecipeButton onClick={handleOpenWriteRecipeDrawer} />
      <WriteRecipeDrawer isOpen={isOpen} onClose={close} />
    </PageLayout>
  );
}
