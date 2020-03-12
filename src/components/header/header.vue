<template>
    <div id="nav-header" :class="curtain === true ? 'nav-header nav-header-active' : 'nav-header' ">

        <div class="header-menu" v-show="!curtain">
            <div class="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="d-block mb-2 svgClass">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                    <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                    <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                    <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                    <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                    <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                </svg>
                <a class="svgText" href="/">SmartHome</a>
            </div>
            <!--<div class="menu-item">
                <router-link to="../homepage">
                    <div class="menu-item-text">主页</div>
                </router-link>
            </div>-->
            <div class="menu-item">
                <div class="menu-item-text" @click="toPage('/')">热销产品</div>
            </div>
            <div class="menu-item">
                <div class="menu-item-text" @click="toPage('/')">上新</div>
            </div>
            <div class="menu-item">
                <div class="menu-item-text" @click="toPage('/')">概念产品</div>
            </div>
            <div class="menu-item">
                <div class="menu-item-text" @click="toPage('/')">体验馆</div>
            </div>
            <div class="menu-item">
                <div class="menu-item-text" @click="toPage('/shoppingBag')">购物袋</div>
            </div>
            <div class="menu-item">
                <div class="menu-item-text" @click="toPage('/account/personal')">账户</div>
            </div>
            <div class="menu-item search-item" @click="tosearch">
                <!--<a id="ac-gn-link-search" class="ac-gn-link ac-gn-link-search" href="/cn/search"
                   data-analytics-title="search" data-analytics-click="search" data-analytics-intrapage-link=""
                   aria-label="搜索 apple.com.cn" role="button" aria-haspopup="true"></a>-->
                <!--<div class="menu-item-text">购物车</div>-->
                <img class="search-image" src="../../assets/img/header/search.png">
            </div>
        </div>
        <search :show="curtain" @changeEvent="changeEvent"/>

    </div>
</template>

<script>
    import Search from "./search";

    export default {
        name: "nav-header",
        components: {Search},
        data() {
            return {
                activeIndex: '1',
                curtain: false
            }
        },
        mounted() {
        },
        computed: {},
        watch: {},
        methods: {
            // handleSelect(key, keyPath) {
            //     window.console.log(key, keyPath);
            // },
            tosearch() {
                this.curtain = true;
            },
            changeEvent(curtain) {
                this.curtain = curtain
            },
            toPage(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav-header-active {
        background: #000 !important;
        width: 100%;
        height: 44px;
    }

    .nav-header {
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 44px;

        .header-menu {
            overflow: hidden;
            height: 44px;
            display: flex;
            max-width: 980px;
            margin: 0 auto;
            justify-content: space-between;

            .menu-item {
                line-height: 44px;
                text-decoration: none;
                cursor: pointer;

                .menu-item-text {
                    margin: 0 10px;
                    font-size: 14px;
                    color: #f5f5f7;
                    font-weight: 400;
                    opacity: .8;
                    /*outline-offset: -7px;*/
                    font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                }

                .search-image {
                    width: 22px;
                    height: 22px;
                    margin: 0 10px;
                }

                .svgClass {
                    color: #f5f7fa;
                    float: left;
                    margin-top: 9px;
                    margin-right: 10px;
                }

                .svgText {
                    float: left;
                    color: #f5f5f7;
                    font-weight: 400;
                    opacity: .8;
                    /*outline-offset: -7px;*/
                    font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                }
            }

            .menu-item:hover {
                line-height: 44px;
                cursor: pointer;

                .menu-item-text {
                    margin: 0 10px;
                    font-size: 14px;
                    color: #f5f5f7;
                    font-weight: 400;
                    opacity: .95;
                    /*outline-offset: -7px;*/
                    font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                }

                .search-image {
                    width: 22px;
                    height: 22px;
                    margin: 0 10px;
                }
            }

            .search-item {
                display: flex;
                align-items: center;
            }
        }
    }
</style>