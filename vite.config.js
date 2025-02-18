import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'EmojiPika',
        short_name: '***NomeCurto',
        description: 'EmojiPika',
        theme_color: '***#ffffff',
        icons: [
          {
            src: 'moji192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'moji512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});