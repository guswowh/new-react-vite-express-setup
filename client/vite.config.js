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
        // 페럴렐즈에서 접근하기 위해모든 IP 주소에서 접근 가능하도록 실행됩니다.
        host: '0.0.0.0',
      proxy: {
        '/api': `${env.VITE_BASE_URL}:${env.VITE_APP_PORT}/`,
      },
    },
  };
});