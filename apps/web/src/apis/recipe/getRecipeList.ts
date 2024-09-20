import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetRecipeListParams, TGetRecipeListResponse } from './type';

export const getRecipeList = async ({ page, keyword }: TGetRecipeListParams): Promise<TGetRecipeListResponse> => {
  const response = await instance.get<TGetResponse<TGetRecipeListResponse>>(
    `/api/recipe/list?page=${page}&keyword=${keyword}`,
  );
  return response.data.response;
};
