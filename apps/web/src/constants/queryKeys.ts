import { getMyInfo } from './../apis/my/getMyInfo';
import { getRecipeRankList } from '@/apis/home/getRecipeRankList';
import { getRecipeDetail } from '@/apis/recipeDetail/getRecipeDetail';
import { TRecipeId } from '@/types/recipe';
import { getRecipeCelebRankList } from '@/apis/home/getRecipeCelebRankList';
import { getCommentsList } from '@/apis/recipeDetail/getCommentsList';
import { TGetCommentsListParams } from '@/apis/recipeDetail/type';
import { getMenuOfBrand } from '@/apis/recipe/getMenuOfBrand';
import { TGetMenuOfBrandParams, TGetRecipeListParams, TGetSideIngredientsParams } from '@/apis/recipe/type';
import { getMyCommentsList } from '@/apis/myComments/getMyCommentsList';
import { TGetMyRecipeListParams } from '@/apis/myRecipe/type';
import { DEFAULT_SIZE } from './pagenation';
import { getMyRecipeList } from '@/apis/myRecipe/getMyRecipeList';
import { getSideIngredients } from '@/apis/recipe/getSideIngredients';
import { getNoticeList } from '@/apis/notice/getNoticeList';
import { TGetNoticeDetailParams } from '@/apis/noticeDetail/type';
import { getNoticeDetail } from '@/apis/noticeDetail/getNoticeDetail';
import { getRecipeList } from '@/apis/recipe/getRecipeList';
import { getPickedRecipeList } from '@/apis/picked/getPickedRecipeList';
import { getNotificationList } from '@/apis/notification/getNotificationList';

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

/** 레시피 페이지에서 레시피 목록을 받고 관리하기 위한 쿼리 키 */
export const getRecipeListQueryKey = ({ keyword }: TGetRecipeListParams) => {
  return {
    queryKey: keyword !== undefined ? ['recipeList', keyword] : ['recipeList'],
    queryFn: ({ pageParam = 0 }) => getRecipeList({ page: pageParam as number, keyword: keyword }),
  };
};

/** 내 레시피 목록을 받고 관리하기 위한 쿼리 키 */
export const getMyRecipeListQueryKey = ({ keyword, size = DEFAULT_SIZE }: Omit<TGetMyRecipeListParams, 'page'>) => {
  return {
    queryKey: keyword !== undefined ? ['myRecipeList', keyword] : ['myRecipeList'],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
      getMyRecipeList({ page: pageParam as number, keyword, size }),
  };
};

/** 나의 찜 목록을 받고 관리하기 위한 쿼리 키 */
export const getPickedRecipeListQueryKey = () => {
  return {
    queryKey: ['pickedRecipeList'],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) => getPickedRecipeList({ page: pageParam as number }),
  };
};

/** 공지사항 목록을 받고 관리하기 위한 쿼리 키 */
export const getNoticeListQueryKey = () => {
  return {
    queryKey: ['noticeList'],
    queryFn: () => getNoticeList(),
  };
};

/** 공지사항 상세 데이터를 받고 관리하기 위한 쿼리 키 */
export const getNoticeDetailQueryKey = ({ announcementId }: TGetNoticeDetailParams) => {
  return {
    queryKey: ['noticeDetail', announcementId],
    queryFn: () => getNoticeDetail({ announcementId: announcementId }),
  };
};

/** 알림 목록을 받고 관리하기 위한 쿼리 키 */
export const getNotificationListQueryKey = () => {
  return {
    queryKey: ['notificationList'],
    queryFn: () => getNotificationList(),
  };
};
