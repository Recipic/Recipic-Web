import { TabBar } from './tabBar';

type TPageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: TPageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-5">{children}</main>
      <TabBar />
    </div>
  );
}
