import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Login from './components/Login.vue'
import Register from './components/Register'
import TwoDetail from './views/TwoDetail'
import ThirdDetail from './views/ThirdDetail'
import UserInfo from './components/UserInfo'
import Comment from './components/Comment'
import Standard from './components/Standard'
// import shoppingCart from './views/shoppingCart'
import shoppingBag from './views/shopping/shoppingBag'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', name: 'index', component: Index},//component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        {path: '/Login', name: 'Login', component: Login},
        {path: '/Register', name: 'Register', component: Register},
        {path: '/TwoDetail', name: 'TwoDetail', component: TwoDetail},
        {
            path: '/ThirdDetail', name: 'ThirdDetail', component: ThirdDetail,
            children: [
                {path: '/', name: 'Standard', component: Standard},
                {path: '/ThirdDetail/Comment', name: 'Comment', component: Comment},
                {path: '/ThirdDetail/Standard', name: 'Standard', component: Standard},
            ]
        },
        {path: '/UserInfo', name: 'UserInfo', component: UserInfo,},
        {path: '/shoppingBag', name: 'shoppingBag', component: shoppingBag,},
        // {path: '/shoppingCart', name: 'shoppingCart', component: shoppingCart},
    ]
})
