import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetRecipeDetailResponse } from './type';
import { TRecipeId } from '@/types/recipe';

export const getRecipeDetail = async ({ recipeId }: TRecipeId): Promise<TGetRecipeDetailResponse> => {
  const response = await instance.get<TGetResponse<TGetRecipeDetailResponse>>(`/api/recipe/detail/${recipeId}`);
  return response.data.response;
};
