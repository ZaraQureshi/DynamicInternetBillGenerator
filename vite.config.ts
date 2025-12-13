import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Optional: Automatically open the browser on start and set port
  server: {
    open: true,
    port: 3000,
  },
});