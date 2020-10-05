import ls from './local-storage'
import Cookies from 'js-cookie'

const jsonWebTokenKey = 'json_web_token'

export function getJsonWebToken() {
    return ls.getItem(jsonWebTokenKey)
}

export function setJsonWebToken(token) {
    return ls.setItem(jsonWebTokenKey, token)
}

export function removeJsonWebToken() {
    return ls.removeItem(jsonWebTokenKey)
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
