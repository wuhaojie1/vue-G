<template>
    <div class="index-outline">
        <Header></Header>
        <!--上新-->
        <div class="bannerList">
            <el-carousel :interval="40000" arrow="always" height="700px">
                <el-carousel-item v-for="(item, index) in bannerImg" :key="index">
                    <div v-if="index===2">
                        <div class="video">
                            <div class="">
                                <h2>{{item.title}}</h2>
                            </div>
                            <div class="">
                                <h3>{{item.content}}</h3>
                            </div>
                            <video class="video-item" src="https://images.tuyacn.com/op/product/homesamrt2.mp4"
                                   controls="controls"></video>
                        </div>
                    </div>
                    <div class="title" v-else>
                        <div class="">
                            <h2>{{item.title}}</h2>
                        </div>
                        <div class="">
                            <h3>{{item.content}}</h3>
                        </div>
                    </div>
                    <img :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!--分类-->
        <div data-target="nav2" data-spy="scroll" data-offset="0" class="categories">
            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" @click="todetail('goodsList')">
                    <div class="kitchenAppliances"></div>
                    <div class="my-3 p-3">
                        <h2 class="display-5">智能厨电</h2>
                        <p class="lead">包含咖啡机、料理机、消毒柜、洗碗机、油烟机、蒸烤箱、热水壶、电饭煲、微波炉、燃气灶等全品类厨电产品</p>
                    </div>
                </div>
                <div class="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 py-3">
                        <div class="smartAppliances"></div>
                        <h2 class="display-5">智能小家电</h2>
                        <p class="lead">包含扫地机器人、万能遥控器、智能取暖器、宠物喂食机、智能风扇、智能窗帘等涵盖环境类、温控类、电机类、卫浴类、宠物/植物类等全品类小家电产品</p>
                    </div>
                </div>
            </div>
            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="entertainment"></div>
                    <div class="my-3 p-3">
                        <h2 class="display-5">居家娱乐</h2>
                        <p class="lead">包含电视、手机、电脑、Xbox、PS4、switch、VR、投影、音响等产品</p>
                    </div>
                </div>
                <div class="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 py-3">
                        <div class="qualityLife"></div>
                        <h2 class="display-5">品质生活</h2>
                        <p class="lead">包含个护健康设备、云端数据分析、App等智能化能力的产品</p>
                    </div>
                </div>
            </div>
        </div>
        <!--footer-->
        <Footer/>
    </div>
</template>

<script>
    import {WOW} from 'wowjs';
    import Footer from "../components/Footer";
    import Header from "../components/header/header";
    import localStorage from "../assets/js/localStorage";


    export default {
        name: "index",
        components: {Footer, Header},
        data() {
            return {
                bannerImg: [
                    {
                        url: require('../assets/img/index/banner1.jpg'),
                        title: '智能厨电',
                        content: '提供包含厨电硬件、云端、App等一系列达到试产量产标准的智能化解决方案，线上化开发平台+立项定制开发，垂直厨电使用场景提供云菜谱运营服务，帮助厨电企业实现产品智能化，运营升级平台化，多维打造智能厨电场景。',
                    },
                    {
                        url: require('../assets/img/index/banner2.jpg'),
                        title: '智能小家电',
                        content: '提供包含硬件、云端、App等一系列达到试产量产标准的智能化解决方案，线上化开发平台 +开放式SDK标准接入，赋能企业快速、低成本完成智能化，可共享租赁等行业SaaS系统无缝结合，为企业拓展广阔的市场空间。',
                    },
                    {
                        url: require('../assets/img/index/houseintelligence.jpg'),
                        title: '全屋智能',
                        content: '让生活变得更简单',
                    },
                    /*{
                        url: require('../assets/img/index/img-cosmosoverview-elitekv-d.jpg')
                    },*/
                ],
            }
        },


        mounted() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init();
            // let isLogin = localStorage.get('isLogin');

        },
        methods:{
            todetail(name){
                this.$router.push(name)
            }
        }
    }
</script>

