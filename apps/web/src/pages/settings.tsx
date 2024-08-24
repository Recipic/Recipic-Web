import React from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';

export default function Settings() {
  return (
    <PageLayout>
      <TopNavBar order="first" />
      <Header title="설정" order="second" />
    </PageLayout>
  );
}
