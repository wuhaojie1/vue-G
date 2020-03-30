<template>
    <div id="newAddress">
        <div class="newAddress-template">
            <UserNave :userNaveData="userNaveData"></UserNave>
            <div class="address-from-wrap">
                <h2 class="address-from-head" v-if="type==='new'">新增地址</h2>
                <h2 class="address-from-head" v-if="type==='edit'">编辑地址</h2>
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
                            <!-- <el-select v-model="value" placeholder="请选择" class="address-from-select">
                                 <el-option
                                         v-for="item in options"
                                         :key="item.value"
                                         :label="item.label"
                                         :value="item.value">
                                 </el-option>
                             </el-select>-->
                            <div class="block address-from-select">
                                <!--<span class="demonstration">默认 click 触发子菜单</span>-->
                                <el-cascader class="cascader"
                                             v-model="value"
                                             size="medium"
                                             :options="options"
                                             @change="handleChange">
                                </el-cascader>
                            </div>
                            <el-input v-model="addressFrom.address" placeholder="详细地址"></el-input>
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
                            <el-button class="saveBtn" type="primary" @click="saveAddress">保存</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserNave from "../../components/accout/userNave";
    import localStorage from "../../assets/js/localStorage";
    import account from "../../assets/js/account/account";

    export default {
        name: "newAddress",
        components: {UserNave},
        mounted() {
            let type = this.$route.params.type;
            this.type = this.$route.params.type;
            if (type === 'new') {
                this.userNaveData = [
                    {
                        path: '/account/shippingAddress',
                        name: '地址',
                    },
                    {
                        path: '',
                        name: '新增地址',
                    }
                ]
            } else if (type === 'edit') {
                this.id = this.$route.params.id
                this.userNaveData = [
                    {
                        path: '/account/shippingAddress',
                        name: '地址',
                    },
                    {
                        path: '',
                        name: '编辑地址',
                    }
                ];
                this.getAddressDetail(this.$route.params)
            }
            this.getRegion()

        },
        data() {
            return {
                type: '',
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
                    address: '',
                    isdefault: '',
                    provinceid: '',
                    cityid: '',
                    countyid: '',
                },
                isDefault: false,
                options: [],
                value: []

            }
        },
        methods: {
            getRegion() {
                let region = localStorage.get('region');
                this.options = JSON.parse(region);
            },
            handleChange(val) {
                if (val.length !== 3) {
                    this.addressFrom.provinceid = val[0];
                    this.addressFrom.cityid = val[1];
                    this.addressFrom.countyid = ''
                } else {
                    this.addressFrom.provinceid = val[0];
                    this.addressFrom.cityid = val[1];
                    this.addressFrom.countyid = val[2];
                }
                this.value = val
            },
            saveAddress() {
                let obj = {
                    ...this.addressFrom,
                    id: this.id,
                    isdefault: this.isDefault ? 1 : 0
                };
                if (this.type === 'new') {
                    account.saveShippingAddress(obj).then((res) => {
                        console.log(res)
                    })
                } else if (this.type === 'edit') {
                    // debugger
                    account.updateShippingAddress(obj).then(res => {
                        if (res.data.success) {
                            this.$message({
                                type: 'success',
                                message: '编辑成功'
                            });
                            this.$router.push({
                                name:'shippingAddress'
                            })
                        }
                    })
                }

            },
            getAddressDetail(data) {
                let obj = {
                    id: data.id
                };
                account.getAddressDetail(obj).then(res => {
                    let data = res.data;
                    this.addressFrom.provinceid = data.provinceid;
                    this.addressFrom.cityid = data.cityid;
                    this.addressFrom.countyid = data.countyid;
                    this.addressFrom.name = data.name;
                    this.addressFrom.phone = data.phone;
                    this.addressFrom.address = data.address;
                    this.value = [
                        data.provinceid,
                        data.cityid,
                        data.countyid
                    ];
                    if (data.isdefault.toString() === '0') {
                        this.isDefault = false
                    } else if (data.isdefault.toString() === '1') {
                        this.isDefault = true
                    }

                })
            }
        }

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

                                .cascader {
                                    width: 100%;
                                }
                            }

                        }

                        .elSwitch {
                            margin-top: 20px;
                        }

                        .address-from-btns {
                            width: 100%;
                            display: flex;
                            margin-top: 150px;

                            .cancelBtn {
                                width: 50%;
                            }

                            .saveBtn {
                                width: 50%;
                            }
                        }
                    }

                }
            }
        }

    }
</style>