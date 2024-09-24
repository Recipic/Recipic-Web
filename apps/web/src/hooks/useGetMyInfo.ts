import { skipToken, useSuspenseQuery } from '@tanstack/react-query';
import { TGetMyInfoResponse } from '@/apis/my/type';
import { getMyInfoQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/authContext';

export const useGetMyInfo = () => {
  const { isLoggedIn } = useAuth();
  const {
    data: myInfoData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetMyInfoResponse>({
    queryKey: getMyInfoQueryKey().queryKey,
    queryFn: isLoggedIn ? getMyInfoQueryKey().queryFn : skipToken,
    staleTime: 1000 * 60 * 60 * 2, // 2시간
    gcTime: 1000 * 60 * 60 * 1.5, // 1시간 30분
  });

  if (error) {
    toast.error(error.message);
  }

  return { myInfoData, isLoading, error };
};
