import React from 'react';
import { TMenu } from '@/types/my';

export default function MenuComponent({ title, icon, onClick }: TMenu) {
  return (
    <li
      className="flex items-center gap-3 py-4 h-18 cursor-pointer rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-150"
      onClick={onClick}
    >
      {icon}
      <p className="text-regular16 transition-colors duration-200 ease-in-out">{title}</p>
    </li>
  );
}
