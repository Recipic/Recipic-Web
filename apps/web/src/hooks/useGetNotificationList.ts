import { useQuery } from '@tanstack/react-query';
import { TGetNotificationListResponse } from '@/apis/notification/type';
import { getNotificationListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';

export const useGetNotificationList = () => {
  const {
    data: notificationListData,
    isLoading,
    error,
  } = useQuery<TGetNotificationListResponse>({
    queryKey: getNotificationListQueryKey().queryKey,
    queryFn: getNotificationListQueryKey().queryFn,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 1, // 1분
  });

  if (error) {
    toast.error(error.message);
  }

  return { notificationListData, isLoading, error };
};
