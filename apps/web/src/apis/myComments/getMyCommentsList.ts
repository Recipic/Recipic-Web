import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetMyCommentsListResponse } from './type';

export const getMyCommentsList = async (): Promise<TGetMyCommentsListResponse> => {
  const response = await instance.get<TGetResponse<TGetMyCommentsListResponse>>(`/api/user/comments`);
  return response.data.response;
};
