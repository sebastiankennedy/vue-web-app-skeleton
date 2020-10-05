import { Toast } from 'vant'
import store from '@/store'

export default {
    state: {
        isLoading: false,
        toastLoading: null,
        httpRequestCount: 0
    },
    actions: {
        showLoadingToast({ commit }) {
            if (store.getters.getHttpRequestCount === 0 ) {
                const loadingToast = Toast.loading({
                    duration: 0,
                    forbidClick: true,
                    message: '加载中...',
                });
                commit('SET_IS_LOADING', true)
                commit('SET_TOAST_LOADING', loadingToast)
                commit('INCREASE_HTTP_REQUEST_COUNT')
            }
        },
        hideLoadingToast({ commit }) {
            commit('DECREASE_HTTP_REQUEST_COUNT')
            if (store.getters.getHttpRequestCount === 0) {
                const loadingToast = store.getters.getToastLoading
                loadingToast.clear();
                commit('SET_IS_LOADING', false)
                commit('SET_TOAST_LOADING', null)
            }
        }
    },
    mutations: {
        SET_IS_LOADING: (state, isLoading) => {
            state.isLoading = isLoading
        },
        SET_TOAST_LOADING: (state, toastLoading) => {
            state.toastLoading = toastLoading
        },
        INCREASE_HTTP_REQUEST_COUNT: (state) => {
            state.httpRequestCount = state.httpRequestCount++
        },
        DECREASE_HTTP_REQUEST_COUNT: (state) => {
            state.httpRequestCount = state.httpRequestCount--
        }
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading
        },
        getToastLoading(state) {
            return state.toastLoading
        },
        getHttpRequestCount(state) {
            return state.httpRequestCount
        }
    }
}