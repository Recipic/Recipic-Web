import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetNoticeDetailParams, TGetNoticeDetailResponse } from './type';

export const getNoticeDetail = async ({
  announcementId,
}: TGetNoticeDetailParams): Promise<TGetNoticeDetailResponse> => {
  const response = await instance.get<TGetResponse<TGetNoticeDetailResponse>>(
    `/api/announcement/detail?announcementId=${announcementId}`,
  );
  return response.data.response;
};
