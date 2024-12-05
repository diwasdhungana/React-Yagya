import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), mdx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
