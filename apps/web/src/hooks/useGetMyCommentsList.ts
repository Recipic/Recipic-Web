import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetMyCommentsListResponse } from '@/apis/myComments/type';
import { getMyCommentsListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';

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

  if (error) {
    toast.error(error.message);
  }

  return { myCommentsListData, isLoading, error };
};
