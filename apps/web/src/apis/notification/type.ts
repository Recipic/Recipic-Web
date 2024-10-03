import { TNotificationData } from '@/types/notification';

export type TGetNotificationListResponse = TNotificationData[];

export type TPostCheckNotificationParams = Pick<TNotificationData, 'notificationId'>;
