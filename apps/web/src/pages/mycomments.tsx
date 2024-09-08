import React from 'react';
import MyCommentBox from '../components/MyCommentBox';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { useGetUserCommentsList } from '@/hooks/useGetUserCommentsList';

export default function MyComments() {
  const { userCommentsListData } = useGetUserCommentsList();
  console.log(userCommentsListData);
  return (
    <PageLayout>
      <Header title="내가 작성한 댓글" order="second" />
      <TopNavBar order="first" />
      <div className="mb-6 flex flex-col items-center px-4 gap-y-6 mt-24">
        {userCommentsListData.map(comment => (
          <MyCommentBox
            key={comment.commentId}
            commentId={comment.commentId}
            recipeId={comment.recipeId}
            recipeTitle={comment.recipeTitle}
            content={comment.content}
            likeCount={comment.likeCount}
            createdAt={comment.createdAt}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export interface CommentProps {
  commentId: number;
  mainTitle: string; //본문 제목
  brandImage: React.ReactNode; //해당 브랜드 이미지프로필?
  comment: string; //내가 쓴 댓글 내용
  likesCount: number; //좋아요 개수
  publishDate: string; //등록일자
  recipieId: number; //redirect할 본문 링크
}
