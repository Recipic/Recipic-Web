import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMyRecipe } from '@/apis/myRecipe/deleteMyRecipe';
import { getMyRecipeListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { TDeleteMyRecipeParams } from '@/apis/myRecipe/type';
import { DEFAULT_SIZE } from '@/constants/pagenation';

type TUseDeleteMyRecipeParams = {
  keyword: string;
} & TDeleteMyRecipeParams;
export const useDeleteMyRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: TDeleteMyRecipeParams) => deleteMyRecipe({ recipeId: params.recipeId }),
    onSuccess: (_, variables: TUseDeleteMyRecipeParams) => {
      // 모든 내 레시피 목록 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: getMyRecipeListQueryKey({ keyword: variables.keyword, size: DEFAULT_SIZE }).queryKey,
      });

      toast.success('내 레시피가 삭제되었어요.');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
