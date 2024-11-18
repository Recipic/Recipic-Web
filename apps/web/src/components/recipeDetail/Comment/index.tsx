import React from 'react';
import { AvatarLabel } from '@/components/common/AvatarLabel';
import { getRelativeTime } from '@/utils/date';
import { TComment } from '@/types/comments';
import { LikeButton } from '@/components/common/Buttons/LikeButton';
import XButton from '@/components/common/Buttons/XButton';

type TCommentProps = {
  onLikeClick: () => void;
  onCommentDeleteClick: () => void;
  onReportClick: () => void; // TODO: 애플 심사 통과를 위한 임시 신고 버튼 클릭 핸들러
} & TComment;

export function Comment({
  content,
  createdAt,
  userProfileImageUrl,
  userNickName,
  likeCount,
  liked,
  onLikeClick,
  onCommentDeleteClick,
  onReportClick, // TODO: 애플 심사 통과를 위한 임시 신고 버튼 클릭 핸들러
  myComment,
}: TCommentProps) {
  return (
    <div className="p-4 border-b">
      <div className="flex justify-between">
        <AvatarLabel src={userProfileImageUrl} title={userNickName} alt="유저 프로필" />
        {myComment === true ? (
          <div className="flex flex-end">
            {/*TODO:  애플 심사 통과를 위한 임시 신고 div */}
            {/*TODO:  애플 심사 통과를 위한 임시 신고 버튼 */}
            <button onClick={onReportClick} className="text-red-500 hover:text-red-300 text-sm">
              신고
            </button>
            <XButton onClick={onCommentDeleteClick} />
          </div>
        ) : (
          <LikeButton isLiked={liked} likeCount={likeCount} onLikeClick={onLikeClick} size="small" />
        )}
      </div>

      <p className="mt-2 mb-1">{content}</p>
      <div className="flex justify-between text-regular14 text-gray-500">
        <p>{getRelativeTime({ date: createdAt })}</p>
      </div>
    </div>
  );
}
