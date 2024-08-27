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

  // Embla 옵션 설정
  const options: EmblaOptionsType = {
    slidesToScroll: freeScroll ? 1 : slidesToShow, // freeScroll일 때 1씩 스크롤
    dragFree: freeScroll, // freeScroll 옵션이 있으면 자유 스크롤 허용
    containScroll: freeScroll ? false : 'trimSnaps', // freeScroll일 때 containScroll 비활성화
    align: alignmentMode, // 정렬 모드 설정
    loop: false, // freeScroll에서 무한 스크롤 비활성화
    skipSnaps: freeScroll, // freeScroll일 때 스냅 건너뛰기 활성화
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // 스냅 위치로 스크롤
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // 선택된 슬라이드를 업데이트
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // embla API가 로드되었을 때 이벤트 처리
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.reInit();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // 자동 스크롤 기능 추가
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
