import { TBrandKo } from '@/types/brand';

export type TMenuOfBrand = {
  ingredientId: number;
  ingredientName: string;
};

export type TIngredient = {
  ingredientId: number;
  ingredientName: string;
  quantity: number;
  unit: string;
  cost: number;
  calorie: number;
};

export type TIncludeIngredient = {
  ingredient: TIngredient;
  count: number;
};

export type TRecipeDetail = {
  recipeId: number;
  userNickName: string;
  userProfileImageUrl: string | undefined;
  brandName: TBrandKo;
  title: string;
  description: string;
  thunbnailUrl: string;
  isCelebrity: boolean;
  createdAt: string;
  status: string;
  scrapCount: number;
  isScrapped: boolean;
  baseIngredient: string;
  includeIngredients: TIncludeIngredient[];
};

export type TRecipeId = {
  recipeId: number;
};
