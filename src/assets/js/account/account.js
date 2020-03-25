import axios from '@/api/axios';
import localStorage from "@/assets/js/localStorage";

let token = JSON.parse(localStorage.get('token'));
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

export function getUserInfo(data) {
    // let obj = {
    //     token: token,
    //     ...data
    // };
    return axios({
        url: 'api/user',
        method: 'post',
        // data: obj
    })
}

export default {login, getUserInfo, register}