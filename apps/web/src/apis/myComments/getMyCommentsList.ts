import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetMyCommentsListResponse } from './type';

export const getMyCommentsList = async (): Promise<TGetMyCommentsListResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetMyCommentsListResponse>>(`/api/user/comments`);
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
