import React from 'react';
import { Button, PageLayout } from '@recipic-packages/ui';
import RecipicLogoImage from '@/assets/icons/logo.svg?react';

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center px-4 py-40 w-full h-ful gap-4">
        <RecipicLogoImage className="w-[160px] h-auto" />
        <h1 className="text-regular12 text-gray-500 mb-60">레시픽 어드민</h1>
        <Button onClick={() => {}} className="rounded inline-flex items-center w-full h-12">
          <p className="pl-2">로그인</p>
        </Button>
      </div>
    </PageLayout>
  );
}
