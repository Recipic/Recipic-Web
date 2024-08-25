import React from 'react';
import MyCommentBox from '../components/MyCommentBox';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { ImageIcon } from '@radix-ui/react-icons';

export interface CommentProps {
  mainTitle: string; //본문 제목
  brandImage: React.ReactNode; //해당 브랜드 이미지프로필?
  comment: string; //내가 쓴 댓글 내용
  likesCount: number; //좋아요 개수
  publishDate: string; //등록일자
  recipieId: number; //redirect할 본문 링크
}

export default function MyComments() {
  return (
    <PageLayout>
      <Header title="내가 작성한 댓글" order="second" />
      <TopNavBar order="first" />
      <div className="flex flex-col items-center gap-y-6 p-6 mt-24">
        {commentItems.map(comment => (
          <MyCommentBox
            mainTitle={comment.mainTitle}
            brandImage={comment.brandImage}
            comment={comment.comment}
            likesCount={comment.likesCount}
            publishDate={comment.publishDate}
            recipieId={comment.recipieId}
          />
        ))}
      </div>
    </PageLayout>
  );
}

//목데이터. 추후 삭제 예정
const commentItems: CommentProps[] = [
  {
    mainTitle: '요아정 꿀조합!!! 딸기바나나',
    brandImage: <ImageIcon />,
    comment: '너무 꿀조합이네요 우와~~~',
    likesCount: 5,
    publishDate: '2024-08-22',
    recipieId: 1,
  },
  {
    mainTitle: '서브웨이는 역시 BMT지~~~',
    brandImage: <ImageIcon />,
    comment: '인정하는 바입니다. 소스는 무조건 랜치와 스위트칠리로...',
    likesCount: 4,
    publishDate: '2024-08-21',
    recipieId: 2,
  },
  {
    mainTitle: '요아정 꿀조합!!! 딸기바나나',
    brandImage: <ImageIcon />,
    comment: '역시 이 조합이 최고네요. 매번 먹어도 질리지가 않아요!',
    likesCount: 3,
    publishDate: '2024-08-20',
    recipieId: 3,
  },
  {
    mainTitle: '문의하기',
    brandImage: <ImageIcon />,
    comment: '앱 사용 중 문의사항이 있습니다.',
    likesCount: 2,
    publishDate: '2024-08-19',
    recipieId: 4,
  },
  {
    mainTitle: '문의하기',
    brandImage: <ImageIcon />,
    comment: '앱 사용 중 문의사항이 있습니다.',
    likesCount: 2,
    publishDate: '2024-08-19',
    recipieId: 4,
  },
];
