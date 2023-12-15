// Generated by nitro
import type { Serialize, Simplify } from "nitropack";
declare module "nitropack" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
  interface InternalApi {
    "/api/search": {
      default: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxt-themes+docus@1.15.0_nuxt@3.8.1_postcss@8.4.31_rollup@3.29.4_vue@3.3.8/node_modules/@nuxt-themes/docus/server/api/search").default
            >
          >
        >
      >;
    };
    "/opensearch.xml": {
      default: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxt-themes+docus@1.15.0_nuxt@3.8.1_postcss@8.4.31_rollup@3.29.4_vue@3.3.8/node_modules/@nuxt-themes/docus/server/routes/opensearch.xml").default
            >
          >
        >
      >;
    };
    "/__nuxt_error": {
      default: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/nuxt@3.8.1_@types+node@20.10.0_eslint@8.54.0_rollup@3.29.4_typescript@5.2.2_vite@4.5.0/node_modules/nuxt/dist/core/runtime/nitro/renderer").default
            >
          >
        >
      >;
    };
    "/api/_mdc/highlight": {
      default: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxtjs+mdc@0.2.6_rollup@3.29.4/node_modules/@nuxtjs/mdc/dist/runtime/shiki/event-handler").default
            >
          >
        >
      >;
    };
    "/api/_content/query/:qid/**:params": {
      get: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxt+content@2.9.0_nuxt@3.8.1_rollup@3.29.4_vue@3.3.8/node_modules/@nuxt/content/dist/runtime/server/api/query").default
            >
          >
        >
      >;
    };
    "/api/_content/query/:qid": {
      get: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxt+content@2.9.0_nuxt@3.8.1_rollup@3.29.4_vue@3.3.8/node_modules/@nuxt/content/dist/runtime/server/api/query").default
            >
          >
        >
      >;
    };
    "/api/_content/query": {
      get: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxt+content@2.9.0_nuxt@3.8.1_rollup@3.29.4_vue@3.3.8/node_modules/@nuxt/content/dist/runtime/server/api/query").default
            >
          >
        >
      >;
    };
    "/api/_content/cache.json": {
      get: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxt+content@2.9.0_nuxt@3.8.1_rollup@3.29.4_vue@3.3.8/node_modules/@nuxt/content/dist/runtime/server/api/cache").default
            >
          >
        >
      >;
    };
    "/api/_content/navigation/:qid/**:params": {
      get: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxt+content@2.9.0_nuxt@3.8.1_rollup@3.29.4_vue@3.3.8/node_modules/@nuxt/content/dist/runtime/server/api/navigation").default
            >
          >
        >
      >;
    };
    "/api/_content/navigation/:qid": {
      get: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxt+content@2.9.0_nuxt@3.8.1_rollup@3.29.4_vue@3.3.8/node_modules/@nuxt/content/dist/runtime/server/api/navigation").default
            >
          >
        >
      >;
    };
    "/api/_content/navigation": {
      get: Simplify<
        Serialize<
          Awaited<
            ReturnType<
              typeof import("../../../../node_modules/.pnpm/@nuxt+content@2.9.0_nuxt@3.8.1_rollup@3.29.4_vue@3.3.8/node_modules/@nuxt/content/dist/runtime/server/api/navigation").default
            >
          >
        >
      >;
    };
  }
}
export {};