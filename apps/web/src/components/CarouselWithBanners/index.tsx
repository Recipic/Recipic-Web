import React from 'react';
import { Banner, Carousel } from '@recipic-packages/ui';
import MockBannerImage from '../../assets/images/mockBanner.webp';

const banners = [
  { id: 1, imageUrl: MockBannerImage, onClick: () => console.log('Banner 1 clicked') },
  { id: 2, imageUrl: MockBannerImage, onClick: () => console.log('Banner 2 clicked') },
  { id: 3, imageUrl: MockBannerImage, onClick: () => console.log('Banner 3 clicked') },
];

export function CarouselWithBanners() {
  return (
    <Carousel autoScroll showDots autoScrollInterval={5000}>
      {banners.map(banner => (
        <div key={banner.id} className="flex-[0_0_100%]">
          <Banner imageUrl={banner.imageUrl} onClick={banner.onClick} />
        </div>
      ))}
    </Carousel>
  );
}
