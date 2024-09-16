import { useMutation } from '@tanstack/react-query';
import { postAuthorizationCode } from '@/apis/kakaoCallback/postAuthorizationCode';
import { toast } from 'sonner';
import { TPostAuthorizationCodeBody, TPostAuthorizationCodeResponse } from '@/apis/kakaoCallback/type';
import { useNavigate } from 'react-router-dom';

export const usePostAuthorizationCode = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (body: TPostAuthorizationCodeBody) =>
      postAuthorizationCode({ authorizationCode: body.authorizationCode }),
    onSuccess: (data: TPostAuthorizationCodeResponse) => {
      localStorage.setItem('accessToken', data.accessToken);
      navigate('/');
    },
    onError: (error: Error) => {
      toast.error(error.message); // TODO: 추후 에러페이지로 이동
    },
  });
};
