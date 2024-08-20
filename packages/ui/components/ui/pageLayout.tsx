import { TabBar } from './tabBar';

type TPageLayoutProps = {
  children: React.ReactNode;
  isTabBarVisible?: boolean; // 탭바 표시 여부를 결정하는 선택적 prop
};

export function PageLayout({ children, isTabBarVisible = true }: TPageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white max-w-lg mx-auto">
      <main className="flex-grow">{children}</main>
      {isTabBarVisible && <TabBar />}
    </div>
  );
}
