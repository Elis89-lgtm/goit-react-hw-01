import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import json from '@rollup/plugin-json';
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
