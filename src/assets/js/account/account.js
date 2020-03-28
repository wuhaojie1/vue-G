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
        method: 'post',
    })
}

export function update(data) {
    return axios({
        url: 'api/edit',
        method: 'post',
        data
    })

}

export function getArea() {
    return axios({
        url: 'api/area',
        method: 'get',
    })

}

export default { login, getUserInfo, register, update, getArea}