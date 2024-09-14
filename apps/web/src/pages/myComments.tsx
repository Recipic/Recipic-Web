import React from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { useGetMyCommentsList } from '@/hooks/useGetMyCommentsList';
import { MyCommentBoxList } from '@/components/myComments/MyCommentBox/MyCommentBoxList';

export default function MyComments() {
  const { myCommentsListData } = useGetMyCommentsList();
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible isBottomSpace>
      <TopNavBar order="first" />
      <Header title="내가 작성한 댓글" order="second" />
      <MyCommentBoxList myCommentsListData={myCommentsListData} />
    </PageLayout>
  );
}
