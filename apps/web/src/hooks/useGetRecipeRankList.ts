import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetRecipeRankListResponse } from '@/apis/home/type';
import { getRecipeRankListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { TCustomError } from '@/apis/type';

export const useGetRecipeRankList = () => {
  const {
    data: recipeRankListData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetRecipeRankListResponse, TCustomError>({
    queryKey: getRecipeRankListQueryKey().queryKey,
    queryFn: getRecipeRankListQueryKey().queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });

  if (error) {
    toast.error(error.response?.data.error.message);
  }

  return { recipeRankListData, isLoading, error };
};
