import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { TCustomError } from '@/apis/type';
import { TPostAdminTokenResponse } from '@/apis/login/type';
import { postAdminToken } from '@/apis/login/postAdminToken';
import { useAuth } from '@/contexts/authContext';

export const usePostAdminToken = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => postAdminToken(),
    onSuccess: (data: TPostAdminTokenResponse) => {
      login({ accessToken: data.accessToken });
      navigate('/');
    },
    onError: (error: TCustomError) => {
      toast.error(error.response?.data.error.message || 'failed to apple test login!!.');
    },
  });
};
