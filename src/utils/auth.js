import localStorage from './local-storage'
import Cookies from 'js-cookie'

const jsonWebTokenKey = 'json_web_token'

export function getJsonWebToken() {
    return localStorage.getItem(jsonWebTokenKey)
}

export function setJsonWebToken(token) {
    return localStorage.setItem(jsonWebTokenKey, token)
}

export function removeJsonWebToken() {
    return localStorage.removeItem(jsonWebTokenKey)
}

const cookieToken = 'access_token'

export function getToken() {
    return Cookies.get(cookieToken)
}
export function setToken(token) {
    return Cookies.set(cookieToken, token)
}
export function removeToken() {
    return Cookies.remove(cookieToken)
}
