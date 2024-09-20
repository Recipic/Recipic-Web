import { instance } from '@/apis/axios';
import { TDeleteMyCommentParams } from './type';
import { TGetResponse } from '@/apis/type';

export const deleteMyComment = async ({ commentId }: TDeleteMyCommentParams): Promise<void> => {
  await instance.delete<TGetResponse<void>>(`/api/recipe/comment?commentId=${commentId}`);
};
