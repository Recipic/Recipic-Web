import { TRecipeCardInfo } from '@/types/recipeCard';

export type TGetPickedRecipeListResponse = TRecipeCardInfo[];

export type TGetPickedRecipeListParams = {
  page: number;
};
