import React from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { NoticeList } from '@/components/notice/NoticeComponent/NoticeList';
import { noticeListData } from '@/constants/mocks';

export default function Notice() {
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible isBottomSpace>
      <TopNavBar order="first" />
      <Header title="공지사항" order="second" />
      <NoticeList noticeListData={noticeListData} />
    </PageLayout>
  );
}
