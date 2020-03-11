<template>
    <div id="shippingAddress">
        <div class="address-template">
            <UserNave :userNaveData="userNaveData"></UserNave>
            <div class="address-card-list-wrap uc-warp">
                <ul class="address-card-list clearfix">
                    <li class="address-card">
                        <input id="account-account1-2873038"
                               type="radio"
                               name="selectedAddress-account1"
                               class=""
                               value="2873038">
                        <label for="account-account1-2873038">
                            <span class="default isdefault">默认</span>
                            <p title="巫**" class="receiver name">巫**</p>
                            <p title="四川省 内江市" class="region">四川省 内江市</p>
                            <p title="隆昌县 ********" class="area">隆昌县 ********</p>
                            <p title="********" class="street">********</p>
                            <p title="Tel: 152****708" class="mobile">电话: 152****708</p>
                            <div class="btns-box">
                                <a href="javascript:void(0)" class="text-blue disabled">默认地址</a>
                                <span>|</span>
                                <a href="javascript:void(0)" class="text-blue">删除</a>
                                <span>|</span>
                                <a href="javascript:void(0)" class="text-blue">修改</a>
                            </div>
                        </label>
                    </li>
                    <li class="address-card-add">
                        <input id="account-account1-0"
                               type="radio"
                               name="selectedAddress-account1"
                               value="0">
                        <label for="account-account1-0">
                            <div><i class="plus"></i>
                                <span>新增地址</span>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import UserNave from "../../components/accout/userNave";

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
                ]
            }
        },
        methods: {},
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

                                .text-blue {
                                    color: #09c;
                                }

                                a {
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