import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/authContext';
import { deleteWithdraw } from '@/apis/settings/deleteWithdraw';

export const useDeleteWithdraw = () => {
  const { withdraw } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => deleteWithdraw(),
    onSuccess: () => {
      withdraw();
      navigate('/');
      toast.success('회원탈퇴 되었어요');
    },
    onError: (error: Error) => {
      toast.error(error.message);
      //TODO: 백엔드 에러 해결을 위한 임시 로그
      console.error('탈퇴 api 에러', error);
    },
  });
};
