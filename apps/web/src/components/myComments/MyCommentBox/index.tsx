import React from 'react';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import { TMyComment } from '@/types/myComments';
import { Link } from 'react-router-dom';
import { getRelativeTime } from '@/utils/date';

export function MyCommentBox({ recipeId, recipeTitle, content, likeCount, createdAt }: TMyComment) {
  return (
    <Link to={`/recipe/${recipeId}`} className="w-full flex flex-col gap-1 cursor-pointer no-underline text-inherit">
      <h3 className="text-semibold14 truncate">{recipeTitle}</h3>
      <p className="text-regular16 truncate">{content}</p>
      <div className="mt-2 flex justify-between items-center text-gray-500">
        <p className="text-regular12 truncate">{getRelativeTime({ date: createdAt })}</p>
        <div className="flex flex-row gap-1 items-center">
          <p className="text-regular14">{likeCount}</p>
          <HeartFilledIcon className="h-4 w-4 text-primary-500" />
        </div>
      </div>
    </Link>
  );
}
