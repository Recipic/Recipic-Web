import { useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { TGetMyRecipeListParams, TGetMyRecipeListResponse } from '@/apis/myRecipes/type';
import { getMyRecipeList } from '@/apis/myRecipes/getMyRecipes';

export const useGetMyRecipeList = (size: number) => {
  // size 파라미터 추가
  const queryOptions: UseInfiniteQueryOptions<
    TGetMyRecipeListResponse,
    Error,
    TGetMyRecipeListResponse,
    TGetMyRecipeListResponse,
    string[],
    number
  > = {
    queryKey: ['myRecipeList'],
    // 초기 페이지 0
    queryFn: ({ pageParam = 0 }) => getMyRecipeList({ page: pageParam, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < size) {
        return undefined;
      }
      return allPages.length;
    },
  };

  return useInfiniteQuery(queryOptions);
};
