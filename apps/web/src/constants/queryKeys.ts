import { getMyInfo } from './../apis/my/getMyInfo';
import { getRecipeRankList } from '@/apis/home/getRecipeRankList';
import { getRecipeDetail } from '@/apis/recipeDetail/getRecipeDetail';
import { TRecipeId } from '@/types/recipe';
import { getRecipeCelebRankList } from '@/apis/home/getRecipeCelebRankList';
import { getCommentsList } from '@/apis/recipeDetail/getCommentsList';
import { TGetCommentsListParams } from '@/apis/recipeDetail/type';
import { getMenuOfBrand } from '@/apis/recipe/getMenuOfBrand';
import { TGetMenuOfBrandParams, TGetSideIngredientsParams } from '@/apis/recipe/type';
import { getMyCommentsList } from '@/apis/myComments/getMyCommentsList';
import { TGetMyRecipeListParams } from '@/apis/myRecipe/type';
import { DEFAULT_SIZE } from './pagenation';
import { getMyRecipeList } from '@/apis/myRecipe/getMyRecipeList';
import { getSideIngredients } from '@/apis/recipe/getSideIngredients';

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

/** 레시피 작성 폼 Drawer에서 브랜드별 메뉴 정보를 받고 관리하기 위한 쿼리 키 */
export const getMenuOfBrandQueryKey = ({ brandName }: TGetMenuOfBrandParams) => {
  return {
    queryKey: ['menuOfBrand', brandName],
    queryFn: () => getMenuOfBrand({ brandName: brandName }),
  };
};

/** 레시피 작성 폼 Drawer에서 브랜드별 메뉴에 해당하는 사이드 재료 정보를 받고 관리하기 위한 쿼리 키 */
export const getSideIngredientsQueryKey = ({ menuId }: TGetSideIngredientsParams) => {
  return {
    queryKey: ['sideIngredients', menuId],
    queryFn: () => getSideIngredients({ menuId: menuId }),
  };
};

/** 유저 정보를 받고 관리하기 위한 쿼리 키 */
export const getMyInfoQueryKey = () => {
  return {
    queryKey: ['myInfo'],
    queryFn: () => getMyInfo(),
  };
};

/** 마이페이지의 유저댓글목록에서 유저가 작성한 댓글 리스트 정보를 받고 관리하기 위한 쿼리 키 */
export const getMyCommentsListQueryKey = () => {
  return {
    queryKey: ['myCommentsList'],
    queryFn: () => getMyCommentsList(),
  };
};

/** 내 레시피 목록을 받고 관리하기 위한 쿼리 키 */
export const getMyRecipeListQueryKey = ({ keyword, size = DEFAULT_SIZE }: Omit<TGetMyRecipeListParams, 'page'>) => {
  return {
    queryKey: ['myRecipeList', keyword],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
      getMyRecipeList({ page: pageParam as number, keyword, size }),
  };
};
