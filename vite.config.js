import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Для GitHub Pages - замените 'my-proposal-app' на имя вашего репозитория
  // Если репозиторий называется 'username.github.io', оставьте base: '/'
  base: process.env.NODE_ENV === 'production' ? '/my-proposal-app/' : '/',
})
