import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';
import CommentLottie from '@/assets/lotties/comment.json';

export function AnimatedCommentContainer() {
  return (
    <AnimatedContainer
      layout="horizontal"
      content={
        <div className="w-[100px] h-[100px] flex items-center justify-center">
          <Player autoplay loop src={CommentLottie} style={{ width: '100%', height: '100%' }} />
        </div>
      }
      text={'꿀조합 레시피에 \n 감사의 댓글을 남겨보아요!'}
      subText={'레시픽은 꿀조합 공유 문화를 \n 응원하고 있어요'}
    />
  );
}
