import React from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { useGetUserCommentsList } from '@/hooks/useGetUserCommentsList';
import { MyCommentBoxList } from '@/components/myComments/MyCommentBox/MyCommentBoxList';

export default function MyComments() {
  const { userCommentsListData } = useGetUserCommentsList();
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible isBottomSpace>
      <TopNavBar order="first" />
      <Header title="내가 작성한 댓글" order="second" />
      <MyCommentBoxList myCommentsListData={userCommentsListData} />
    </PageLayout>
  );
}
