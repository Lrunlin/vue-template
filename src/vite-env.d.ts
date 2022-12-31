/// <reference types="vite/client" />
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
declare module "~pages" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

interface ImportMetaEnv {
  /** API接口地址*/
  readonly VITE_API_HOST: string;
  /** 网站名称*/
  readonly VITE_SITE_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
