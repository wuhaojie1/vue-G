import axios from '@/api/axios';

export function login(data) {
    return axios({
        url: 'api/login',
        method: 'post',
        data
    })
}

export function loginOut() {
    return axios({
        url: 'api/logout',
        method: 'get',
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

export function saveShippingAddress(data) {
    return axios({
        url: 'api/shippingAddress/new',
        method: 'post',
        data
    })
}

export function updateShippingAddress(data) {
    return axios({
        url: 'api/shippingAddress/update',
        method: 'post',
        data
    })
}

export function getShippingAddress() {
    return axios({
        url: 'api/shippingAddress/list',
        method: 'get',
    })
}

export function getAddressDetail(data) {
    return axios({
        url: 'api/shippingAddress/detail',
        method: 'post',
        data
    })
}

export function delAddress(data) {
    return axios({
        url: 'api/shippingAddress/delete',
        method: 'post',
        data
    })
}



export default {
    login,
    loginOut,
    getUserInfo,
    register,
    update,
    getArea,
    saveShippingAddress,
    getShippingAddress,
    getAddressDetail,
    updateShippingAddress,
    delAddress,
}