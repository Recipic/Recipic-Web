import { instance } from '@/apis/axios';
import { TDeleteMyRecipeParams } from './type';
import { TGetResponse } from '@/apis/type';

export const deleteMyRecipe = async ({ recipeId }: TDeleteMyRecipeParams): Promise<void> => {
  await instance.delete<TGetResponse<void>>(`/remove?recipeId=${recipeId}`);
};
