import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    postcss: './postcss.config.cjs',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // '@'를 src 폴더로 매핑
    },
  },
});
