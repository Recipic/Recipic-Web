import React from 'react';
import { PageLayout, Separator, TopNavBar } from '@recipic-packages/ui';
import { NoticeComponent } from '@/components/notice/NoticeComponent';
import { useParams } from 'react-router-dom';
import { noticeDetailData } from '@/constants/mocks';

export default function NoticeDetail() {
  const params = useParams<{ noticeId: string }>();
  const noticeId = Number(params.noticeId);

  return (
    <PageLayout isTopNavBarVisible isBottomSpace>
      <TopNavBar order="first" />
      <div className="p-4">
        <NoticeComponent title={noticeDetailData.title} createdAt={noticeDetailData.createdAt} noticeId={noticeId} />
        <Separator className="h-[1px] bg-gray-200 my-4" />
        <p className="text-regular16 whitespace-pre-line">{noticeDetailData.content}</p>
      </div>
    </PageLayout>
  );
}
