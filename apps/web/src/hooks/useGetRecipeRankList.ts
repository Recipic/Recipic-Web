import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetRecipeRankListResponse } from '@/apis/home/type';
import { getRecipeRankListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';

export const useGetRecipeRankList = () => {
  const {
    data: recipeRankListData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetRecipeRankListResponse>({
    queryKey: getRecipeRankListQueryKey().queryKey,
    queryFn: getRecipeRankListQueryKey().queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });

  if (error) {
    toast.error(error.message);
  }

  return { recipeRankListData, isLoading, error };
};
