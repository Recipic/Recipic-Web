import { TBrandKo } from '@/types/brand';

export type TIngredient = {
  ingredientId: string;
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
  recipeId: string;
  userNickName: string;
  userProfileImageUrl: string | null;
  brandName: TBrandKo;
  title: string;
  description: string;
  thunbnailUrl: string;
  isCelebrity: boolean;
  createdAt: string;
  status: string;
  scrapCount: number;
  isScrapped: boolean;
  includeIngredients: TIncludeIngredient[];
};

export type TRecipeId = {
  recipeId: string | number;
};
