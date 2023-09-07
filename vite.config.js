import htmlPurge from "vite-plugin-html-purgecss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [htmlPurge()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pricing: resolve(__dirname, "html/pricing.html"),
        about: resolve(__dirname, "html/about-us.html"),
      },
    },
  },
});