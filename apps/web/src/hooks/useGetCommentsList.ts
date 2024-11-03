import { skipToken, useInfiniteQuery } from '@tanstack/react-query';
import { TGetCommentsListParams, TGetCommentsListResponse } from '@/apis/recipeDetail/type';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { getCommentsListQueryKey } from '@/constants/queryKeys';
import { getCommentsList } from '@/apis/recipeDetail/getCommentsList';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/authContext';
import { TCustomError } from '@/apis/type';

export const useGetCommentsList = ({
  recipeId,
  size = DEFAULT_SIZE,
  sortType,
}: Omit<TGetCommentsListParams, 'page'>) => {
  const { isLoggedIn } = useAuth();
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useInfiniteQuery<
    TGetCommentsListResponse,
    TCustomError
  >({
    queryKey: getCommentsListQueryKey({ recipeId, sortType }).queryKey,
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (lastPage.last || lastPage.empty) {
        return undefined;
      }
      return lastPage.number + 1;
    },
    queryFn: isLoggedIn
      ? ({ pageParam = 0 }) =>
          getCommentsList({
            recipeId,
            page: pageParam as number,
            size,
            sortType,
          })
      : skipToken,
  });

  const commentsList = data?.pages.flatMap(page => page.content) ?? [];
  const totalComments = data?.pages[0]?.totalElements ?? 0;

  if (error) {
    toast.error(error.response?.data.error.message);
  }

  return { commentsList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, totalComments };
};
