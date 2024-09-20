import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetRecipeDetailResponse } from '@/apis/recipeDetail/type';
import { getRecipeDetailQueryKey } from '@/constants/queryKeys';
import { TRecipeId } from '@/types/recipe';
import { toast } from 'sonner';

export const useGetRecipeDetail = ({ recipeId }: TRecipeId) => {
  const {
    data: recipeDetailData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetRecipeDetailResponse>({
    queryKey: getRecipeDetailQueryKey({ recipeId: recipeId }).queryKey,
    queryFn: getRecipeDetailQueryKey({ recipeId: recipeId }).queryFn,
    staleTime: 1000 * 60 * 3, // 3분
    gcTime: 1000 * 60 * 1, // 1분
  });

  if (error) {
    toast.error(error.message);
  }

  return { recipeDetailData, isLoading, error };
};
