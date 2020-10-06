import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
import { getJsonWebToken, getToken } from './auth'


const service = axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: 10000
})

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 发送请求之前逻辑
    if (getJsonWebToken()) {
        config.headers['Authorization'] = 'Bearer ' + getJsonWebToken()
    } else if (getToken()) {
        config.headers['X-ACCESS-Token'] = getToken()
    }

    // 添加 Ajax 首部
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    if (process.env.VUE_APP_ENV === 'local') {
        console.log('HTTP 请求之前', config)
    }
    store.dispatch('showLoadingToast')

    return config
}, error => {
    // 处理请求错误
    if (process.env.VUE_APP_ENV === 'local') {
        console.log(error)
    }

    Toast.fail({
        message: error.message,
        forbidClick: true,
        duration: 5000
    })

    return Promise.reject(error)
})

//  添加响应拦截器
service.interceptors.response.use(response => {
    store.dispatch('hideLoadingToast')

    // 处理响应数据
    if (process.env.VUE_APP_ENV === 'local') {
        console.log('HTTP 响应之后', response)
    }

    if (response.status === 200 && response.data.status_code === 0) {
        if (response.data.message !== 'success') {
            Toast.success(response.data.message)
        }

        return response.data
    }

    if (response.status !== 200 || response.data.status_code !== 0) {
        Toast.fail({
            message: response.data.message,
            forbidClick: true,
            duration: 3000,
        })
    }

    return response
}, error => {
    // 处理响应错误
    if (process.env.VUE_APP_ENV === 'local') {
        console.log(error)
    }

    Toast.fail({
        message: error.message,
        forbidClick: true,
        duration: 3000
    })

    return Promise.reject(error)
})

export default service


