import { skipToken, useSuspenseQuery } from '@tanstack/react-query';
import { TGetMyCommentsListResponse } from '@/apis/myComments/type';
import { getMyCommentsListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/authContext';
import { TCustomError } from '@/apis/type';

export const useGetMyCommentsList = () => {
  const { isLoggedIn } = useAuth();
  const {
    data: myCommentsListData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetMyCommentsListResponse, TCustomError>({
    queryKey: getMyCommentsListQueryKey().queryKey,
    queryFn: isLoggedIn ? getMyCommentsListQueryKey().queryFn : skipToken,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });

  if (error) {
    toast.error(error.response?.data.error.message);
  }

  return { myCommentsListData, isLoading, error };
};
