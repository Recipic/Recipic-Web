export interface Comment {
  commentId: number;
  recipeId: number;
  recipeTitle: string;
  content: string;
  likeCount: number;
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface TMyComments {
  content: Comment[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}
