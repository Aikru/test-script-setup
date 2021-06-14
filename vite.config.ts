import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "@rollup/plugin-eslint";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // {
    //   ...eslint({
    //     include: ["./src/**/*.vue", "./src/**/*.js", "./src/**/*.ts"],
    //   }),
    //   enforce: "pre",
    // },
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
