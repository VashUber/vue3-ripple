import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig(({ mode }) => {
  return {
    root: resolve(__dirname, mode === "production" ? "" : "playground"),
    plugins: [
      vue(),
      dts({
        entryRoot: resolve(__dirname, "src"),
        outputDir: resolve(__dirname, "dist"),
      }),
      cssInjectedByJsPlugin()
    ],
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "index",
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  };
});
