import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetRecipeRankListResponse } from './type';

export const getRecipeRankList = async (): Promise<TGetRecipeRankListResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetRecipeRankListResponse>>('/api/recipe/rank/normal');
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
