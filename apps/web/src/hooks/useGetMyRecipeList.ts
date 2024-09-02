import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetRecipeListParams, TGetRecipeListResponse } from '@/apis/recipe/type';
import { getMyRecipeList } from '@/apis/myRecipe/getMyRecipeList';

const DEFAULT_SIZE = 5;

export const useGetMyRecipeList = ({ keyword }: Omit<TGetRecipeListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery<
    TGetRecipeListResponse,
    Error
  >({
    queryKey: ['myRecipeList', keyword],
    queryFn: ({ pageParam = 1 }) => {
      const result = getMyRecipeList({ page: pageParam as number, keyword: keyword, size: DEFAULT_SIZE });
      return result;
    },
    initialPageParam: 1,
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
