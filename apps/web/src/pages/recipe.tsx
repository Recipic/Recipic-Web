import React, { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import MockThumbnail from '@/assets/images/mockBanner.webp';
import { RecipeCardList } from '@/components/RecipeCard/RecipeCardList';
import { TRecipeCardInfo } from '@/types/recipeCard';
import BrandButtonList from '@/components/Buttons/BrandButton/BrandButtonList';
import { brands } from '@/constants/brands';
import { SearchBar } from '@/components/SearchBar';
import { TSearchFormValues } from '@/types/search';
import { formatBrandToHangeul } from '@/utils/formatBrand';
import { TBrand } from '@/types/brand';
import { WriteRecipeButton } from '@/components/Buttons/WriteRecipeButton';
import { WriteRecipeDrawer } from '@/components/Drawers/WriteRecipeDrawer';
import { useDrawer } from '@/hooks/useDrawer';

export default function Recipe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('keyword') || '');
  const [isSearching, setIsSearching] = useState(() => {
    const keyword = searchParams.get('keyword');
    return keyword !== null && keyword !== '';
  });
  const { isOpen, open, close } = useDrawer();

  /**
   * 검색을 처리하는 함수
   * @param {TSearchFormValues} param0 - 검색 폼 값 (searchQuery 포함)
   */
  const handleSearch = useCallback(
    ({ searchQuery }: TSearchFormValues) => {
      setSearchQuery(searchQuery);
      setIsSearching(true);
      if (searchQuery.trim()) {
        setSearchParams({ keyword: searchQuery });
      } else {
        setSearchParams({});
        setIsSearching(false);
      }
      // TODO: 여기에 실제 검색 로직 추가 (API 호출)
      console.log('Searching for:', searchQuery);
    },
    [setSearchParams],
  );

  /**
   * 검색 제출을 처리하는 함수
   * @param {TSearchFormValues} param0 - 검색 폼 값 (searchQuery 포함)
   */
  const handleSearchSubmit = useCallback(
    ({ searchQuery }: TSearchFormValues) => {
      handleSearch({ searchQuery: searchQuery });
    },
    [handleSearch],
  );

  /**
   * 브랜드 버튼 클릭을 처리하는 함수
   * @param {TBrand} searchBrand - 클릭된 브랜드
   */
  const handleBrandClick = useCallback(
    (searchBrand: TBrand) => {
      handleSearch({ searchQuery: formatBrandToHangeul(searchBrand) });
    },
    [handleSearch],
  );

  const handleGoBack = useCallback(() => {
    setIsSearching(false);
    setSearchQuery('');
    setSearchParams({});
  }, [setSearchParams]);

  useEffect(() => {
    const keyword = searchParams.get('keyword');
    if (keyword) {
      setSearchQuery(keyword);
      setIsSearching(true);
      // TODO: 여기에 실제 검색 로직 추가 (API 호출)
      console.log('Initial search for:', keyword);
    } else {
      setSearchQuery('');
      setIsSearching(false);
    }
  }, [searchParams]);

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
          <BrandButtonList brands={brands} onSearchClick={handleBrandClick} gridCols={5} />
        </>
      )}
      <RecipeCardList recipeInfosList={recipeInfosListData} />
      <WriteRecipeButton onClick={open} />
      <WriteRecipeDrawer isOpen={isOpen} onClose={close} />
    </PageLayout>
  );
}

//TODO: 목데이터. 추후 삭제 예정
const recipeInfosListData: TRecipeCardInfo[] = [
  {
    recipeId: 1,
    userId: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brand: 'starbucks',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thunbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
  },
  {
    recipeId: 2,
    userId: 'user456',
    title: '스타벅스 꿀조합 슈렉 ',
    brand: 'starbucks',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thunbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
  },
  {
    recipeId: 3,
    userId: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brand: 'starbucks',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thunbnailUrl: MockThumbnail,
    description: '날씨가 참 더운데 쌉쌀한 말차에',
    scrapCount: 85,
    commentCount: 16,
  },
  {
    recipeId: 4,
    userId: 'user456',
    title: '스타벅스 꿀조합 슈렉 ',
    brand: 'starbucks',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thunbnailUrl: MockThumbnail,
    description: '날씨가 참 더운데 쌉쌀한 말차에',
    scrapCount: 85,
    commentCount: 16,
  },
];
