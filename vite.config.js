import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd());

  // const API_URL = 'http://localhost:8000';
  const API_URL = 'http://192.168.1.50:8000';

  return {
    plugins: [react()], resolve: {
      alias:
      {
        src: "/src",
        components: "/src/components",
        layouts: "/src/layouts",
        pages: "/src/pages",
        images: "/src/assets/images/",
        "@": path.resolve(__dirname, "./src"),
      },

    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': {
          target: API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    test: {
      globals: true,
      environment: 'node',
      setupFiles: './tests/setup.js',
      isolate: true,
    },
  }
})
