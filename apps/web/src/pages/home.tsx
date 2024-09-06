import React from 'react';
import { Header, PageLayout } from '@recipic-packages/ui';
import { CarouselWithBanners } from '@/components/home/CarouselWithBanners';
import { Section } from '@/components/common/Section';
import { TBrandEn } from '@/types/brand';
import { useNavigate } from 'react-router-dom';
import { formatBrandToHangeul } from '@/utils/formatBrand';
import RecipcLogoImage from '@/assets/images/logo.webp';
import { VerticalRecipeCardList } from '@/components/home/VerticalRecipeCard/VerticalRecipeCardList';
import { useGetRecipeRankList } from '@/hooks/useGetRecipeRankList';
import { useGetRecipeCelebRankList } from '@/hooks/useGetRecipeCelebRankList';
import { brands } from '@/constants/brands';
import NotificationButton from '@/components/home/NotificationButton';
import SearchButton from '@/components/common/Buttons/SearchButton';
import BrandButtonList from '@/components/common/Buttons/BrandButton/BrandButtonList';
import { RandomBrandAnimatedBanner } from '@/components/home/AnimatedBanners/RandomBrandAnimatedBanner';
export default function Home() {
  const navigate = useNavigate();
  const { recipeRankListData } = useGetRecipeRankList();
  const { recipeCelebRankListData } = useGetRecipeCelebRankList();

  /** 브랜드 버튼 클릭을 처리하는 함수 */
  const handleBrandClick = (searchBrand: TBrandEn) => {
    navigate(`recipe?keyword=${formatBrandToHangeul(searchBrand)}`);
  };

  return (
    <PageLayout isTabBarVisible isBottomSpace isHeaderVisible>
      <Header titleImage={RecipcLogoImage} order="first">
        <SearchButton onClick={() => navigate('/recipe')} />
        <NotificationButton onClick={() => {}} /* TODO: 알림 페이지 이동 */ />
      </Header>
      <RandomBrandAnimatedBanner />
      <CarouselWithBanners />
      <Section title="이번 달 인기 레시피">
        <VerticalRecipeCardList recipeInfosList={recipeRankListData} />
      </Section>
      <Section title="최신 HOT 브랜드">
        <BrandButtonList brands={brands} onSearchClick={handleBrandClick} gridCols={3} />
      </Section>
      <Section title="유명인의 인기 레시피">
        <VerticalRecipeCardList recipeInfosList={recipeCelebRankListData} />
      </Section>
    </PageLayout>
  );
}
