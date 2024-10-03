import React from 'react';
import { Banner, Carousel } from '@recipic-packages/ui';
import MockBannerImage from '@/assets/images/mockBanner.webp';
import { TBannerProps } from '@recipic-packages/ui/components/ui/banner';

type TBannerData = {
  bannerId: number;
} & TBannerProps;

const banners: TBannerData[] = [
  {
    bannerId: 1,
    imageUrl: MockBannerImage,
    onClick: () => console.log('Banner 2 clicked'),
    gradientColor: 'black',
    title: '유튜버가 인정한 \n 요아정 꿀조합',
    description: '화제의 요아정 꿀조합을 만나보세요',
  },
  {
    bannerId: 2,
    imageUrl: MockBannerImage,
    onClick: () => console.log('Banner 1 clicked'),
    gradientColor: 'primary',
    title: '꿀조합 게시글 작성 \n 이벤트 참여하기',
    description: '참여하고 기프티콘 놓치지 마세요',
  },
  {
    bannerId: 3,
    imageUrl: MockBannerImage,
    onClick: () => console.log('Banner 3 clicked'),
    gradientColor: 'gray',
    title: '설문조사에 참여하기',
    description: '더 발전하는 레시픽이 될게요',
  },
];

export function CarouselWithBanners() {
  return (
    <Carousel autoScroll showCounter autoScrollInterval={5000}>
      {banners.map((banner: TBannerData) => (
        <div key={banner.bannerId} className="px-4 flex-[1_0_100%]">
          <Banner
            imageUrl={banner.imageUrl}
            onClick={banner.onClick}
            size="fullSquare"
            gradientColor={banner.gradientColor}
            title={banner.title}
            description={banner.description}
          />
        </div>
      ))}
    </Carousel>
  );
}
