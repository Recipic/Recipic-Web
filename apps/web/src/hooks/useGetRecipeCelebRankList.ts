import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetRecipeRankListResponse } from '@/apis/home/type';
import { getRecipeCelebRankListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { TCustomError } from '@/apis/type';

export const useGetRecipeCelebRankList = () => {
  const {
    data: recipeCelebRankListData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetRecipeRankListResponse, TCustomError>({
    queryKey: getRecipeCelebRankListQueryKey().queryKey,
    queryFn: getRecipeCelebRankListQueryKey().queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });

  if (error) {
    toast.error(error.response?.data.error.message);
  }

  return { recipeCelebRankListData, isLoading, error };
};
