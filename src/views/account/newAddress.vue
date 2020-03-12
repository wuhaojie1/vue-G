<template>
    <div id="newAddress">
        <div class="newAddress-template">
            <UserNave :userNaveData="userNaveData"></UserNave>
            <div class="address-from-wrap">
                <h2 class="address-from-head">新增地址</h2>
                <div class="address-from-body">
                    <div class="address-from-list">
                        <div class="address-from-item">
                            <div class="address-from-label">姓名</div>
                            <el-input v-model="addressFrom.name"></el-input>
                        </div>
                        <div class="address-from-item">
                            <div class="address-from-label">手机号</div>
                            <el-input v-model="addressFrom.phone" placeholder="请输入11位手机号"></el-input>
                        </div>
                        <div class="address-from-item">
                            <div class="address-from-label">地址</div>
                            <el-select v-model="value" placeholder="请选择" class="address-from-select">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <el-input v-model="addressFrom.phone" placeholder="详细地址"></el-input>
                        </div>
                        <el-switch
                                class="elSwitch"
                                v-model="isDefault"
                                active-color="#13ce66"
                                active-text="设为默认地址"
                                inactive-color="#ff4949">
                        </el-switch>
                        <div class="address-from-btns">
                            <el-button class="cancelBtn">取消</el-button>
                            <el-button class="saveBtn" type="primary">保存</el-button>
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
        name: "newAddress",
        components: {UserNave},
        data() {
            return {
                userNaveData: [
                    {
                        path: '/account/shippingAddress',
                        name: '地址',
                    },
                    {
                        path: '',
                        name: '新增地址',
                    }
                ],
                addressFrom: {
                    name: '',
                    phone: '',
                },
                isDefault: false,
            }
        },

    }
</script>

<style scoped lang="less">
    #newAddress {

        .newAddress-template {
            .address-from-wrap {
                margin-top: 20px;
                padding: 30px 15px;
                background: #fff;
                text-align: left;
                min-height: 700px;

                .address-from-head {
                    font-size: 24px;
                    color: #000;
                    margin-bottom: 30px;
                    padding: 0 15px;
                }

                .address-from-body {
                    .address-from-list {

                        .address-from-item {
                            margin-bottom: 10px;

                            .address-from-label {
                                float: none;
                                display: block;
                                text-align: left;
                                padding: 0 0 10px;
                                vertical-align: middle;
                                font-size: 14px;
                                color: #606266;
                                line-height: 40px;
                                box-sizing: border-box;
                            }

                            .address-from-select {
                                width: 100%;
                                padding-bottom: 10px;
                            }

                        }
                        .elSwitch{
                            margin-top: 20px;
                        }
                        .address-from-btns{
                            width: 100%;
                            display: flex;
                            margin-top: 150px;
                            .cancelBtn{
                                width: 50%;
                            }
                            .saveBtn{
                                width: 50%;
                            }
                        }
                    }

                }
            }
        }

    }
</style>