import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        authentication: "/authentication-ui/assets/remoteEntry.js",
        certification: "/certification-ui/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    proxy: {
      "/authentication-ui": {
        target: process.env.AUTHENTICATION_HOST || "http://localhost:3001",
        rewrite: (path) => path.replace(/^\/authentication-ui/, ""),
      },
      "/certification-ui": {
        target: process.env.CERTIFICATION_HOST || "http://localhost:3002",
        rewrite: (path) => path.replace(/^\/certification-ui/, ""),
      },
      "/otlp": {
        target: process.env.OTLP_HOST || "http://localhost:4318",
        rewrite: (path) => path.replace(/^\/otlp/, ""),
      },
    },
  },
});
