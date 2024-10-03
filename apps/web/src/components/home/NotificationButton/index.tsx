import React from 'react';
import { BellIcon } from '@radix-ui/react-icons';
import { Button } from '@recipic-packages/ui';
import { Link } from 'react-router-dom';
import { useGetNotificationList } from '@/hooks/useGetNotificationList';
import { TNotificationData } from '@/types/notification';

type TNotificationButtonProps = {
  route: string;
};

export default function NotificationButton({ route }: TNotificationButtonProps) {
  const { notificationListData } = useGetNotificationList();

  const hasUnreadNotifications: boolean =
    notificationListData !== undefined &&
    notificationListData.some((notification: TNotificationData) => !notification.checked);

  return (
    <Link to={route}>
      <Button variant="ghost" size="icon" className="text-black relative" aria-label="알림">
        <BellIcon className="h-7 w-7" />
        {hasUnreadNotifications && <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary-500" />}
      </Button>
    </Link>
  );
}
