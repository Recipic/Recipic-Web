import React from 'react';
import { Header, PageLayout } from '@recipic-packages/ui';

export default function Recipe() {
  return (
    <PageLayout isTabBarVisible>
      <Header title="레시피" />
    </PageLayout>
  );
}
