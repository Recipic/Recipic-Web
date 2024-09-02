import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetMyRecipeListParams, TGetMyRecipeListResponse } from '@/apis/myRecipe/type';
import { getMyRecipeList } from '@/apis/myRecipe/getMyRecipeList';

const DEFAULT_SIZE = 5;

export const useGetMyRecipeList = ({ keyword }: Omit<TGetMyRecipeListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery<
    TGetMyRecipeListResponse,
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
  const myRecipeInfosList = data !== undefined ? data.pages.flat() : [];
  return { myRecipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
