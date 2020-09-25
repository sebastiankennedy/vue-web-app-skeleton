import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/auth/login',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/auth/logout',
        method: 'delete'
    })
}

export function refresh() {
    return request({
        url: '/auth/refresh',
        method: 'put'
    })
}

export function register(data) {
    return request({
        url: '/auth/register',
        method: 'post',
        data
    })
}