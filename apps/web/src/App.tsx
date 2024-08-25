import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import useScrollToTop from './hooks/useScrollToTop';
import { CookiesProvider } from 'react-cookie';

const App = () => {
  useScrollToTop();

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
