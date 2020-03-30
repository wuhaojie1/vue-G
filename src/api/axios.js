import axios from 'axios';
import localStorage from "../assets/js/localStorage";
import api from './api'

//创建axios实例
const service = axios.create({
    baseURL: api.localApi,
    timeout: '80000',
});

// request拦截器
service.interceptors.request.use(
    config => {
        let isLogin = localStorage.get('isLogin');
        let token = localStorage.get('token');
        // let Cookies = localStorage.get('Cookies');
        if (isLogin) {
            config.headers['Authorization'] = 'Bearer'+' '+JSON.parse(token);
        }

        config.headers['Content-Type'] = 'application/json';
        // config.headers['token'] = token;
        return config;
    },
    error => {
        // console.log(error); // for debug
        Promise.reject(error);
    }
);

// response 拦截器
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error);
    }
);

export default service

