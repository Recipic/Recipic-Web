import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getMyRecipeListQueryKey, getRecipeDetailQueryKey, getRecipeListQueryKey } from '@/constants/queryKeys';
import { TPutRecipeEditBody } from '@/apis/recipe/type';
import { putRecipeEdit } from '@/apis/recipe/putRecipeEdit';
import { useNavigate } from 'react-router-dom';

type TUsePutRecipeEdit = {
  onClose: () => void;
  editRecipeId?: number;
};

export const usePutRecipeEdit = ({ onClose, editRecipeId }: TUsePutRecipeEdit) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (body: TPutRecipeEditBody) => putRecipeEdit(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getMyRecipeListQueryKey({}).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: getRecipeListQueryKey({}).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: getRecipeDetailQueryKey({ recipeId: editRecipeId }).queryKey,
      });
      onClose();
      toast.success('레시피가 수정되었어요.');
      if (editRecipeId) {
        navigate(`/recipe/${editRecipeId}`);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
