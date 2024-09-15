import React from 'react';
import { BellIcon } from '@radix-ui/react-icons';
import { Button } from '@recipic-packages/ui';
import { Link } from 'react-router-dom';

type TNotificationButtonProps = {
  route: string;
};
export default function NotificationButton({ route }: TNotificationButtonProps) {
  return (
    <Link to={route}>
      <Button variant="ghost" size="icon" className="text-black" aria-label="알림">
        <BellIcon className="h-7 w-7" />
      </Button>
    </Link>
  );
}
