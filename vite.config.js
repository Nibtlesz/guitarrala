import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,  // permite acceder desde fuera del contenedor
    port: 3000,
    hmr: {
      port: 3000, // o el puerto que estés utilizando
    },
  },
})
