import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetSideIngredientsParams, TGetSideIngredientsResponse } from './type';

export const getSideIngredients = async ({
  menuId,
}: TGetSideIngredientsParams): Promise<TGetSideIngredientsResponse> => {
  const response = await instance.get<TGetResponse<TGetSideIngredientsResponse>>(
    `/api/brand/baseingredient/${menuId}/ingredients`,
  );
  return response.data.response;
};
