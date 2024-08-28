import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetRecipeRankListResponse } from '@/apis/home/type';
import { getRecipeCelebRankListQueryKey } from '@/constants/queryKeys';

export const useGetRecipeCelebRankList = () => {
  const {
    data: recipeCelebRankListData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetRecipeRankListResponse>({
    queryKey: getRecipeCelebRankListQueryKey().queryKey,
    queryFn: getRecipeCelebRankListQueryKey().queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });
  return { recipeCelebRankListData, isLoading, error };
};
