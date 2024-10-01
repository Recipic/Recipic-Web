import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TPutRecipeEditBody } from './type';

export const putRecipeEdit = async ({
  recipeId,
  thumbnailImage,
  title,
  brandName,
  baseIngredientId,
  selectedIngredients,
  description,
  isCelebrity,
}: TPutRecipeEditBody): Promise<void> => {
  const formData = new FormData();

  if (thumbnailImage instanceof File) {
    formData.append('thumbnailImage', thumbnailImage);
  }

  const recipeData = new Blob(
    [
      JSON.stringify({
        recipeId,
        title,
        brandName,
        baseIngredientId,
        selectedIngredients,
        description,
        isCelebrity,
      }),
    ],
    { type: 'application/json' },
  );

  formData.append('recipe', recipeData);

  await instance.put<TGetResponse<void>>('/api/recipe/update', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
