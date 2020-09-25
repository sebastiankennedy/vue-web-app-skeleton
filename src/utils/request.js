import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
import { getJsonWebToken, getToken } from './auth'


const service = axios.create({
    baseURL: process.env.APP_URL,
    timeout: 10000
})

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 发送请求之前逻辑
    if (store.getters.jsonWebToken) {
        config.headers['Authorization'] = 'Bearer ' + getJsonWebToken
    }

    if (store.getters.accessToken) {
        config.headers['X-ACCESS-Token'] = getToken
    }

    if (process.env.APP_ENV === 'local') {
        console.log(config)
    }

    return config
}, error => {
    // 处理请求错误
    if (process.env.APP_ENV === 'local') {
        console.log(error)
    }

    return Promise.reject(error)
})

//  添加响应拦截器
axios.interceptors.response.use(response => {
    // 处理响应数据
    if (process.env.APP_ENV === 'local') {
        console.log(response)
    }
    
    return response
}, error => {
    // 处理响应错误
    if (process.env.APP_ENV === 'local') {
        console.log(error)
    }

    Toast.fail({
        message: error.message,
        forbidClick: true,
        duration: 5000
    })

    return Promise.reject(error)
})

export default service


