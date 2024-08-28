import { TBrandEn } from '@/types/brand';

export type TRecipeCardInfo = {
  recipeId?: number;
  userId: string;
  title: string;
  thunbnailUrl: string;
  description: string;
  brand: TBrandEn;
  isCelebrity?: boolean;
  createdAt?: string;
  scrapCount: number;
  commentCount: number;
};
