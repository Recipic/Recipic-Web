import { TBrandKo } from '@/types/brand';
import { TIngredient, TMenuOfBrand } from '@/types/recipe';
import { TRecipeCardInfo } from '@/types/recipeCard';

export type TGetRecipeListResponse = TRecipeCardInfo[];

export type TGetRecipeListParams = {
  page?: number;
  keyword?: string;
};

export type TGetMenuOfBrandResponse = TMenuOfBrand[];

export type TGetMenuOfBrandParams = {
  brandName: TBrandKo | undefined;
};

export type TGetSideIngredientsResponse = TIngredient[];

export type TGetSideIngredientsParams = {
  menuId: number | undefined;
};

export type TSelectedIngredient = {
  ingredientId: number;
  count: number;
};

export type TPostRecipeWriteBody = {
  thumbnailImage: File;
  title: string;
  brandName: string;
  baseIngredientId: number;
  selectedIngredients: TSelectedIngredient[];
  description: string;
  isCelebrity: boolean;
};
