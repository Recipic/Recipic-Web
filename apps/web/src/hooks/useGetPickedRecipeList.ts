import { skipToken, useInfiniteQuery } from '@tanstack/react-query';
import { TGetPickedRecipeListResponse } from '@/apis/picked/type';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/authContext';
import { getPickedRecipeListQueryKey } from '@/constants/queryKeys';
import { TCustomError } from '@/apis/type';

export const useGetPickedRecipeList = () => {
  const { isLoggedIn } = useAuth();
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useInfiniteQuery<
    TGetPickedRecipeListResponse,
    TCustomError
  >({
    queryKey: getPickedRecipeListQueryKey().queryKey,
    queryFn: isLoggedIn
      ? ({ pageParam = 0 }) => getPickedRecipeListQueryKey().queryFn({ pageParam: pageParam as number })
      : skipToken,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
  const pickedRecipeInfosList = data !== undefined ? data.pages.flat() : [];

  if (error) {
    toast.error(error.response?.data.error.message);
  }

  return { pickedRecipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
