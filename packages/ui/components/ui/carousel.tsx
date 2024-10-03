import React, { useCallback, useEffect, useState, Children } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';

export type TAlignmentType = 'start' | 'center' | 'end';

export type TCarouselProps = {
  children: React.ReactNode;
  autoScroll?: boolean;
  showCounter?: boolean;
  autoScrollInterval?: number;
  slidesToShow?: number;
  freeScroll?: boolean;
  alignmentMode?: TAlignmentType;
};

export function Carousel({
  children,
  autoScroll = false,
  showCounter = false,
  autoScrollInterval = 3000,
  slidesToShow = 1,
  freeScroll = false,
  alignmentMode = 'start',
}: TCarouselProps) {
  const childrenCount = Children.count(children);
  const shouldEnableScroll = childrenCount > slidesToShow;

  const options: EmblaOptionsType = {
    slidesToScroll: freeScroll ? 1 : slidesToShow,
    dragFree: false,
    containScroll: 'keepSnaps',
    align: alignmentMode,
    loop: false,
    skipSnaps: freeScroll,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.reInit();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (autoScroll && emblaApi && shouldEnableScroll) {
      const interval = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, autoScrollInterval);

      return () => clearInterval(interval);
    }
  }, [emblaApi, autoScroll, autoScrollInterval, shouldEnableScroll]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child, index) => (
            <div key={index} style={{ flex: `0 0 ${100 / slidesToShow}%` }}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {showCounter && shouldEnableScroll && (
        <div
          aria-label="현재 및 전체 슬라이드 숫자 표시 항목"
          className="absolute bottom-4 right-6 bg-black bg-opacity-80 rounded-lg px-2"
        >
          <p className="text-regular12 text-white">
            <span className="sr-only">Slide</span>
            <span aria-current="true">{selectedIndex + 1}</span>
            <span aria-hidden="true" className="text-gray-400 px-1.5">
              {`|`}
            </span>
            <span>{scrollSnaps.length}</span>
          </p>
        </div>
      )}
    </div>
  );
}
