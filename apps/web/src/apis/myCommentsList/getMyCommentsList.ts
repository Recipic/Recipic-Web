import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetMyCommentsResponse, TGetMyCommentsListParams } from './type';

export const getMyCommentsList = async ({
  recipeId,
  page,
  size,
  sortType,
}: TGetMyCommentsListParams): Promise<TGetMyCommentsResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetMyCommentsResponse>>('/api/user/comments', {
      params: { recipeId, page, size, sortType },
    });
    console.log(response);
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
