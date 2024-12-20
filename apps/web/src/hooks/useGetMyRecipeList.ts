import { skipToken, useInfiniteQuery } from '@tanstack/react-query';
import { TGetMyRecipeListParams, TGetMyRecipeListResponse } from '@/apis/myRecipe/type';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { toast } from 'sonner';
import { getMyRecipeListQueryKey } from '@/constants/queryKeys';
import { useAuth } from '@/contexts/authContext';
import { TCustomError } from '@/apis/type';

export const useGetMyRecipeList = ({ keyword, size = DEFAULT_SIZE }: Omit<TGetMyRecipeListParams, 'page'>) => {
  const { isLoggedIn } = useAuth();
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useInfiniteQuery<
    TGetMyRecipeListResponse,
    TCustomError
  >({
    queryKey: getMyRecipeListQueryKey({ keyword, size }).queryKey,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
    queryFn: isLoggedIn
      ? ({ pageParam = 0 }) =>
          getMyRecipeListQueryKey({
            keyword,
            size,
          }).queryFn({ pageParam: pageParam as number })
      : skipToken,
  });

  const myRecipeInfosList = data !== undefined ? data.pages.flat() : [];

  if (error) {
    toast.error(error.response?.data.error.message);
  }

  return { myRecipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
