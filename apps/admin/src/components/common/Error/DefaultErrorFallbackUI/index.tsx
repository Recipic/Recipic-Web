import React from 'react';
import { Button } from '@recipic-packages/ui';
import { PageLayout } from '@recipic-packages/ui';

type TDefaultErrorFallbackUIProps = {
  resetErrorBoundary: () => void;
  error: Error;
};

export default function DefaultErrorFallbackUI({ resetErrorBoundary, error }: TDefaultErrorFallbackUIProps) {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
        <p className="text-semibold18 text-center whitespace-pre-line">{`아앗! 잠시 문제가 발생했어요\n다시 시도해주세요`}</p>
        <Button variant="default" onClick={resetErrorBoundary}>
          다시 시도
        </Button>
      </div>
    </PageLayout>
  );
}
