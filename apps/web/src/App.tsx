import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Suspense } from 'react';

const App = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
