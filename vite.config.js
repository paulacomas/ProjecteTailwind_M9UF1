import { defineConfig } from "vite";
export default defineConfig({
  root: ".", // Root directory for Vite
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
