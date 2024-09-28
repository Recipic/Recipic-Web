import { skipToken, useQuery } from '@tanstack/react-query';
import { getMenuOfBrandQueryKey } from '@/constants/queryKeys';
import { TGetMenuOfBrandParams, TGetMenuOfBrandResponse } from '@/apis/recipe/type';
import { toast } from 'sonner';

export const useGetMenuOfBrand = ({ brandName }: TGetMenuOfBrandParams) => {
  const {
    data: menuOptions,
    isLoading,
    refetch,
    error,
  } = useQuery<TGetMenuOfBrandResponse>({
    queryKey: getMenuOfBrandQueryKey({ brandName }).queryKey,
    queryFn: brandName !== undefined ? getMenuOfBrandQueryKey({ brandName }).queryFn : skipToken,
    staleTime: 1000 * 60 * 60 * 2, // 2시간
    gcTime: 1000 * 60 * 60 * 1.5, // 1.5시간
  });

  if (error) {
    toast.error(error.message);
  }

  return { menuOptions, isLoading, refetch, error };
};
