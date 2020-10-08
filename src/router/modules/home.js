const homeRouter = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/views/pages/home/index.vue'),
        meta: {
            title: '首页',
            requireAuth: true
        }
    },
    {
        name: 'home.index',
        path: '/home',
        component: () => import('@/views/pages/home/index.vue'),
        meta: {
            title: '首页',
            requireAuth: true
        }
    }
]

export default homeRouter;