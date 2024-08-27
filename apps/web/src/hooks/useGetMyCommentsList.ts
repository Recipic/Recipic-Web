import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetMyCommentsResponse } from '@/apis/myCommentsList/type';
import { getMyCommentsListQueryKey } from '@/constants/myCommentsListQueryKeys';

export const useGetRecipeRankList = () => {
  const {
    data: myCommentsList,
    isLoading,
    error,
  } = useSuspenseQuery<TGetMyCommentsResponse>({
    queryKey: getMyCommentsListQueryKey().queryKey,
    queryFn: getMyCommentsListQueryKey().queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });
  return { myCommentsList, isLoading, error };
};
