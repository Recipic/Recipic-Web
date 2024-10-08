import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';

export const deleteWithdraw = async (): Promise<void> => {
  await instance.delete<TGetResponse<void>>(`/api/user/withdraw`);
};
