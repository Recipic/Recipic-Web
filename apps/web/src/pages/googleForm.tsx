import React, { useCallback } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import PrimarySpinner from '@/components/common/PrimarySpinner';
import { GOOGLE_FORMS } from '@/constants/googleForm';
import { getGoogleFormUrl } from '@/utils/googleForm';
import { useIframeLoad } from '@/hooks/useIframeLoad';

export default function GoogleForm() {
  const navigate = useNavigate();
  const { formId } = useParams<{ formId: string }>();

  const handleError = useCallback(() => {
    navigate('/not-found', { replace: true });
  }, [navigate]);

  const { isLoading, error, handleIframeLoad } = useIframeLoad({
    timeout: 1000 * 20, // 20초 후 타임아웃
    onError: handleError,
  });

  // formId가 없거나 유효하지 않은 경우 처리
  if (!formId || !GOOGLE_FORMS[formId]) {
    return <Navigate to="/not-found" replace />;
  }

  const formUrl = getGoogleFormUrl(formId);
  const formConfig = GOOGLE_FORMS[formId];

  if (!formUrl) {
    return <Navigate to="/not-found" replace />;
  }

  if (error) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <PageLayout isTopNavBarVisible>
      <TopNavBar order="first" />
      <div className="flex-grow overflow-auto relative" style={{ height: 'calc(100vh - 48px)' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <PrimarySpinner />
          </div>
        )}
        <iframe
          src={formUrl}
          className="w-full h-full border-0"
          onLoad={handleIframeLoad}
          onError={handleError}
          title={formConfig.title}
        />
      </div>
    </PageLayout>
  );
}
