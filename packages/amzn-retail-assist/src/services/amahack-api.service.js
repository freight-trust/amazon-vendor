import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3010'
axios.defaults.withCredentials = true

export const login = (email, password) => {
    return axios.post('/login', {email, password})
        .then(res => res.data)
}

export const getProducts = () => {
    return axios.get('/product')
        .then((res) => res.data)
}

export const singleProducts = (id) => {
    return axios.get(`/product/${id}`)
        .then((res) => res.data)
}