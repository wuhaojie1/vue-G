<template>
    <div id="shoppingBag">
        <Header></Header>
        <div class="shoppingBag-body">
            <div class="body-money">
                <div class="money">你的购物袋总计 RMB{{money}}</div>
                <div class="transport">所有订单均可享受免费送货和退货服务。</div>
                <div class="bill-box">
                    <div class="btn  btn-primary bill" @click="bill">结账</div>
                </div>
            </div>

            <div class="body-goods">
                <shoppingBagCard
                        :goodsData="goodsData"
                        @changeGoodsStatus="changeGoodsStatus"
                        @deletegoods="deletegoods"
                        @changeNumber="changeNumber">
                </shoppingBagCard>
            </div>

            <div class="goods-detail-address">
                <div class="toAddress">
                    <div class="goods-detail-address-text">送货至：</div>
                    <el-select v-model="value"
                               placeholder="请选择"
                               @change="selectAddress">
                        <el-option
                                v-for="item in goodsAddressList"
                                :key="item.label"
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
                    <div class="deliveryTime">{{deliveryTime}}</div>
                </div>


            </div>

            <div class="goods-settle-account">
                <div class="goods-settle-right">
                    <div class="goods-settle-freight">
                        <div class="goods-freight-text">运费</div>
                        <div class="goods-freight-text">免费</div>
                    </div>
                    <div class="goods-freight-button">
                        <div class="goods-freight-money">
                            <div class="goods-freight-text">总计</div>
                            <div class="goods-freight-text">RMB {{money}}</div>
                        </div>
                        <div class="goods-freight-elBtn">
                            <div class="btn  btn-primary settle" @click="bill">结账</div>
                        </div>
                        <div style="clear:both"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/header/header"
    // import Footer from "../../components/Footer";
    import shoppingBagCard from "../../components/shopping/shoppingBagCard";
    import account from "../../assets/js/account/account";
    import shoppingBag from "../../assets/js/shoppingBag/shoppingBag";
    import localStorage from "../../assets/js/localStorage";
    import {findCity} from '../../assets/js/common'

    export default {
        name: "shoppingBag",
        components: {shoppingBagCard, Header},
        data() {
            return {
                money: '0',
                goodsAddressList: [],
                deliveryTime: '1-2 周发货。',
                value: [],
                provinceid: '',
                cityid: '',
                countyid: '',
                address: '',
                phone: '',
                name: '',
                addresses: [],
                goodsData: [
                    // {
                    //     imgSrc: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_CN?wid=800&hei=800&fmt=jpeg&qlt=80&op_usm=0.5,1.5&fit=constrain&.v=1572654981479',
                    //     goodsName: '16 英寸 MacBook Pro - 深空灰色',
                    //     num: 1,
                    //     price: 'RMB 17,399',
                    //     showgoods: false,
                    //     goodsDetail: [
                    //         {
                    //             goodsTitle: '硬件',
                    //             goodsDetailMsg: [
                    //                 '2.4GHz 8 核第九代 Intel Core i9 处理器，Turbo Boost 最高可达 5.0GHz',
                    //                 '64GB 2666MHz DDR4 内存',
                    //                 'AMD Radeon Pro 5300M 图形处理器，配备 4GB GDDR6 显存',
                    //                 '512GB 固态硬盘',
                    //                 '采用原彩显示技术的 16 英寸视网膜显示屏',
                    //                 '四个雷雳 3 端口',
                    //                 '触控栏和触控 ID',
                    //                 '背光键盘 - 中文 (拼音)',
                    //                 '配件套件',
                    //             ],
                    //         }
                    //     ],
                    //     address: [],
                    //     goodsAddress: JSON.parse(localStorage.get('region')),
                    //     deliveryTime: '1-2 周发货。'
                    // }
                ],
            }
        },
        mounted() {
            this.getAddressList()
        },
        watch: {
            // goodsData(v) {
            //     // debugger
            //     console.log(v)
            // }
        },
        methods: {
            changeGoodsStatus(item, index) {
                this.goodsData[index].showgoods = !item.showgoods
            },

            /* addressChange(address) {
                 this.addresses = address
             },*/

            selectAddress(value) {
                this.provinceid = value.provinceid;
                this.cityid = value.cityid;
                this.countyid = value.countyid;
                this.address = value.address;
                this.phone = value.phone;
                this.name = value.name;
            },
            bill() {
                // debugger
                let postData = this.getBillPostData();
                shoppingBag.billOrder(postData).then((res) => {
                    // console.log(res.data)
                    if (res.data.success) {
                        this.$message({
                            type: "success",
                            message: '结账成功'
                        });
                        this.goodsData.forEach(el => {
                            let obj = {
                                id: el.id
                            };
                            this.clearShopBag(obj)
                        })

                    }
                })
            },
            //结账成功后清空购物车
            clearShopBag(item){
                let postData = {
                    id: item.id
                };
                shoppingBag.deleteGoods(postData).then((res) => {
                    if (res.data.success) {
                        this.getGoodsList(this.goodsAddressList);
                    }
                })
            },

            getBillPostData() {
                // debugger
                let timestamp = (new Date()).valueOf();
                let randomNo = Math.floor(Math.random() * 10000);
                let id = JSON.parse(localStorage.get('userMsg')).id;

                // debugger
                let obj = {
                    orderNo: timestamp + randomNo + id,
                    goodsId: this.getGoodsId().id.join(','),
                    totalPrice: this.money,
                    goodsNumber: this.getGoodsId().num.join(','),
                    provinceid: this.provinceid,
                    cityid: this.cityid,
                    countyid: this.countyid,
                    address: this.address,
                    phone: this.phone,//联系电话
                    name: this.name,//收件人
                    status: 1
                };
                // debugger
                return obj
            },
            getGoodsId() {
                // debugger
                let id = [];
                let num = [];
                this.goodsData.forEach(el => {
                    id.push(el.goodsId);
                    num.push(el.num);
                });
                return {
                    id,
                    num,
                }
            },

            //移除商品
            deletegoods(item) {
                // console.log(item)
                let that = this;
                let postData = {
                    id: item.id
                };
                shoppingBag.deleteGoods(postData).then((res) => {
                    // console.log(res)
                    if (res.data.success) {
                        that.getGoodsList(that.goodsAddressList);
                        this.$message({
                            type: "success",
                            message: '商品已移出购物袋'
                        })
                    } else {
                        this.$message({
                            type: 'fail',
                            message: '商品删除失败'
                        })
                    }


                })
                // console.log(index)
            },


            getAddressList() {
                let that = this;
                let citys = JSON.parse(localStorage.get('region'));
                account.getShippingAddress().then((res) => {
                    let data = res.data;
                    let tempArray = [];
                    data.forEach(el => {
                        // console.log(el)
                        let obj = findCity(citys, el.provinceid, el.cityid, el.countyid)
                        let tempObj = {
                            label: obj.provinceName + '-' + obj.cityName + '-' + obj.countyName + '-' + el.address,
                            value: {
                                provinceid: obj.provinceid,
                                cityid: obj.cityid,
                                countyid: obj.countyid,
                                address: el.address,
                                name: el.name,
                                phone: el.phone,
                            }

                        };
                        tempArray.push(tempObj)
                    });
                    that.goodsAddressList = tempArray;
                    that.getGoodsList()
                });

            },

            getGoodsList() {
                shoppingBag.getGoods().then(res => {
                    let tempArray = [];
                    let data = res.data;
                    data.forEach(el => {
                        // contPrice = contPrice+el.price;
                        let obj = {
                            id: el.id,
                            imgSrc: el.imgSrc,
                            goodsName: el.goodsName,
                            num: el.num,
                            price: el.price,
                            totalPrice: el.num * el.price,
                            showgoods: false,
                            goodsId: el.goodsId,
                            goodsDetail: [
                                {
                                    goodsTitle: el.goodsTitle,
                                    goodsDetailMsg: this.toArray(el.goodsDetailMsg)
                                }
                            ],
                            address: [],
                            // goodsAddress: goodsAddress,
                            deliveryTime: el.deliveryTime,
                        };
                        tempArray.push(obj)
                    });
                    this.goodsData = tempArray;
                    this.countMoney()
                })

            },

            countMoney() {
                let tempMoney = 0;
                this.goodsData.forEach(el => {
                    tempMoney += el.totalPrice;
                });
                this.money = tempMoney;
            },
            toArray(data) {
                return data.split(',');
            },
            changeNumber(value, index) {
                // debugger
                this.goodsData[index].num = value;
                this.goodsData[index].totalPrice = value * this.goodsData[index].price
                this.countMoney()

            }
        }
    }
