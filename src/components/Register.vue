<template>
    <section>
        <!--<nav-bar-one/>-->
        <Header></Header>
        <div class="text-center">
            <form class="form-register">
                <h1 class="h3 mb-3 font-weight-normal">Please register</h1>

                <label for="inputName" class="sr-only">Name</label>
                <input type="name" id="inputName" class="form-control" placeholder="Name" v-model="registerForm.name"
                       required autofocus>

                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address"
                       v-model="registerForm.email" required>

                <!--<label for="inputPhone" class="sr-only">Phone</label>
                <input type="phone" id="inputPhone" class="form-control" placeholder="phone"
                       v-model="registerForm.phone" required>-->

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                       v-model="registerForm.password" required>

                <div class="btn btn-lg btn-primary btn-block" type="submit" @click="register">Register</div>

                <p class="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
            </form>
        </div>
    </section>
</template>

<script>
    // import NavBarOne from "./NavBarOne";
    import Header from "./header/header"
    import account from "@/assets/js/account/account"

    export default {
        name: "login",
        components: {
            Header,
        },
        data() {
            return {
                registerForm: {
                    name: '',
                    email: '',
                    password: '',
                    // phone:'',
                },
            }
        },
        methods: {
            register() {
                let postData = this.registerForm;
                account.register(postData).then((res) => {
                    if (res.data.success) {
                        this.$router.push({
                            name: 'login',
                            params: {
                                item: postData
                            }
                        })
                    }
                }).catch((err) => {
                    // console.log(err);
                    // this.$message({
                    //     type: 'info',
                    //     message: err.errors.email[0]
                    // });
                })
                /*this.axios({
                    url: "api/register",
                    method: "post",
                    params: JSON.stringify(postData)
                }).then(res => {
                    // debugger
                    window.console.log(res)
                    /!*if (res.data.status) {
                        this.$router.push('/login')
                    }*!/
                });*/
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

    .form-register {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 5rem auto;
    }

    .form-register .checkbox {
        font-weight: 400;
    }

    .form-register .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-register .form-control:focus {
        z-index: 2;
    }

    .form-register input[type="email"] {
        margin-bottom: -1px;
        border-radius: 0;
    }

    .form-register input[type="phone"] {
        margin-bottom: -1px;
        border-radius: 0;
    }

    .form-register input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .form-register input[type="name"] {
        margin-bottom: -1px;
        /*margin-bottom: 10px;*/
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

</style>
