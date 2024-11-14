import React, { useState } from 'react';
import { TopNavBar, Separator, Button, Badge } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { CarouselWithRecipeDetailImage } from '@/components/recipeDetail/CarouselWithRecipeDetailImage';
import { useGetRecipeDetail } from '@/hooks/useGetRecipeDetail';
import { Section } from '@/components/common/Section';
import { AvatarLabel } from '@/components/common/AvatarLabel';
import { getBrandImage } from '@/utils/formatBrand';
import { CommentInputForm } from '@/components/recipeDetail/CommentInputForm';
import { TSortOption } from '@/types/comments';
import { LikeButton } from '@/components/common/Buttons/LikeButton';
import { CustomSelect } from '@/components/common/CustomSelect';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DEFAULT_SIZE } from '@/constants/pagenation';
import { usePostRecipePick } from '@/hooks/usePostRecipePick';
import { useGetCommentsList } from '@/hooks/useGetCommentsList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import PrimarySpinner from '@/components/common/PrimarySpinner';
import { usePostLeaveComment } from '@/hooks/usePostLeaveComment';
import { usePostLikeComment } from '@/hooks/usePostLikeComment';
import BadgeList from '@/components/recipeDetail/BadgeList';
import CommentList from '@/components/recipeDetail/CommentList';
import { useDeleteMyComment } from '@/hooks/useDeleteMyComment';
import { useAlertDialog } from '@/contexts/alertDialogContext';
import { useAuth } from '@/contexts/authContext';
import FallbackUI from '@/components/common/FallbackUI';
import { ReportButton } from '@/components/recipeDetail/ReportButton';

const commentSortOptions: Array<{ value: TSortOption; label: string }> = [
  { value: 'latest', label: '최신순' },
  { value: 'likes', label: '좋아요순' },
];

export default function RecipeDetail() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [commentSortOption, setCommentSortOption] = useState<TSortOption>('latest'); // 최신순, 좋아요순 옵션 상태
  const params = useParams<{ recipeId: string }>(); // recipeId를 url 파라미터에서 가져오기
  const recipeId = Number(params.recipeId);
  const { showAlertDialog } = useAlertDialog();
  const { recipeDetailData } = useGetRecipeDetail({ recipeId: recipeId });
  const { mutate: mutateRecipePick } = usePostRecipePick();
  const { mutate: mutateLeaveComment } = usePostLeaveComment();
  const { mutate: mutateLikeComment } = usePostLikeComment();
  const { mutate: mutateDeleteMyComment } = useDeleteMyComment();
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
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    mutateRecipePick({ recipeId: recipeId });
  };

  //TODO: 애플 심사를 위한 임시 기능
  const handleReportClick = () => {
    alert('신고가 접수되었어요. 48시간 이내에 검토 후 조치 예정이에요.');
    localStorage.setItem('reportedRecipeId', recipeId.toString());
    navigate('/recipe');
  };

  /** 댓글에 대한 좋아요 클릭 핸들러 */
  const handleCommentLikeClick = ({ commentId }: { commentId: number }) => {
    mutateLikeComment({ recipeId: recipeId, commentId: commentId });
  };

  /** 댓글 등록 핸들러 */
  const handleCommentSubmit = async (data: { comment: string }) => {
    mutateLeaveComment({ recipeId: recipeId, comment: data.comment });
  };

  /** 댓글 삭제 핸들러 */
  const handleDeleteMyComment = async ({ commentId }: { commentId: number }) => {
    showAlertDialog({
      title: '댓글 삭제',
      description: `댓글을 삭제하면 다시 복구할 수 없어요.\n삭제하시겠어요?`,
      cancelText: '취소',
      confirmText: '삭제',
      onConfirm: () => {
        mutateDeleteMyComment({ recipeId: recipeId, commentId: commentId });
      },
    });
  };

  if (recipeDetailData === undefined) {
    return <FallbackUI />;
  }

  return (
    <PageLayout isBottomSpace isTopNavBarVisible>
      <TopNavBar showBackButton childrenPosition="right" order="first">
        <div className="flex items-center gap-2">
          <ReportButton onClick={handleReportClick} />
          {/* TODO: 임시 신고하기 버튼 */}
          <LikeButton
            isLiked={recipeDetailData.isScrapped}
            likeCount={recipeDetailData.scrapCount}
            onLikeClick={handleRecipeLikeClick}
            size="large"
          />
        </div>
      </TopNavBar>
      <CarouselWithRecipeDetailImage detailImages={[recipeDetailData.thunbnailUrl]} />
      <Section title={recipeDetailData.title} titleStyle="H1">
        <div className="px-4 py-2">
          <AvatarLabel
            src={getBrandImage(recipeDetailData.brandName)}
            alt={`${recipeDetailData.brandName} 브랜드 로고 이미지`}
            title={recipeDetailData.brandName}
          />
        </div>
        <div className="px-4 py-2">
          <p className="text-gray-700 mb-4">{recipeDetailData.description}</p>
        </div>
        <div className="px-4 py-2 flex flex-wrap gap-2">
          <Badge key={`${recipeDetailData.recipeId}-${recipeDetailData.baseIngredient}`} variant="default">
            {recipeDetailData.baseIngredient}
          </Badge>
          <BadgeList includeIngredients={recipeDetailData.includeIngredients} />
        </div>
      </Section>
      <Separator className="my-2" />
      <Section title="작성자" titleStyle="H3">
        <div className="p-4">
          <AvatarLabel
            src={recipeDetailData.userProfileImageUrl}
            alt="작성자 프로필 이미지"
            title={recipeDetailData.userNickName}
          />
        </div>
      </Section>
      <Separator className="my-2" />
      <Section title="댓글" titleStyle="H3">
        {isLoggedIn ? (
          <>
            <CommentInputForm onSubmit={handleCommentSubmit} />
            <div className="flex justify-end px-4 py-2">
              <CustomSelect<TSortOption>
                items={commentSortOptions}
                value={commentSortOption}
                onChange={setCommentSortOption}
                triggerProps={{ className: 'w-28' }}
              />
            </div>
            {isLoading ? (
              <PrimarySpinner />
            ) : commentsList.length === 0 ? (
              <div className="p-4 text-center">
                <p className="text-regular16 text-gray-500">아직 댓글이 없어요.</p>
              </div>
            ) : (
              <>
                <CommentList
                  commentsList={commentsList}
                  onCommentLikeClick={handleCommentLikeClick}
                  onCommentDeleteClick={handleDeleteMyComment}
                />
                <div ref={ref}>{isFetchingNextPage && <PrimarySpinner />}</div>
              </>
            )}
          </>
        ) : (
          <div className="p-4 flex flex-col items-center gap-4">
            <p className="text-regular16 text-gray-500">로그인하면 댓글을 보실 수 있어요!</p>
            <Link to="/login">
              <Button variant="default">로그인하러 가기</Button>
            </Link>
          </div>
        )}
      </Section>
    </PageLayout>
  );
}
