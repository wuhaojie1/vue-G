<template>
    <div id="account">
        <Header></Header>
        <div class="container-infinite">
            <div class="container-text">
                <div class="margin-8x"></div>
                <!--导航-->
                <NavLeftContainer
                        :navData="navData"
                        :userMsg="userMsg"
                        @topage="topage">
                </NavLeftContainer>

                <router-view class="router-view"></router-view>
            </div>
            <div class="clearfix"></div>

        </div>
    </div>
</template>

<script>
    import Header from "../../components/header/header"
    import NavLeftContainer from "../../components/accout/navLeftContainer";
    import localStorage from "../../assets/js/localStorage";

    export default {
        name: "account",
        components: {
            NavLeftContainer,
            Header
        },
        mounted() {
            this.$router.push('/account/personal');
            // console.log(localStorage.get('isLogin'))
            let isLogin = localStorage.get('isLogin')
            if (!isLogin) {
                //用户未登录
                this.$router.push('/login');

            } else {
                //用户以登录
                // console.log(this.navData[this.navData.length - 1]);
                /*this.navData[this.navData.length - 1] = {
                    names: [
                        {
                            href: "#",
                            name: "退出登录"
                        },
                    ]
                };*/
                this.getUserMsg()
            }

        },
        data() {
            return {
                navData: [
                    {
                        names: [
                            {
                                href: "/account/order",
                                name: "订单"
                            },
                        ]
                    },
                    {
                        title: "账户管理",
                        names: [
                            {
                                href: "/account/personal",
                                name: "个人信息"
                            },
                            {
                                href: "/account/shippingAddress",
                                name: "收货地址"
                            },
                            {
                                href: "#",
                                name: "我的收藏"
                            },
                        ]
                    },
                    {
                        title: "售后服务",
                        names: [
                            {
                                href: "#",
                                name: "申请售后"
                            },
                            {
                                href: "#",
                                name: "售后记录"
                            },
                        ]
                    },
                    {
                        names: [
                            {
                                href: "/login",
                                name: "登录"
                            },
                            {
                                href: "/register",
                                name: "注册"
                            },
                            {
                                href: "#",
                                name: "退出登录"
                            },
                        ]
                    },
                ],
                userMsg: {
                    userEmail: 'O1493567865996',
                    headerImg: 'https://statics.oneplus.cn/ov/assets/images/referral/avatar-default.png',
                },
                isLogin: null
            }
        },
        methods: {
            topage(nameItem) {
                // console.log(nameItem)
                let href = nameItem.href;
                this.$router.push(href)
            },
            getUserMsg() {
                this.axios({
                    url: "",
                    method: "post",
                }).then((res) => {
                    console.log(res)
                })
            }
        }

    }
</script>

<style scoped lang="less">
    #account {

        .container-infinite {
            background-color: #f3f3f3;
            display: block;
            margin: auto;
            width: 100%;

            .container-text {
                display: block;
                margin: auto;
                width: 100%;
                max-width: 1200px;
                min-width: 300px;

                .margin-8x {
                    padding-bottom: 40px;
                    height: 0;
                    width: 100%;
                }

                .router-view {
                    margin-left: 340px;
                    margin-bottom: 60px;
                }
            }

            .uc-container {

            }
        }

    }
</style>