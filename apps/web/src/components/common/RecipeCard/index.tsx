import React from 'react';
import { Card } from '@recipic-packages/ui';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { getBrandImage } from '@/utils/formatBrand';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { Link } from 'react-router-dom';

type TRecipeCardProps = {
  route: string;
} & TRecipeCardInfo;

export function RecipeCard({
  route,
  thumbnailUrl,
  scrapCount,
  commentCount,
  userNickName,
  title,
  description,
  brandName,
}: TRecipeCardProps) {
  const brandImage = getBrandImage(brandName);

  return (
    <Link to={route} className="cursor-pointer">
      <div className="max-w-screen-lg mx-auto">
        <Card className="bg-white rounded-lg overflow-hidden flex flex-row md:flex-nowrap" style={{ height: '210px' }}>
          <div className="flex-none w-full md:w-2/5 relative">
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt="Post image"
                className="absolute inset-0 w-full h-full object-cover rounded-l-lg md:rounded-none"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 w-full h-full rounded-l-lg md:rounded-none" />
            )}
          </div>
          <div className="flex-auto p-4 flex flex-col justify-between overflow-hidden">
            <div className="space-y-2">
              <h3 className="text-H3 font-semibold">{title}</h3>
              <p className="text-regular14 text-gray-600 truncate">{description}</p>
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
                <p className="text-regular16 text-gray-700">{userNickName}</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src={brandImage}
                  alt={`${brandName} 브랜드 이미지`}
                  className="h-8 w-8 rounded-full object-cover mr-2"
                />
                <p className="text-gray-800">{brandName}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
}
