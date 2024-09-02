import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TGetPickedRecipeListParams, TGetPickedRecipeListResponse } from './type';

export const getPickedRecipeList = async ({
  page,
}: TGetPickedRecipeListParams): Promise<TGetPickedRecipeListResponse> => {
  try {
    const response = await instance.get<TGetResponse<TGetPickedRecipeListResponse>>(`/api/user/scraps?page=${page}`);
    return response.data.response;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
