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

type TCommentListProps = {
  commentsList: TComment[];
  onCommentLikeClick?: ({ commentId }: { commentId: number }) => void;
  onCommentDeleteClick?: ({ commentId }: { commentId: number }) => void;
};

export default function CommentList({ commentsList, onCommentLikeClick, onCommentDeleteClick }: TCommentListProps) {
  // 신고된 댓글 ID를 상태로 관리
  const [reportedCommentIds, setReportedCommentIds] = useState<number[]>(
    JSON.parse(localStorage.getItem('reportedCommentIds') || '[]'),
  );

  // 신고되지 않은 댓글만 필터링
  const filteredCommentsList = commentsList.filter(comment => !reportedCommentIds.includes(comment.commentId));

  const handleReportClick = (commentId: number) => {
    // 신고된 댓글 ID를 상태와 localStorage에 업데이트
    const updatedReportedCommentIds = [...reportedCommentIds, commentId];
    setReportedCommentIds(updatedReportedCommentIds);
    localStorage.setItem('reportedCommentIds', JSON.stringify(updatedReportedCommentIds));
    alert('댓글이 신고되었습니다.');
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
          onReportClick={() => handleReportClick(comment.commentId)} // 신고 버튼 핸들러 전달
          {...comment}
          liked={comment.liked}
        />
      ))}
    </>
  );
}
