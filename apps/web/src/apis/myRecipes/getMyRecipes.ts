import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetMyRecipeListParams, TGetMyRecipeListResponse } from './type';

export const getMyRecipeList = async ({ page, size }: TGetMyRecipeListParams): Promise<TGetMyRecipeListResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetMyRecipeListResponse>>(
      `/api/user/recipes?page=${page}&keyword=${size}`,
    );
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
