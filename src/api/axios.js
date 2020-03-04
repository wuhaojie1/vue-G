import axios from 'axios';
// import api from '@/api/http/api';
import bus from './bus';
// import {getCookie} from '../cookie';
// import router from '../../router/router'
import api from './api';

let isLogin = true;
// 参数
// const formatParams = (acParams = {}) => {
//   let data;
//   if (Object.prototype.toString.call(acParams) === '[object FormData]') {
//     // acParams.append('uaTime', formatTime(new Date().getTime()));
//     data = acParams;
//   } else {
//     data = { ...acParams };
//     // data.uaTime = formatTime(new Date().getTime());
//   }
//   return data;
// };
// 请求头
const formatHeaders = (acHeaders) => {
    let headers = {};
    // headers['exchange-token'] = getCookie('token') || 'c5fa97c1140aafea1ef1e84b67503d5e0db18d0ca0ff4819a0ca3f24722407df';
    // headers['exchange-client'] = 'pc';
    // headers['exchange-language'] = getCookie('lan') || 'zh_CN';
    // headers['Content-type'] = 'application/x-www-form-urlencoded';
    headers['Content-type'] = 'application/json';
    // headers["__token"] = getCookie("tooken");
    // headers['Accept'] = 'application/msword'

    // headers['exchange-time'] = formatTime(new Date().getTime()) Access-Control-Allow-Origin

    if (acHeaders) {
        headers = {...headers, ...acHeaders};
    }
    return headers;
};
const http = ({
                  url, headers, params, method, hostType, responseType
              }) => {
    // debugger
    let timestamp = (new Date()).valueOf();
    let prefix = '';
    switch (hostType) {
        case 'IDreader':
            // prefix = '/xz-holtel-IDreader'; // 身份证阅读
            prefix = api.localApi;

            break;
        default:
            // prefix = '/xz-holtel-main'; // 主要
            prefix = api.localApi;
        // prefix = "https://yzz.suifangtong.com:9443/xzhotel"
        // prefix = "http://125.65.77.70:8080/xzhotel"
        // prefix = "http://192.168.0.99:8090/xzhotel"
    }
//   axios.defaults.baseURL = 'http://api.htmlx.club'
// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
// // 在发送请求之前做些什么
// return config
// }, function (error) {
// // 对请求错误做些什么
// return Promise.reject(error)
// });
// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
// // 对响应数据做点什么
// return response
// }, function (error) {
// // 对响应错误做点什么
// return Promise.reject(error)
// });
    // let requestApi = httpApi?httpApi:api
    return new Promise((resolve, reject) => {
        if (isLogin) {
            axios({
                url: `${prefix}/${url}?&&t=${timestamp}`, //
                headers: formatHeaders(headers),
                // data: formatParams(params),
                data: params,
                method: method || 'post',
                responseType: responseType || '',
            }).then((data) => {
                debugger
                // console.log(data.data)
                // if (data.data.code) {
                // if (data.data.code.toString() === '-1') {
                //   bus.$emit('NOT-LOGIN');
                // }
                // if (data.data.code.toString() === '-1') {
                //     bus.$emit('IS-LOGIN',false);
                // }else{
                //   if (data.data.code.toString() === '0') {
                //     // bus.$emit('tip', {text: data.data.msg, type: 'error'});
                // }
                if (data.config.responseType === 'blob') {
                    resolve(data.data)
                } else if (data.data.code.toString() === '0') {
                    bus.$emit('tip', {text: data.data.msg, type: 'error'});
                } else if (data.data.code.toString() === '-1') {

                    // bus.$emit('tip', {text: "未登录！请先登录", type: 'error'});
                    // router.push('/login')
                    // isLogin = false
                } else {
                    console.log(data);
                    resolve(data);
                }

                // }else{

                // }

            }).catch((err) => {
                reject(err);
                // throw new Error(`Error:${err}`);
            });
        }
    });

};
export default http;
