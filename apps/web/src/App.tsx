import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import useScrollToTop from './hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
