import React from 'react';
import { SettingsRouteMenu } from '@/components/settings/SettingsRouteMenu';
import { TSettingsRouteMenuItem } from '@/types/settings';

const termsSettings: TSettingsRouteMenuItem[] = [
  { title: '서비스 이용 약관', route: '/settings/terms' },
  { title: '개인정보 처리방침', route: '/settings/privacy' },
  { title: '저작권', route: '/settings/copyright' },
];

export function TermsSettingsMenuList() {
  return (
    <>
      {termsSettings.map((item: TSettingsRouteMenuItem, index: number) => (
        <SettingsRouteMenu key={`${item.title}-${index}`} title={item.title} route={item.route} />
      ))}
    </>
  );
}
