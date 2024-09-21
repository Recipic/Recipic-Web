import React from 'react';
import { Skeleton } from '@recipic-packages/ui';
import { Card } from '@recipic-packages/ui';

export function SkeletonCard() {
  return (
    <div className="px-4 py-2 flex">
      <Card className="bg-white rounded-lg overflow-hidden shadow-md border-0 w-60">
        <div className="relative">
          <Skeleton className="w-full h-48" /> {/* 이미지 영역 */}
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <Skeleton className="h-6 w-3/4 mb-1" /> {/* 제목 */}
            <Skeleton className="h-4 w-full" /> {/* 설명 */}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Skeleton className="w-6 h-6 rounded-full mr-2" /> {/* 브랜드 이미지 */}
              <Skeleton className="h-4 w-20" /> {/* 브랜드명 */}
            </div>
            <Skeleton className="h-4 w-24" /> {/* 사용자 닉네임 */}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Skeleton className="w-4 h-4 mr-1" /> {/* 하트 아이콘 */}
                <Skeleton className="h-4 w-8" /> {/* 스크랩 수 */}
              </div>
              <div className="flex items-center">
                <Skeleton className="w-4 h-4 mr-1" /> {/* 채팅 아이콘 */}
                <Skeleton className="h-4 w-8" /> {/* 댓글 수 */}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
