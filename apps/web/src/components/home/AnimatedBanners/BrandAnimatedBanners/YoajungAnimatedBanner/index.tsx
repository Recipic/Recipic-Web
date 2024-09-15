import React from 'react';
import { AnimatedBanner } from '@/components/common/AnimatedBanner';
import YoajungBannerImage1 from '@/assets/images/yoajungBannerImage1.webp';

export default function YoajungAnimatedBanner() {
  return (
    <AnimatedBanner
      imageUrl={YoajungBannerImage1}
      alt="Banner Image"
      title="요아정이 대세라며?"
      content="요아정의 꿀조합 레시피를 알아봐요."
      backgroundColor="bg-pink-300"
      textColor="text-white"
      delay={200}
      route={'/recipe?keyword=요아정'}
    />
  );
}
