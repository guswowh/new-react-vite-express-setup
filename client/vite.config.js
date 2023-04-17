// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'

// const mode = process.env.NODE_ENV || 'development';
// console.log('확인', loadEnv(mode, process.cwd(), ''))


// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     define: {
//       'process.env': loadEnv(mode, process.cwd(), ''),
//     },
//     plugins: [react()],
//     envPrefix: 'FIIN_',
//     build: {
//       emptyOutDir: true,
//       outDir: './build',
//     },
//     base: '/',
//     server: {
//       proxy: {
//         '/api': `${env.VITE_BASE_URL}:${env.VITE_APP_PORT}/`,
//       },
//     },
//   };
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// 해당 모드를 인식하여 .env 파일을 불러옵니다.
dotenv.config({ path: `.${process.env.MODE}` })

export default defineConfig({
  server: {
    proxy: {
      '/api': process.env.VITE_BASE_URL
    },
  },
  plugins: [react()],
})

