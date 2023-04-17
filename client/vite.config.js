import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

//vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': loadEnv(mode, process.cwd(), ''),
    },
    plugins: [react()],
    envPrefix: 'MY_APP',
    build: {
      emptyOutDir: true,
      outDir: './build',
    },
    base: '/',
      server: {
      proxy: {
        '/api': `${env.VITE_BASE_URL}:${env.VITE_APP_PORT}/`,
      },
    },
  };
});