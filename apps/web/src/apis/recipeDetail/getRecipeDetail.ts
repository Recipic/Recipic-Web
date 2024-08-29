import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetRecipeDetailResponse } from './type';
import { TRecipeId } from '@/types/recipe';

export const getRecipeDetail = async ({ recipeId }: TRecipeId): Promise<TGetRecipeDetailResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetRecipeDetailResponse>>(`/api/recipe/detail/${recipeId}`);
    console.log(response);
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
