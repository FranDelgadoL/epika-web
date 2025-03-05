import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // 👈 Nombre exacto de tu repo
  plugins: [react()],
});

