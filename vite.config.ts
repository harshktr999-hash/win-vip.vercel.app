import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  // Supabase env vars are injected with the NEXT_PUBLIC_ prefix, so allow Vite
  // to expose them to client code via import.meta.env.
  envPrefix: ["VITE_", "NEXT_PUBLIC_"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
