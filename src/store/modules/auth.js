export default {
    state: {
        name: null,
        token: null,
        avatar: null,
    },
    actions: {
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
        }
    }
}