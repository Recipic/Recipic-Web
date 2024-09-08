import { getRecipeRankList } from '@/apis/home/getRecipeRankList';
import { getRecipeDetail } from '@/apis/recipeDetail/getRecipeDetail';
import { getMyCommentsList } from '@/apis/myCommentsList/getMyCommentsList';
import { TRecipeId } from '@/types/recipe';
import { TGetMyCommentsListParams } from '@/apis/myCommentsList/type';
import { getRecipeCelebRankList } from '@/apis/home/getRecipeCelebRankList';
import { getCommentsList } from '@/apis/recipeDetail/getCommentsList';
import { TGetCommentsListParams } from '@/apis/recipeDetail/type';
import { getIngredientOfBrand } from '@/apis/recipe/getIngredientOfBrand';
import { TGetIngredientOfBrandParams } from '@/apis/recipe/type';
import { getUserCommentsList } from '@/apis/userComments/getUserCommentsList';

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

/** 레시피 댓글 목록을 받고 관리하기 위한 쿼리 키 */
export const getCommentsListQueryKey = ({ recipeId, sortType }: Omit<TGetCommentsListParams, 'page' | 'size'>) => {
  return {
    queryKey: ['commentsList', recipeId, sortType],
    queryFn: ({ pageParam = 0, size }: { pageParam?: number; size: number }) =>
      getCommentsList({ recipeId: recipeId, page: pageParam, size: size, sortType: sortType }),
  };
};

/** 레시피 작성 폼 Drawer에서 브랜드별 재료 정보를 받고 관리하기 위한 쿼리 키 */
export const getIngredientOfBrandQueryKey = ({ brandName }: TGetIngredientOfBrandParams) => {
  return {
    queryKey: ['ingredientOfBrand', brandName],
    queryFn: () => getIngredientOfBrand({ brandName: brandName }),
  };
};

/** 마이페이지의 유저댓글목록에서 유저가 작성한 댓글 리스트 정보를 받고 관리하기 위한 쿼리 키 */
export const getUserCommentsListQueryKey = () => {
  return {
    queryKey: ['userCommentsList'],
    queryFn: () => getUserCommentsList(),
  };
};
