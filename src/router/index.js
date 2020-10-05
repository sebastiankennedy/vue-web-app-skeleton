import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import authRouter from './modules/auth'
/**
 * 没有权限要求的路由
 * 所有角色都可以访问
 */
export const constantRoutes = []
constantRoutes.push.apply(constantRoutes, authRouter)

/**
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = []

// 创建路由
const createRouter = () => new VueRouter({
    mode: 'history',
    routes: constantRoutes,
    scrollBehavior: () => ({ y: 0 }),
})

const router = createRouter()

// 动态重置路由
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

// 返回上一步或返回指定路径
export function goBack(path = ''){
    window.history.length > 1 ? router.go(-1) : router.push(path)
}

export default router