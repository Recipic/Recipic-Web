import React from 'react';
import { QueryClientProvider as _QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { getQueryClient } from './getQueryClient';

export function QueryClientProvider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <_QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </_QueryClientProvider>
  );
}