</script>

<style scoped lang="less">
    #shoppingBag {
        /*width: 100vw;*/
        /*overflow-x: hidden;*/
        /*box-sizing: border-box;*/

        .shoppingBag-body {
            width: 980px;
            margin: 0 auto;
            padding-top: 64px;
            margin-bottom: 100px;

            .body-money {
                text-align: center;
                padding-bottom: 60px;
                border-bottom: 1px solid #d6d6d6;

                .money {
                    font-size: 40px;
                    line-height: 1.1;
                    font-weight: 600;
                    letter-spacing: 0;
                    color: #111;
                    line-height: normal;
                    font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                    padding-bottom: 2px;
                }

                .transport {
                    padding-top: 13px;
                    font-size: 17px;
                    line-height: 1.47059;
                    font-weight: 400;
                    letter-spacing: -.022em;
                    font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                    background-color: #fff;
                    color: #333;
                    font-style: normal;
                }

                .bill-box {
                    display: flex;
                    justify-content: center;
                    margin-top: 30px;
                    /*height: 66px;*/

                    .bill {
                        height: 35px;
                        width: 290px;
                        font-size: 17px;
                        line-height: 1.47059;
                        font-weight: 400;
                        letter-spacing: -.022em;
                        font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                        background-color: #0070c9;
                        background: linear-gradient(#42a1ec, #0070c9);
                        border: 1px solid #07c;
                        border-radius: 4px;
                        color: #fff;
                        cursor: pointer;
                        display: inline-block;
                        min-width: 30px;
                        padding: 4px 15px;
                        text-align: center;
                        white-space: nowrap;
                    }
                }

            }

            .body-goods {
                margin: 70px 0 20px;

                .goods-detailOther {
                    border-top: 1px solid #d6d6d6;
                    padding-top: 70px;
                }

                .goods-detail {
                    width: 980px;
                    display: flex;


                    .goods-detail-left {
                        width: 25%;
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

            .goods-settle-account {
                border-top: 1px solid #d6d6d6;
                padding-top: 40px;

                .goods-settle-right {
                    margin-left: 25%;
                    width: 75%;

                    .goods-settle-freight {
                        display: flex;
                        justify-content: space-between;

                        .goods-freight-text {

                        }

                    }

                    .goods-freight-button {
                        border-top: 1px solid #d6d6d6;
                        margin-top: 16px;
                        padding-top: 19px;

                        .goods-freight-money {
                            display: flex;
                            justify-content: space-between;
                            font-size: 24px;
                            line-height: 1.16667;
                            font-weight: 600;
                            letter-spacing: .009em;
                            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                            color: #111;

                        }

                        .goods-freight-elBtn {
                            margin-top: 35px;
                            width: 360px;
                            float: right;

                            .settle {
                                width: 100%;
                                font-size: 17px;
                                line-height: 2.47059;
                                font-weight: 400;
                                letter-spacing: -.022em;
                                font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                                background-color: #0070c9;
                                background: linear-gradient(#42a1ec, #0070c9);
                                border: 1px solid #07c;
                                border-radius: 4px;
                                color: #fff;
                                cursor: pointer;
                                display: inline-block;
                                min-width: 30px;
                                padding: 4px 15px;
                                text-align: center;
                                white-space: nowrap;
                            }
                        }
                    }

                }

            }

        }
    }
</style>