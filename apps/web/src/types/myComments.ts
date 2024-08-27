export interface Comment {
  commentId: number;
  recipeTitle: string;
  content: string;
  likeCount: number;
}

export interface TGetMyCommentsResponse {
  content: Comment[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}
