import React from 'react';
import { TabBar } from './tabBar';

type TPageLayoutProps = {
  children: React.ReactNode;
  isTabBarVisible?: boolean;
  isBottomSpace?: boolean;
};

export function PageLayout({ children, isTabBarVisible, isBottomSpace }: TPageLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-white max-w-lg mx-auto">
      <main className={`flex-grow overflow-y-auto overflow-x-hidden ${isBottomSpace ? 'pb-16' : ''}`}>{children}</main>
      {isTabBarVisible && <TabBar />}
    </div>
  );
}
