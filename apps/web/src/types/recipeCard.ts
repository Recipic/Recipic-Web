import { TBrandKo } from '@/types/brand';

export type TRecipeCardInfo = {
  recipeId?: number;
  userNickName: string;
  title: string;
  thumbnailUrl: string;
  description: string;
  brandName: TBrandKo;
  isCelebrity?: boolean;
  createdAt?: string;
  scrapCount: number;
  commentCount: number;
  status?: string;
  userProfileImageUrl?: string | null;
};
