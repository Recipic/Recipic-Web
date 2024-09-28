import React from 'react';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { SettingsSection } from '@/components/settings/SettingsSection';
import { TermsSettingsMenuList } from '@/components/settings/SettingsRouteMenu/TermsSettingsMenuList';
import { AccountManagementMenuList } from '@/components/settings/SettingsMenu/AccountManagementMenuList';

export default function Settings() {
  return (
    <PageLayout isTopNavBarVisible isHeaderVisible>
      <TopNavBar order="first" />
      <Header title="설정" order="second" />
      <SettingsSection title={'약관 및 개인정보 처리방침'} titleStyle="H3">
        <TermsSettingsMenuList />
      </SettingsSection>
      <SettingsSection title={'계정관리'} titleStyle="H3">
        <AccountManagementMenuList />
      </SettingsSection>
    </PageLayout>
  );
}
