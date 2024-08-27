import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetMyCommentsResponse } from './type';

export const getMyCommentsList = async (): Promise<TGetMyCommentsResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetMyCommentsResponse>>('/api/user/comments');
    console.log(response);
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
