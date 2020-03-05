<template>
    <div class="index-outline">
        <!--导航栏1-->
        <!--<nav-bar-one/>-->
        <!--导航栏2-->
        <!--<nav-bartwo class="sticky-top"/>-->
        <!--上新-->
        <header></header>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal">{{dsp4}}</h1>
                <p class="lead font-weight-normal">{{intr}}</p>
                <a class="btn btn-outline-secondary" href="#">Learn more</a>
            </div>
        </div>
        <!--分类-->
        <div data-target="nav2" data-spy="scroll" data-offset="0">
            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
                     id="item1">
                    <a href="/TwoDetail">
                        <div class="my-3 py-3">
                            <h2 class="display-5">Door Locks</h2>
                            <p class="lead">And an even wittier subheading.</p>
                        </div>
                        <div class="bg-light box-shadow mx-auto"
                             style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">

                        </div>
                    </a>
                </div>
                <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" id="item2">
                    <div class="my-3 p-3">
                        <h2 class="display-5">Voice Assistants</h2>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-dark box-shadow mx-auto"
                         style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" id="item3">
                    <div class="my-3 p-3">
                        <h2 class="display-5">Lighting</h2>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-dark box-shadow mx-auto"
                         style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                </div>
                <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
                     id="item4">
                    <div class="my-3 py-3">
                        <h2 class="display-5">Idiot Box</h2>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-light box-shadow mx-auto"
                         style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
                     id="item5">
                    <div class="my-3 p-3">
                        <h2 class="display-5">Refrigerator</h2>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-white box-shadow mx-auto"
                         style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                </div>
                <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" id="item6">
                    <div class="my-3 py-3">
                        <h2 class="display-5">Intelligent Sweeper</h2>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-white box-shadow mx-auto"
                         style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                </div>
            </div>
        </div>
        <!--footer-->
        <Footer/>
    </div>
</template>

<script>
    import {WOW} from 'wowjs';
    import Footer from "../components/Footer";
    import header from "../components/header";
    import NavBartwo from "../components/NavBartwo";
    import NavBarOne from "../components/NavBarOne";


    export default {
        name: "index",
        components: {NavBarOne, NavBartwo, Footer, header},
        data() {
            return {
                dsp4: "TECH SUPPORT TO YOUR DOOR",
                intr: "Professional Installation Powered By HelloTech",
            }
        },


        mounted() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init()
        }
    }
</script>

<style scoped>
    body {
        position: relative;
    }

    .container {
        max-width: 960px;
    }

    /*
     * Custom translucent site header
     */

    .site-header {
        background-color: rgba(0, 0, 0, .85);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
    }

    .site-header a {
        color: #999;
        transition: ease-in-out color .15s;
    }

    .site-header a:hover {
        color: #fff;
        text-decoration: none;
    }

    .mb-2 {
        color: coral;
        margin: 0.5rem;
    }

    .search-btn {
        margin-left: 0.5rem;
    }

    .li-a {
        margin: 0 0.5rem;
    }


    /*
     * Dummy devices (replace them with your own or something else entirely!)
     */

    .product-device {
        position: absolute;
        right: 10%;
        bottom: -30%;
        width: 300px;
        height: 540px;
        background-color: #333;
        border-radius: 21px;
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
    }

    .product-device::before {
        position: absolute;
        top: 10%;
        right: 10px;
        bottom: 10%;
        left: 10px;
        content: "";
        background-color: rgba(255, 255, 255, .1);
        border-radius: 5px;
    }

    .product-device-2 {
        top: -25%;
        right: auto;
        bottom: 0;
        left: 5%;
        background-color: #e5e5e5;
    }


    /*
     * Extra utilities
     */

    .border-top {
        border-top: 1px solid #e5e5e5;
    }

    .border-bottom {
        border-bottom: 1px solid #e5e5e5;
    }

    .box-shadow {
        box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
    }

    .flex-equal > * {
        -ms-flex: 1;
        -webkit-box-flex: 1;
        flex: 1;
    }

    @media (min-width: 768px) {
        .flex-md-equal > * {
            -ms-flex: 1;
            -webkit-box-flex: 1;
            flex: 1;
        }
    }

    .overflow-hidden {
        overflow: hidden;
    }

</style>
