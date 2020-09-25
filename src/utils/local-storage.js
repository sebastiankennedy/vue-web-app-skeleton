const localStorage = localStorage

export default {
    setItem(name, value) {
        localStorage.setItem(name, JSON.stringify(value))
    },
    getItem(name) {
        try {
            return JSON.parse(localStorage.getItem(name))
        } catch (e) {
            return null
        }
    },
    removeItem(name) {
        localStorage.removeItem(name)
    }
}