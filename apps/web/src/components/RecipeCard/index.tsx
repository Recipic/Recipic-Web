import React from 'react';
import { Card } from '@recipic-packages/ui';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { getBrandImage, formatBrandToHangeul } from '@/utils/formatBrand';
import { TRecipeCardInfo } from '@/types/recipeCard';

type TRecipeCardProps = {
  onClick: () => void;
} & TRecipeCardInfo;

export function RecipeCard({
  onClick,
  thunbnailUrl,
  scrapCount,
  commentCount,
  userId,
  title,
  description,
  brand,
}: TRecipeCardProps) {
  const brandImage = getBrandImage(brand);
  const displayDescription = description.length > 30 ? `${description.substring(0, 30)}...` : description;

  return (
    <div className="max-w-screen-lg mx-auto" onClick={onClick}>
      <Card className="bg-white rounded-lg overflow-hidden flex flex-row md:flex-nowrap" style={{ height: '210px' }}>
        <div className="flex-none w-full md:w-2/5 relative">
          {thunbnailUrl ? (
            <img
              src={thunbnailUrl}
              alt="Post image"
              className="absolute inset-0 w-full h-full object-cover rounded-l-lg md:rounded-none"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 w-full h-full rounded-l-lg md:rounded-none" />
          )}
        </div>
        <div className="flex-auto p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-H3 font-semibold">{title}</h3>
            <p className="text-regular14 text-gray-600 mt-2">{displayDescription}</p>
          </div>
          <div>
            <div className="flex items-center mt-2 gap-1">
              <div className="flex items-center">
                <HeartIcon className="h-4 w-4 text-gray-500" />
                <p className="text-regular14 text-gray-700 mx-1">{scrapCount}</p>
              </div>
              <div className="flex items-center">
                <ChatBubbleIcon className="h-4 w-4 text-gray-500" />
                <p className="text-regular14 text-gray-700 mx-1">{commentCount}</p>
              </div>
              <p className="text-regular16 text-gray-700">{userId}</p>
            </div>
            <div className="flex items-center mt-2">
              <img src={brandImage} alt={`${brand} brand logo`} className="h-8 w-8 rounded-full object-cover mr-2" />
              <p className="text-gray-800">{formatBrandToHangeul(brand)}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
