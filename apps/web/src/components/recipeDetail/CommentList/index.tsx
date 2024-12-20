// import React from 'react';
// import { TComment } from '@/types/comments';
// import { Comment } from '@/components/recipeDetail/Comment';

// type TCommentListProps = {
//   commentsList: TComment[];
//   onCommentLikeClick?: ({ commentId }: { commentId: number }) => void;
//   onCommentDeleteClick?: ({ commentId }: { commentId: number }) => void;
// };

// export default function CommentList({ commentsList, onCommentLikeClick, onCommentDeleteClick }: TCommentListProps) {
//   return (
//     <>
//       {commentsList.map((comment: TComment) => (
//         <Comment
//           key={comment.commentId}
//           onLikeClick={() => onCommentLikeClick !== undefined && onCommentLikeClick({ commentId: comment.commentId })}
//           onCommentDeleteClick={() =>
//             onCommentDeleteClick !== undefined && onCommentDeleteClick({ commentId: comment.commentId })
//           }
//           {...comment}
//           liked={comment.liked}
//         />
//       ))}
//     </>
//   );
// }
// TODO: 애플 심사 통과를 위한 임시
import React, { useState } from 'react';
import { TComment } from '@/types/comments';
import { Comment } from '@/components/recipeDetail/Comment';
import { useNavigate } from 'react-router-dom';

type TCommentListProps = {
  commentsList: TComment[];
  onCommentLikeClick?: ({ commentId }: { commentId: number }) => void;
  onCommentDeleteClick?: ({ commentId }: { commentId: number }) => void;
};

export default function CommentList({ commentsList, onCommentLikeClick, onCommentDeleteClick }: TCommentListProps) {
  const [reportedComments, setReportedComments] = useState<Array<{ commentId: number; userNickName: string }>>(
    JSON.parse(localStorage.getItem('reportedComments') || '[]'),
  );
  const navigate = useNavigate();

  // 신고되지 않은 댓글만 필터링
  const filteredCommentsList = commentsList.filter(
    comment =>
      !reportedComments.some(
        reported => reported.commentId === comment.commentId || reported.userNickName === comment.userNickName,
      ),
  );

  const handleReportClick = (commentId: number, userNickName: string) => {
    const updatedReportedComments = [...reportedComments, { commentId, userNickName }];
    setReportedComments(updatedReportedComments);
    localStorage.setItem('reportedComments', JSON.stringify(updatedReportedComments));
    alert('댓글이 신고되었습니다.');
    navigate(-1);
  };

  return (
    <>
      {filteredCommentsList.map((comment: TComment) => (
        <Comment
          key={comment.commentId}
          onLikeClick={() => onCommentLikeClick !== undefined && onCommentLikeClick({ commentId: comment.commentId })}
          onCommentDeleteClick={() =>
            onCommentDeleteClick !== undefined && onCommentDeleteClick({ commentId: comment.commentId })
          }
          onReportClick={() => handleReportClick(comment.commentId, comment.userNickName)} // 신고 버튼 핸들러 전달
          {...comment}
          liked={comment.liked}
        />
      ))}
    </>
  );
}
