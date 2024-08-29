import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { CookiesProvider } from 'react-cookie';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* TODO:  임시 */}
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
