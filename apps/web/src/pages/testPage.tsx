import React from 'react';
import SearchButton from '@/components/common/Buttons/SearchButton';
import { PageLayout } from '@/components/common/PageLayout';
import PullToRefresh from '@/components/common/PullToRefresh';
import { RandomBrandAnimatedBanner } from '@/components/home/AnimatedBanners/RandomBrandAnimatedBanner';
import { CarouselWithBanners } from '@/components/home/CarouselWithBanners';
import { Header } from '@recipic-packages/ui';
import { useQueryClient } from '@tanstack/react-query';
import RecipcLogoImage from '@/assets/images/logo.webp';

export default function TestPage() {
  const queryClient = useQueryClient();
  const handleOnRefresh = async () => {
    await queryClient.invalidateQueries();
  };
  return (
    <PageLayout isTabBarVisible isBottomSpace isHeaderVisible>
      <Header titleImage={RecipcLogoImage} order="first">
        <SearchButton route={'/recipe'} />
      </Header>
      <PullToRefresh onRefresh={handleOnRefresh}>
        <RandomBrandAnimatedBanner />
        <CarouselWithBanners />
        <CarouselWithBanners />
        <CarouselWithBanners />
      </PullToRefresh>
    </PageLayout>
  );
}
