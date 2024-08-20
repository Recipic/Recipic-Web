import React from 'react';
import { TabBar } from './tabBar';
import { Header } from './header';

type TPageLayoutProps = {
  children: React.ReactNode;
  isTabBarVisible?: boolean;
  title?: string;
};

export function PageLayout({ children, isTabBarVisible = true, title }: TPageLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-white max-w-lg mx-auto">
      <Header title={title} />
      <main className="flex-grow overflow-y-auto overflow-x-hidden">
        <div className="px-4 py-4">{children}</div>
      </main>
      {isTabBarVisible && <TabBar />}
    </div>
  );
}
