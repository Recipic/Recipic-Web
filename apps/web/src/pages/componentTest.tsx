import React, { useState } from 'react';
import { Button, Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { CarouselWithBanners } from '@/components/CarouselWithBanners';
import { SectionTitle } from '@/components/SectionTitle';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { RecipeCard } from '@/components/RecipeCard';
import MockThumbnail from '@/assets/images/mockBanner.webp';

export default function ComponentTest() {
  const [count, setCount] = useState(0);

  return (
    <PageLayout isTabBarVisible={false}>
      <TopNavBar />
      <Header title="테스트 페이지">
        <Button variant="secondary" onClick={() => setCount(count => count + 1)}>
          버튼1
        </Button>
        <Button variant="secondary" onClick={() => setCount(count => count + 1)}>
          버튼2
        </Button>
      </Header>
      <SectionTitle title="테스트 섹션 타이틀" />
      <div className="space-y-4 mt-4">
        <CarouselWithBanners />
        <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
        <Button variant="secondary" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
        <Button variant="destructive" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
        <div className="px-4 flex-[1_0_100%]">
          <RecipeCard
            onClick={() => console.log('Recipe card clicked')}
            recipeId={recipeData.recipeId}
            userId={recipeData.userId}
            title={recipeData.title}
            brand={recipeData.brand}
            thunbnailUrl={recipeData.thunbnailUrl}
            description={recipeData.description}
            scrapCount={recipeData.scrapCount}
            commentCount={recipeData.commentCount}
          />
        </div>
      </div>
    </PageLayout>
  );
}

const recipeData: TRecipeCardInfo = {
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
};
