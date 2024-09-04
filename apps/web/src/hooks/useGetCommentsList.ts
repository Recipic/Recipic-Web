import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetCommentsListParams, TGetCommentsListResponse } from '@/apis/recipeDetail/type';
import { getCommentsList } from '@/apis/recipeDetail/getCommentsList';
import { DEFAULT_SIZE } from '@/constants/pagenation';

export const useGetCommentsList = ({
  recipeId,
  size = DEFAULT_SIZE,
  sortType,
}: Omit<TGetCommentsListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery<
    TGetCommentsListResponse,
    Error
  >({
    queryKey: ['myRecipeList', recipeId, sortType],
    queryFn: ({ pageParam = 1 }) => {
      const result = getCommentsList({ recipeId: recipeId, page: pageParam as number, size: size, sortType: sortType });
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
  const commentsList = data !== undefined ? data.pages.flat() : [];
  return { commentsList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
