import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getMyRecipeListQueryKey, getRecipeListQueryKey } from '@/constants/queryKeys';
import { useNavigate } from 'react-router-dom';
import { TPostRecipeWriteBody } from '@/apis/recipe/type';
import { postRecipeWrite } from '@/apis/recipe/postRecipeWrite';
import { TCustomError } from '@/apis/type';

type TUsePostRecipeWrite = {
  onClose: () => void;
};

export const usePostRecipeWrite = ({ onClose }: TUsePostRecipeWrite) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (body: TPostRecipeWriteBody) => postRecipeWrite(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getMyRecipeListQueryKey({}).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: getRecipeListQueryKey({}).queryKey,
      });
      onClose();
      navigate('/success');
    },
    onError: (error: TCustomError) => {
      toast.error(error.response?.data.error.message);
    },
  });
};
