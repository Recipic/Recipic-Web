import React from 'react';
import { BellIcon } from '@radix-ui/react-icons';
import { Button } from '@recipic-packages/ui';

type TNotificationButtonProps = {
  onClick?: () => void;
};
export default function NotificationButton({ onClick }: TNotificationButtonProps) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className="text-black" aria-label="알림">
      <BellIcon className="h-7 w-7" />
    </Button>
  );
}
