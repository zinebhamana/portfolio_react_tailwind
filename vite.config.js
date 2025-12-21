import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve:{
    alias:{
      "@": path.resolve(__dirname,"./src"),
    }
  }
});

// tailwind.config.js
module.exports = {
  darkMode: 'class', // important for .dark toggle
  theme: {
    extend: {
      backgroundColor: {
        'background': 'var(--background)',
      },
      textColor: {
        'foreground': 'var(--foreground)',
      }
    }
  },
}
