import { TRecipeCardInfo } from '@/types/recipeCard';

export type TGetMyRecipeListResponse = TRecipeCardInfo[];

export type TGetMyRecipeListParams = {
  page: number;
  size: number;
};
