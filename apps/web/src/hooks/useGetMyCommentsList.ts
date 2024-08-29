import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetMyCommentsResponse } from '@/apis/myCommentsList/type';
import { getMyCommentsListQueryKey } from '@/constants/queryKeys';
import { TGetMyCommentsListParams } from '@/apis/myCommentsList/type';
export const useGetMyCommentsList = ({ recipeId, page, size, sortType }: TGetMyCommentsListParams) => {
  const {
    data: myCommentsList,
    isLoading,
    error,
  } = useSuspenseQuery<TGetMyCommentsResponse>({
    queryKey: getMyCommentsListQueryKey({ recipeId, page, size, sortType }).queryKey,
    queryFn: getMyCommentsListQueryKey({ recipeId, page, size, sortType }).queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });
  return { myCommentsList, isLoading, error };
};
