import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TPostLikeCommentBody } from './type';
import { TGetResponse } from '@/apis/type';

export const postLikeComment = async ({ commentId }: TPostLikeCommentBody): Promise<void> => {
  try {
    await instance.post<TGetResponse<void>>(`/api/recipe/comment/like`, {
      commentId: commentId,
    });
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
