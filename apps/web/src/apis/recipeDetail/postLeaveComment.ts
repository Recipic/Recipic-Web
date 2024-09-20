import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TPostLeaveCommentBody } from './type';

export const postLeaveComment = async ({ recipeId, comment }: TPostLeaveCommentBody): Promise<void> => {
  await instance.post<TGetResponse<void>>(`/api/recipe/comment`, {
    recipeId: recipeId,
    comment: comment,
  });
};
