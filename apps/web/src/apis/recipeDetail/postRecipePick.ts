import { instance } from '@/apis/axios';
import { TRecipeId } from '@/types/recipe';
import { TGetResponse } from '@/apis/type';

export const postRecipePick = async ({ recipeId }: TRecipeId): Promise<void> => {
  await instance.post<TGetResponse<void>>(`/api/recipe/scrap`, {
    recipeId: recipeId,
  });
};
