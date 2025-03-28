import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//svgr converts icons to react components
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  //use alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
