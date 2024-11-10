/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SHOW_DRAFT: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
