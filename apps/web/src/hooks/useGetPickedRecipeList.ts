import { skipToken, useInfiniteQuery } from '@tanstack/react-query';
import { TGetPickedRecipeListResponse } from '@/apis/picked/type';
import { getPickedRecipeList } from '@/apis/picked/getPickedRecipeList';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/authContext';

export const useGetPickedRecipeList = () => {
  const { isLoggedIn } = useAuth();
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useInfiniteQuery<
    TGetPickedRecipeListResponse,
    Error
  >({
    queryKey: ['pickedRecipeList'],
    queryFn: isLoggedIn
      ? ({ pageParam = 0 }) => {
          const result = getPickedRecipeList({ page: pageParam as number });
          return result;
        }
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
    toast.error(error.message);
  }

  return { pickedRecipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
