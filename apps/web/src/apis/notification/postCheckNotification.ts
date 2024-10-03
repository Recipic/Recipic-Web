import { instance } from '@/apis/axios';
import { TPostCheckNotificationParams } from './type';
import { TGetResponse } from '@/apis/type';

export const postCheckNotification = async ({ notificationId }: TPostCheckNotificationParams): Promise<void> => {
  await instance.post<TGetResponse<void>>(`/api/user/notifications/${notificationId}`, {});
};
