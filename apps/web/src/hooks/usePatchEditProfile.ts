import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchEditProfile } from '@/apis/editProfile/patchEditProfile';
import { toast } from 'sonner';
import { TPatchEditProfileBody } from '@/apis/editProfile/type';
import { getMyInfoQueryKey } from '@/constants/queryKeys';
import { useNavigate } from 'react-router-dom';

type TMutationResult = { status: 'SUCCESS' } | { status: 'NO_CHANGES' };

export const usePatchEditProfile = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<TMutationResult, Error, TPatchEditProfileBody>({
    mutationFn: async (body: TPatchEditProfileBody) => {
      if (!body.profileImage && body.nickName === undefined && body.description === undefined) {
        return { status: 'NO_CHANGES' };
      }
      await patchEditProfile(body);
      return { status: 'SUCCESS' };
    },
    onSuccess: data => {
      if (data.status === 'NO_CHANGES') {
        navigate('/my');
        return;
      }

      queryClient.refetchQueries({
        queryKey: getMyInfoQueryKey().queryKey,
      });

      toast.success('프로필이 수정되었어요');

      navigate('/my');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
