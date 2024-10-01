import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetRecipeListParams, TGetRecipeListResponse } from '@/apis/recipe/type';
import { toast } from 'sonner';
import { getRecipeListQueryKey } from '@/constants/queryKeys';

export const useGetRecipeList = ({ keyword }: Omit<TGetRecipeListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useInfiniteQuery<
    TGetRecipeListResponse,
    Error
  >({
    queryKey: getRecipeListQueryKey({ keyword }).queryKey,
    queryFn: ({ pageParam = 0 }) => getRecipeListQueryKey({ keyword }).queryFn({ pageParam: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
  const recipeInfosList = data !== undefined ? data.pages.flat() : [];

  if (error) {
    toast.error(error.message);
  }

  return { recipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
