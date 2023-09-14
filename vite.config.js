import { defineConfig } from "vite";
import image from "@rollup/plugin-image";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), image()],
});
