<template>
    <div id="orderDetail">
        <UserNave :userNaveData="userNaveData"></UserNave>
        <div class="uc-warp">
            <div class="orderTitle">
                <div class="orderTitle-left">
                    你的订单详情
                </div>
                <div class="orderTitle-right">
                    <div class="orderNo">
                        订单号：{{orderDetail.orderNo}}
                    </div>
                    <div class="createDate">
                        下单日期：{{orderDetail.created_at}}
                    </div>
                </div>
            </div>
            <div class="orderGoods">
                <div class="orderGoods-box">
                    <div class="orderGoods-img">
                        <img :src="orderDetail.GoodsMsg[0].imgSrc">
                    </div>
                    <div class="orderGoods-msg">
                        <div class="orderGoods-msg-name">{{orderDetail.GoodsMsg[0].goodsName}}</div>
                        <div class="orderGoods-msg-arriveTime" v-if="orderDetail.status===3">
                            {{orderDetail.arrivetime}}
                        </div>
                        <div class="orderGoods-msg-step">
                            <el-steps :active="orderDetail.status">
                                <el-step title="待发货" icon="el-icon-box"></el-step>
                                <el-step title="已发货" icon="el-icon-truck"></el-step>
                                <el-step title="已收货" icon="el-icon-news"></el-step>
                            </el-steps>
                        </div>
                        <div class="orderGoods-msg-tip">包裹已送达订单中的指定地址。如果你选择了开具发票，发票将与商品分开寄送，通常在订单发货后的 3 个工作日内寄出。</div>
                    </div>
                </div>
                <div class="orderGoods-logistics" v-for="(item, index) in orderDetail.GoodsMsg" :key="index">
                    <div class="name">{{item.goodsName}}</div>
                    <div class="price">RMB {{item.price}}</div>
                    <div class="contactInformation">
                        <span>交货:</span>
                        <span>标准送货</span>
                        <span>{{orderDetail.name}}</span>
                        <span>{{orderDetail.AddressName}}</span>
                        <span>{{orderDetail.address}}</span>
                        <span>{{orderDetail.phone}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserNave from "../../components/accout/userNave";
    import shoppingBag from "../../assets/js/shoppingBag/shoppingBag";
    import localStorage from "../../assets/js/localStorage";
    import {findCity} from "../../assets/js/common";

    export default {
        name: "orderDetail",
        components: {UserNave},
        data() {
            return {
                userNaveData: [
                    {
                        path: '/account/order',
                        name: '我的订单',
                    },
                    {
                        path: '#',
                        name: '订单详情',
                    }
                ],
                orderDetail: {},

            }
        },
        mounted() {
            this.getOrderDetail()
        },
        methods: {
            getOrderDetail() {
                let postData = {
                    id: this.$route.params.id
                };
                // debugger
                let citys = JSON.parse(localStorage.get('region'));
                shoppingBag.getOrderDetail(postData).then(res => {
                    let obj = findCity(citys, res.data.provinceid, res.data.cityid, res.data.countyid);
                    this.orderDetail = {
                        ...res.data,
                        AddressName: obj.provinceName + ' ' + obj.cityName + ' ' + obj.countyName
                    }
                })
            }
        }

    }
</script>

<style scoped lang="less">
    #orderDetail {
        .uc-warp {
            background-color: #fff;
            padding-top: 10px;
            padding-bottom: 10px;

            .orderTitle {
                display: flex;
                justify-content: space-between;
                margin: 10px;

                .orderTitle-left {
                    font-family: SF Pro SC, SF Pro Display, SF Pro Icons, AOS Icons, PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif;
                    font-size: 28px;
                    line-height: 1.1;
                    font-weight: 600;
                    letter-spacing: 0;
                    color: #333;
                    align-self: flex-end;

                }

                .orderTitle-right {
                    font-size: 12px;
                    line-height: 1.33341;
                    font-weight: 400;
                    letter-spacing: -.01em;
                    font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                    text-align: right;

                }
            }

            .orderGoods {
                margin-top: 50px;
                /*justify-content: space-between;*/

                .orderGoods-box {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    padding-bottom: 50px;

                    .orderGoods-img {
                        img {
                            width: 270px;
                        }

                    }

                    .orderGoods-msg {
                        width: 570px;
                        text-align: left;

                        .orderGoods-msg-name {
                            font-size: 12px;
                            line-height: 1.33341;
                            font-weight: 400;
                            letter-spacing: -.01em;
                            font-family: SF Pro SC, SF Pro Text, SF Pro Icons, AOS Icons, PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif;

                        }

                        .orderGoods-msg-arriveTime {
                            color: #000;
                            font-size: 26px;
                            line-height: 1.125;
                            font-weight: 600;
                            letter-spacing: .004em;
                            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                            display: block;
                            padding-top: 6px;
                        }

                        .orderGoods-msg-step {
                            margin-top: 32px;
                        }

                        .orderGoods-msg-tip {
                            margin-top: 32px;
                        }

                    }

                }

                .orderGoods-logistics {
                    box-sizing: border-box;
                    border-top: 1px solid #d6d6d6;
                    display: flex;
                    justify-content: space-between;
                    padding: 30px 10px 30px;

                    .name {

                    }

                    .price {

                    }

                    .contactInformation {
                        display: flex;
                        flex-direction: column;
                        text-align: left;

                        span {
                            line-height: 1.5;
                        }
                    }
                }


            }
        }

    }
</style>