import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetCommentsListResponse, TGetCommentsListParams } from './type';

export const getCommentsList = async ({
  recipeId,
  page,
  size,
  sortType,
}: TGetCommentsListParams): Promise<TGetCommentsListResponse> => {
  const response = await instance.get<TGetResponse<TGetCommentsListResponse>>(
    `/api/recipe/comment/list?recipeId=${recipeId}&page=${page}&size=${size}&sortType=${sortType}`,
  );
  return response.data.response;
};
