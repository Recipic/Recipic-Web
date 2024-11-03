import React, { useCallback } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import PrimarySpinner from '@/components/common/PrimarySpinner';
import { INSTAGRAM_EMBEDS } from '@/constants/instagram';
import { useIframeLoad } from '@/hooks/useIframeLoad';
import { useInstagramEmbed } from '@/hooks/useInstagramEmbed';

export default function Instagram() {
  const navigate = useNavigate();
  const { embedId } = useParams<{ embedId: string }>();

  const handleError = useCallback(() => {
    navigate('/not-found', { replace: true });
  }, [navigate]);

  const { isLoading, error, handleIframeLoad } = useIframeLoad({
    timeout: 1000 * 20,
    onError: handleError,
  });

  useInstagramEmbed({
    onLoad: handleIframeLoad,
    onError: handleError,
  });

  if (!embedId || !INSTAGRAM_EMBEDS[embedId]) {
    return <Navigate to="/not-found" replace />;
  }

  const config = INSTAGRAM_EMBEDS[embedId];

  if (error) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <PageLayout isTopNavBarVisible>
      <TopNavBar order="first" />
      <div className="flex-grow overflow-auto relative px-4 py-8" style={{ height: 'calc(100vh - 48px)' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <PrimarySpinner />
          </div>
        )}
        <blockquote
          className="instagram-media w-full max-w-2xl mx-auto"
          data-instgrm-permalink={config.url}
          data-instgrm-version="14"
        />
      </div>
    </PageLayout>
  );
}
