import type { RouterConfig } from '@nuxt/schema'// https://router.vuejs.org/api/interfaces/routeroptions.html

export default <RouterConfig>  {
    routes: (_routes) => [
        {      
            name: 'LandingPage',      
            path: '/',      
            component: () => import('~~/pages/index.vue')    
        },  
        {      
            name: 'CourseCatalog',      
            path: '/courses',      
            component: () => import('~~/pages/catalog/index.vue')    
        },  
        {      
            name: 'ScheduleBuilder',      
            path: '/builder',      
            component: () => import('~~/pages/builder.vue')    
        },  
    ]
}