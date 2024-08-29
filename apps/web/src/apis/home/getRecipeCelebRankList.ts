import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetRecipeRankListResponse } from './type';

export const getRecipeCelebRankList = async (): Promise<TGetRecipeRankListResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetRecipeRankListResponse>>('/api/recipe/rank/celebrity');
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
