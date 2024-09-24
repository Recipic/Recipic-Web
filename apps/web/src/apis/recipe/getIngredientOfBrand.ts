import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetIngredientOfBrandParams, TGetIngredientOfBrandResponse } from './type';

export const getIngredientOfBrand = async ({
  brandName,
}: TGetIngredientOfBrandParams): Promise<TGetIngredientOfBrandResponse> => {
  const response = await instance.get<TGetResponse<TGetIngredientOfBrandResponse>>(
    `/api/brand/baseingredients?brandName=${brandName}`,
  );
  return response.data.response;
};
