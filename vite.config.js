import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./", // Mantiene el root en la raíz del proyecto
  base: "./", // Usa rutas relativas para los recursos
  build: {
    outDir: "dist", // Directorio de salida para la construcción
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        confirmar_proposta: path.resolve(
          __dirname,
          "src/pages/confirmar_proposta.html"
        ),
        detalls: path.resolve(__dirname, "src/pages/detalls.html"),
        home: path.resolve(__dirname, "src/pages/home.html"),
        mostrar_objectes: path.resolve(
          __dirname,
          "src/pages/mostrar_objectes.html"
        ),
        new_object: path.resolve(__dirname, "src/pages/new_object.html"),
        perfil: path.resolve(__dirname, "src/pages/perfil.html"),
        proposta_detalls: path.resolve(
          __dirname,
          "src/pages/proposta_detalls.html"
        ),
        register: path.resolve(__dirname, "src/pages/register.html"),
        serch: path.resolve(__dirname, "src/pages/serch.html"),
        xat: path.resolve(__dirname, "src/pages/xat.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
