import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Usa el directorio raíz del proyecto
  publicDir: "public", // Define la carpeta "public" como la de archivos públicos
  build: {
    outDir: "dist", // Define el directorio de salida
    rollupOptions: {
      input: "./public/index.html", // Define el punto de entrada
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
