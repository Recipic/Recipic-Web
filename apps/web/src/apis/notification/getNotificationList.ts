import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetNotificationListResponse } from './type';

export const getNotificationList = async (): Promise<TGetNotificationListResponse> => {
  const response = await instance.get<TGetResponse<TGetNotificationListResponse>>(`/api/user/notifications`);
  return response.data.response;
};
