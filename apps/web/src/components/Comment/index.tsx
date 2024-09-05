import React from 'react';
import { AvatarLabel } from '@/components/common/AvatarLabel';
import { getRelativeTime } from '@/utils/date';
import DefaltUserProfile from '@/assets/icons/defaultUserProfile.webp';
import { TComment } from '@/types/comments';
import { LikeButton } from '@/components/common/Buttons/LikeButton';

type TCommentProps = {
  onLikeClick: () => void;
} & TComment;

export function Comment({
  content,
  createdAt,
  userProfileImageUrl,
  userNickName,
  likeCount,
  liked,
  onLikeClick,
  myComment,
}: TCommentProps) {
  return (
    <div className="p-4 border-b">
      <div className="flex justify-between">
        <AvatarLabel
          imageUrl={userProfileImageUrl !== null ? userProfileImageUrl : DefaltUserProfile}
          label={userNickName}
          imageAlt="유저 프로필"
        />
        <LikeButton isLiked={liked} likeCount={likeCount} onLikeClick={onLikeClick} size="small" />
      </div>

      <p className="mt-2 mb-1">{content}</p>
      <div className="flex justify-between text-regular14 text-gray-500">
        <p>{getRelativeTime({ date: createdAt })}</p>
      </div>
    </div>
  );
}
