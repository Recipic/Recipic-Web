import { TRecipeCardInfo } from '@/types/recipeCard';

export type TGetRecipeListResponse = TRecipeCardInfo[];

export type TGetRecipeListParams = {
  page: number;
  keyword: string;
};
