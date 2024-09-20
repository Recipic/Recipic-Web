import { skipToken, useQuery } from '@tanstack/react-query';
import { getIngredientOfBrandQueryKey } from '@/constants/queryKeys';
import { TGetIngredientOfBrandParams, TGetIngredientOfBrandResponse } from '@/apis/recipe/type';
import { toast } from 'sonner';

export const useGetIngredientOfBrand = ({ brandName }: TGetIngredientOfBrandParams) => {
  const {
    data: ingredientOptions,
    isLoading,
    refetch,
    error,
  } = useQuery<TGetIngredientOfBrandResponse>({
    queryKey: getIngredientOfBrandQueryKey({ brandName }).queryKey,
    queryFn: brandName !== undefined ? getIngredientOfBrandQueryKey({ brandName }).queryFn : skipToken,
    staleTime: 1000 * 60 * 60 * 2, // 2시간
    gcTime: 1000 * 60 * 60 * 1.5, // 1.5시간
  });

  if (error) {
    toast.error(error.message);
  }

  return { ingredientOptions, isLoading, refetch, error };
};
