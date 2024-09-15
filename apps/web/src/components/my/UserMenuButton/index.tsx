import React from 'react';
import { Button } from '@recipic-packages/ui';
import { Link } from 'react-router-dom';

type TUserMenuButtonProps = {
  title: string;
  icon: React.ReactNode;
  route: string;
};

export default function UserMenuButton({ title, icon, route }: TUserMenuButtonProps) {
  return (
    <Link to={route} className="inline-block">
      <Button
        variant="ghost"
        aria-label={`${title} 버튼`}
        className="flex flex-col items-center justify-center p-4 h-auto w-full" // w-full 추가
      >
        {icon}
        <p className="mt-2 text-center text-regular14">{title}</p>
      </Button>
    </Link>
  );
}
