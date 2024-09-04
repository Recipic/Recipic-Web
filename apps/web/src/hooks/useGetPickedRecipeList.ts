import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetPickedRecipeListResponse } from '@/apis/picked/type';
import { getPickedRecipeList } from '@/apis/picked/getPickedRecipeList';

export const useGetPickedRecipeList = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery<
    TGetPickedRecipeListResponse,
    Error
  >({
    queryKey: ['pickedRecipeList'],
    queryFn: ({ pageParam = 0 }) => {
      const result = getPickedRecipeList({ page: pageParam as number });
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
  const pickedRecipeInfosList = data !== undefined ? data.pages.flat() : [];
  return { pickedRecipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
