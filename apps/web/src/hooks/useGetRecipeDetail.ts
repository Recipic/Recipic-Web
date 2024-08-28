/*나중에 recipeId: number로 바꿔야하나?*/
import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetRecipeDetailResponse } from '@/apis/recipeDetail/type';
import { getRecipeDetailQueryKey } from '@/constants/queryKeys';

export const useGetRecipeDetail = (recipeId: string) => {
  const {
    data: recipeDetailData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetRecipeDetailResponse>({
    queryKey: getRecipeDetailQueryKey(recipeId).queryKey,
    queryFn: getRecipeDetailQueryKey(recipeId).queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });
  return { recipeDetailData, isLoading, error };
};
