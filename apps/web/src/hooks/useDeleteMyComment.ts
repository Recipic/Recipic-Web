import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMyComment } from '@/apis/recipeDetail/deleteMyComment';
import { getCommentsListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { TDeleteMyCommentParams } from '@/apis/recipeDetail/type';
import { TSortOption } from '@/types/comments';

type TUsePostLikeComment = {
  recipeId: number;
} & TDeleteMyCommentParams;

export const useDeleteMyComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: TDeleteMyCommentParams) => deleteMyComment({ commentId: params.commentId }),
    onSuccess: (_, variables: TUsePostLikeComment) => {
      //모든 정렬 옵션에 대해 쿼리 무효화
      const sortOptions: TSortOption[] = ['latest', 'likes']; // 모든 가능한 정렬 옵션을 나열
      sortOptions.forEach(sortType => {
        queryClient.invalidateQueries({
          queryKey: getCommentsListQueryKey({ recipeId: variables.recipeId, sortType }).queryKey,
        });
      });

      toast.success('댓글이 삭제되었어요.');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
