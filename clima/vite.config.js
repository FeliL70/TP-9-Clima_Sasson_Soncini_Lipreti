import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/TP-9-Clima_Sasson_Soncini_Lipreti/',
  plugins: [react()],
})
