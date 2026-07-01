import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
=======
//fixing the issue of tailwindcss not working with vite
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: './', // Set the base path to the current directory
>>>>>>> 103ab2d0cfdadcf000c1d46db62ead8c8b0148f3
})
