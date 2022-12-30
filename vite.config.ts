import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import generateSitemap from "vite-ssg-sitemap";
import Layouts from "vite-plugin-vue-layouts";


export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@type": path.resolve(__dirname, "./type"),
    },
  },
  base: "./", // 生产环境下的公共路径
  server: {
    // open: true, // 浏览器自动打开
  },
  build: {
    chunkSizeWarningLimit: 1024, //大于1mb警报
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: "static/[name].blog.[hash].js",
        entryFileNames: "static/[name].blog.[hash].js",
        assetFileNames: "static/[name].blog.[hash].[ext]",
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Pages({
      dirs: "src/pages",
      extensions: ["vue", "tsx"],
    }),
    Layouts(),
  ],
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished() {
      generateSitemap({
        hostname: "https://blogweb.cn/",
        exclude: ["/admin", "/private"],
      });
    },
  },
} as any);
