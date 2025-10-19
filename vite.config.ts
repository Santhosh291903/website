import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/website/', // ✅ must end with a slash
  server: {
    port: 4000,
    open: true,
  },
});
