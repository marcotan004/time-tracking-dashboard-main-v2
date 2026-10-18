import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        loadPaths: [fileURLToPath(new URL("./src/styles", import.meta.url))],
      },
    },
  },
});
