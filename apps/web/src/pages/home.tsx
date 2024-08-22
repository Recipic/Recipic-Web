import React from 'react';
import { PageLayout } from '@recipic-packages/ui';
import { CarouselWithBanners } from '../components/CarouselWithBanners';
import { SectionTitle } from '../components/SectionTitle';

export default function Home() {
  return (
    <PageLayout isTabBarVisible isBottomSpace>
      <CarouselWithBanners />
      <SectionTitle title="이번 달 인기 레시피" />
      <SectionTitle title="최신 HOT 브랜드" />
      <SectionTitle title="유명인의 인기 레시피" />
      <></>
    </PageLayout>
  );
}
