import React, { useState } from 'react';
import { PageLayout, Button, TopNavBar } from '@recipic-packages/ui';
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';
import { CarouselWithRecipeDetailImage } from '@/components/CarouselWithRecipeDetailImage';
import MockImage from '@/assets/images/mockBanner.webp';

const detailImages = [MockImage, MockImage, MockImage];
export default function RecipeDetail() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(prev => !prev);
    console.log('좋아요 클릭');
  };

  return (
    <PageLayout isBottomSpace isTopNavBarVisible>
      <TopNavBar showBackButton childrenPosition="right" order="first">
        <Button variant="ghost" size="icon" onClick={handleLikeClick} className="text-black" aria-label="좋아요">
          {isLiked ? <HeartFilledIcon className="h-7 w-7 text-red-500" /> : <HeartIcon className="h-7 w-7" />}
        </Button>
      </TopNavBar>
      <CarouselWithRecipeDetailImage detailImages={detailImages} />
      {/* 페이지 내용 */}
    </PageLayout>
  );
}
