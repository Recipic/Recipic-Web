import { skipToken, useQuery } from '@tanstack/react-query';
import { TGetNotificationListResponse } from '@/apis/notification/type';
import { getNotificationListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/authContext';

export const useGetNotificationList = () => {
  const { isLoggedIn } = useAuth();

  const {
    data: notificationListData,
    isLoading,
    error,
  } = useQuery<TGetNotificationListResponse>({
    queryKey: getNotificationListQueryKey().queryKey,
    queryFn: isLoggedIn ? getNotificationListQueryKey().queryFn : skipToken,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 1, // 1분
  });

  if (error) {
    toast.error(error.message);
  }

  return { notificationListData, isLoading, error };
};
