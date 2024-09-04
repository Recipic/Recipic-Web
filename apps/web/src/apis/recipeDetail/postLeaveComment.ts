import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TGetResponse } from '@/apis/type';
import { TPostLeaveCommentBody } from './type';

export const postLeaveComment = async ({ recipeId, comment }: TPostLeaveCommentBody): Promise<void> => {
  try {
    await instance.post<TGetResponse<void>>(`/api/recipe/comment`, {
      recipeId: recipeId,
      comment: comment,
    });
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
