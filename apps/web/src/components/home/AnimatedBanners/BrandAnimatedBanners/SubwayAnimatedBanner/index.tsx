import React from 'react';
import { AnimatedBanner } from '@/components/common/AnimatedBanner';
import SubwayBannerImage1 from '@/assets/images/subwayBannerImage1.webp';

export default function SubwayAnimatedBanner() {
  return (
    <AnimatedBanner
      imageUrl={SubwayBannerImage1}
      alt="서브웨이 배너 이미지"
      title="간편하게 한끼! 서브웨이!"
      content="서브웨이의 꿀조합 레시피를 알아봐요."
      backgroundColor="bg-green-500"
      textColor="text-white"
      delay={200}
      route={'/recipe?keyword=서브웨이'}
    />
  );
}
