import { getRecipeRankList } from '@/apis/home/getRecipeRankList';
import { getRecipeDetail } from '@/apis/recipeDetail/getRecipeDetail';
import { getMyCommentsList } from '@/apis/myCommentsList/getMyCommentsList';
import { TRecipeId } from '@/types/recipe';
import { TGetMyCommentsListParams } from '@/apis/myCommentsList/type';
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

/** 나의 댓글 페이지에서 작성한 댓글 정보를 받고 관리하기 위한 쿼리 키 */
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

/** 마이 페이지에서 내가 작성한 레시피 목록 리스트를 받고 관리하기 위한 쿼리 키 */
export const getMyRecipeRankListQueryKey = () => {
  return {
    queryKey: ['myRecipeRankList'],
    queryFn: () => getRecipeRankList(),
  };
};
