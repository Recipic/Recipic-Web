import { useInfiniteQuery } from '@tanstack/react-query';
import { TGetCommentsListParams, TGetCommentsListResponse } from '@/apis/recipeDetail/type';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { getCommentsListQueryKey } from '@/constants/queryKeys';

export const useGetCommentsList = ({
  recipeId,
  size = DEFAULT_SIZE,
  sortType,
}: Omit<TGetCommentsListParams, 'page'>) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery<
    TGetCommentsListResponse,
    Error
  >({
    ...getCommentsListQueryKey({ recipeId, sortType }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
    queryFn: ({ pageParam }) =>
      getCommentsListQueryKey({ recipeId: recipeId, sortType: sortType }).queryFn({
        pageParam: pageParam as number,
        size: size,
      }),
  });

  const commentsList = data !== undefined ? data.pages.flat() : [];
  return { commentsList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage };
};
