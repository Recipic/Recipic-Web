import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetRecipeRankListResponse } from './type';

export const getRecipeCelebRankList = async (): Promise<TGetRecipeRankListResponse> => {
  const response = await instance.get<TGetResponse<TGetRecipeRankListResponse>>('/api/recipe/rank/celebrity');
  return response.data.response;
};
