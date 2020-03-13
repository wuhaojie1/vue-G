<template>
    <div id="goodsDetail">
        <Header></Header>
        <div class="goodsItem">
            <div class="goodsItem-msg">
                <div class="goodsItem-msg-img">
                    <div class="img-show">
                        <div class="img-show-item">
                            <img :src="selectedImg">
                        </div>
                    </div>
                    <div class="img-ul-item">
                        <ul class="img-ul">
                            <li v-for="(item, index) in imgs"
                                :class="selected===index?'img-li active':'img-li'"
                                :key="index"
                                @click="imgShow(index)">
                                <img :src="item">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="goodsItem-msg-content">
                    <div class="content-items">
                        <div class="content-category">
                            <span>Apple HomeKit</span>
                        </div>
                        <div class="content-name">
                            <h1>Nanoleaf Canvas 智能奇光板</h1>
                        </div>
                        <div class="content-description">
                            <span>
Nanoleaf Canvas 智能奇光板在照明功能之外，更巧妙地融合了视觉、听觉和触觉体验，为你带来愉悦的感官享受。这款照明系统即插即用，省时省力。它采用边光设计，内置的 Rhythm 技术支持实时音乐同步以及触控和语音控制，让你的家从智能家庭变身为智慧家庭。</span>
                        </div>
                        <div class="content-money">
                            <span>RMB 1,698</span>
                        </div>
                        <div class="contentBtn">
                            <div class="btn  btn-primary addShoppingBag">
                                <span class="">添加至购物袋</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="goodsItem-parameter">

            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/header/header'

    export default {
        name: "goodsDetail",
        components: {
            Header
        },
        data() {
            return {
                item: {},
                selected: 1,
                imgs: [
                    require('../../assets/img/goods/HMV72.jpg'),
                    require('../../assets/img/goods/HMV72_AV1.jpg'),
                    require('../../assets/img/goods/HMV72_AV2.jpg'),
                    require('../../assets/img/goods/HMV72_AV3.jpg'),
                    require('../../assets/img/goods/HMV72_AV4.jpg'),
                    require('../../assets/img/goods/HMV72_AV5.jpg'),
                    require('../../assets/img/goods/HMV72_AV6.jpg'),
                ],
                selectedImg: require('../../assets/img/goods/HMV72.jpg'),
            }
        },
        mounted() {
            this.getGoodsItem()
        },
        methods: {
            getGoodsItem() {
                this.item = this.$route.params.item
                // eslint-disable-next-line no-console
                console.log(this.item)
            },
            imgShow(index) {
                this.selected = index;
                this.selectedImg = this.imgs[index]
            }
        }
    }
</script>

<style scoped lang="less">
    #goodsDetail {
        width: 100%;

        .goodsItem {
            width: 980px;
            margin: 0 auto;

            .goodsItem-msg {
                display: flex;
                border-bottom: 1px solid #d6d6d6;

                .goodsItem-msg-img {
                    width: 58%;
                    margin-bottom: 35px;

                    .img-show {
                        .img-show-item {
                            img {
                                width: 572px;
                                height: 572px;
                            }
                        }

                    }

                    .img-ul-item {
                        .img-ul {
                            display: flex;
                            justify-content: center;

                            .img-li {
                                width: 48px;
                                padding-top: 15px;
                                margin-right: 16px;

                                img {
                                    width: 48px;
                                }
                            }

                            .img-li:hover {
                                cursor: pointer;
                                border-bottom: 2px solid #d3d3d3;
                            }

                            .active {
                                border-bottom: 2px solid #9b9b9b;
                            }

                            .active:hover {
                                cursor: default;
                                border-bottom: 2px solid #9b9b9b;
                            }
                        }
                    }
                }

                .goodsItem-msg-content {
                    width: 326px;
                    margin-bottom: 35px;

                    .content-items {
                        padding: 59px 0 39px 0;
                        text-align: left;

                        .content-category {
                            span {
                                margin-bottom: 16px;
                                letter-spacing: 0;
                                font-size: 17px;
                                line-height: 1.47059;
                                font-weight: 400;
                                font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                                color: #ef5602;
                                display: block;
                            }
                        }

                        .content-name {
                            h1 {
                                color: #000;
                                font-size: 32px;
                                line-height: 1.125;
                                font-weight: 600;
                                letter-spacing: .004em;
                            }
                        }

                        .content-description {
                            margin-top: 40px;

                            span {
                                font-size: 17px;
                                line-height: 1.47059;
                                font-weight: 400;
                                color: #000;
                            }
                        }

                        .content-money {
                            margin-top: 40px;

                            span {
                                font-size: 24px;
                                line-height: 1.16667;
                                font-weight: 600;
                                letter-spacing: .009em;
                                font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
                                color: #111;
                            }
                        }

                    }
                }
            }

            .goodsItem-parameter {

            }
        }
    }
</style>