import React from 'react';
import { PageLayout } from '@/components/common/PageLayout';
import ErrorLottie from '@/assets/lotties/error.json';
import { Link } from 'react-router-dom';
import { Button } from '@recipic-packages/ui';
import { Player } from '@lottiefiles/react-lottie-player';

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
        <Player autoplay keepLastFrame src={ErrorLottie} style={{ height: '110px', width: '110px' }} />
        <p className="text-semibold18 text-center whitespace-pre-line">{`아앗! 존재하지 않는 페이지예요`}</p>
        <Link to="/">
          <Button variant="default">홈으로 돌아가기</Button>
        </Link>
      </div>
    </PageLayout>
  );
}
