import { skipToken, useQuery } from '@tanstack/react-query';
import { TGetNotificationListResponse } from '@/apis/notification/type';
import { getNotificationListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/authContext';
import { TCustomError } from '@/apis/type';

export const useGetNotificationList = () => {
  const { isLoggedIn } = useAuth();

  const {
    data: notificationListData,
    isLoading,
    error,
  } = useQuery<TGetNotificationListResponse, TCustomError>({
    queryKey: getNotificationListQueryKey().queryKey,
    queryFn: isLoggedIn ? getNotificationListQueryKey().queryFn : skipToken,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 1, // 1분
  });

  if (error) {
    toast.error(error.response?.data.error.message);
  }

  return { notificationListData, isLoading, error };
};
