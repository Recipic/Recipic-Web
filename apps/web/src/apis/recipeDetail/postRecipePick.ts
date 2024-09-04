import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TRecipeId } from '@/types/recipe';
import { TGetResponse } from '@/apis/type';

export const postRecipePick = async ({ recipeId }: TRecipeId): Promise<void> => {
  try {
    await instance.post<TGetResponse<void>>(`/api/recipe/scrap`, {
      recipeId: recipeId,
    });
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
