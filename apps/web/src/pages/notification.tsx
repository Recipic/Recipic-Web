import React, { Suspense } from 'react';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { NotificationList } from '@/components/notification/NotificationComponent/NotificationList';

export default function Notification() {
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible isBottomSpace>
      <TopNavBar order="first" />
      <Header title="알림" order="second" />
      <Suspense>
        <NotificationList />
      </Suspense>
    </PageLayout>
  );
}
