import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/epika-web/', // 👈 Nombre exacto de tu repo
  plugins: [react()],
});

