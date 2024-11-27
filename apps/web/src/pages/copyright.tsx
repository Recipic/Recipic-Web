import React from 'react';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';

export default function Copyright() {
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible>
      <TopNavBar order="first" />
      <Header title="저작권" order="second" />
      <div className="flex-grow overflow-auto p-4" style={{ height: 'calc(100vh - 96px)' }}></div>
    </PageLayout>
  );
}
