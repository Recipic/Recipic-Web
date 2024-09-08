import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetMyInfoResponse } from './type';

export const getMyInfo = async (): Promise<TGetMyInfoResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetMyInfoResponse>>(`/api/user`);
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
