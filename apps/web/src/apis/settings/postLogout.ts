import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';

export const postLogout = async (): Promise<void> => {
  await instance.post<TGetResponse<void>>(`/api/user/logout`, {});
};
