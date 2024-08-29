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
import MockThumbnail from '@/assets/images/mockBanner.webp';
import { TRecipeCardInfo } from '@/types/recipeCard';

export default function Home() {
  const navigate = useNavigate();
  const { recipeRankListData } = useGetRecipeRankList();
  //const { recipeCelebRankListData } = useGetRecipeCelebRankList();

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
        <VerticalRecipeCardList recipeInfosList={pickedRecipeInfosListData} /> {/*TODO: 임시 목데이터 */}
      </Section>
    </PageLayout>
  );
}

//TODO: 목데이터. 추후 삭제 예정
const pickedRecipeInfosListData: TRecipeCardInfo[] = [
  {
    recipeId: 1,
    userNickName: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brandName: '스타벅스',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thumbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
    status: '1',
    userProfileImageUrl: MockThumbnail,
  },
  {
    recipeId: 1,
    userNickName: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brandName: '요아정',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thumbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
    status: '1',
    userProfileImageUrl: MockThumbnail,
  },
  {
    recipeId: 1,
    userNickName: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brandName: '서브웨이',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thumbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
    status: '1',
    userProfileImageUrl: MockThumbnail,
  },
  {
    recipeId: 1,
    userNickName: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brandName: '스타벅스',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thumbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
    status: '1',
    userProfileImageUrl: MockThumbnail,
  },
];
