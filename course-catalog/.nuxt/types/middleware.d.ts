import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/Agnetha.D Mello/Documents/GitHub/course-catalog/course-catalog/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}