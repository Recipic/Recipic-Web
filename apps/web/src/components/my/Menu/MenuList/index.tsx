import React from 'react';
import { TMenu } from '@/types/my';
import MenuComponent from '@/components/my/Menu';

type TMenuListProps = {
  menuItems: TMenu[];
};

export default function MenuList({ menuItems }: TMenuListProps) {
  return (
    <>
      {menuItems.map((item, index) => (
        <MenuComponent key={index} title={item.title} icon={item.icon} onClick={item.onClick} />
      ))}
    </>
  );
}
