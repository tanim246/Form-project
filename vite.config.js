import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// tailwind css web vite link
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
