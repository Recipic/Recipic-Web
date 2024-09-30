import React from 'react';
import { Separator, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { NoticeComponent } from '@/components/notice/NoticeComponent';
import { useParams } from 'react-router-dom';
import { useGetNoticeDetail } from '@/hooks/useGetNoticeDetail';

export default function NoticeDetail() {
  const params = useParams<{ noticeId: string }>();
  const noticeId = Number(params.noticeId);
  const { noticeDetailData } = useGetNoticeDetail({ announcementId: noticeId });
  return (
    <PageLayout isTopNavBarVisible isBottomSpace>
      <TopNavBar order="first" />
      <div className="p-4">
        <NoticeComponent
          title={noticeDetailData.title}
          createdAt={noticeDetailData.createdAt}
          announcementId={noticeId}
        />
        <Separator className="h-[1px] bg-gray-200 my-4" />
        <p className="text-regular16 whitespace-pre-line">{noticeDetailData.description}</p>
      </div>
    </PageLayout>
  );
}
