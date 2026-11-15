import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' deixa o build funcionar em qualquer hospedagem (inclusive GitHub Pages em subpasta).
export default defineConfig({
  base: './',
  plugins: [react()],
});
