import React, { Suspense } from 'react';
import { Header } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { CarouselWithBanners } from '@/components/home/CarouselWithBanners';
import { Section } from '@/components/common/Section';
import { TBrandEn } from '@/types/brand';
import { useNavigate } from 'react-router-dom';
import { formatBrandToHangeul } from '@/utils/formatBrand';
import RecipcLogoImage from '@/assets/images/logo.webp';
import { VerticalRecipeCardList } from '@/components/home/VerticalRecipeCard/VerticalRecipeCardList';
import { brands } from '@/constants/brands';
import NotificationButton from '@/components/home/NotificationButton';
import SearchButton from '@/components/common/Buttons/SearchButton';
import BrandButtonList from '@/components/common/Buttons/BrandButton/BrandButtonList';
import { RandomBrandAnimatedBanner } from '@/components/home/AnimatedBanners/RandomBrandAnimatedBanner';
import { TGetRecipeRankListResponse } from '@/apis/home/type';
import { RecipeCelebRankListContainer } from '@/components/home/RenderPropsContainer/RecipeCelebRankListContainer';
import { RecipeRankListContainer } from '@/components/home/RenderPropsContainer/RecipeRankListContainer';
import { SkeletonCardList } from '@/components/home/SkeletonCard/SkeletonCardList';
export default function Home() {
  const navigate = useNavigate();

  /** 브랜드 버튼 클릭을 처리하는 핸들러 */
  const handleBrandClick = (searchBrand: TBrandEn) => {
    navigate(`recipe?keyword=${formatBrandToHangeul(searchBrand)}`);
  };

  return (
    <PageLayout isTabBarVisible isBottomSpace isHeaderVisible>
      <Header titleImage={RecipcLogoImage} order="first">
        <SearchButton route={'/recipe'} />
        <NotificationButton route={'/notification'} />
      </Header>
      <RandomBrandAnimatedBanner />
      <CarouselWithBanners />
      <Section title="이번 달 인기 레시피">
        <Suspense fallback={<SkeletonCardList />}>
          <RecipeRankListContainer
            render={(recipeRankListData: TGetRecipeRankListResponse) => (
              <VerticalRecipeCardList recipeInfosList={recipeRankListData} />
            )}
          />
        </Suspense>
      </Section>
      <Section title="최신 HOT 브랜드">
        <BrandButtonList brands={brands} onSearchClick={handleBrandClick} gridCols={3} />
      </Section>
      <Section title="유명인의 인기 레시피">
        <Suspense fallback={<SkeletonCardList />}>
          <RecipeCelebRankListContainer
            render={(recipeCelebRankListData: TGetRecipeRankListResponse) => (
              <VerticalRecipeCardList recipeInfosList={recipeCelebRankListData} />
            )}
          />
        </Suspense>
      </Section>
    </PageLayout>
  );
}
