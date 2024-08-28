import React from 'react';
import { Button } from '@recipic-packages/ui';
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';

type TLikeButtonProps = {
  isLiked: boolean;
  likeCount: number;
  onLikeClick: () => void;
  size?: 'small' | 'large';
};

const iconSizeClasses = {
  small: 'h-5 w-5',
  large: 'h-7 w-7',
};

const likeCountSizeClasses = {
  small: 'text-black text-regular12',
  large: 'text-black text-semiBold14',
};

const buttonVariants = {
  liked: 'text-red-500 hover:text-red-500',
  notLiked: 'text-black hover:text-black',
};

export function LikeButton({ isLiked, likeCount, onLikeClick, size = 'large' }: TLikeButtonProps) {
  const iconSizeClass = iconSizeClasses[size];
  const likeCountSizeClass = likeCountSizeClasses[size];
  const variantClass = isLiked ? buttonVariants.liked : buttonVariants.notLiked;

  return (
    <div className="flex items-center">
      <p className={likeCountSizeClass}>{likeCount}</p>
      <Button variant="ghost" size="icon" onClick={onLikeClick} className={variantClass} aria-label="좋아요">
        {isLiked ? <HeartFilledIcon className={iconSizeClass} /> : <HeartIcon className={iconSizeClass} />}
      </Button>
    </div>
  );
}
