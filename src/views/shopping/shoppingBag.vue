<template>
    <div id="shoppingBag">
        <Header></Header>
        <div class="shoppingBag-body">
            <div class="body-money">
                <div class="money">你的购物袋总计 RMB{{money}}</div>
                <div class="transport">所有订单均可享受免费送货和退货服务。</div>
                <div class="bill-box">
                    <div class="btn  btn-primary bill">结账</div>
                </div>
            </div>
            <div class="body-goods">
                <shoppingBagCard
                        :goodsData="goodsData"
                        @changeGoodsStatus="changeGoodsStatus"
                        @deletegoods="deletegoods"
                        @addressChange="addressChange">
                </shoppingBagCard>
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
                            <div class="btn  btn-primary settle">结账</div>
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
                value: [],
                addresses: [],
                /*options: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [
                        {
                            value: 'shejiyuanze',
                            label: '设计原则',
                            children: [
                            {
                                value: 'yizhi',
                                label: '一致'
                            }, {
                                value: 'fankui',
                                label: '反馈'
                            }, {
                                value: 'xiaolv',
                                label: '效率'
                            }, {
                                value: 'kekong',
                                label: '可控'
                            }]
                        },
                        {
                            value: 'daohang',
                            label: '导航',
                            children: [{
                                value: 'cexiangdaohang',
                                label: '侧向导航'
                            }, {
                                value: 'dingbudaohang',
                                label: '顶部导航'
                            }]
                        }]
                    },
                    {
                        value: 'zujian',
                        label: '组件',
                        children: [{
                            value: 'basic',
                            label: 'Basic',
                            children: [{
                                value: 'layout',
                                label: 'Layout 布局'
                            }, {
                                value: 'color',
                                label: 'Color 色彩'
                            }, {
                                value: 'typography',
                                label: 'Typography 字体'
                            }, {
                                value: 'icon',
                                label: 'Icon 图标'
                            }, {
                                value: 'button',
                                label: 'Button 按钮'
                            }]
                        }, {
                            value: 'form',
                            label: 'Form',
                            children: [{
                                value: 'radio',
                                label: 'Radio 单选框'
                            }, {
                                value: 'checkbox',
                                label: 'Checkbox 多选框'
                            }, {
                                value: 'input',
                                label: 'Input 输入框'
                            }, {
                                value: 'input-number',
                                label: 'InputNumber 计数器'
                            }, {
                                value: 'select',
                                label: 'Select 选择器'
                            }, {
                                value: 'cascader',
                                label: 'Cascader 级联选择器'
                            }, {
                                value: 'switch',
                                label: 'Switch 开关'
                            }, {
                                value: 'slider',
                                label: 'Slider 滑块'
                            }, {
                                value: 'time-picker',
                                label: 'TimePicker 时间选择器'
                            }, {
                                value: 'date-picker',
                                label: 'DatePicker 日期选择器'
                            }, {
                                value: 'datetime-picker',
                                label: 'DateTimePicker 日期时间选择器'
                            }, {
                                value: 'upload',
                                label: 'Upload 上传'
                            }, {
                                value: 'rate',
                                label: 'Rate 评分'
                            }, {
                                value: 'form',
                                label: 'Form 表单'
                            }]
                        },
                            {
                                value: 'data',
                                label: 'Data',
                                children: [{
                                    value: 'table',
                                    label: 'Table 表格'
                                }, {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                }, {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                }, {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                }, {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                }, {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }]
                            }, {
                                value: 'notice',
                                label: 'Notice',
                                children: [{
                                    value: 'alert',
                                    label: 'Alert 警告'
                                }, {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                }, {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                }, {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                }, {
                                    value: 'notification',
                                    label: 'Notification 通知'
                                }]
                            }, {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [{
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                }, {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                }, {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                }, {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                }, {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }]
                            }, {
                                value: 'others',
                                label: 'Others',
                                children: [{
                                    value: 'dialog',
                                    label: 'Dialog 对话框'
                                }, {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                }, {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                }, {
                                    value: 'card',
                                    label: 'Card 卡片'
                                }, {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                }, {
                                    value: 'collapse',
                                    label: 'Collapse 折叠面板'
                                }]
                            }]
                    },
                    {
                        value: 'ziyuan',
                        label: '资源',
                        children: [{
                            value: 'axure',
                            label: 'Axure Components'
                        }, {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        }, {
                            value: 'jiaohu',
                            label: '组件交互文档'
                        }]
                    }],*/
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
        methods: {
            changeGoodsStatus(item, index) {
                this.goodsData[index].showgoods = !item.showgoods
            },
            addressChange(address, index) {
                console.log(address);
                console.log(index);
                this.goodsData[index].address = address
            },
            deletegoods(item) {
                console.log(item)
                let that = this;
                let postData = {
                    id: item.id
                };
                shoppingBag.deleteGoods(postData).then((res)=>{
                    console.log(res)
                    that.getGoodsList(that.goodsAddressList)
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
                        let obj = findCity(citys, el.provinceid, el.cityid, el.countyid)
                        let tempObj = {
                            value: obj.provinceName + '-' + obj.cityName + '-' + obj.countyName,
                            labels: [
                                obj.provinceid,
                                obj.cityid,
                                obj.countyid,
                            ]
                        };
                        tempArray.push(tempObj)
                    });
                    that.goodsAddressList = tempArray;
                    that.getGoodsList(tempArray)
                });

            },
            getGoodsList(goodsAddress) {
                let that = this
                shoppingBag.getGoods().then(res => {
                    let contPrice = 0;
                    let tempArray = [];
                    let data = res.data;
                    data.forEach(el => {
                        contPrice = contPrice+el.price;
                        let obj = {
                            id: el.id,
                            imgSrc: el.imgSrc,
                            goodsName: el.goodsName,
                            num: el.num,
                            price: el.price,
                            showgoods: false,
                            goodsDetail: [
                                {
                                    goodsTitle:el.goodsTitle,
                                    goodsDetailMsg:that.toArray(el.goodsDetailMsg)
                                }
                            ],
                            address: [],
                            goodsAddress: goodsAddress,
                            deliveryTime: el.deliveryTime,
                        };
                        tempArray.push(obj)
                    });
                    that.goodsData = tempArray;
                    that.money = contPrice

                })
                // this.goodsData = [{
                //     imgSrc: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_CN?wid=800&hei=800&fmt=jpeg&qlt=80&op_usm=0.5,1.5&fit=constrain&.v=1572654981479',
                //     goodsName: '16 英寸 MacBook Pro - 深空灰色',
                //     num: 1,
                //     price: '17399',
                //     showgoods: false,
                //     goodsDetail: [
                //         {
                //             goodsTitle: '硬件',
                //             goodsDetailMsg: [
                //                 '2.4GHz 8 核第九代 Intel Core i9 处理器，Turbo Boost 最高可达 5.0GHz', '64GB 2666MHz DDR4 内存', 'AMD Radeon Pro 5300M 图形处理器，配备 4GB GDDR6 显存', '512GB 固态硬盘', '采用原彩显示技术的 16 英寸视网膜显示屏', '四个雷雳 3 端口', '触控栏和触控 ID', '背光键盘 - 中文 (拼音)', '配件套件',
                //             ],
                //         }
                //     ],
                //     address: [],
                //     goodsAddress: goodsAddress,
                //     deliveryTime: '1-2 周发货。'
                // }]
            },
            toArray(data){
                return data.split(',');
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