import React from 'react';
import { TabBar } from './tabBar';

type TPageLayoutProps = {
  children: React.ReactNode;
  isTabBarVisible?: boolean;
  isBottomSpace?: boolean;
  isHeaderVisible?: boolean;
  isTopNavBarVisible?: boolean;
};

export function PageLayout({
  children,
  isTabBarVisible,
  isBottomSpace,
  isHeaderVisible = false,
  isTopNavBarVisible = false,
}: TPageLayoutProps) {
  // 계산된 상단 패딩
  const totalHeaderHeight = (isHeaderVisible ? 1 : 0) + (isTopNavBarVisible ? 1 : 0);
  const paddingTop = `${totalHeaderHeight * 48}px`; // 각 요소의 높이는 48px

  return (
    <div className="flex flex-col min-h-dvh bg-white max-w-lg mx-auto relative">
      <main className="flex-grow overflow-y-auto overflow-x-hidden" style={{ paddingTop }}>
        {children}
        {isBottomSpace && <div className="h-16" />}
      </main>
      {isTabBarVisible && <TabBar />}
    </div>
  );
}
