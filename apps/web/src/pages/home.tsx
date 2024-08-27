import React from 'react';
import { Button, Header, PageLayout } from '@recipic-packages/ui';
import { CarouselWithBanners } from '@/components/CarouselWithBanners';
import { Section } from '@/components/Section';
import { TBrand } from '@/types/brand';
import { useNavigate } from 'react-router-dom';
import { formatBrandToHangeul } from '@/utils/formatBrand';
import BrandButtonList from '@/components/Buttons/BrandButton/BrandButtonList';
import { MagnifyingGlassIcon, BellIcon } from '@radix-ui/react-icons';
import RecipcLogoImage from '@/assets/images/logo.webp';
import MockThumbnail from '@/assets/images/mockBanner.webp';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { VerticalRecipeCardList } from '@/components/VerticalRecipeCard/VerticalRecipeCardList';
import { useGetRecipeRankList } from '@/hooks/useGetRecipeRankList';

export default function Home() {
  const navigate = useNavigate();
  const { recipeRankListData } = useGetRecipeRankList();
  console.log(recipeRankListData);

  /**
   * 브랜드 버튼 클릭을 처리하는 함수
   * @param {TBrand} searchBrand - 클릭된 브랜드
   */
  const handleBrandClick = (searchBrand: TBrand) => {
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
        <VerticalRecipeCardList recipeInfosList={recipeInfosListData} />
      </Section>
      <Section title="최신 HOT 브랜드">
        <BrandButtonList brands={brands} onSearchClick={handleBrandClick} gridCols={4} />
      </Section>
      <Section title="유명인의 인기 레시피">
        <VerticalRecipeCardList recipeInfosList={recipeInfosListData} />
      </Section>
    </PageLayout>
  );
}

export const brands: TBrand[] = ['starbucks', 'subway', 'starbucks', 'subway'];

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
