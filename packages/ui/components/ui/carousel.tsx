import React, { useCallback, useEffect, useState, Children } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';

type TAlignmentType = 'start' | 'center' | 'end';

type TCarouselProps = {
  children: React.ReactNode;
  autoScroll?: boolean;
  showDots?: boolean;
  autoScrollInterval?: number;
  slidesToShow?: number;
  freeScroll?: boolean;
  alignmentMode?: TAlignmentType;
};

export function Carousel({
  children,
  autoScroll = false,
  showDots = false,
  autoScrollInterval = 3000,
  slidesToShow = 1,
  freeScroll = false,
  alignmentMode = 'start',
}: TCarouselProps) {
  const childrenCount = Children.count(children);
  const shouldEnableScroll = childrenCount > slidesToShow;

  const options: EmblaOptionsType = {
    slidesToScroll: freeScroll ? 1 : slidesToShow,
    dragFree: freeScroll,
    align: freeScroll ? alignmentMode : 'start',
  };

  if (shouldEnableScroll) {
    options.containScroll = freeScroll ? false : 'trimSnaps';
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);

    emblaApi.reInit();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect, slidesToShow, freeScroll, childrenCount, alignmentMode]);

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
          {React.Children.map(children, child => (
            <div style={{ flex: `0 0 ${100 / slidesToShow}%` }}>{child}</div>
          ))}
        </div>
      </div>
      {showDots && shouldEnableScroll && (
        <div className="flex justify-center mt-1">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${index === selectedIndex ? 'bg-black' : 'bg-gray-200'}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
