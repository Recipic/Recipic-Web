import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TRecipeId } from '@/types/recipe';
import { postRecipePick } from '@/apis/recipeDetail/postRecipePick';
import { getPickedRecipeListQueryKey, getRecipeDetailQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { TGetRecipeDetailResponse } from '@/apis/recipeDetail/type';

export const usePostRecipePick = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TRecipeId) => postRecipePick({ recipeId: body.recipeId }),
    onMutate: async (variables: TRecipeId) => {
      // 이전 쿼리 데이터를 백업
      const queryKey = getRecipeDetailQueryKey({ recipeId: variables.recipeId }).queryKey;
      const previousRecipe = queryClient.getQueryData(queryKey);

      // optimistic update 수행
      queryClient.setQueryData(queryKey, (old: TGetRecipeDetailResponse) => {
        if (old) {
          return {
            ...old,
            isScrapped: !old.isScrapped,
          };
        }
        return old;
      });

      // 이전 데이터와 context 반환
      return { previousRecipe, queryKey };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getPickedRecipeListQueryKey().queryKey });
      toast.success('찜 상태가 변경되었어요! 나의 찜 목록에서 확인해보세요.');
    },
    onError: (error: Error, _, context) => {
      // 에러 발생 시 이전 상태로 롤백
      if (context?.queryKey) {
        queryClient.setQueryData(context.queryKey, context.previousRecipe);
      }
      toast.error(error.message);
    },
    onSettled: (_, __, variables) => {
      // mutation 완료 후 쿼리 무효화하여 최신 데이터 fetch
      queryClient.invalidateQueries({
        queryKey: getRecipeDetailQueryKey({ recipeId: variables.recipeId }).queryKey,
      });
    },
  });
};
