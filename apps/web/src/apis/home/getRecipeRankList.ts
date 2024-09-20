import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetRecipeRankListResponse } from './type';

export const getRecipeRankList = async (): Promise<TGetRecipeRankListResponse> => {
  const response = await instance.get<TGetResponse<TGetRecipeRankListResponse>>('/api/recipe/rank/normal');
  return response.data.response;
};
