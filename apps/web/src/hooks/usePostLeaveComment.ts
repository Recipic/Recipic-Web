import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLeaveComment } from '@/apis/recipeDetail/postLeaveComment';
import { getCommentsListQueryKey, getMyCommentsListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { TPostLeaveCommentBody } from '@/apis/recipeDetail/type';
import { TSortOption } from '@/types/comments';

export const usePostLeaveComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TPostLeaveCommentBody) => postLeaveComment({ recipeId: body.recipeId, comment: body.comment }),
    onSuccess: (_, variables) => {
      // 모든 정렬 옵션에 대해 쿼리 무효화
      const sortOptions: TSortOption[] = ['latest', 'likes']; // 모든 가능한 정렬 옵션을 나열
      sortOptions.forEach(sortType => {
        queryClient.invalidateQueries({
          queryKey: getCommentsListQueryKey({ recipeId: variables.recipeId, sortType }).queryKey,
        });
      });
      queryClient.invalidateQueries({ queryKey: getMyCommentsListQueryKey().queryKey });
      toast.success('댓글을 남겼어요! 레시피 작성자에게 큰 힘이 될거예요.');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
