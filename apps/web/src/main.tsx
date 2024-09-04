import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import '@recipic-packages/ui/styles/fonts.css';
import { QueryClientProvider } from './contexts/query/QueryClientProvider';
import { Toaster } from '@recipic-packages/ui';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider>
      <App />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>,
);
