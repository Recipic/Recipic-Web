import { useMutation } from '@tanstack/react-query';
import { postLogout } from '@/apis/settings/postLogout';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/authContext';

export const usePostLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      logout();
      navigate('/');
      toast.success('로그아웃 되었어요');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};