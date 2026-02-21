import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// const { resolve } = require('path')
// https://vite.dev/config/

export default defineConfig({ 
  plugins: [react()], 
  
  base: '/tanks-localization/',
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, './src/images/icons'),
      '@lang': path.resolve(__dirname, './public/locates')
    },
  },

})
