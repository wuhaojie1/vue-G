<template>
    <div id="categoryNavBar">
        <el-collapse @change="handleChange" class="elCollapse">
            <el-collapse-item v-for="(item , index) in navData" :key="index" :name="index" :title="item.title">
                <div class="selected" v-for="(contentItem, contentIndex) in item.content" :key="contentIndex">
                    {{contentItem}}
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "categoryNavBar",
        props: {
            navData: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {}
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
    #categoryNavBar {
        width: 240px;

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
        }
    }
</style>