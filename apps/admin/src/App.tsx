import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { CookiesProvider } from 'react-cookie';
import ScrollToTop from './components/common/ScrollToTop';
import FallbackUI from './components/common/FallbackUI';
import ErrorBoundary from './components/common/ErrorBoundary';
import DefaultErrorFallbackUI from './components/common/Error/DefaultErrorFallbackUI';

const App = () => {
  const handleReload = () => {
    // TODO: 추후 수정 필요
    window.location.reload();
  };

  return (
    <ErrorBoundary errorFallback={DefaultErrorFallbackUI} onReset={handleReload}>
      <Suspense fallback={<FallbackUI />}>
        <CookiesProvider>
          <BrowserRouter>
            <Router />
            <ScrollToTop />
          </BrowserRouter>
        </CookiesProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
