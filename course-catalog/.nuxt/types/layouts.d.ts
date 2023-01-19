import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/Agnetha.D Mello/Documents/GitHub/course-catalog/course-catalog/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}