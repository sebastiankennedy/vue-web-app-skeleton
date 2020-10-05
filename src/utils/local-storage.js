const ls = {}

ls.setItem = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value))
}
ls.getItem = (name) => {
    try {
        return JSON.parse(localStorage.getItem(name))
    } catch (e) {
        return null
    }
}
ls.removeItem = (name) => {
    localStorage.removeItem(name)
}

export default ls;