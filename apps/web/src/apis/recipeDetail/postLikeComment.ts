import { instance } from '@/apis/axios';
import { TPostLikeCommentBody } from './type';
import { TGetResponse } from '@/apis/type';

export const postLikeComment = async ({ commentId }: TPostLikeCommentBody): Promise<void> => {
  await instance.post<TGetResponse<void>>(`/api/recipe/comment/like`, {
    commentId: commentId,
  });
};
