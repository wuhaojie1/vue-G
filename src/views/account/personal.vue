<template>
    <div id="personal">
        <UserNave :userNaveData="userNaveData"></UserNave>
        <div class="uc-warp">
            <div class="user-center-info">
                <div class="account-list-container">
                    <div class="user-info-container">
                        <div class="basic-info-container">
                            <div class="basic-title">
                                <div class="basic-info-title">基本信息</div>
                                <div class="basic-info-tip">你的公开个人基本信息，将仅显示在论坛</div>
                            </div>
                            <div class="header-container">
                                <div class="user-avatar-container">
                                    <div class="user-avatar">
                                        <img :src="userHeaderImg">
                                    </div>
                                </div>
                                <!--<div class="text-center">上传图片</div>-->
                            </div>
                            <div class="basic-info">
                                <div class="item" v-for="(item,index) in userBasicInfoData" :key="index">
                                    <div class="item-text">
                                        <div class="username-title">{{item.nameTitle}}</div>
                                    </div>
                                    <div class="item-text">
                                        <div class="username">{{item.name}}</div>
                                        <div class="edit">
                                            <div class="tip" v-if="item.edit">{{item.tip}}</div>
                                            <div class="editBtn" v-if="item.edit">编辑</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="security-info-container">
                            <div class="security-title">
                                <div class="security-info-title">安全信息</div>
                                <div class="security-info-tip">安全信息是绝对保密的，我们不会透露给任何人</div>
                            </div>
                            <div class="basic-info">
                                <div class="item" v-for="(item,index) in userSecurityInfoData" :key="index">
                                    <div class="item-text">
                                        <div class="username-title">{{item.nameTitle}}</div>
                                    </div>
                                    <div class="item-text">
                                        <div class="username">{{item.name}}</div>
                                        <div class="edit">
                                            <div class="tip" v-if="item.edit">{{item.tip}}</div>
                                            <div class="editBtn" v-if="item.edit">编辑</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        name: "personal",
        components: {UserNave},
        data() {
            return {
                userNaveData: [
                    {
                        path: '#',
                        name: '个人信息',
                    }
                ],
                userBasicInfoData: [
                    {
                        nameTitle: '用户名',
                        name: 'O1493567865996',
                        tip: '用户名只可以修改一次',
                        edit: true
                    },
                    {
                        nameTitle: '国家',
                        name: '中国',
                        tip: '用户名只可以修改一次',
                        edit: false
                    }
                ],
                userSecurityInfoData: [
                    {
                        nameTitle: '邮箱',
                        name: '1191125750@qq.com',
                        tip: '',
                        edit: true
                    },
                    {
                        nameTitle: '手机号:',
                        name: '+86 15282148708',
                        tip: '',
                        edit: true
                    },
                    {
                        nameTitle: '密码::',
                        name: '为保障账户安全，建议你定期更换密码。',
                        tip: '',
                        edit: true
                    }
                ],
                userHeaderImg: 'https://statics.oneplus.cn/ov/assets/images/user/user-info/avatar-default.png',
            }
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    #personal {

        .uc-warp {

            .user-center-info {

                .account-list-container {
                    margin-top: -20px;

                    .user-info-container {
                        margin-top: 20px;
                        background-color: #fff;
                        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);

                        .basic-info-container {
                            position: relative;
                            padding: 21px 30px 10px;
                            border-top: 1px solid #ddd;

                            .basic-title {
                                display: flex;

                                .basic-info-title {
                                    margin-right: 20px;
                                    flex-shrink: 0;
                                    font-size: 12px;
                                    line-height: 1.7;
                                    color: #999;
                                }

                                .basic-info-tip {
                                    margin-right: 20px;
                                    flex-shrink: 0;
                                    font-size: 12px;
                                    line-height: 1.7;
                                    color: #666;
                                }

                            }

                            .header-container {
                                padding: 40px 0 30px;

                                .user-avatar-container {
                                    position: relative;
                                    margin: 0 auto;
                                    width: 80px;
                                    height: 80px;
                                    border-radius: 50%;
                                    cursor: pointer;
                                    overflow: hidden;

                                    .user-avatar {
                                        width: 100%;
                                        height: 100%;
                                        border-radius: 50%;
                                    }

                                    .user-avatar img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }

                                .text-center {
                                    margin-top: 5px;
                                    color: #09c;
                                }

                            }

                            .basic-info {
                                .item {
                                    position: relative;
                                    padding: 20px 0 30px;
                                    border-top: 1px solid #ddd;

                                    .item-text {
                                        display: flex;
                                        justify-content: space-between;

                                        .username {
                                            font-size: 16px;
                                            font-weight: 300;
                                            color: #000;
                                            line-height: 1.5;
                                        }

                                        .username-title {
                                            margin-bottom: 5px;
                                            font-size: 12px;
                                            line-height: 1.7;
                                        }

                                        .edit {
                                            display: flex;

                                            .tip {
                                                padding-right: 20px;
                                            }

                                            .editBtn {
                                                color: #09c;

                                            }

                                            .editBtn:hover {
                                                cursor: pointer;
                                                text-decoration: underline;
                                            }

                                        }

                                    }
                                }
                            }
                        }

                        .security-info-container {
                            position: relative;
                            padding: 21px 30px 0;
                            border-top: 1px solid #ddd;
                            border-bottom: 1px solid #ddd;

                            .security-title {
                                display: flex;

                                .security-info-title {
                                    margin-right: 20px;
                                    color: #999;
                                }

                                .security-info-tip {
                                }

                            }

                            .basic-info {
                                .item {
                                    position: relative;
                                    background-color: #fff;
                                    padding: 37px 0 30px;
                                    min-height: 90px;
                                    border-bottom: 1px solid #ddd;

                                    .item-text {
                                        display: flex;
                                        justify-content: space-between;

                                        .username {
                                            font-size: 16px;
                                            font-weight: 400;
                                            color: #000;
                                        }

                                        .username-title {
                                            margin-bottom: 5px;
                                            font-size: 12px;
                                            line-height: 1.7;
                                        }

                                        .edit {
                                            display: flex;

                                            .tip {
                                                padding-right: 20px;
                                            }

                                            .editBtn {
                                                color: #09c;

                                            }

                                            .editBtn:hover {
                                                cursor: pointer;
                                                text-decoration: underline;
                                            }

                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
</style>