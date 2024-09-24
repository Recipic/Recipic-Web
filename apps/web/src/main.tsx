import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import '@recipic-packages/ui/styles/fonts.css';
import { QueryClientProvider } from './contexts/query/QueryClientProvider';
import { Toaster } from '@recipic-packages/ui';
import { AlertDialogProvider } from './contexts/alertDialogContext';
import { AuthProvider } from './contexts/authContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider>
      <AuthProvider>
        <AlertDialogProvider>
          <App />
          <Toaster />
        </AlertDialogProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
