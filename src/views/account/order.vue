<template>
    <div id="order">
        <div class="headline-nav-container">
            <div class="user-nav">
                <div class="text-black flex">
                    <div>
                        <a href="#/" class="text-base">我的订单</a>
                    </div>
                </div>
            </div>
            <div class="uc-warp">
                <div class="order-container">
                    <div class="order-empty-container flex">
                        <div class="empty-tip">
                            暂无任何订单
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order",
        data() {
            return {}
        },
        methods: {}

    }
</script>

<style scoped lang="less">
    #order {
        .headline-nav-container {
            position: relative;
            margin-bottom: 20px;

            .user-nav {
                padding: 18px 30px;
                box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
                background-color: #fff;

                .text-black {
                    -webkit-box-pack: justify;
                    justify-content: space-between;

                    .text-base {
                        display: inline;
                        margin-right: 14px;
                        cursor: pointer;
                        font-size: 16px;
                        line-height: 1.5;
                        color: #101920;
                        background-color: transparent;
                    }
                }
            }

            .uc-warp {
                margin-top: 20px;

                .order-container {
                    background-color: #fff;
                    height: 500px;

                    .order-empty-container {
                        height: 100%;
                        align-items: center;
                        justify-content: center;

                        .empty-content {
                            width: 340px;
                            padding-bottom: 100px;
                            align-items: center;
                            justify-content: center;

                            .empty-icon {
                                font-size: 80px;
                                color: #ccc;
                                line-height: 1;
                            }

                            .empty-tip {
                                font-size: 16px;
                                line-height: 1.5;
                                color: #666;
                            }
                        }
                    }
                }
            }
        }

    }
</style>