<template>
    <section>
        <!--<nav-bar-one/>-->
        <Header></Header>
        <div class="text-center">
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
                <input id="inputEmail" class="form-control" placeholder="username"
                       v-model="loginForm.email"
                       required autofocus>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                       v-model="loginForm.password"
                       required>
                <div class="checkbox mb-3">
                    <label>
                        <el-checkbox v-model="loginForm.rememberMe"> Remember me</el-checkbox>
                    </label>
                </div>
                <!--                <button class="btn btn-lg btn-primary btn-block" @click="handleLogin">Login</button>-->
                <div class="btn btn-lg btn-primary btn-block" @click="handleLogin">Login</div>
                <a class="nav-link" @click="toregister">To Register</a>
                <p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
            </form>
        </div>
    </section>
</template>

<script>
    // import {encrypt} from '@/assets/js/rsaEncrypt'
    // import {login} from '@/assets/js/Login'
    import Header from "./header/header"
    import localStorage from "../assets/js/localStorage"
    import account from "@/assets/js/account/account"
    // import Cookies from 'js-cookie'
    // import Config from '@/settings'
    // import request from '@/assets/js/request';

    export default {
        name: "login",

        components: {
            Header
        },

        data() {
            return {
                loginForm: {
                    email: '1191125750@qq.com',
                    password: '111111',
                    rememberMe: false,
                },
            }
        },
        mounted() {
            let item = this.$route.params.item;
            if (item) {
                this.loginForm = {
                    ...item,
                    rememberMe: false,
                };
            }

        },
        methods: {
            /*login() {
                this.$axios.post(`${this.$root.baseURL}/login`, this.loginData).then(function (res) {
                    console.log(res);
                })
            },*/

            handleLogin() {
                // debugger
                // let postData = this.loginForm;
                let postData = {
                    ...this.loginForm
                };
                account.login(postData).then((res) => {
                    if (res.status === 200) {
                        localStorage.set('token', JSON.stringify(res.data.token));
                        localStorage.set('isLogin', true);
                        this.$router.push({
                            name: 'account'
                        })
                    }
                    // console.log(res)
                })
            },
            toregister() {
                this.$router.push('register')
            }
        }

    }
</script>

<style scoped>
    html,
    body {
        height: 100%;
    }

    body {
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -ms-flex-align: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }

    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 5rem auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

</style>
