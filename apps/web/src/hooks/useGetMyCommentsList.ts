import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetMyCommentsListResponse } from '@/apis/myComments/type';
import { getMyCommentsListQueryKey } from '@/constants/queryKeys';

export const useGetMyCommentsList = () => {
  const {
    data: myCommentsListData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetMyCommentsListResponse>({
    queryKey: getMyCommentsListQueryKey().queryKey,
    queryFn: getMyCommentsListQueryKey().queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });
  return { myCommentsListData, isLoading, error };
};
