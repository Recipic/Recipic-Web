import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type TCarouselProps = {
  children: React.ReactNode;
  autoScroll?: boolean;
  showDots?: boolean;
  autoScrollInterval?: number;
};

export function Carousel({
  children,
  autoScroll = false,
  showDots = false,
  autoScrollInterval = 3000,
}: TCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
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
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (autoScroll && emblaApi) {
      const interval = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, autoScrollInterval);

      return () => clearInterval(interval);
    }
  }, [emblaApi, autoScroll, autoScrollInterval]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      {showDots && (
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
