import { getMyCommentsList } from '@/apis/myCommentsList/getMyCommentsList';

export const getMyCommentsListQueryKey = () => {
  return {
    queryKey: ['myCommentsList'],
    queryFn: () => getMyCommentsList(),
  };
};
