import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetMyRecipeListParams, TGetMyRecipeListResponse } from '@/apis/myRecipe/type';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { toast } from 'sonner';
import { getMyRecipeListQueryKey } from '@/constants/queryKeys';

export const useGetMyRecipeList = ({ keyword, size = DEFAULT_SIZE }: Omit<TGetMyRecipeListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useInfiniteQuery<
    TGetMyRecipeListResponse,
    Error
  >({
    queryKey: getMyRecipeListQueryKey({ keyword, size }).queryKey,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
    queryFn: ({ pageParam = 0 }) =>
      getMyRecipeListQueryKey({
        keyword,
        size,
      }).queryFn({ pageParam: pageParam as number }),
  });

  const myRecipeInfosList = data !== undefined ? data.pages.flat() : [];

  if (error) {
    toast.error(error.message);
  }

  return { myRecipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
