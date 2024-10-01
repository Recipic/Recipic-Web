import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TPostRecipeWriteBody } from './type';

export const postRecipeWrite = async ({
  thumbnailImage,
  title,
  brandName,
  baseIngredientId,
  selectedIngredients,
  description,
  isCelebrity,
}: TPostRecipeWriteBody): Promise<void> => {
  const formData = new FormData();

  if (thumbnailImage instanceof File) {
    formData.append('thumbnailImage', thumbnailImage);
  }

  const recipeData = JSON.stringify({
    title,
    brandName,
    baseIngredientId,
    selectedIngredients,
    description,
    isCelebrity,
  });

  formData.append('recipe', recipeData);

  await instance.post<TGetResponse<void>>('/api/recipe/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
