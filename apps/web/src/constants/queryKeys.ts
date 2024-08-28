import { getRecipeRankList } from '@/apis/home/getRecipeRankList';
import { getRecipeDetail } from '@/apis/recipeDetail/getRecipeDetail';
import { getMyCommentsList } from '@/apis/myCommentsList/getMyCommentsList';
/** 홈 페이지에서 레시피 순위 리스트를 받고 관리하기 위한 쿼리 키 */
export const getRecipeRankListQueryKey = () => {
  return {
    queryKey: ['recipeRankList'],
    queryFn: () => getRecipeRankList(),
  };
};

/** 레시피 상세조회 페이지에서 레시피 작성글 정보를 받고 관리하기 위한 쿼리 키 */
export const getMyCommentsListQueryKey = () => {
  return {
    queryKey: ['myCommentsList'],
    queryFn: () => getMyCommentsList(),
  };
};

/** 레시피 상세조회 페이지에서 데이터를 받고 관리하기 위한 쿼리 키 */
export const getRecipeDetailQueryKey = (recipeId: string) => {
  return {
    queryKey: ['recipeDetail'],
    queryFn: () => getRecipeDetail(recipeId),
  };
};
