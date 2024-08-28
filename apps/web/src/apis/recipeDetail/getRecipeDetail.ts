import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetRecipeDetailResponse } from './type';

export const getRecipeDetail = async (recipeId: string): Promise<TGetRecipeDetailResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetRecipeDetailResponse>>(`/api/recipe/detail/${recipeId}`);
    console.log(response);
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
