import React from 'react';
import { TabBar } from './tabBar';

type TPageBackgroundStyle = 'white' | 'gray';

type TPageLayoutProps = {
  children: React.ReactNode;
  isTabBarVisible?: boolean;
  isBottomSpace?: boolean;
  isHeaderVisible?: boolean;
  isTopNavBarVisible?: boolean;
  pageBackgroundStyle?: TPageBackgroundStyle;
};

const backgroundStyleVariants: Record<TPageBackgroundStyle, string> = {
  white: 'bg-white',
  gray: 'bg-gray-150',
};

export function PageLayout({
  children,
  isTabBarVisible,
  isBottomSpace,
  isHeaderVisible = false,
  isTopNavBarVisible = false,
  pageBackgroundStyle = 'white',
}: TPageLayoutProps) {
  // 계산된 상단 패딩
  const totalHeaderHeight = (isHeaderVisible ? 1 : 0) + (isTopNavBarVisible ? 1 : 0);
  const paddingTop = `${totalHeaderHeight * 48}px`; // 각 요소의 높이는 48px

  return (
    <div
      className={`flex flex-col min-h-dvh max-w-lg mx-auto relative ${backgroundStyleVariants[pageBackgroundStyle]}`}
    >
      <main className="flex-grow overflow-y-auto overflow-x-hidden" style={{ paddingTop }}>
        {children}
        {isBottomSpace && <div className="h-20" />}
      </main>
      {isTabBarVisible && <TabBar />}
    </div>
  );
}
