import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TDeleteMyCommentParams } from './type';
import { TGetResponse } from '@/apis/type';

export const deleteMyComment = async ({ commentId }: TDeleteMyCommentParams): Promise<void> => {
  try {
    await instance.delete<TGetResponse<void>>(`/api/recipe/comment?commentId=${commentId}`);
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
