export let set = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}

export let get = (name) => {
    return JSON.parse(localStorage.getItem(name))
}

export let remove = (name) => {
    localStorage.removeItem(name)
}