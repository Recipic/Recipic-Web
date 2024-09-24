import { useMutation } from '@tanstack/react-query';
import { postAuthorizationCode } from '@/apis/kakaoCallback/postAuthorizationCode';
import { toast } from 'sonner';
import { TPostAuthorizationCodeBody, TPostAuthorizationCodeResponse } from '@/apis/kakaoCallback/type';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/authContext';

export const usePostAuthorizationCode = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (body: TPostAuthorizationCodeBody) =>
      postAuthorizationCode({ authorizationCode: body.authorizationCode }),
    onSuccess: (data: TPostAuthorizationCodeResponse) => {
      login({ accessToken: data.accessToken });
      navigate('/');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
