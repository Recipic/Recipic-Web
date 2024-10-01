import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLikeComment } from '@/apis/recipeDetail/postLikeComment';
import { getCommentsListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { TPostLikeCommentBody } from '@/apis/recipeDetail/type';
import { TSortOption } from '@/types/comments';

type TUsePostLikeComment = {
  recipeId: number;
} & TPostLikeCommentBody;

export const usePostLikeComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TPostLikeCommentBody) => postLikeComment({ commentId: body.commentId }),
    onSuccess: (_, variables: TUsePostLikeComment) => {
      //모든 정렬 옵션에 대해 쿼리 무효화
      const sortOptions: TSortOption[] = ['latest', 'likes']; // 모든 가능한 정렬 옵션을 나열
      sortOptions.forEach(sortType => {
        queryClient.invalidateQueries({
          queryKey: getCommentsListQueryKey({ recipeId: variables.recipeId, sortType }).queryKey,
        });
      });

      toast.success('해당 댓글에 대한 좋아요 상태가 변경되었어요.');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
