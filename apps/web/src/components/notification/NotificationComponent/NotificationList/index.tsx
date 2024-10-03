import React from 'react';
import { NotificationComponent } from '@/components/notification/NotificationComponent';
import { TNotificationData } from '@/types/notification';
import { Separator } from '@recipic-packages/ui';
import { useGetNotificationList } from '@/hooks/useGetNotificationList';
import { usePostCheckNotification } from '@/hooks/usePostCheckNotification';

export function NotificationList() {
  const { notificationListData } = useGetNotificationList();
  const { mutate: mutateCheckNotification } = usePostCheckNotification();

  /** 알림 클릭 시 핸들러, 이미 checked가 true라면 api 호출하지 않음 */
  const handleCheckNotification = ({
    checked,
    notificationId,
  }: Pick<TNotificationData, 'checked' | 'notificationId'>) => {
    if (!checked) {
      mutateCheckNotification({ notificationId: notificationId });
    }
  };

  if (notificationListData.length === 0) {
    return <div className="flex justify-center items-center h-20 text-gray-500">아직 알림이 없어요</div>;
  }

  return (
    <div className="flex flex-col mt-2">
      {notificationListData.map((notification: TNotificationData, index: number) => (
        <React.Fragment key={`${notification.notificationId}-${notification.title}`}>
          <NotificationComponent
            title={notification.title}
            description={notification.description}
            recipeId={notification.recipeId}
            checked={notification.checked}
            createdAt={notification.createdAt}
            onClick={() =>
              handleCheckNotification({ checked: notification.checked, notificationId: notification.notificationId })
            }
          />
          {index < notificationListData.length - 1 && notificationListData.length > 1 && (
            <Separator className="h-[1px] bg-gray-200" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
