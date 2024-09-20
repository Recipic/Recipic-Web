import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetMyInfoResponse } from './type';

export const getMyInfo = async (): Promise<TGetMyInfoResponse> => {
  const response = await instance.get<TGetResponse<TGetMyInfoResponse>>(`/api/user`);
  return response.data.response;
};
