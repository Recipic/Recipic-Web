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

export type TMyCommentsList = Comment[];

export type myCommentsListParams = {
  recipeId: number;
  page: number;
  size: number;
  sortType: 'latest' | 'likes';
};
