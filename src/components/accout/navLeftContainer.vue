<template>
    <div id="navLeftContainer">
        <div class="user-avatar">
            <div class="user-header">
                <img :src="userMsg.headerImg" alt=""/>
            </div>
            <h4 class="user-email">
                {{userMsg.userEmail}}
            </h4>
        </div>
        <div class="nav-left">
            <div class="nav-group" v-for="(item, index) in navData" :key="index">
                <div class="nav-title" v-if="item.title">
                    {{item.title}}
                </div>
                <div class="nav-item" v-for="(nameItem,index) in item.names" :key="index" @click="topage(nameItem)">
                    <div class="nav-link">{{nameItem.name}}</div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "navLeftContainer",
        props: {
            navData: {
                type: Array,
                default: () => [],
            },
            userMsg: {
                type: Object,
                default: () => {
                },
            }
        },
        data() {
            return {}
        },
        methods: {
            topage(nameItem) {
                this.$emit('topage', nameItem)
            }
        }

    }
</script>

<style scoped lang="less">
    #navLeftContainer {
        float: left;
        width: 320px;
        margin-bottom: 80px;
        font-size: 16px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);

        .user-avatar {
            position: relative;
            background-color: #f9f9f9;

            .user-header {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 30px;
                height: 40px;
                width: 40px;
                margin: auto;
                border-radius: 50%;
                background-color: #efefef;
                overflow: hidden;
            }

            .user-header img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }

            .user-email {
                padding: 40px 15px 40px 90px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin: 0;
            }
        }

        .nav-left {

            .nav-group {
                position: relative;
                background-color: #efefef;
                border-top: 1px solid #dddddd;

                .nav-title {
                    background-color: #fff;
                    padding: 15px 30px 5px;
                    font-size: 12px;
                    line-height: 1.7;
                    color: #999;
                }

                .nav-item {
                    position: relative;
                    background-color: #fff;

                    .nav-link {
                        display: inline-block;
                        padding: 13px 30px;
                        width: 100%;
                        height: 100%;
                        color: #101920;
                        background-color: transparent;
                        text-decoration: none;
                        margin: 0;
                        box-sizing: border-box;
                        text-align: left;
                    }

                    .nav-link:hover {
                        color: #101920;
                        background: #d9d9d9;
                        outline: 0;
                        cursor: pointer;
                        text-decoration: none;
                    }

                }
            }


        }
    }

</style>