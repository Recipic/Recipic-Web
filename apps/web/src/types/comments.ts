export type TComment = {
  commentId: string;
  content: string;
  createdAt: string;
  userId: number;
  userProfileImageUrl: string | null;
  userNickName: string;
  likeCount: number;
  isLiked: boolean;
};

export type TSortOption = 'latest' | 'liked';
