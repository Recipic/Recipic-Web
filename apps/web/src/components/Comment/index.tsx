import React from 'react';
import { AvatarLabel } from '@/components/AvatarLabel';
import { getRelativeTime } from '@/utils/date';
import DefaltUserProfile from '@/assets/icons/defaultUserProfile.webp';
import { TComment } from '@/types/comments';
import { LikeButton } from '@/components/Buttons/LikeButton';

type TCommentProps = {
  onLikeClick: () => void;
} & TComment;

export function Comment({
  content,
  createdAt,
  userProfileImageUrl,
  userNickName,
  likeCount,
  isLiked,
  onLikeClick,
}: TCommentProps) {
  return (
    <div className="p-4 border-b">
      <div className="flex justify-between">
        <AvatarLabel
          imageUrl={userProfileImageUrl !== null ? userProfileImageUrl : DefaltUserProfile}
          label={userNickName}
          imageAlt="유저 프로필"
        />
        <LikeButton isLiked={isLiked} likeCount={likeCount} onLikeClick={onLikeClick} size="small" />
      </div>

      <p className="mt-2 mb-1">{content}</p>
      <div className="flex justify-between text-regular14 text-gray-500">
        <p>{getRelativeTime({ date: createdAt })}</p>
        <p>좋아요 {likeCount}</p>
      </div>
    </div>
  );
}
