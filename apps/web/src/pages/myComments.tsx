import React, { Suspense } from 'react';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { MyCommentBoxList } from '@/components/myComments/MyCommentBox/MyCommentBoxList';
import { AnimatedCommentContainer } from '@/components/myComments/AnimatedCommentContainer';

export default function MyComments() {
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible isBottomSpace>
      <TopNavBar order="first" />
      <Header title="내가 작성한 댓글" order="second" />
      <div className="p-4">
        <AnimatedCommentContainer />
      </div>
      <Suspense>
        <MyCommentBoxList />
      </Suspense>
    </PageLayout>
  );
}
