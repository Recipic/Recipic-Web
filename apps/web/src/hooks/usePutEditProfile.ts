import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putEditProfile } from '@/apis/editProfile/putEditProfile';
import { toast } from 'sonner';
import { TPutEditProfileBody } from '@/apis/editProfile/type';
import { getMyInfoQueryKey } from '@/constants/queryKeys';

export const usePutEditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TPutEditProfileBody) =>
      putEditProfile({ profileImage: body.profileImage, nickName: body.nickName, description: body.description }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: getMyInfoQueryKey().queryKey,
      });

      toast.success('프로필이 수정되었어요');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
