import React from 'react';
import { MyCommentBox } from '@/components/myComments/MyCommentBox';
import { TMyComment } from '@/types/myComments';
import { Separator } from '@recipic-packages/ui';
import { useGetMyCommentsList } from '@/hooks/useGetMyCommentsList';

export function MyCommentBoxList() {
  const { myCommentsListData } = useGetMyCommentsList();

  if (myCommentsListData.length === 0) {
    return (
      <div className="mt-10">
        <p className="text-gray-500 text-regular16 text-center">아직 작성한 댓글이 없어요</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-2">
      {myCommentsListData.map((comment: TMyComment, index: number) => (
        <React.Fragment key={`${comment.commentId}-${comment.createdAt}`}>
          <div className="px-4">
            <MyCommentBox
              commentId={comment.commentId}
              recipeId={comment.recipeId}
              recipeTitle={comment.recipeTitle}
              content={comment.content}
              likeCount={comment.likeCount}
              createdAt={comment.createdAt}
            />
          </div>
          {index < myCommentsListData.length - 1 && myCommentsListData.length > 1 && (
            <Separator className="h-[1px] my-4 bg-gray-200" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
