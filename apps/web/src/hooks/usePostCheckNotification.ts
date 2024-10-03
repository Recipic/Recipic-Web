import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getNotificationListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { postCheckNotification } from '@/apis/notification/postCheckNotification';
import { TPostCheckNotificationParams } from '@/apis/notification/type';

export const usePostCheckNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: TPostCheckNotificationParams) =>
      postCheckNotification({ notificationId: params.notificationId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getNotificationListQueryKey().queryKey });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
