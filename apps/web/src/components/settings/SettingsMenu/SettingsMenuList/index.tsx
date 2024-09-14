import React from 'react';
import { SettingsMenu } from '@/components/settings/SettingsMenu';
import { TSettingsMenuItem } from '@/types/settings';

type TSettingsMenuProps = {
  settingsMenuList: TSettingsMenuItem[];
};
export function SettingsMenuList({ settingsMenuList }: TSettingsMenuProps) {
  return (
    <>
      {settingsMenuList.map((item: TSettingsMenuItem, index: number) => (
        <SettingsMenu key={`${item.title}-${index}`} title={item.title} action={item.action} />
      ))}
    </>
  );
}
