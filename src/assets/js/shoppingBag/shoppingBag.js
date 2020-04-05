import axios from '@/api/axios';

//增加
export function addShoppingCart(data) {
    return axios({
        url: 'api/shopping/save',
        method: 'post',
        data
    })
}

//删除
export function deleteGoods(data) {
    return axios({
        url: 'api/shopping/delete',
        method: 'post',
        data
    })
}

//改
export function updateGoods(data) {
    return axios({
        url: 'api/shopping/update',
        method: 'post',
        data
    })
}

//查
export function getGoods(data) {
    return axios({
        url: 'api/shopping/list',
        method: 'post',
        data
    })
}

//结账
export function billOrder(data) {
    return axios({
        url: 'api/order/bill',
        method: 'post',
        data
    })
}

//查询订单
export function checkOrder() {
    return axios({
        url: 'api/order/orderList',
        method: 'get',
    })
}

//根据id查询订单详情
export function getOrderDetail(data) {
    return axios({
        url: 'api/order/detail',
        method: 'post',
        data
    })
}

export default {
    addShoppingCart,
    deleteGoods,
    updateGoods,
    getGoods,
    billOrder,
    checkOrder,
    getOrderDetail
}