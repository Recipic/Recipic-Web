import { getRecipeRankList } from '@/apis/home/getRecipeRankList';
import { getRecipeDetail } from '@/apis/recipeDetail/getRecipeDetail';
import { TRecipeId } from '@/types/recipe';

/** 홈 페이지에서 레시피 순위 리스트를 받고 관리하기 위한 쿼리 키 */
export const getRecipeRankListQueryKey = () => {
  return {
    queryKey: ['recipeRankList'],
    queryFn: () => getRecipeRankList(),
  };
};

/** 레시피 상세조회 페이지에서 데이터를 받고 관리하기 위한 쿼리 키 */
export const getRecipeDetailQueryKey = ({ recipeId }: TRecipeId) => {
  return {
    queryKey: ['recipeDetail', recipeId],
    queryFn: () => getRecipeDetail({ recipeId: recipeId }),
  };
};
