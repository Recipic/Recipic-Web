import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetCommentsListResponse, TGetCommentsListParams } from './type';

export const getCommentsList = async ({
  recipeId,
  page,
  size,
  sortType,
}: TGetCommentsListParams): Promise<TGetCommentsListResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetCommentsListResponse>>(
      `/api/recipe/comment/list?recipeid=${recipeId}&page=${page}&size=5${size}&sortType=${sortType}`,
    );
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
