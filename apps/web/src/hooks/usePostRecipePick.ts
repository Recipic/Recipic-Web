import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TRecipeId } from '@/types/recipe';
import { postRecipePick } from '@/apis/recipeDetail/postRecipePick';
import { getRecipeDetailQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';

export const usePostRecipePick = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TRecipeId) => postRecipePick({ recipeId: body.recipeId }),
    onSuccess: (_, variables) => {
      // 성공 시 관련 쿼리 무효화
      queryClient.refetchQueries({ queryKey: getRecipeDetailQueryKey({ recipeId: variables.recipeId }).queryKey });
      toast.success('찜 상태가 변경되었어요! 나의 찜 목록에서 확인해보세요.');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
