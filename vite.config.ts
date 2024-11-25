import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve("src/"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"), 
      "@stores": path.resolve(__dirname, "src/stores"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  server: { hmr: true, watch: { usePolling: true, }, },
});
