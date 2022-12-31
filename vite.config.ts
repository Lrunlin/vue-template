import { defineConfig, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import generateSitemap from "vite-ssg-sitemap";
import Layouts from "vite-plugin-vue-layouts";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

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
    AutoImport({
      imports: ["vue", "vue-router", "vuex"],
      dts: "src/auto-import.d.ts",
      // resolvers: [
      //   ElementPlusResolver({
      //     ssr: true,
      //     importStyle: "sass",
      //   }),
      // ],
    }),
    Components({
      dirs: ["src/components"], // 目标文件夹
      extensions: ["vue", "jsx"], // 文件类型
      dts: "src/components.d.ts", // 输出文件，里面都是一些import的组件键值对
      // resolvers: [
      //   ElementPlusResolver({
      //     ssr: true,
      //     importStyle: "sass",
      //   }),
      // ],
    }),
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
} as UserConfigExport);
