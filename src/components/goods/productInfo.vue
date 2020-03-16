<template>
    <div id="productInfo">
        <!--        <el-collapse-transition>-->
        <div class="productTitle">
            <span>商品详情</span>
        </div>
        <div class="product-item" v-for="(item, index) in productData" :key="index">
            <img class="lazy"
                 alt=""
                 :src="item"
                 style="display: inline;">
        </div>
        <!--        </el-collapse-transition>-->
    </div>
</template>

<script>
    export default {
        name: "productInfo",
        props: {
            productData: {
                type: Array,
                default: () => [],
            }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    #productInfo {
        width: 100%;

        .productTitle {
            font-size: 24px;
            padding-top: 45px;
            padding-bottom: 20px;
            text-align: left;
        }

        .product-item{
            .lazy{
                width: 100%;
            }
        }
    }
</style>