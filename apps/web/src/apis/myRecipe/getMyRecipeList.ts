import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetMyRecipeListResponse, TGetMyRecipeListParams } from './type';

export const getMyRecipeList = async ({
  page,
  keyword,
  size,
}: TGetMyRecipeListParams): Promise<TGetMyRecipeListResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetMyRecipeListResponse>>(
      `/api/user/recipes?page=${page}&keyword=${keyword}&size=${size}`,
    );
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
