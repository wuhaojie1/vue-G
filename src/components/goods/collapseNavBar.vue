<template>
    <div id="collapseNavBar" :style="mainStyle">
        <el-collapse @change="handleChange" class="elCollapse" height="300px">
            <div class=""
                 v-if="customizeTitle">
                <el-collapse-item class="elCollapseItem"
                                  v-for="(item , index) in navData"
                                  :key="index"
                                  :name="index">
                    <!--<template slot="title">
                        一致性 Consistency<i class="header-icon el-icon-info"></i>
                    </template>-->

                    <template slot="title" class="">
                        <div class="titleSlot"
                             :style="titleStyle">
                            {{item.title}}
                        </div>
                    </template>


                    <div class="customizeContent"
                         v-if="customizeContent">
                        <slot name="customizeContent"></slot>
                    </div>
                    <div class=""
                         v-else>
                        <div class="selected"
                             v-for="(contentItem, contentIndex) in item.content"
                             :key="contentIndex">
                            {{contentItem}}
                        </div>
                    </div>
                </el-collapse-item>
            </div>
            <div class=""
                 v-else>
                <el-collapse-item v-for="(item , index) in navData"
                                  :key="index"
                                  :name="index"
                                  :title="item.title">
                    <div class="selected"
                         v-for="(contentItem, contentIndex) in item.content"
                         :key="contentIndex">
                        {{contentItem}}
                    </div>
                </el-collapse-item>
            </div>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "collapseNavBar",
        props: {
            navData: {
                type: Array,
                default: () => []
            },
            width: {
                type: String,
                default: '240px'
            },
            customizeTitle: {
                type: Boolean,
                default: false
            },
            customizeContent: {
                type: Boolean,
                default: false
            },
            fontSize: {
                type: String,
                default: '',
            },
            height: {
                type: String,
                default: '',
            },
            /*slotPadding: {
                type: String,
                default: '',
            },
            slotMargin:{
                type: String,
                default: '',
            }*/
            /*collapseItemMargin: {
                type: String,
                default: '10px 0',
            },
            collapseItemPadding: {
                type: String,
                default: '20px 0 20px',
            },*/


        },
        data() {
            return {}
        },
        computed: {
            mainStyle() {
                let {
                    width,
                } = this.$props;
                return {
                    width: width,
                }
            },
            titleStyle() {
                let {
                    fontSize,
                    slotPadding,
                    slotMargin,
                } = this.$props;
                return {
                    fontSize,
                    padding: slotPadding,
                    margin: slotMargin,
                }
            },
            /*collapseItemStyle() {
                let {
                    collapseItemMargin,
                    collapseItemPadding
                } = this.$props;
                return {
                    collapseItemMargin,
                    collapseItemPadding
                }
            }*/
        },
        methods: {
            handleChange(val) {
                // eslint-disable-next-line no-console
                console.log(val);
            }
        },
    }
</script>

<style scoped lang="less">
    #collapseNavBar {

        .elCollapse {
            .selected {
                cursor: pointer;
            }

            .selected:hover {
                color: #101920;
                background: #d9d9d9;
                outline: 0;
                cursor: pointer;
                text-decoration: none;
            }

            .titleSlot {
                font-family: SF Pro SC, SF Pro Display, SF Pro Icons, AOS Icons, PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif;
                color: #000;
                font-weight: 600;
            }

            .elCollapseItem {
                /*margin: 10px 0;
                padding: 20px 0 24px;*/
            }
        }
    }
</style>