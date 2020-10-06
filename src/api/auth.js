import request from '@/utils/request'

export default {
    login: function (data) {
        return request({
            url: '/auth/login',
            method: 'post',
            data
        })
    },

    logout: function () {
        return request({
            url: '/auth/logout',
            method: 'delete'
        })
    },

    refresh: function () {
        return request({
            url: '/auth/refresh',
            method: 'put'
        })
    },

    register: function (data) {
        return request({
            url: '/auth/register',
            method: 'post',
            data
        })
    },

    sendCode: function (data) {
        return request({
            url: '/verification-codes',
            method: 'post',
            data
        })
    },

    changePassword: function (data) {
        return request({
            url: '/auth/change-password',
            method: 'patch',
            data
        })
    }
}

