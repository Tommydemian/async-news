import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            component: () => import('../layouts/Main.vue'),
            children: [
              {
                path: '/',
                name: 'home',
                component: () => import('../views/Home.vue'),
              },
            ]
            }
        ]

})

export default router;