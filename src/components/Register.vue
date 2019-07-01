<template>
    <section>
        <nav-bar-one/>

        <div class="text-center">
            <form class="form-register">
                <h1 class="h3 mb-3 font-weight-normal">Please register</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
            </form>
        </div>
    </section>
</template>

<script>
    import NavBarOne from "./NavBarOne";

    export default {
        name: "login",
        components: {NavBarOne}
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
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-register input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

</style>
