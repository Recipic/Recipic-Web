import { TComment, TSortOption } from '@/types/comments';
import { TRecipeDetail } from '@/types/recipe';

export type TGetRecipeDetailResponse = TRecipeDetail;

export type TGetCommentsListResponse = TComment[];

export type TGetCommentsListParams = {
  recipeId: number;
  page: number;
  size: number;
  sortType: TSortOption;
};

export type TPostLeaveCommentBody = {
  recipeId: number;
  comment: string;
};

export type TPostLikeCommentBody = {
  commentId: number;
};
