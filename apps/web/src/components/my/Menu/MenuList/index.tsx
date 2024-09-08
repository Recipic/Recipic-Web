import React from 'react';
import { TMenu } from '@/types/my';
import MenuComponent from '@/components/my/Menu';

type TMenuListProps = {
  menuItems: TMenu[];
  ariaLabel?: string;
};

export default function MenuList({ menuItems, ariaLabel = '메뉴 목록' }: TMenuListProps) {
  return (
    <ul className="list-none p-0 m-0" role="menu" aria-label={ariaLabel}>
      {menuItems.map((item, index) => (
        <MenuComponent key={index} title={item.title} icon={item.icon} onClick={item.onClick} />
      ))}
    </ul>
  );
}
