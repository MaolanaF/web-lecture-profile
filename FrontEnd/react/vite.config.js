import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "ProfeLink",
        short_name: "ProfeLink",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#007bff",
        description: "Lpa is lecturer profile applicalion",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/public/logo.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
})