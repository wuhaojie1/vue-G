<template>
    <div id="order">
        <div class="headline-nav-container">
            <UserNave :userNaveData="userNaveData"></UserNave>
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
    import UserNave from "../../components/accout/userNave";
    export default {
        name: "order",
        components: {UserNave},
        data() {
            return {
                userNaveData: [
                    {
                        path: '#',
                        name: '我的订单',
                    }
                ],
            }
        },
        methods: {}

    }
</script>

<style scoped lang="less">
    #order {
        .headline-nav-container {
            position: relative;
            margin-bottom: 20px;

            .uc-warp {

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