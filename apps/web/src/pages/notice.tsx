import React from 'react';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { NoticeList } from '@/components/notice/NoticeComponent/NoticeList';
import { useGetNoticeList } from '@/hooks/useGetNoticeList';

export default function Notice() {
  const { noticeListData } = useGetNoticeList();
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible isBottomSpace>
      <TopNavBar order="first" />
      <Header title="공지사항" order="second" />
      <NoticeList noticeListData={noticeListData} />
    </PageLayout>
  );
}
