import React from 'react';
import { Header, PageLayout } from '@recipic-packages/ui';
import MockThumbnail from '@/assets/images/mockBanner.webp';
import { RecipeCardList } from '@/components/RecipeCard/RecipeCardList';
import { TRecipeCardInfo } from '@/types/recipeCard';

export default function Recipe() {
  return (
    <PageLayout isTabBarVisible isBottomSpace>
      <Header title="레시피" />
      <RecipeCardList recipeInfosList={recipeInfosListData} />
    </PageLayout>
  );
}

const recipeInfosListData: TRecipeCardInfo[] = [
  {
    recipeId: 101,
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
    recipeId: 101,
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
    recipeId: 101,
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
    recipeId: 101,
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
