import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMyRecipe } from '@/apis/myRecipe/deleteMyRecipe';
import { getMyRecipeListQueryKey, getRecipeListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { TDeleteMyRecipeParams } from '@/apis/myRecipe/type';
import { TCustomError } from '@/apis/type';

export const useDeleteMyRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: TDeleteMyRecipeParams) => deleteMyRecipe({ recipeId: params.recipeId }),
    onSuccess: () => {
      // 모든 내 레시피 목록 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: getMyRecipeListQueryKey({}).queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: getRecipeListQueryKey({}).queryKey,
      });

      toast.success('내 레시피가 삭제되었어요.');
    },
    onError: (error: TCustomError) => {
      toast.error(error.response?.data.error.message);
    },
  });
};
