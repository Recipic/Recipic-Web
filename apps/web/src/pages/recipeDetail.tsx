import React, { useState } from 'react';
import { PageLayout, TopNavBar, Badge, Separator } from '@recipic-packages/ui';
import { CarouselWithRecipeDetailImage } from '@/components/recipeDetail/CarouselWithRecipeDetailImage';
import MockImage from '@/assets/images/mockBanner.webp';
import { useGetRecipeDetail } from '@/hooks/useGetRecipeDetail';
import { TIncludeIngredient } from '@/types/recipe';
import { Section } from '@/components/common/Section';
import { AvatarLabel } from '@/components/common/AvatarLabel';
import { getBrandImage } from '@/utils/formatBrand';
import { CommentInputForm } from '@/components/recipeDetail/CommentInputForm';
import { Comment } from '@/components/Comment';
import { TComment, TSortOption } from '@/types/comments';
import { LikeButton } from '@/components/common/Buttons/LikeButton';
import { CustomSelect } from '@/components/common/CustomSelect';
import { useParams } from 'react-router-dom';

const commentSortOptions: Array<{ value: TSortOption; label: string }> = [
  { value: 'latest', label: '최신순' },
  { value: 'liked', label: '좋아요순' },
];

export default function RecipeDetail() {
  const [commentSortOption, setCommentSortOption] = useState<TSortOption>('latest'); // 최신순, 좋아요순 옵션 상태
  const { recipeId } = useParams<{ recipeId: string }>(); // recipeId를 url 파라미터에서 가져오기
  const { recipeDetailData } = useGetRecipeDetail({ recipeId: recipeId as string });
  console.log(recipeDetailData);
  /** 레시피 상세 글에 대한 스크랩(좋아요) 클릭 핸들러 */
  const handleRecipeLikeClick = () => {
    console.log('스크랩 클릭');
    //TODO: 스크랩 클릭 api 연동 후 recipeDetailData refetch
  };

  /** 댓글에 대한 좋아요 클릭 핸들러 */
  const handleCommentLikeClick = () => {
    console.log('댓글 좋아요 클릭');
    //TODO: 댓글 좋아요 클릭 api 연동 후 optimistic update
  };

  /** 댓글 등록 핸들러 */
  const handleCommentSubmit = async (data: { content: string }) => {
    // TODO: 댓글 달기 post api 호출 후 commentsData refetch
    // TODO: 이를 위해선 페이지네이션 페이지를 useState로 관리하기

    console.log('새 댓글 추가:', data.content);
  };

  return (
    <PageLayout isBottomSpace isTopNavBarVisible>
      <TopNavBar showBackButton childrenPosition="right" order="first">
        <LikeButton
          isLiked={recipeDetailData.isScrapped}
          likeCount={recipeDetailData.scrapCount}
          onLikeClick={handleRecipeLikeClick}
          size="large"
        />
      </TopNavBar>
      <CarouselWithRecipeDetailImage detailImages={[recipeDetailData.thunbnailUrl]} />
      <Section title={recipeDetailData.title} titleStyle="H1">
        <div className="px-4 py-2">
          <AvatarLabel
            imageUrl={getBrandImage(recipeDetailData.brandName)}
            imageAlt="글쓴이 프로필 이미지"
            label={recipeDetailData.brandName}
          />
        </div>
        <div className="px-4 py-2">
          <p className="text-gray-700 mb-4">{recipeDetailData.description}</p>
        </div>
        <div className="px-4 py-2 flex flex-wrap gap-2">
          {recipeDetailData.includeIngredients.map((ingredient: TIncludeIngredient) => (
            <Badge key={ingredient.ingredient.ingredientId} variant="default">
              {`${ingredient.ingredient.ingredientName} ${ingredient.ingredient.quantity}${ingredient.ingredient.unit} x ${ingredient.count}`}
            </Badge>
          ))}
        </div>
      </Section>
      <Separator className="my-2" />
      <Section title="작성자" titleStyle="H3">
        <div className="p-4">
          <AvatarLabel
            imageUrl={recipeDetailData.userProfileImageUrl}
            imageAlt="글쓴이 프로필 이미지"
            label={recipeDetailData.userNickName}
          />
        </div>
      </Section>
      <Separator className="my-2" />
      <Section title="댓글" titleStyle="H3">
        <CommentInputForm onSubmit={handleCommentSubmit} />
        <div className="flex justify-end px-4 py-2">
          <CustomSelect<TSortOption>
            items={commentSortOptions}
            value={commentSortOption}
            onChange={setCommentSortOption}
            className="w-28"
          />
        </div>
        {commentsData.map((comment: TComment) => (
          <Comment key={comment.commentId} onLikeClick={handleCommentLikeClick} {...comment} />
        ))}
      </Section>
    </PageLayout>
  );
}

//TODO: 목데이터
const commentsData: TComment[] = [
  {
    commentId: '1',
    content: '정말 맛있어 보이네요!',
    createdAt: '2024-08-27T02:11:19.740Z',
    userId: 1,
    userProfileImageUrl: null,
    userNickName: '맛있는 레시피',
    likeCount: 50000,
    isLiked: false,
  },
  {
    commentId: '2',
    content: '꼭 따라해볼게요!',
    createdAt: '2023-08-26T15:30:00.000Z',
    userId: 2,
    userProfileImageUrl: MockImage,
    userNickName: '요리초보',
    likeCount: 2,
    isLiked: true,
  },
];
