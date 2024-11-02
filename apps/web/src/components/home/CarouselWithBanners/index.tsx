import React from 'react';
import { Banner, Carousel } from '@recipic-packages/ui';
import { TBannerProps } from '@recipic-packages/ui/components/ui/banner';
import MainBanner1Image from '@/assets/images/mainBanner1.webp';
import MainBanner2Image from '@/assets/images/mainBanner2.webp';
import MainBanner3Image from '@/assets/images/mainBanner3.webp';

type TBannerData = {
  bannerId: number;
  to: string;
  alt?: string;
} & Omit<TBannerProps, 'to'>;

const banners: TBannerData[] = [
  {
    bannerId: 1,
    imageUrl: MainBanner1Image,
    to: '/recipe?keyword=요아정',
    gradientColor: 'black',
    title: '유튜버가 인정한 \n 요아정 꿀조합',
    description: '화제의 요아정 꿀조합을 만나보세요',
    alt: '유튜버 추천 요아정 꿀조합 배너 이미지',
  },
  {
    bannerId: 2,
    imageUrl: MainBanner2Image,
    to: '/recipe',
    gradientColor: 'primary',
    title: '꿀조합 게시글 작성 \n 이벤트 참여하기',
    description: '참여하고 기프티콘 놓치지 마세요',
    alt: '꿀조합 이벤트 참여 배너 이미지',
  },
  {
    bannerId: 3,
    imageUrl: MainBanner3Image,
    to: `/google-form/survey/1`,
    gradientColor: 'gray',
    title: '설문조사에 참여하기',
    description: '더 발전하는 레시픽이 될게요',
    alt: '설문조사 참여 배너 이미지',
  },
];

export function CarouselWithBanners() {
  return (
    <Carousel autoScroll showCounter autoScrollInterval={5000} aria-label="프로모션 배너 캐러셀">
      {banners.map((banner: TBannerData) => (
        <div key={banner.bannerId} className="px-4 flex-[1_0_100%]" role="group" aria-roledescription="slide">
          <Banner
            imageUrl={banner.imageUrl}
            to={banner.to}
            size="fullSquare"
            gradientColor={banner.gradientColor}
            title={banner.title}
            description={banner.description}
            alt={banner.alt}
          />
        </div>
      ))}
    </Carousel>
  );
}
