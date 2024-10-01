import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getMyRecipeListQueryKey } from '@/constants/queryKeys';
import { useNavigate } from 'react-router-dom';
import { TPostRecipeWriteBody } from '@/apis/recipe/type';
import { postRecipeWrite } from '@/apis/recipe/postRecipeWrite';

type TUsePostRecipeWrite = {
  onClose: () => void;
};

export const usePostRecipeWrite = ({ onClose }: TUsePostRecipeWrite) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (body: TPostRecipeWriteBody) => postRecipeWrite(body),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: getMyRecipeListQueryKey({}).queryKey,
      });
      onClose();
      navigate('/success');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
