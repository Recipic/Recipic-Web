import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { AnimatedContainer, TAnimatedRecipeShareContainerProps } from '@/components/common/AnimatedContainer';
import BookLottie from '@/assets/lotties/book.json';

type TAnimatedRecipeShareContainer = Partial<TAnimatedRecipeShareContainerProps>;

export function AnimatedRecipeShareContainer({ onClick }: TAnimatedRecipeShareContainer) {
  return (
    <AnimatedContainer
      layout="vertical"
      content={<Player autoplay loop src={BookLottie} style={{ width: '120px', height: '120px' }} />}
      text="나만의 꿀조합 레시피를 공유해보아요!"
      subText={'레시픽에서 여러분만의 특별한 레시피를 \n 다른 사람들과 나눠보아요'}
      onClick={onClick}
    />
  );
}
