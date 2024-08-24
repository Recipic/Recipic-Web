/// <reference types="vite/client" />

/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_REDIRECT_URL: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_REST_API_KEY: string;
}
