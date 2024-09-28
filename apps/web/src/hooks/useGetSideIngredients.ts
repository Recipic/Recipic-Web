import { skipToken, useQuery } from '@tanstack/react-query';
import { getSideIngredientsQueryKey } from '@/constants/queryKeys';
import { TGetSideIngredientsResponse, TGetSideIngredientsParams } from '@/apis/recipe/type';
import { toast } from 'sonner';

export const useGetSideIngredients = ({ menuId }: TGetSideIngredientsParams) => {
  const {
    data: sideOptions,
    isLoading,
    refetch,
    error,
  } = useQuery<TGetSideIngredientsResponse>({
    queryKey: getSideIngredientsQueryKey({ menuId }).queryKey,
    queryFn: menuId !== undefined ? getSideIngredientsQueryKey({ menuId }).queryFn : skipToken,
    staleTime: 1000 * 60 * 60 * 2, // 2시간
    gcTime: 1000 * 60 * 60 * 1.5, // 1.5시간
  });

  if (error) {
    toast.error(error.message);
  }

  return { sideOptions, isLoading, refetch, error };
};
