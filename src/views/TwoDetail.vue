<template>
    <section class="box">
        <!--导航栏1-->
        <nav-bar-one/>

        <!--广告滚动图-->
        <section class="wow animated viewpager">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../assets/img/智能冰箱.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/img/1.2.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/img/1.2.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
        <!--商品-->
        <p style=" width: 90%;height: 40px;text-align: left;margin: 0 auto">厨房用品</p>
        <section class="wow animated gutter">

            <ul>
                <li v-for="item in goods" :key="item.name" class='goods_box'>
                    <div class="card" id="goods_introBox">
                        <img src="../assets/img/三级界面-1.png" alt="Card image cap" class="card-img-top">
                        <div class="card-body" id='goods_intro'>
                            <h5 class="card-title" id="goods_introName">{{item.name}}</h5>
                            <p class="card-text" id="goods_introInf">{{item.detal}}</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <!--footer-->
        <Footer/>
    </section>
</template>

<script>
    import {WOW} from 'wowjs';
    import NavBarOne from "../components/NavBarOne";
    import Footer from "../components/Footer";

    export default {
        components: {Footer, NavBarOne},
        mounted() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init()
        },
        data() {
            return {
                msg: '',
                dialogFormVisible: false,
                top: '',
                center: '',
                bottom: '',
                goods: [
                    {
                        //icon: require('../img/HD9749_91-IMS-zh_CN.png'),
                        name: 'Anavce Collection 电饭煲',
                        detal: ['玲珑电饭煲', '2L', '330W', '', ''],
                        model: 'HD3060/00',
                        money: '￥349.00*',
                        image: import('../assets/img/三级界面-1.png')
                    },
                    {
                        //icon: require('../img/HD9749_91-IMS-zh_CN.png'),
                        name: 'Avance Collection 智能触摸屏IH五谷杂粮电饭煲 X6 Plus',
                        detal: ['Hydro-penetration 技术', '全向螺旋式 IH 技术', '全向螺旋式 IH 技术', '7 英寸 TFT 显示屏', ''],
                        model: 'HD3060/00',
                        money: '￥3499.00*',
                    },
                    {
                        //icon: require('../img/HD9749_91-IMS-zh_CN.png'),
                        name: 'Anavce Collection 电饭煲',
                        detal: ['1', '2', '3', '', ''],
                        model: 'HD3060/00',
                        money: '￥349.00',
                    },
                    {
                        //icon: require('../img/HD9749_91-IMS-zh_CN.png'),
                        name: 'Anavce Collection 电饭煲',
                        detal: ['1', '2', '3', '', ''],
                        model: 'HD3060/00',
                        money: '￥349.00',
                    },
                ],
                // kinds: [{kind: '电饭煲'}],
                foot: [
                    {
                        //icon: '',
                        name: '',
                    }
                ],
            }
        },
        methods: {
            submitForm() {
                this.dialogFormVisible = true;//默认页面不显示为false,点击按钮将这个属性变成true
            }
        }
    }
</script>

<style scoped>
    /*nav*/
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

    /*headerBegin*/
    .box {
        display: flex;
        flex-direction: column;
    }

    .nav {
        height: 70px;
    }

    .header-nav {
        height: 70px;
        width: 100%;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        box-shadow: 0 2px 12px 0;
        background-color: rgba(12, 12, 12, 0.6);
    }

    .h-div1, .h-div2, .h-div3 {
        color: white;
        width: 33%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .h-div1 {
        animation-name: fadeInLeft;
        animation-duration: 1.5s;
    }

    .h-div1-p {
        justify-content: center;
        align-items: center;
        font-size: 1.7em;
    }

    .h-div3-box {
        align-items: center;
        flex-direction: column;
    }

    .inner-div-box {
        padding: 0 auto;
        color: #fff;
        visibility: visible;
        animation-name: fadeInRight;
        animation-duration: 1.5s;
    }

    .login:hover, .h-div1-p:hover {
        cursor: pointer;
        color: #db6f6a;
    }


    /*headerEnd*/

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 500px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .viewpager {
        margin-bottom: 1em;
    }

    /*goods begin*/
    .gutter {
        display: flex;
        justify-content: center;
    }

    .item_img {
        width: 14em;
        height: 14em;
    }

    .gutter_items {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 1200px;
        transition: all .2s linear;
    }

    .gutter_item {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px 5px;
        width: 300px;
    }

    .item_span {
        padding: 0 6px 0 6px;
    }

    .item_tag {
        height: 30px;
    }

    .item_name {
        height: 60px;
    }

    .item_kinds {
        width: 100%;
        text-align: center;
    }

    /*goods end*/

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

    .goods_box {
        float: left;
        list-style: none;
    }

    #goods_intro {
        box-sizing: border-box;
        border-top: 1px solid #f1f1f1;
    }

    #goods_introBox {
        width: 18rem;
        height: 26rem
    }

    #goods_introName {
        display: inline-block;
        width: 90%;
        height: 20px;
        overflow: hidden;
    }

    #goods_introInf {
        display: inline-block;
        width: 90%;
        height: 20px;
        overflow: hidden
    }
</style>