<style scoped lang="less">
    .lead {
        margin: 20px auto 0;
        width: 700px;
        font-size: 16px;
        line-height: 26px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: pre-wrap;
        color: #222;
    }

    .kitchenAppliances {
        background-image: url(https://images.tuyacn.com/oceanus/image/39732c7f-b12b-53f4-a322-20a4e4eec67b.jpg);
        height: 310px;
        width: 100%;
        background-size: auto 310px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    .smartAppliances {
        background-image: url(https://images.tuyacn.com/oceanus/image/cd11d771-2e96-5c69-a19c-8d485a427aef.jpg);
        height: 310px;
        width: 100%;
        background-size: auto 310px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    .entertainment {
        background-image: url(https://openfile.meizu.com/group1/M00/07/71/Cgbj0F3XPaGASYHCAANvOkhc9u0484.jpg);
        height: 310px;
        width: 100%;
        background-size: auto 310px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    .qualityLife {
        background-image: url(https://images.tuyacn.com/oceanus/image/f9d3d21c-1ca8-5b61-9c54-38cfc2baaec5.jpg);
        height: 310px;
        width: 100%;
        background-size: auto 310px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    body {
        position: relative;
    }

    .container {
        max-width: 960px;
    }

    /*
     * Custom translucent site header
     */

    .site-header {
        background-color: rgba(0, 0, 0, .85);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
    }

    .site-header a {
        color: #999;
        transition: ease-in-out color .15s;
    }

    .site-header a:hover {
        color: #fff;
        text-decoration: none;
    }

    .mb-2 {
        color: coral;
        margin: 0.5rem;
    }

    .search-btn {
        margin-left: 0.5rem;
    }

    .li-a {
        margin: 0 0.5rem;
    }


    /*
     * Dummy devices (replace them with your own or something else entirely!)
     */

    .product-device {
        position: absolute;
        right: 10%;
        bottom: -30%;
        width: 300px;
        height: 540px;
        background-color: #333;
        border-radius: 21px;
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
    }

    .product-device::before {
        position: absolute;
        top: 10%;
        right: 10px;
        bottom: 10%;
        left: 10px;
        content: "";
        background-color: rgba(255, 255, 255, .1);
        border-radius: 5px;
    }

    .product-device-2 {
        top: -25%;
        right: auto;
        bottom: 0;
        left: 5%;
        background-color: #e5e5e5;
    }


    /*
     * Extra utilities
     */

    .border-top {
        border-top: 1px solid #e5e5e5;
    }

    .border-bottom {
        border-bottom: 1px solid #e5e5e5;
    }

    .box-shadow {
        box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
    }

    .flex-equal > * {
        -ms-flex: 1;
        -webkit-box-flex: 1;
        flex: 1;
    }

    @media (min-width: 768px) {
        .flex-md-equal > * {
            -ms-flex: 1;
            -webkit-box-flex: 1;
            flex: 1;
        }
    }

    .overflow-hidden {
        overflow: hidden;
    }

    .bannerList {
        height: 700px;
        position: relative;

        .title {
            position: absolute;
            top: 100px;
            width: 100%;

            h2 {
                margin: 0 auto;
                width: 500px;
                font-size: 40px;
                color: #222;
                line-height: 56px;
            }

            h3 {
                margin: 20px auto 0;
                width: 700px;
                font-size: 16px;
                line-height: 26px;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                white-space: pre-wrap;
                color: #222;
            }
        }

        .video {
            position: absolute;
            top: 200px;
            /*width: 100%;*/
            left: 200px;

            .video-item {
                margin-top: 20px;
                width: 600px;
                height: 300px;
                border: none;
            }

            h2 {
                margin: 0 auto;
                width: 500px;
                font-size: 40px;
                color: #222;
                line-height: 56px;
            }

            h3 {
                margin: 20px auto 0;
                width: 700px;
                font-size: 16px;
                line-height: 26px;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                white-space: pre-wrap;
                color: #222;
            }
        }

        img {
            height: 700px;
            width: 100%;
        }

    }

    .categories{
        h2{
            cursor: pointer;
        }
        h2:hover{
            text-decoration: underline #2c3e50;
        }
    }

</style>
