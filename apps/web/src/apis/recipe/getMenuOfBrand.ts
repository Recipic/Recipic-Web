import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetMenuOfBrandParams, TGetMenuOfBrandResponse } from './type';

export const getMenuOfBrand = async ({ brandName }: TGetMenuOfBrandParams): Promise<TGetMenuOfBrandResponse> => {
  const response = await instance.get<TGetResponse<TGetMenuOfBrandResponse>>(
    `/api/brand/baseingredients?brandName=${brandName}`,
  );
  return response.data.response;
};
