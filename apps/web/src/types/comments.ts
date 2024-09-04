export type TComment = {
  commentId: string;
  content: string;
  createdAt: string;
  userId: number;
  userProfileImageUrl: string | null;
  userNickName: string;
  recipeTitle: string;
  recipeId: number;
  likeCount: number;
  isLiked: boolean;
};

export type TSortOption = 'latest' | 'liked';
