import { setJsonWebToken, getJsonWebToken } from '@/utils/auth'

export default {
    state: {
        name: null,
        token: null,
        avatar: null,
        expiredAt: null
    },
    actions: {
        updateAuthInfo({ commit }, data) {
            setJsonWebToken(data.token)
            commit('SET_NAME', data.name)
            commit("SET_TOKEN", getJsonWebToken())
            commit('SET_AVATAR', data.avatar)
            commit('SET_EXPIRED_AT', data.expiredAt)
        },
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_EXPIRED_AT: (state, expiredAt) => {
            state.expiredAt = expiredAt
        }
    },
    getters: {
        getName(state) {
            return state.name
        },
        getToken(state) {
            return state.token
        },
        getAvatar(state) {
            return state.avatar
        },
        getExpiredAt(state) {
            return state.expiredAt
        }
    }
}