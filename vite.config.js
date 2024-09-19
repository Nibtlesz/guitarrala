import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,  // Permite que el servidor escuche desde fuera del contenedor
    strictPort: true,  // Asegura que no cambie el puerto si está en uso
    port: 80,  // Puedes ajustar este puerto según tu configuración
  },
})
