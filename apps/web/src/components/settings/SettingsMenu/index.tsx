import React from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { TSettingsMenuItem } from '@/types/settings';

type TSettingsMenuProps = TSettingsMenuItem;

export function SettingsMenu({ title, onClick }: TSettingsMenuProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex justify-between p-4 border-b cursor-pointer hover:bg-gray-100" onClick={handleClick}>
      <li className="text-regular16 list-none">{title}</li>
      <ChevronRightIcon className="text-gray-500 w-6 h-6" />
    </div>
  );
}
