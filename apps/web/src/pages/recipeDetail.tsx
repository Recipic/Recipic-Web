import React, { useState } from 'react';
import { PageLayout, TopNavBar, Separator } from '@recipic-packages/ui';
import { CarouselWithRecipeDetailImage } from '@/components/recipeDetail/CarouselWithRecipeDetailImage';
import { useGetRecipeDetail } from '@/hooks/useGetRecipeDetail';
import { Section } from '@/components/common/Section';
import { AvatarLabel } from '@/components/common/AvatarLabel';
import { getBrandImage } from '@/utils/formatBrand';
import { CommentInputForm } from '@/components/recipeDetail/CommentInputForm';
import { TSortOption } from '@/types/comments';
import { LikeButton } from '@/components/common/Buttons/LikeButton';
import { CustomSelect } from '@/components/common/CustomSelect';
import { useParams } from 'react-router-dom';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { usePostRecipePick } from '@/hooks/usePostRecipePick';
import { useGetCommentsList } from '@/hooks/useGetCommentsList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import PrimarySpinner from '@/components/common/PrimarySpinner';
import { usePostLeaveComment } from '@/hooks/usePostLeaveComment';
import { usePostLikeComment } from '@/hooks/usePostLikeComment';
import BadgeList from '@/components/recipeDetail/BadgeList';
import CommentList from '@/components/recipeDetail/CommentList';

const commentSortOptions: Array<{ value: TSortOption; label: string }> = [
  { value: 'latest', label: '최신순' },
  { value: 'likes', label: '좋아요순' },
];

export default function RecipeDetail() {
  const [commentSortOption, setCommentSortOption] = useState<TSortOption>('latest'); // 최신순, 좋아요순 옵션 상태
  const params = useParams<{ recipeId: string }>(); // recipeId를 url 파라미터에서 가져오기
  const recipeId = Number(params.recipeId);
  const { recipeDetailData } = useGetRecipeDetail({ recipeId: recipeId });
  const { mutate: mutateRecipePick } = usePostRecipePick();
  const { mutate: mutateLeaveComment } = usePostLeaveComment();
  const { mutate: mutateLikeComment } = usePostLikeComment();
  const { commentsList, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useGetCommentsList({
    recipeId: recipeId,
    size: DEFAULT_SIZE,
    sortType: commentSortOption,
  });

  const { ref } = useInfiniteScroll({
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
  });

  /** 레시피 상세 글에 대한 스크랩(좋아요) 클릭 핸들러 */
  const handleRecipeLikeClick = () => {
    mutateRecipePick({ recipeId: recipeId });
  };

  /** 댓글에 대한 좋아요 클릭 핸들러 */
  const handleCommentLikeClick = ({ commentId }: { commentId: number }) => {
    mutateLikeComment({ recipeId: recipeId, commentId: commentId });
  };

  /** 댓글 등록 핸들러 */
  const handleCommentSubmit = async (data: { comment: string }) => {
    mutateLeaveComment({ recipeId: recipeId, comment: data.comment });
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
            imageAlt={`${recipeDetailData.brandName} 브랜드 로고 이미지`}
            label={recipeDetailData.brandName}
          />
        </div>
        <div className="px-4 py-2">
          <p className="text-gray-700 mb-4">{recipeDetailData.description}</p>
        </div>
        <div className="px-4 py-2 flex flex-wrap gap-2">
          <BadgeList includeIngredients={recipeDetailData.includeIngredients} />
        </div>
      </Section>
      <Separator className="my-2" />
      <Section title="작성자" titleStyle="H3">
        <div className="p-4">
          <AvatarLabel
            imageUrl={recipeDetailData.userProfileImageUrl}
            imageAlt="작성자 프로필 이미지"
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
        {isLoading ? (
          <PrimarySpinner />
        ) : commentsList.length === 0 ? (
          <div className="px-4 py-4 text-center">
            <p className="text-regular16 text-gray-500">아직 댓글이 없어요.</p>
          </div>
        ) : (
          <>
            <CommentList commentsList={commentsList} onCommentLikeClick={handleCommentLikeClick} />
            <div ref={ref}>{isFetchingNextPage && <PrimarySpinner />}</div>
          </>
        )}
      </Section>
    </PageLayout>
  );
}
