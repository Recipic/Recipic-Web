import { useEffect } from 'react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

type UseInstagramEmbedParams = {
  onLoad?: () => void;
  onError?: () => void;
};

export function useInstagramEmbed({ onLoad, onError }: UseInstagramEmbedParams = {}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      onLoad?.();
    };

    script.onerror = () => {
      onError?.();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [onLoad, onError]);
}
