import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetRecipeListParams, TGetRecipeListResponse } from '@/apis/recipe/type';
import { toast } from 'sonner';
import { getRecipeListQueryKey } from '@/constants/queryKeys';
import { TCustomError } from '@/apis/type';

export const useGetRecipeList = ({ keyword }: Omit<TGetRecipeListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useInfiniteQuery<
    TGetRecipeListResponse,
    TCustomError
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
    toast.error(error.response?.data.error.message);
  }

  return { recipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
