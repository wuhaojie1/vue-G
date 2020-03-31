import axios from '@/api/axios';

//增加
export function saveGoods(data) {
    return axios({
        url: 'api/products/save',
        method: 'post',
        data
    })
}

//删除
export function deleteGoods(data) {
    return axios({
        url: 'api/products/delete',
        method: 'post',
        data
    })
}

//改
export function updateGoods(data) {
    return axios({
        url: 'api/products/update',
        method: 'post',
        data
    })
}

//查
export function getGoodsList(data) {
    return axios({
        url: 'api/products/list',
        method: 'post',
        data
    })
}

//根据id查询商品详情
export function getGoodsDetail(data) {
    return axios({
        url: 'api/products/detail',
        method: 'post',
        data
    })
}


export default {
    saveGoods,
    deleteGoods,
    updateGoods,
    getGoodsList,
    getGoodsDetail,
}