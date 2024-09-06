import React from 'react';
import SubwayAnimatedBanner from '@/components/home/AnimatedBanners/BrandAnimatedBanners/SubwayAnimatedBanner';
import StarbucksAnimatedBanner from '@/components/home/AnimatedBanners/BrandAnimatedBanners/StarbucksAnimatedBanner';
import YoajungAnimatedBanner from '@/components/home/AnimatedBanners/BrandAnimatedBanners/YoajungAnimatedBanner';
import { TBrandEn } from '@/types/brand';

type TBannerItem = {
  Component: React.ReactNode;
  name: TBrandEn;
};

const BANNERS: readonly TBannerItem[] = [
  { Component: <SubwayAnimatedBanner />, name: 'subway' },
  { Component: <StarbucksAnimatedBanner />, name: 'starbucks' },
  { Component: <YoajungAnimatedBanner />, name: 'yoajung' },
] as const;

function getRandomBanner(): TBannerItem {
  const randomIndex = Math.floor(Math.random() * BANNERS.length);
  return BANNERS[randomIndex];
}

export function RandomBrandAnimatedBanner() {
  const { Component, name } = getRandomBanner();
  return <React.Fragment key={name}>{Component}</React.Fragment>;
}
