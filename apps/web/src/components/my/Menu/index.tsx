import React from 'react';
import { Link } from 'react-router-dom';
import { TMenu } from '@/types/my';

type MenuComponentProps = TMenu & {
  showInDialog?: boolean;
  onShowDialog?: () => void;
};

export default function MenuComponent({ title, icon, route, showInDialog, onShowDialog }: MenuComponentProps) {
  if (showInDialog) {
    return (
      <li
        onClick={onShowDialog}
        className="flex items-center gap-3 py-4 h-18 cursor-pointer rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-150"
      >
        {icon}
        <p className="text-regular16 transition-colors duration-200 ease-in-out">{title}</p>
      </li>
    );
  }

  return (
    <Link to={route}>
      <li className="flex items-center gap-3 py-4 h-18 cursor-pointer rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-150">
        {icon}
        <p className="text-regular16 transition-colors duration-200 ease-in-out">{title}</p>
      </li>
    </Link>
  );
}
