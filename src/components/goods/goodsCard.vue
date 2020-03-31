<template>
    <div id="goodsCard">
        <div class="goodsCard-list"
             v-for="(item ,index) in goodsCardDates"
             :key="index"
             @click="toGoodsDetail(item)">
            <div class="goodsCard-list-img">
                <el-carousel trigger="click"
                             height="360px"
                             :autoplay="false"
                             class="elCarousel">
                    <el-carousel-item v-for="(imgItem, index) in item.imgs" :key="index">
                        <!--<h3 class="small">{{ item }}</h3>-->
                        <img :src="imgItem" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="goodsCard-list-description">
                <div class="goodsCard-list-description-item">
                    <div class="category-text" v-if="item.category">
                        <span>{{item.category}}</span>
                    </div>
                    <div class="category-name">
                        <span>{{item.name}}</span>
                    </div>
                    <div class="category-price">
                        <span>RMB {{item.price}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsCard",
        props: {
            goodsCardDates: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {}
        },
        methods: {
            toGoodsDetail(item){
                this.$emit('toGoodsDetail', item)
            }
        }
    }
</script>

<style scoped lang="less">
    #goodsCard {
        display: flex;
        flex-wrap: wrap;

        .goodsCard-list {
            box-sizing: border-box;
            width: 400px;
            height: 560px;
            padding: 38px 0;
            border: 1px solid #d6d6d6;

            .goodsCard-list-img {
                .elCarousel {
                    img {
                        width: 360px;
                        /*height: 360px;*/
                    }
                }
            }

            .goodsCard-list-description {
                .goodsCard-list-description-item {
                    .category-text {

                        span {
                            color: #e85d00;
                            display: block;
                            font-size: 12px;
                            line-height: 1.5;
                            font-weight: 400;
                        }
                    }

                    .category-name {
                        span {
                            margin-top: 10px;
                            font-size: 17px;
                            line-height: 1.47059;
                            font-weight: 400;
                            letter-spacing: -.021em;
                            font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                            color: #333;
                            display: inline-block;
                            width: 100%;
                            cursor: pointer;
                        }

                        span:hover {
                            color: #0070c9
                        }
                    }

                    .category-price {
                        span {
                            color: #333;
                            font-size: 17px;
                            line-height: 1.52947;
                            font-weight: 400;
                            letter-spacing: -.021em;
                            font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                            margin-top: 7px;
                        }
                    }
                }
            }

        }

        .goodsCard-list:hover {
            box-shadow: 4px 4px 10px #cdcdcd;
            cursor: pointer;
        }
    }
</style>