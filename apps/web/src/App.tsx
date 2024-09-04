import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { CookiesProvider } from 'react-cookie';
import ScrollToTop from './components/common/ScrollToTop';
import FallbackUI from './components/common/FallbackUI';

const App = () => {
  return (
    <Suspense fallback={<FallbackUI />}>
      <CookiesProvider>
        <BrowserRouter>
          <Router />
          <ScrollToTop />
        </BrowserRouter>
      </CookiesProvider>
    </Suspense>
  );
};

export default App;
