import { getRecipeRankList } from '@/apis/home/getRecipeRankList';
import { getRecipeDetail } from '@/apis/recipeDetail/getRecipeDetail';
import { getMyCommentsList } from '@/apis/myCommentsList/getMyCommentsList';
import { TRecipeId } from '@/types/recipe';
import { getRecipeCelebRankList } from '@/apis/home/getRecipeCelebRankList';
import { TGetRecipeListParams } from '@/apis/recipe/type';
import { getRecipeList } from '@/apis/recipe/getRecipeList';

/** 홈 페이지에서 일반인 레시피 순위 리스트를 받고 관리하기 위한 쿼리 키 */
export const getRecipeRankListQueryKey = () => {
  return {
    queryKey: ['recipeRankList'],
    queryFn: () => getRecipeRankList(),
  };
};

/** 홈 페이지에서 유명인 레시피 순위 리스트를 받고 관리하기 위한 쿼리 키 */
export const getRecipeCelebRankListQueryKey = () => {
  return {
    queryKey: ['recipeCelebRankList'],
    queryFn: () => getRecipeCelebRankList(),
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
export const getRecipeDetailQueryKey = ({ recipeId }: TRecipeId) => {
  return {
    queryKey: ['recipeDetail', recipeId],
    queryFn: () => getRecipeDetail({ recipeId: recipeId }),
  };
};
