import React from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { TSettingsMenuItem } from '@/types/settings';

type TSettingsMenuProps = TSettingsMenuItem;

export function SettingsMenu({ title, action }: TSettingsMenuProps) {
  const handleClick = () => {
    if (typeof action === 'function') {
      action();
      return;
    }
    if (typeof action === 'string') {
      window.open(action, '_blank', 'noopener,noreferrer');
      return;
    }
  };

  return (
    <div className="flex justify-between p-4 border-b cursor-pointer hover:bg-gray-100" onClick={handleClick}>
      <li className="text-regular16 list-none">{title}</li>
      <ChevronRightIcon className="text-gray-500 w-6 h-6" />
    </div>
  );
}
