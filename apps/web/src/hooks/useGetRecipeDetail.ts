import { skipToken, useQuery } from '@tanstack/react-query';
import { TGetRecipeDetailResponse } from '@/apis/recipeDetail/type';
import { getRecipeDetailQueryKey } from '@/constants/queryKeys';
import { TRecipeId } from '@/types/recipe';
import { toast } from 'sonner';
import { TCustomError } from '@/apis/type';

export const useGetRecipeDetail = ({ recipeId }: TRecipeId) => {
  const {
    data: recipeDetailData,
    isLoading,
    isFetching,
    error,
  } = useQuery<TGetRecipeDetailResponse, TCustomError>({
    queryKey: getRecipeDetailQueryKey({ recipeId: recipeId }).queryKey,
    queryFn: recipeId !== undefined ? getRecipeDetailQueryKey({ recipeId: recipeId }).queryFn : skipToken,
    staleTime: 1000 * 60 * 3, // 3분
    gcTime: 1000 * 60 * 1, // 1분
  });

  if (error) {
    toast.error(error.response?.data.error.message);
  }

  return { recipeDetailData, isLoading, isFetching, error };
};
