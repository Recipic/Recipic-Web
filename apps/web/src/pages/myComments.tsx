import React, { Suspense } from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { MyCommentBoxList } from '@/components/myComments/MyCommentBox/MyCommentBoxList';

export default function MyComments() {
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible isBottomSpace>
      <TopNavBar order="first" />
      <Header title="내가 작성한 댓글" order="second" />
      <Suspense>
        <MyCommentBoxList />
      </Suspense>
    </PageLayout>
  );
}
