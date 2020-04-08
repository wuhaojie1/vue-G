import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import login from '../components/Login.vue'
import register from '../components/Register'
// import TwoDetail from './views/TwoDetail'
// import ThirdDetail from './views/ThirdDetail'
// import UserInfo from './components/UserInfo'
// import Comment from './components/Comment'
// import Standard from './components/Standard'
// import shoppingCart from './views/shoppingCart'
import shoppingBag from '../views/shopping/shoppingBag'
import account from '../views/account/account'
import order from '../views/account/order'
import orderDetail from '../views/account/orderDetail'
import personal from '../views/account/personal'
import shippingAddress from '../views/account/shippingAddress'
import newAddress from '../views/account/newAddress'
import goodsList from '../views/goods/goodsList'
import goodsDetail from '../views/goods/goodsDetail'
import conceptProducts from '../views/conceptProducts/index'
import onePlus7TPro from '../views/conceptProducts/onePlus7TPro'


Vue.use(Router);

const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
};

export default new Router({
    // mode: 'history',
    routes: [
        {path: '/', name: 'index', component: index},//component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        {path: '/login', name: 'login', component: login},//登录
        {path: '/register', name: 'register', component: register},//注册
        // {path: '/TwoDetail', name: 'TwoDetail', component: TwoDetail},
        /*{
            path: '/ThirdDetail', name: 'ThirdDetail', component: ThirdDetail,
            children: [
                {path: '/', name: 'Standard', component: Standard},
                {path: '/ThirdDetail/Comment', name: 'Comment', component: Comment},
                {path: '/ThirdDetail/Standard', name: 'Standard', component: Standard},
            ]
        },*/
        // {path: '/UserInfo', name: 'UserInfo', component: UserInfo},
        {path: '/shoppingBag', name: 'shoppingBag', component: shoppingBag},//购物车
        {
            path: '/account', name: 'account', component: account,
            children: [
                {path: '/account/order', name: 'order', component: order},
                {path: '/account/personal', name: 'personal', component: personal},
                {path: '/account/shippingAddress', name: 'shippingAddress', component: shippingAddress},
                {path: '/account/newAddress', name: 'newAddress', component: newAddress},
                {path: '/account/orderDetail', name: 'orderDetail', component: orderDetail},

            ]
        },//账户
        {path: '/goodsList', name: 'goodsList', component: goodsList},//商品列表
        {path: '/goodsDetail', name: 'goodsDetail', component: goodsDetail},//商品列表
        {path: '/conceptProducts', name: 'conceptProducts', component: conceptProducts},//概念产品
        {path: '/onePlus7TPro', name: 'onePlus7TPro', component: onePlus7TPro},//概念产品
        // {path: '/shoppingCart', name: 'shoppingCart', component: shoppingCart},
    ]
})
