import { useState, useCallback, useEffect } from 'react';

export function useIframeLoad(options?: { timeout?: number; onError?: () => void }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setError(new Error('Failed to load iframe'));
    options?.onError?.();
  }, [options]);

  useEffect(() => {
    if (options?.timeout) {
      const timer = setTimeout(() => {
        if (isLoading) {
          handleError();
        }
      }, options.timeout);

      return () => clearTimeout(timer);
    }
  }, [isLoading, options?.timeout, handleError]);

  return {
    isLoading,
    error,
    handleIframeLoad,
    handleError,
  };
}
