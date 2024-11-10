import { instance } from '@/apis/axios';
import { TPostAdminTokenResponse } from './type';

export const postAdminToken = async (): Promise<TPostAdminTokenResponse> => {
  const { data } = await instance.post<TPostAdminTokenResponse>('/api/auth/admin', {});
  return data;
};
