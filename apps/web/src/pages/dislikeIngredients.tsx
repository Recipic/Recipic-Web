import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';

export default function DislikeIngredients() {
  return (
    <PageLayout>
      <Header title="싫어하는 재료" order="second" />
      <TopNavBar order="first" />
      <div className="flex flex-col items-center px-4 gap-y-6 mt-24"></div>
    </PageLayout>
  );
}
