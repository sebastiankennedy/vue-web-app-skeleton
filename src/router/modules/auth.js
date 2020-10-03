const authRouter = [
    {
        name: 'auth.login',
        path: '/auth/login',
        component: () => import('@/views/pages/auth/login.vue'),
        meta: { title: '登录' }
    },
    {
        name: 'auth.logout',
        path: '/auth/logout',
        component: () => import('@/views/pages/auth/logout'),
        meta: { title: '登出' }
    },
    {
        name: 'auth.register',
        path: '/auth/register',
        component: () => import('@/views/pages/auth/register'),
        meta: { title: '注册' }
    },
    {
        name: 'auth.forget_password',
        path: '/auth/forget-password',
        component: () => import('@/views/pages/auth/forget_password'),
        meta: { title: '修改密码' }
    },
    {
        name: 'auth.notice',
        path: '/auth/notice',
        component: () => import('@/views/pages/auth/notice'),
        meta: { title: '协议须知' }
    }
]

export default authRouter;