import React from 'react';
import { Button } from '@recipic-packages/ui';

type TUserMenuButtonProps = {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export default function UserMenuButton({ title, icon, onClick }: TUserMenuButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      aria-label={`${title} 버튼`}
      className="flex flex-col items-center justify-center p-4 h-auto"
    >
      {icon}
      <p className="mt-2 text-center text-regular14">{title}</p>
    </Button>
  );
}
