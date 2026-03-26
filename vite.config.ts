import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "https://d37c-2409-40d7-1030-9dd6-4108-5eff-4c8e-aae1.ngrok-free.app",
    ],
  },
});
