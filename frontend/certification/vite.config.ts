import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "certification",
      filename: "remoteEntry.js",
      exposes: {
        "./Routes": "./src/Routes",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
