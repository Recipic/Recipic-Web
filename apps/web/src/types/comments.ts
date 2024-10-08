export type TComment = {
  commentId: number;
  content: string;
  createdAt: string;
  userId: number;
  userProfileImageUrl: string | undefined;
  userNickName: string;
  likeCount: number;
  liked: boolean;
  myComment: boolean;
};

export type TSortOption = 'latest' | 'likes';
