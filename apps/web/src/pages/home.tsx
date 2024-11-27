import React, { Suspense, useEffect } from 'react';
import { Header } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import { CarouselWithBanners } from '@/components/home/CarouselWithBanners';
import { Section } from '@/components/common/Section';
import { TBrandEn } from '@/types/brand';
import { useNavigate } from 'react-router-dom';
import { formatBrandToHangeul } from '@/utils/formatBrand';
import RecipcLogoImage from '@/assets/images/logo.webp';
import { VerticalRecipeCardList } from '@/components/home/VerticalRecipeCard/VerticalRecipeCardList';
import { brands } from '@/constants/brands';
import NotificationButton from '@/components/home/NotificationButton';
import SearchButton from '@/components/common/Buttons/SearchButton';
import BrandButtonList from '@/components/common/Buttons/BrandButton/BrandButtonList';
import { RandomBrandAnimatedBanner } from '@/components/home/AnimatedBanners/RandomBrandAnimatedBanner';
import { TGetRecipeRankListResponse } from '@/apis/home/type';
import { RecipeCelebRankListContainer } from '@/components/home/RenderPropsContainer/RecipeCelebRankListContainer';
import { RecipeRankListContainer } from '@/components/home/RenderPropsContainer/RecipeRankListContainer';
import { SkeletonCardList } from '@/components/home/SkeletonCard/SkeletonCardList';
import PullToRefresh from '@/components/common/PullToRefresh';
import { useRefreshQueries } from '@/hooks/useRefreshQueries';
import { useAlertDialog } from '@/contexts/alertDialogContext';
import { useAuth } from '@/contexts/authContext';

export default function Home() {
  const navigate = useNavigate();
  const { refreshQueries } = useRefreshQueries();
  const { showAlertDialog } = useAlertDialog(); // TODO: 애플 심사 통과를 위한 임시 기능
  const { isLoggedIn } = useAuth(); // TODO: 애플 심사 통과를 위한 임시 기능
  const hasAgreedToTerms = localStorage.getItem('hasAgreedToTerms'); // TODO: 애플 심사 통과를 위한 임시 기능

  /** 브랜드 버튼 클릭을 처리하는 핸들러 */
  const handleBrandClick = (searchBrand: TBrandEn) => {
    navigate(`recipe?keyword=${formatBrandToHangeul(searchBrand)}`);
  };

  // TODO: 애플 심사 통과를 위한 임시 기능
  useEffect(() => {
    if (hasAgreedToTerms) {
      return;
    }

    if (isLoggedIn) {
      showAlertDialog({
        title: '약관 동의',
        description:
          '레시픽은 불쾌감을 주는 콘텐츠나 학대적인 사용자에 대한 관용이 없습니다. 법적 조치를 취할 수 있습니다.',
        confirmText: '동의',
        onConfirm: () => {
          // 약관 동의 완료 상태를 로컬스토리지에 저장
          localStorage.setItem('hasAgreedToTerms', 'true');
        },
      });
    }
  }, [hasAgreedToTerms, isLoggedIn, showAlertDialog]);

  return (
    <PageLayout isTabBarVisible isBottomSpace isHeaderVisible>
      <Header titleImage={RecipcLogoImage} order="first">
        <SearchButton route={'/recipe'} />
        <NotificationButton route={'/notification'} />
      </Header>
      <PullToRefresh onRefresh={refreshQueries}>
        <RandomBrandAnimatedBanner />
        <CarouselWithBanners />
        <Section title="이번 달 인기 레시피">
          <Suspense fallback={<SkeletonCardList />}>
            <RecipeRankListContainer
              render={(recipeRankListData: TGetRecipeRankListResponse) => (
                <VerticalRecipeCardList recipeInfosList={recipeRankListData} />
              )}
            />
          </Suspense>
        </Section>
        <Section title="최신 HOT 브랜드">
          <BrandButtonList brands={brands} onSearchClick={handleBrandClick} gridCols={3} />
        </Section>
        <Section title="유명인의 인기 레시피">
          <Suspense fallback={<SkeletonCardList />}>
            <RecipeCelebRankListContainer
              render={(recipeCelebRankListData: TGetRecipeRankListResponse) => (
                <VerticalRecipeCardList recipeInfosList={recipeCelebRankListData} />
              )}
            />
          </Suspense>
        </Section>
      </PullToRefresh>
    </PageLayout>
  );
}
