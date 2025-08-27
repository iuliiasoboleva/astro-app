import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: true,
              pure: true,
            },
          ],
        ],
      },
    }),
  ],

  server: {
    host: true,
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },

  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
