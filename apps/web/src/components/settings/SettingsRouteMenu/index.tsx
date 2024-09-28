import React from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { TSettingsRouteMenuItem } from '@/types/settings';
import { Link } from 'react-router-dom';

type TSettingsMenuProps = TSettingsRouteMenuItem;

export function SettingsRouteMenu({ title, route }: TSettingsMenuProps) {
  return (
    <Link to={route}>
      <div className="flex justify-between p-4 border-b cursor-pointer hover:bg-gray-100">
        <li className="text-regular16 list-none">{title}</li>
        <ChevronRightIcon className="text-gray-500 w-6 h-6" />
      </div>
    </Link>
  );
}
