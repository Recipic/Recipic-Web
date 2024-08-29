import React from 'react';
import { Header, PageLayout } from '@recipic-packages/ui';
import { CarouselWithBanners } from '@/components/CarouselWithBanners';
import { Section } from '@/components/Section';
import { TBrandEn } from '@/types/brand';
import { useNavigate } from 'react-router-dom';
import { formatBrandToHangeul } from '@/utils/formatBrand';
import BrandButtonList from '@/components/Buttons/BrandButton/BrandButtonList';
import RecipcLogoImage from '@/assets/images/logo.webp';
import { VerticalRecipeCardList } from '@/components/VerticalRecipeCard/VerticalRecipeCardList';
import { useGetRecipeRankList } from '@/hooks/useGetRecipeRankList';
import { useGetRecipeCelebRankList } from '@/hooks/useGetRecipeCelebRankList';
import { brands } from '@/constants/brands';
import SearchButton from '@/components/Buttons/SearchButton';
import NotificationButton from '@/components/Buttons/NotificationButton';

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
