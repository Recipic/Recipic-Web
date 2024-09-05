import { TComment, TSortOption } from '@/types/comments';
import { TRecipeDetail } from '@/types/recipe';

export type TGetRecipeDetailResponse = TRecipeDetail;

export type TGetCommentsListResponse = {
  content: TComment[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
};

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
