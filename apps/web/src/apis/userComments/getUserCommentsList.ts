import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetUserCommentsListResponse } from './type';

export const getUserCommentsList = async (): Promise<TGetUserCommentsListResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetUserCommentsListResponse>>(`/api/user/comments`);
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
