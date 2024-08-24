import React from 'react';
import { TabBar } from './tabBar';

type TPageLayoutProps = {
  children: React.ReactNode;
  isTabBarVisible?: boolean;
  isBottomSpace?: boolean;
};

export function PageLayout({ children, isTabBarVisible, isBottomSpace }: TPageLayoutProps) {
  return (
    <div className="min-h-dvh bg-backgroundSecondaryLight">
      <div className="flex flex-col min-h-dvh bg-white max-w-lg mx-auto relative">
        <main className="flex-grow overflow-y-auto overflow-x-hidden">
          {children}
          {isBottomSpace && <div className="h-16" />}
        </main>
        {isTabBarVisible && <TabBar />}
      </div>
    </div>
  );
}
