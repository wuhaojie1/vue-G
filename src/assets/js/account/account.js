import axios from '@/api/axios';

export function login(data) {
    return axios({
        url: 'api/login',
        method: 'post',
        data
    })
}

export function register(data) {
    return axios({
        url: 'api/register',
        method: 'post',
        data
    })
}

export function getUserInfo() {
    return axios({
        url: 'api/user',
        method: 'get',
    })
}

export default { login, getUserInfo, register }