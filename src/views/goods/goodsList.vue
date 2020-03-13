<template>
    <div id="goodsList">
        <Header></Header>
        <div class="title">
            <div class="title-name">智能厨电</div>
        </div>
        <div class="body">
            <div class="goodsList">
                <CategoryNavBar class="category-navBar"
                                :navData="navData"
                >
                </CategoryNavBar>
                <div class="goods-list">
                    <goodsCard :goodsCardDates="goodsCardDates"
                               @toGoodsDetail="toGoodsDetail"></goodsCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/header/header";
    import CategoryNavBar from "../../components/goods/categoryNavBar";
    import goodsCard from "../../components/goods/goodsCard";

    export default {
        name: "goodsList",
        components: {
            goodsCard,
            CategoryNavBar,
            Header
        },
        data() {
            return {
                navData: [
                    {
                        title: '咖啡机',
                        content: [
                            '咖啡机',
                            '咖啡机',
                            '咖啡机',
                        ],
                    },
                    {
                        title: '油烟机',
                        content: [
                            '油烟机',
                            '油烟机',
                            '油烟机',
                        ],
                    },
                    {
                        title: '洗碗机',
                        content: [
                            '洗碗机',
                            '洗碗机',
                            '洗碗机',
                        ],
                    },
                    {
                        title: '消毒柜',
                        content: [
                            '消毒柜',
                            '消毒柜',
                            '消毒柜',
                        ],
                    },
                ],
                goodsCardDates: [
                    {
                        imgs: [
                            require('../../assets/img/goods/HMV72.jpg'),
                            require('../../assets/img/goods/HMV72_AV1.jpg'),
                            require('../../assets/img/goods/HMV72_AV2.jpg'),
                            require('../../assets/img/goods/HMV72_AV3.jpg'),
                            require('../../assets/img/goods/HMV72_AV4.jpg'),
                            require('../../assets/img/goods/HMV72_AV5.jpg'),
                            require('../../assets/img/goods/HMV72_AV6.jpg'),
                        ],
                        category: 'Apple HomeKit',
                        name: 'Nanoleaf Canvas 智能奇光板',
                        price: 'RMB 1,698',
                    },
                    {
                        imgs: [
                            require('../../assets/img/goods/HMV72.jpg'),
                            require('../../assets/img/goods/HMV72_AV1.jpg'),
                            require('../../assets/img/goods/HMV72_AV2.jpg'),
                            require('../../assets/img/goods/HMV72_AV3.jpg'),
                            require('../../assets/img/goods/HMV72_AV4.jpg'),
                            require('../../assets/img/goods/HMV72_AV5.jpg'),
                            require('../../assets/img/goods/HMV72_AV6.jpg'),
                        ],
                        category: 'Apple HomeKit',
                        name: 'Nanoleaf Canvas 智能奇光板',
                        price: 'RMB 1,698',
                    },
                    {
                        imgs: [
                            require('../../assets/img/goods/HMV72.jpg'),
                            require('../../assets/img/goods/HMV72_AV1.jpg'),
                            require('../../assets/img/goods/HMV72_AV2.jpg'),
                            require('../../assets/img/goods/HMV72_AV3.jpg'),
                            require('../../assets/img/goods/HMV72_AV4.jpg'),
                            require('../../assets/img/goods/HMV72_AV5.jpg'),
                            require('../../assets/img/goods/HMV72_AV6.jpg'),
                        ],
                        category: 'Apple HomeKit',
                        name: 'Nanoleaf Canvas 智能奇光板',
                        price: 'RMB 1,698',
                    },
                    {
                        imgs: [
                            require('../../assets/img/goods/HMV72.jpg'),
                            require('../../assets/img/goods/HMV72_AV1.jpg'),
                            require('../../assets/img/goods/HMV72_AV2.jpg'),
                            require('../../assets/img/goods/HMV72_AV3.jpg'),
                            require('../../assets/img/goods/HMV72_AV4.jpg'),
                            require('../../assets/img/goods/HMV72_AV5.jpg'),
                            require('../../assets/img/goods/HMV72_AV6.jpg'),
                        ],
                        category: 'Apple HomeKit',
                        name: 'Nanoleaf Canvas 智能奇光板',
                        price: 'RMB 1,698',
                    },
                ],
            }
        },
        methods: {
            toGoodsDetail(item) {
                this.$router.push({
                    name: 'goodsDetail',
                    params: {
                        item: item
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    #goodsList {
        .title {
            width: 100%;
            border-bottom: 1px solid #d6d6d6;

            .title-name {
                width: 1440px;
                font-size: 24px;
                font-family: SF Pro SC, SF Pro Display, SF Pro Icons, AOS Icons, PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif;
                display: block;
                text-align: left;
                font-style: normal;
                line-height: 26px;
                margin: 0 auto;
                padding: 10px 0;
            }
        }

        .body {
            width: 100%;

            .goodsList {
                display: flex;
                width: 1440px;
                margin: 0 auto;

                .category-navBar {

                }

                .goods-list {
                    width: 1200px;
                    box-sizing: border-box;

                }
            }

        }
    }
</style>