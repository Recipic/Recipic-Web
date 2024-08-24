import { TBrand } from '@/types/brand';

export type TRecipeCardInfo = {
  recipeId?: number;
  userId: string;
  title: string;
  brand: TBrand;
  isCelebrity?: boolean;
  createdAt?: string;
  thunbnailUrl: string;
  description: string;
  scrapCount: number;
  commentCount: number;
};
