<template>
    <section>

        <!--导航栏1-->
        <nav-bar-one class="sticky-top"/>

        <section>
            <div class="top">
                <div class="row mb-2">
                    <div class="col-md-12 d-flex justify-content-center">
                        <div class="card box-shadow d-flex justify-content-center">
                            <div class="item-out-box d-flex flex-wrap">
                                <div class="item-img d-flex align-items-center ">
                                    <img class="card-img d-md-block" :src="item.img" alt="">
                                </div>
                                <div class="card-body d-flex flex-column align-items-start">
                                    <div class="item d-flex flex-md-column">
                                        <strong class="strong">{{item.name}}</strong>
                                        <span>{{item.model}}</span>
                                        <a href="">{{item.similar}}</a>
                                    </div>
                                    <div class="item-star">{{item.start}}</div>
                                    <div class="item-detail">
                                        <p class="item-p d-flex justify-content-start">{{item.detail}}</p>
                                    </div>
                                    <div class="item-money text-danger">
                                        <strong>￥{{item.money}}</strong>
                                    </div>
                                    <a class="item-buy btn btn-light" href="#">立即购买</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="standard-comment">
                <div class="nav d-flex flex-wrap">
                    <strong class="nav2 nav-link">
                        <router-link class="a-href" to="/ThirdDetail/Standard">规格</router-link>
                    </strong>
                    <strong class="nav2 nav-link">
                        <router-link class="a-href" to="/ThirdDetail/Comment">评论</router-link>
                    </strong>
                </div>
                <div>
                    <router-view/>
                </div>
            </div>
        </section>

        <!--footer-->
        <Footer/>
    </section>
</template>

<script>
    import Footer from "../components/Footer";

    export default {
        name: "ThirdDetail",
        components: {Footer},
        data() {
            return {
                cardtitle: 'New',
                cardtext: '2',
                item: {
                    name: '产品名',
                    model: 'HD3060/00',
                    similar: '查看相似>',
                    start: '☆☆☆☆☆',
                    detail: '小身材，大煮义。 飞利浦创意玲珑煲拥有小巧容积，多种健康菜单，带来新鲜每一餐。创新屏显，时尚外观，化身厨房新风景。 ',
                    money: '349',
                    img: 'https://images.philips.com/is/image/PhilipsConsumer/HD3060_00-IMS-zh_CN?wid=494&hei=435&$pnglarge$'
                },
            }
        }
    }
</script>

<style scoped>
    /*content*/

    .card {
        width: 80%;
        margin-top: 1rem;
        flex-direction: row;
    }

    .card-img {
        width: 20em;
        height: 17.7em;
    }

    .strong {
        font-size: 1.8rem;
    }

    .item, .item-star, .item-detail, .item-buy, .item-money {
        margin: 1.5rem;
    }

    .item-money {
        font-size: 1.5rem;
    }

    .item-detail {

    }

    .item-p {
        max-width: 20rem;
    }

    .item-out-box {

    }

    .nav {
        width: 100%;
        background-color: #4f92ce;
        justify-content: center;
    }

    .a-href {
        color: #ffffff;
        font-size: 1.4rem;
    }

    .nav-link {
        height: 100%;
        text-decoration: none;
    }


    .a-href:hover, .nav-link:hover {
        color: #4f92ce;
        background-color: #ffffff;
    }

    .box-shadow {
        box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
    }

    .flex-equal > * {
        -ms-flex: 1;
        -webkit-box-flex: 1;
        flex: 1;
    }

    .nav2 {
        width: 15em;
    }


</style>
