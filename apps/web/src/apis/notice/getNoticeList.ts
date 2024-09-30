import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetNoticeListResponse } from './type';

export const getNoticeList = async (): Promise<TGetNoticeListResponse> => {
  const response = await instance.get<TGetResponse<TGetNoticeListResponse>>(`/api/announcement/list`);
  return response.data.response;
};
