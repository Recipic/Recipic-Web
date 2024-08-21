import React from 'react';
import { PageLayout } from '@recipic-packages/ui';
import { CarouselWithBanners } from '../components/CarouselWithBanners';

export default function Home() {
  return (
    <PageLayout isTabBarVisible>
      <CarouselWithBanners />
      <></>
    </PageLayout>
  );
}
