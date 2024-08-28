import { useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { TGetRecipeListParams, TGetRecipeListResponse } from '@/apis/recipe/type';
import { getRecipeList } from '@/apis/recipe/getRecipeList';

export const useGetRecipeList = ({ keyword }: Omit<TGetRecipeListParams, 'page'>) => {
  const queryOptions: UseInfiniteQueryOptions<
    TGetRecipeListResponse,
    Error,
    TGetRecipeListResponse,
    TGetRecipeListResponse,
    string[],
    number
  > = {
    queryKey: ['recipeList', keyword],
    queryFn: ({ pageParam = 1 }) => getRecipeList({ page: pageParam, keyword }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 5) {
        return undefined;
      }
      return allPages.length + 1;
    },
  };

  return useInfiniteQuery(queryOptions);
};
