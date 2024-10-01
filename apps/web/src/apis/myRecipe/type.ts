import { TRecipeCardInfo } from '@/types/recipeCard';

export type TGetMyRecipeListResponse = TRecipeCardInfo[];

export type TGetMyRecipeListParams = {
  page: number;
  keyword?: string;
  size?: number;
};

export type TDeleteMyRecipeParams = {
  recipeId: number;
};
