import React from 'react';
import { Card } from '@recipic-packages/ui';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { getBrandImage, formatBrandToHangeul } from '@/utils/formatBrand';
import { TRecipeCardInfo } from '@/types/recipeCard';

type TVerticalRecipeCardProps = {
  onClick?: () => void;
} & TRecipeCardInfo;

export function VerticalRecipeCard({
  onClick,
  thunbnailUrl,
  scrapCount,
  commentCount,
  userId,
  title,
  description,
  brand,
}: TVerticalRecipeCardProps) {
  const brandImage = getBrandImage(brand);
  const displayDescription = description.length > 20 ? `${description.substring(0, 20)}...` : description;

  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-md border-0 w-60" onClick={onClick}>
      <div className="relative">
        <img src={thunbnailUrl || '/path/to/placeholder-image.jpg'} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-H3 font-bold mb-1">{title}</h3>
          <p className="text-regular14">{displayDescription}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img src={brandImage} alt={`${brand} logo`} className="w-6 h-6 rounded-full mr-2" />
            <p className="text-regular14">{formatBrandToHangeul(brand)}</p>
          </div>
          <p className="text-regular14 text-gray-600">{userId}</p>
        </div>
        <div className="flex items-center justify-between text-regular14 text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <HeartIcon className="w-4 h-4 mr-1" />
              <p>{scrapCount}</p>
            </div>
            <div className="flex items-center">
              <ChatBubbleIcon className="w-4 h-4 mr-1" />
              <p>{commentCount}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
