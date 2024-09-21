import React from 'react';
import { Carousel } from '@recipic-packages/ui';
import { SkeletonCard } from '@/components/home/SkeletonCard';

export function SkeletonCardList() {
  const skeletonCards = Array(5).fill(null);

  return (
    <Carousel slidesToShow={2} freeScroll>
      {skeletonCards.map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </Carousel>
  );
}
