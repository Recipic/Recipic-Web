import { TabBar } from './tabBar';

type TPageLayoutProps = {
  children: React.ReactNode;
  isTabBarVisible?: boolean;
};

export function PageLayout({ children, isTabBarVisible }: TPageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-5 max-w-lg">{children}</main>
      {isTabBarVisible && <TabBar />}
    </div>
  );
}
