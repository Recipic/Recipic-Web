import React from 'react';
import { Link } from 'react-router-dom';
import { TNotificationData } from '@/types/notification';
import { getRelativeTime } from '@/utils/date';

const notificationVariants = {
  checked: 'bg-white',
  unchecked: 'bg-primary-100 bg-opacity-50',
};

type TNotificationListProps = {
  onClick: () => void;
} & Omit<TNotificationData, 'notificationId'>;

export function NotificationComponent({
  onClick,
  title,
  description,
  recipeId,
  checked,
  createdAt,
}: TNotificationListProps) {
  const notificationClassName = `w-full flex flex-col gap-2 cursor-pointer p-4 ${
    checked ? notificationVariants.checked : notificationVariants.unchecked
  }`;

  return (
    <Link to={`/recipe/${recipeId}`} className={notificationClassName} onClick={onClick}>
      <h3 className="text-semibold16 truncate">{title}</h3>
      <p className="text-regular14 text-gray-500 truncate">{description}</p>
      <p className="text-regular12 text-gray-500 truncate">{getRelativeTime({ date: createdAt })}</p>
    </Link>
  );
}
