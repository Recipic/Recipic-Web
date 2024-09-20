import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetMyRecipeListParams, TGetMyRecipeListResponse } from '@/apis/myRecipe/type';
import { getMyRecipeList } from '@/apis/myRecipe/getMyRecipeList';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { toast } from 'sonner';

export const useGetMyRecipeList = ({ keyword, size = DEFAULT_SIZE }: Omit<TGetMyRecipeListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useInfiniteQuery<
    TGetMyRecipeListResponse,
    Error
  >({
    queryKey: ['myRecipeList', keyword],
    queryFn: ({ pageParam = 0 }) => {
      const result = getMyRecipeList({ page: pageParam as number, keyword: keyword, size: size });
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
  const myRecipeInfosList = data !== undefined ? data.pages.flat() : [];

  if (error) {
    toast.error(error.message);
  }

  return { myRecipeInfosList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
