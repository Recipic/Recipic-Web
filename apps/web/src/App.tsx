import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { CookiesProvider } from 'react-cookie';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Router />
        <ScrollToTop />
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
