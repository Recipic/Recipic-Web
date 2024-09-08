import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetUserCommentsListResponse } from '@/apis/userComments/type';
import { getUserCommentsListQueryKey } from '@/constants/queryKeys';

export const useGetMyCommentsList = () => {
  const {
    data: userCommentsListData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetUserCommentsListResponse>({
    queryKey: getUserCommentsListQueryKey().queryKey,
    queryFn: getUserCommentsListQueryKey().queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });
  return { userCommentsListData, isLoading, error };
};
