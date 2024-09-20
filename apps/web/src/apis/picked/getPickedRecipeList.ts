import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetPickedRecipeListParams, TGetPickedRecipeListResponse } from './type';

export const getPickedRecipeList = async ({
  page,
}: TGetPickedRecipeListParams): Promise<TGetPickedRecipeListResponse> => {
  const response = await instance.get<TGetResponse<TGetPickedRecipeListResponse>>(`/api/user/scraps?page=${page}`);
  return response.data.response;
};
