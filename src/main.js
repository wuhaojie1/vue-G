import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'wowjs/css/libs/animate.css';
import axios from 'axios';


Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
axios.defaults.timeout = 5000; // 请求超时

new Vue({
    router,
    store,
    $,
    data() {
        return {
            baseURL: 'http://www.blog.com',
        }
    },
    render: h => h(App),
}).$mount('#app');
