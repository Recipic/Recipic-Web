import React from 'react';
import { Button, Header, PageLayout } from '@recipic-packages/ui';
import { CarouselWithBanners } from '@/components/CarouselWithBanners';
import { Section } from '@/components/Section';
import { TBrandEn } from '@/types/brand';
import { useNavigate } from 'react-router-dom';
import { formatBrandToHangeul } from '@/utils/formatBrand';
import BrandButtonList from '@/components/Buttons/BrandButton/BrandButtonList';
import { MagnifyingGlassIcon, BellIcon } from '@radix-ui/react-icons';
import RecipcLogoImage from '@/assets/images/logo.webp';
import { VerticalRecipeCardList } from '@/components/VerticalRecipeCard/VerticalRecipeCardList';
import { useGetRecipeRankList } from '@/hooks/useGetRecipeRankList';
import { useGetRecipeCelebRankList } from '@/hooks/useGetRecipeCelebRankList';
import { brands } from '@/constants/brands';

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
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/recipe')}
          className="text-black"
          aria-label="레시피 검색"
        >
          <MagnifyingGlassIcon className="h-7 w-7" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {}} /* TODO: 알림 페이지 이동 */
          className="text-black"
          aria-label="알림"
        >
          <BellIcon className="h-7 w-7" />
        </Button>
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
