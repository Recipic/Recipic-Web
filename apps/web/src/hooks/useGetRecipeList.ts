import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetRecipeListParams, TGetRecipeListResponse } from '@/apis/recipe/type';
import { getRecipeList } from '@/apis/recipe/getRecipeList';

export const useGetRecipeList = ({ keyword }: Omit<TGetRecipeListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery<
    TGetRecipeListResponse,
    Error
  >({
    queryKey: ['recipeList', keyword],
    queryFn: ({ pageParam = 0 }) => {
      const result = getRecipeList({ page: pageParam as number, keyword: keyword });
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
  const recipeInfosList = data !== undefined ? data.pages.flat() : [];
  return { recipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
