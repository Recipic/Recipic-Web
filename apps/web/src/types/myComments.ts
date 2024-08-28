export type Comment = {
  key?: number;
  commentId?: number;
  recipeId: number;
  recipeTitle: string;
  content: string;
  likeCount: number;
};

export type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type TMyCommentsList = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: Comment[];
  number: number;
  sort: Sort;
  pageable: Pageable;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
};

/*export type TMyCommentsList = Comment[];

export type myCommentsListParams = {
  recipeId: number;
  page: number;
  size: number;
  sortType: 'latest' | 'likes';
};
*/
/*
export type Comment = {
  commentId: number;
  content: string;
  createdAt: string;
  userId: number;
  userProfileImageUrl: string;
  userNickName: string;
  recipeTitle: string;
  recipeId: number;
  likeCount: number;
  isLiked: boolean;
};
*/
