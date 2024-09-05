import React from 'react';
import { TComment } from '@/types/comments';
import { Comment } from '@/components/recipeDetail/Comment';

type TCommentListProps = {
  commentsList: TComment[];
  onCommentLikeClick?: ({ commentId }: { commentId: number }) => void;
  onCommentDeleteClick?: ({ commentId }: { commentId: number }) => void;
};

export default function CommentList({ commentsList, onCommentLikeClick, onCommentDeleteClick }: TCommentListProps) {
  return (
    <>
      {commentsList.map((comment: TComment) => (
        <Comment
          key={comment.commentId}
          onLikeClick={() => onCommentLikeClick !== undefined && onCommentLikeClick({ commentId: comment.commentId })}
          onCommentDeleteClick={() =>
            onCommentDeleteClick !== undefined && onCommentDeleteClick({ commentId: comment.commentId })
          }
          {...comment}
          liked={comment.liked}
        />
      ))}
    </>
  );
}
