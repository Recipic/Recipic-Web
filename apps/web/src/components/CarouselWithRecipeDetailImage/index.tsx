import React from 'react';
import { Carousel } from '@recipic-packages/ui';

type TCarouselWithRecipeDetailImageProps = {
  detailImages: string[];
};

export function CarouselWithRecipeDetailImage({ detailImages }: TCarouselWithRecipeDetailImageProps) {
  return (
    <Carousel autoScroll showDots autoScrollInterval={5000}>
      {detailImages.map((image, index) => (
        <div key={index} className="flex-[1_0_100%] h-[350px] overflow-hidden">
          <img src={image} alt={`Detail ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </Carousel>
  );
}
