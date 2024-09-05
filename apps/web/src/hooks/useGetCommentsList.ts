import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetCommentsListParams, TGetCommentsListResponse } from '@/apis/recipeDetail/type';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { getCommentsListQueryKey } from '@/constants/queryKeys';
import { getCommentsList } from '@/apis/recipeDetail/getCommentsList';

export const useGetCommentsList = ({
  recipeId,
  size = DEFAULT_SIZE,
  sortType,
}: Omit<TGetCommentsListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery<
    TGetCommentsListResponse,
    Error
  >({
    queryKey: getCommentsListQueryKey({ recipeId, sortType }).queryKey,
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (lastPage.last || lastPage.empty) {
        return undefined;
      }
      return lastPage.number + 1;
    },
    queryFn: ({ pageParam = 0 }) =>
      getCommentsList({
        recipeId,
        page: pageParam as number,
        size,
        sortType,
      }),
  });

  const commentsList = data?.pages.flatMap(page => page.content) ?? [];
  const totalComments = data?.pages[0]?.totalElements ?? 0;

  return { commentsList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, totalComments };
};
