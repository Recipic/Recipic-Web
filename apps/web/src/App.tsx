import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Suspense } from 'react';
import useScrollToTop from './hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <Suspense>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
