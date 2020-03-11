<template>
    <div id="shippingAddress">
        <div class="address-template">
            <UserNave :userNaveData="userNaveData"
                      @back="back"></UserNave>
            <div class="address-card-list-wrap uc-warp" v-if="userNaveData.length===1">
                <ul class="address-card-list clearfix">
                    <li class="address-card" v-for="(item,index) in addressData" :key="index">
                        <input id="account-account1-2873038"
                               type="radio"
                               name="selectedAddress-account1"
                               class=""
                               value="2873038">
                        <label for="account-account1-2873038">
                            <span class="default isdefault" v-if="item.isDefault">默认</span>
                            <p class="receiver name">{{item.name}}</p>
                            <p class="region">{{item.region}}</p>
                            <p class="area">{{item.area}}</p>
                            <p class="street">{{item.street}}</p>
                            <p class="mobile">电话:{{item.mobile}}</p>
                            <div class="btns-box">
                                <div :class="item.isDefault?'text-blue disabled':'text-blue'"
                                     @click="setDefault(item.isDefault)">默认地址
                                </div>
                                <span>|</span>
                                <div class="text-blue" @click="delAddress">删除</div>
                                <span>|</span>
                                <div class="text-blue" @click="updateAddress">修改</div>
                            </div>
                        </label>
                    </li>
                    <li class="address-card-add">
                        <input id="account-account1-0"
                               type="radio"
                               name="selectedAddress-account1"
                               value="0">
                        <label for="account-account1-0" @click="newAddress">
                            <div><i class="plus"></i>
                                <span>新增地址</span>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import UserNave from "../../components/accout/userNave";
    import newAddress from "./newAddress";

    export default {
        name: "shippingAddress",
        components: {UserNave},
        data() {
            return {
                userNaveData: [
                    {
                        path: '/account/shippingAddress',
                        name: '地址',
                    },
                    /*{
                        path: '',
                        name: '新增地址',
                    },*/
                ],
                addressData: [
                    {
                        isDefault: true,
                        name: '巫浩洁',
                        region: '四川省 内江市',
                        area: '隆昌县 ********',
                        street: '********',
                        mobile: '15282148708'
                    },
                    {
                        isDefault: false,
                        name: '巫浩洁',
                        region: '四川省 内江市',
                        area: '隆昌县 ********',
                        street: '********',
                        mobile: '15282148708'
                    },
                ],
            }
        },
        methods: {
            setDefault(isDefault) {
                if (!isDefault) {
                    console.log(isDefault)
                }
            },
            delAddress() {

            },
            updateAddress() {

            },

            newAddress() {
                let obj = {
                    path: '',
                    name: '新增地址',
                };
                this.userNaveData.push(obj);
                this.$router.push(newAddress)
            },
            back(item) {
                console.log(item);
                this.userNaveData = []
            }
        },
    }
</script>

<style scoped lang="less">
    #shippingAddress {
        .address-template {
            .address-card-list-wrap {
                background-color: #fff;
                box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
                padding: 30px 20px;
                min-height: 550px;

                .address-card-list {
                    .address-card, .address-card-add {
                        /*width: 100%;*/
                        position: relative;
                        /*padding-top: 5px;*/
                        width: 50%;
                        float: left;
                        padding: 0 10px;

                        input {
                            width: 1px;
                            height: 1px;
                            position: absolute;
                            left: 0;
                            top: 0;
                            opacity: 0;
                            box-sizing: border-box;
                            padding: 0;
                            border-style: none;
                        }

                        label {
                            height: 280px;
                            background: none;
                            /*height: 60px;*/
                            border: 2px dashed #999;
                            padding: 20px;
                            font-size: 16px;
                            color: #999;
                            background: #fff;
                            position: relative;
                            width: 100%;
                            display: block;
                            border-radius: 4px;
                            cursor: default;
                        }
                    }

                    .address-card {
                        margin-bottom: 10px;
                        width: 50%;
                        float: left;
                        padding: 0 10px;

                        label {
                            border: 1px solid #dfdfdf;
                            padding: 30px 20px 20px;
                            position: relative;
                            cursor: pointer;

                            .default {
                                position: absolute;
                                top: 20px;
                                right: 20px;
                                font-size: 12px;
                                line-height: 18px;
                                display: none;
                                padding-left: 15px;
                            }

                            .isdefault {
                                display: block;
                            }

                            p {
                                color: #333;
                                font-size: 14px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                word-wrap: break-word;
                                text-align: left;
                                line-height: 1.5;
                            }

                            .name {
                                color: #000;
                                font-size: 16px;
                                padding-bottom: 10px;
                                border-bottom: 1px solid #efefef;
                                margin-bottom: 1em;
                            }

                            .mobile {
                                margin-top: 10px;
                            }

                            .btns-box {
                                text-align: right;
                                font-size: 14px;
                                margin-top: 20px;
                                display: flex;
                                justify-content: flex-end;

                                .text-blue {
                                    color: #09c;
                                }

                                div {
                                    background-color: transparent;
                                    color: inherit;
                                    text-decoration: none;
                                    padding: 0;
                                    margin: 0;
                                    cursor: pointer;
                                }

                                span {
                                    margin: 0 10px;
                                    color: #bbb;
                                    font-size: 12px;
                                }

                                .disabled {
                                    color: #ccc;
                                    pointer-events: none;
                                    cursor: not-allowed;
                                }
                            }
                        }

                        label:hover {
                            box-shadow: 4px 4px 10px #cdcdcd;
                            border: 1px solid #dfdfdf;
                            padding: 30px 20px 20px;
                            position: relative;
                            cursor: pointer;
                        }
                    }

                    .address-card-add {
                        label {
                            div {
                                position: absolute;
                                width: 100%;
                                text-align: center;
                                left: 0;
                                top: 50%;
                                -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                            }
                        }

                        label:hover {
                            border: 2px dashed #000000;
                            color: #000000;
                            cursor: pointer;
                        }


                    }
                }
            }
        }


    }
</style>