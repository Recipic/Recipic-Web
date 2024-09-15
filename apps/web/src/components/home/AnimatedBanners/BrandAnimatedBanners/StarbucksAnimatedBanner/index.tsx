import React from 'react';
import { AnimatedBanner } from '@/components/common/AnimatedBanner';
import StarbucksBannerImage1 from '@/assets/images/starbucksBannerImage1.webp';

export default function StarbucksAnimatedBanner() {
  return (
    <AnimatedBanner
      imageUrl={StarbucksBannerImage1}
      alt="스타벅스 배너 이미지"
      title="믿(고)먹(는) 스타벅스!"
      content="스타벅스의 꿀조합 레시피를 알아봐요."
      backgroundColor="bg-green-700"
      textColor="text-white"
      delay={200}
      route={'/recipe?keyword=스타벅스'}
    />
  );
}
