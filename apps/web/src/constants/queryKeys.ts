import { getRecipeRankList } from '@/apis/home/getRecipeRankList';

/** 홈 페이지에서 레시피 순위 리스트를 받고 관리하기 위한 쿼리 키 */
export const getRecipeRankListQueryKey = () => {
  return {
    queryKey: ['recipeRankList'],
    queryFn: () => getRecipeRankList(),
  };
};

import { getMyCommentsList } from '@/apis/myCommentsList/getMyCommentsList';

export const getMyCommentsListQueryKey = () => {
  return {
    queryKey: ['myCommentsList'],
    queryFn: () => getMyCommentsList(),
  };
};
