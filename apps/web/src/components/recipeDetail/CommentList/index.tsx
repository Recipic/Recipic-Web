import React from 'react';
import { TComment } from '@/types/comments';
import { Comment } from '@/components/Comment';

type TCommentListProps = {
  commentsList: TComment[];
  onCommentLikeClick: ({ commentId }: { commentId: number }) => void;
};

export default function CommentList({ commentsList, onCommentLikeClick }: TCommentListProps) {
  return (
    <>
      {commentsList.map((comment: TComment) => (
        <Comment
          key={comment.commentId}
          onLikeClick={() => onCommentLikeClick({ commentId: comment.commentId })}
          {...comment}
        />
      ))}
    </>
  );
}
