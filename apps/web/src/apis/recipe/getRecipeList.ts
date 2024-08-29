import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetRecipeListParams, TGetRecipeListResponse } from './type';

export const getRecipeList = async ({ page, keyword }: TGetRecipeListParams): Promise<TGetRecipeListResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetRecipeListResponse>>(
      `/api/recipe/list?page=${page}&keyword=${keyword}`,
    );
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
