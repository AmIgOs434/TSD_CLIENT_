import axios from "axios";

const $host = axios.create({
    baseURL:'http://45.12.72.45:5000/'
})

const $authHost = axios.create({
    baseURL: 'http://45.12.72.45:5000/'
})




const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,

}
