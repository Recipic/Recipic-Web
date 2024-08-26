import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';

export default function AddRecipe() {
  return (
    <PageLayout>
      <Header title="레시피 작성하기" order="second" />
      <TopNavBar order="first" />
      <div className="flex flex-col items-center px-4 gap-y-6 mt-24"></div>
    </PageLayout>
  );
}
