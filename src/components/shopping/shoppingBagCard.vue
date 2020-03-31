<template>
    <div id="goodsDetailCard">
        <div class="goods-detail" v-for="(item,index) in goodsData" :key="index">
            <div class="goods-detail-left">
                <img class="goods-detail-img" :src="item.imgSrc">
            </div>
            <div class="goods-detail-right">
                <div class="goods-detail-summary">
                    <div class="goods-basic-msg">
                        <div class="goods-name">{{item.goodsName}}</div>
                        <el-input-number v-model="item.num" :min="1" :max="10"
                                         label="描述文字" size="mini"></el-input-number>
                        <div class="goods-price">RMB {{item.price}}</div>
                    </div>
                    <div class="goods-detail-msg">
                        <div class="goods-detail-showMsg goods-detail-hoverText"
                             @click="changeGoodsStatus(item,index)">
                            显示产品详情
                        </div>
                        <div class="goods-detail-del goods-detail-hoverText" @click="deletegoods(item)">移除</div>
                    </div>
                    <el-collapse-transition>
                        <div class="goods-detail-showing" v-show="item.showgoods"
                             v-for="(goodsItem,index) in item.goodsDetail" :key="index">
                            <div class="goods-detail-showing-title">{{goodsItem.goodsTitle}}</div>
                            <ul class="goods-detail-showing-ul"
                                v-for="(itemDetailMsg,index) in goodsItem.goodsDetailMsg" :key="index">
                                <li class="goods-detail-showing-li">{{itemDetailMsg}}</li>
                            </ul>
                        </div>
                    </el-collapse-transition>

                    <div class="goods-detail-address">
                        <div class="toAddress">
                            <div class="goods-detail-address-text">送货至：</div>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in item.goodsAddress"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <!--<el-cascader
                                    v-model="item.address"
                                    :options="item.goodsAddress"
                                    :props="{ expandTrigger: 'hover' }"
                                    @change="handleChange(item.address,index)">
                            </el-cascader>-->
                        </div>
                        <div class="time">
                            <svg width="24" height="24"
                                 class="as-svgicon as-svgicon-shipping as-svgicon-16 as-svgicon-shipping16"
                                 role="img" aria-hidden="true">
                                <path d="M12 3.31L4 7.37v8.9l8 4.43 8-4.43v-8.9l-8-4.06zm0 7.95L9.38 9.81l6.25-3.53 2.8 1.42L12 11.26zm2.56-5.53l-6.2 3.51L5.57 7.7 12 4.44l2.56 1.29zM5 8.53l6.5 3.6v7.16L5 15.68V8.53zm7.5 10.75v-7.16l6.5-3.6v7.15l-6.5 3.61z"
                                      fill="currentColor"></path>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                            </svg>
                            <div class="deliveryTime">{{item.deliveryTime}}</div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsDetailCard",
        props: {
            goodsData: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                value: '',
            }
        },
        methods: {
            changeGoodsStatus(item, index) {
                this.$emit('changeGoodsStatus', item, index)
            },

            deletegoods(item) {
                this.$emit('deletegoods', item)
            },
            handleChange(address, index) {
                this.$emit('addressChange', address, index)
            },
        }

    }
</script>

<style scoped lang="less">
    #goodsDetailCard {
        .goods-detailOther {
            border-top: 1px solid #d6d6d6;
            padding-top: 70px;
        }

        .goods-detail {
            width: 980px;
            display: flex;


            .goods-detail-left {
                width: 203px;
                text-align: center;
                margin-right: 42px;
                margin-top: 2px;

                .goods-detail-img {
                    max-width: 203px;
                    max-height: 203px;
                    width: auto;
                    height: auto;
                }
            }

            .goods-detail-right {
                width: 75%;

                .goods-detail-summary {
                    .goods-basic-msg {
                        display: flex;
                        justify-content: space-between;
                        font-size: 24px;
                        line-height: 26px;
                        font-weight: 600;
                        letter-spacing: .009em;
                        font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                        color: #111;

                        .goods-name {

                        }

                        .goods-number {

                        }

                        .goods-price {

                        }

                    }

                    .goods-detail-msg {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 12px;

                        .goods-detail-showMsg {

                        }

                        .goods-detail-showMsg:hover {

                        }

                        .goods-detail-del {

                        }

                        .goods-detail-hoverText {
                            color: #0070c9;
                            cursor: pointer;

                        }

                        .goods-detail-hoverText:hover {
                            text-decoration: underline #0070c9;

                        }


                    }

                    .goods-detail-showing {
                        margin-top: 20px;

                        .goods-detail-showing-title {
                            font-size: 14px;
                            line-height: 1.42861;
                            letter-spacing: 0;
                            font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                            font-weight: 600;
                            text-align: left;
                        }

                        .goods-detail-showing-ul {
                            .goods-detail-showing-li {
                                font-size: 14px;
                                line-height: 20px;
                                font-weight: 400;
                                letter-spacing: -.016em;
                                font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                                margin-top: 6px;
                                text-align: left;
                            }

                        }
                    }

                    .goods-detail-address {
                        margin-top: 21px;
                        padding-top: 21px;
                        border-top: 1px solid #d6d6d6;
                        padding-bottom: 70px;

                        .toAddress {
                            display: flex;
                            padding: 18px 0;

                            .goods-detail-address-text {
                                text-align: left;
                                line-height: 40px;
                            }
                        }

                        .time {
                            display: flex;

                            .deliveryTime {
                                line-height: 24px;
                            }

                        }


                        /*.goods-detail-freight-text{
                            display: flex;
                            justify-content: space-between;
                        }*/
                    }
                }


            }
        }
    }
</style>