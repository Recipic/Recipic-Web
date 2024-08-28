import { getRecipeRankList } from '@/apis/home/getRecipeRankList';
import { getRecipeDetail } from '@/apis/recipeDetail/getRecipeDetail';
import { getMyCommentsList } from '@/apis/myCommentsList/getMyCommentsList';
import { TRecipeId } from '@/types/recipe';
import { TGetMyCommentsListParams } from '@/apis/myCommentsList/type';

/** 홈 페이지에서 레시피 순위 리스트를 받고 관리하기 위한 쿼리 키 */
export const getRecipeRankListQueryKey = () => {
  return {
    queryKey: ['recipeRankList'],
    queryFn: () => getRecipeRankList(),
  };
};

/** 레시피 상세조회 페이지에서 레시피 작성글 정보를 받고 관리하기 위한 쿼리 키 */
export const getMyCommentsListQueryKey = ({ recipeId, page, size, sortType }: TGetMyCommentsListParams) => {
  return {
    queryKey: ['myCommentsList', recipeId, page, size, sortType],
    queryFn: () => getMyCommentsList({ recipeId, page, size, sortType }),
  };
};

/** 레시피 상세조회 페이지에서 데이터를 받고 관리하기 위한 쿼리 키 */
export const getRecipeDetailQueryKey = ({ recipeId }: TRecipeId) => {
  return {
    queryKey: ['recipeDetail', recipeId],
    queryFn: () => getRecipeDetail({ recipeId: recipeId }),
  };
};
