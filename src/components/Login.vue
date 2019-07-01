<template>
    <section>
        <nav-bar-one/>
        <div class="text-center">
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address"
                       v-model="loginData.email"
                       required autofocus>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                       v-model="loginData.password"
                       required>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" @click="login">Login</button>
                <a class="nav-link" href="/Register">To Register</a>
                <p class="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
            </form>
        </div>
    </section>
</template>

<script>
    import NavBarOne from "./NavBarOne";

    export default {
        name: "login",
        components: {NavBarOne},
        data() {
            return {
                loginData: {
                    email: 'root@phpvue.com',
                    password: '123456'
                },
            }
        },
        methods: {
            login() {
                this.$axios.post(`${this.$root.baseURL}/login`, this.loginData).then(function (res) {
                    console.log(res);
                })
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
