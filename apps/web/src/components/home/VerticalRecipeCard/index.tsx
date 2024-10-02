import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@recipic-packages/ui';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { getBrandImage } from '@/utils/formatBrand';
import { TRecipeCardInfo } from '@/types/recipeCard';
import { Link } from 'react-router-dom';

type TVerticalRecipeCardProps = {
  route: string;
} & TRecipeCardInfo;

const cardVariants = {
  initial: { scale: 1 },
  tap: { scale: 0.95, transition: { duration: 0.1 } },
};

export function VerticalRecipeCard({
  route,
  thumbnailUrl,
  scrapCount,
  commentCount,
  userNickName,
  title,
  description,
  brandName,
}: TVerticalRecipeCardProps) {
  const brandImage = getBrandImage(brandName);
  const displayDescription = description.length > 20 ? `${description.substring(0, 20)}...` : description;

  return (
    <Link to={route}>
      <motion.div variants={cardVariants} initial="initial" whileTap="tap">
        <Card className="bg-white rounded-lg overflow-hidden shadow-md border-0 w-60">
          <div className="relative">
            <img
              src={thumbnailUrl || '/path/to/placeholder-image.jpg'}
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-H3 font-bold mb-1">{title}</h3>
              <p className="text-regular14">{displayDescription}</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={brandImage} alt={`${brandName} 브랜드 이미지`} className="w-6 h-6 rounded-full mr-2" />
                <p className="text-regular14">{brandName}</p>
              </div>
              <p className="text-regular14 text-gray-600">{userNickName}</p>
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
      </motion.div>
    </Link>
  );
}
