<template>
    <div id="order">
        <div class="headline-nav-container">
            <UserNave :userNaveData="userNaveData"></UserNave>
            <div class="uc-warp">
                <div class="order-container">
                    <!--<div class="order-empty-container flex">
                        <div class="empty-tip">
                            暂无任何订单
                        </div>
                    </div>-->
                    <el-card class="box-card" v-for=" (item, index) in orderList" :key="index">
                        <div slot="header" class="clearfix">
                            <span>订单号：{{item.orderNo}}</span>
                            <el-button style="float: right; padding: 3px 0"
                                       type="text"
                                       @click="todetail(item)">查看详情</el-button>
                        </div>
                        <el-steps :active="item.status" align-center>
                            <el-step title="待发货" icon="el-icon-box"></el-step>
                            <el-step title="已发货" icon="el-icon-truck"></el-step>
                            <el-step title="已收货" icon="el-icon-news"></el-step>
                        </el-steps>
                    </el-card>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserNave from "../../components/accout/userNave";
    import shoppingBag from "../../assets/js/shoppingBag/shoppingBag";

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
                orderList: []
            }
        },
        mounted() {
            this.getOrderList()
        },
        methods: {
            getOrderList() {
                // debugger
                shoppingBag.checkOrder().then(res => {
                    this.orderList = res.data
                })
            },
            todetail(item){
                // debugger
                // console.log(item)
                this.$router.push({
                    name:'orderDetail',
                    params:{
                        id:item.id
                    }
                })
            }
        }

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
                    /*height: 500px;*/
                    padding-top: 10px;
                    padding-bottom: 10px;

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

                    .box-card {
                        box-sizing: border-box;
                        margin: 10px;
                    }
                }
            }
        }

    }
</style>