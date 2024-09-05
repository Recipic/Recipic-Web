import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetIngredientOfBrandParams, TGetIngredientOfBrandResponse } from './type';

export const getIngredientOfBrand = async ({
  brandName,
}: TGetIngredientOfBrandParams): Promise<TGetIngredientOfBrandResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetIngredientOfBrandResponse>>(
      `/api/brand/ingredients?brandName=${brandName}`,
    );
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
