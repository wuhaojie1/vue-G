<template>
    <div id="userNave">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="user-nav">
            <el-breadcrumb-item v-for="item in userNaveData"
                                :to="item.path"
                                class="breadcrumbItem">{{item.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "userNave",
        data() {
            return {}
        },
        props: {
            userNaveData: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            back(item) {
                this.$emit('back', item)
            }
        }

    }
</script>

<style scoped lang="less">
    #userNave {
        .user-nav {
            padding: 18px 30px;
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
            background-color: #fff;
            height: 60px;
            align-items: center;

            .breadcrumbItem {
                line-height: 24px;
            }
        }
    }
</style>