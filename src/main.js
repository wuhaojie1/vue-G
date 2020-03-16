import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import router from './router/router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'wowjs/css/libs/animate.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css';
import axios from '@/api/axios';
import api from '@/api/api';


Vue.use(ElementUI);

Vue.prototype.axios = axios;
Vue.prototype.api = api;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    $,
    render: h => h(App),
}).$mount('#app');
