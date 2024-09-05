import { TBrandKo } from '@/types/brand';
import { TIngredient } from '@/types/recipe';
import { TRecipeCardInfo } from '@/types/recipeCard';

export type TGetRecipeListResponse = TRecipeCardInfo[];

export type TGetRecipeListParams = {
  page: number;
  keyword: string;
};

export type TGetIngredientOfBrandResponse = TIngredient[];

export type TGetIngredientOfBrandParams = {
  brandName: TBrandKo | undefined;
};
