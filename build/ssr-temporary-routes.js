
      // The file is provisional，don't depend on it 
        import * as store from "@/store/index.ts"
        export const FeRoutes = [{"path":"/detail/:id","component": () => import(/* webpackChunkName: "detail-id" */ '@/pages/detail/render$id.vue'),"webpackChunkName":"detail-id","fetch": () => import(/* webpackChunkName: "detail-id-fetch" */ '@/pages/detail/fetch.ts')},{"path":"/","component": () => import(/* webpackChunkName: "index" */ '@/pages/index/render.vue'),"webpackChunkName":"index","fetch": () => import(/* webpackChunkName: "index-fetch" */ '@/pages/index/fetch.ts')}] 
        export { default as Layout } from "@/components/layout/index.vue"
        export { default as App } from "@/components/layout/App.vue"
        
        export { store }
        
        