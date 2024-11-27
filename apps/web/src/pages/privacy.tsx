import React from 'react';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';

export default function Privacy() {
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible>
      <TopNavBar order="first" />
      <Header title="개인정보처리방침" order="second" />
      <div className="flex-grow overflow-auto p-4" style={{ height: 'calc(100vh - 96px)' }}>
        <iframe
          src="/privacy.html"
          title="개인정보처리방침"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </PageLayout>
  );
}
