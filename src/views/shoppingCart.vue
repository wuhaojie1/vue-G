<template>
    <div>
        <!--一级导航-->
        <nav-bar-one/>

        <!---->
        <div class="shopping_bigdiv1">
            <div class="head">
                <div class="avatar"></div>
                <div class="head_address">
                    <ul>
                        <li>物流</li>
                        <li>购物记录</li>
                        <li>收货地址</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content">
            <p class="content_title">购物车</p>
            <div class="shopping_bigdiv">
                <div class="content_div">
                    <div class="content_div_one"><p>厂商:{{producer1}}</p>
                        <div class="content_div_one_checkbox"><input type="checkbox"/>对比类似产品</div>
                    </div>
                    <div class="content_div_two">
                        <div class="content_div_two_img"></div>
                        <div class="content_div_two_introduce">
                            <ul>
                                <li style="font-size:30px; ">{{price1}}</li>
                                <li style="font-size:13px;">{{introduce1}}<a href="">查看更多优势></a></li>
                                <li><input v-model="commodityType1" class="commodity_type" type="text"
                                           disabled="disabled"/></li>
                                <li><input style="margin-top: 10px;width: 100px" type="button" value="立即购买">
                                    <div style="float: right;margin-top: 10px;"><input type="button"
                                                                                       style="width: 30px;"
                                                                                       id="subtract1"
                                                                                       @click="subtract1()"
                                                                                       value="-"><input
                                            id="purchase_amount1" class="port" type="text" value="1"/><input
                                            type="button" id="add1" style="width: 30px;" @click="add1()" value="+">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shopping_bigdiv">
                <div class="content_div">
                    <div class="content_div_one"><p>厂商:{{producer2}}</p>
                        <div class="content_div_one_checkbox"><input type="checkbox"/>对比类似产品</div>
                    </div>
                    <div class="content_div_two">
                        <div class="content_div_two_img"></div>
                        <div class="content_div_two_introduce">
                            <ul>
                                <li style="font-size:30px; ">{{price1}}</li>
                                <li style="font-size:13px;">{{introduce1}}<a href="">查看更多优势></a></li>
                                <li><input v-model="commodityType1" class="commodity_type" type="text"
                                           disabled="disabled"/></li>
                                <li><input style="margin-top: 10px;width: 100px" type="button" value="立即购买">
                                    <div style="float: right;margin-top: 10px;"><input type="button"
                                                                                       style="width: 30px;"
                                                                                       id="subtract2"
                                                                                       @click="subtract2()"
                                                                                       value="-"><input
                                            id="purchase_amount2" class="port" type="text" value="1"/><input
                                            type="button" id="add2" style="width: 30px;" @click="add2()" value="+">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shopping_bigdiv">
                <div class="content_div">
                    <div class="content_div_one"><p>厂商:{{producer3}}</p>
                        <div class="content_div_one_checkbox"><input type="checkbox"/>对比类似产品</div>
                    </div>
                    <div class="content_div_two">
                        <div class="content_div_two_img"></div>
                        <div class="content_div_two_introduce">
                            <ul>
                                <li style="font-size:30px; ">{{price1}}</li>
                                <li style="font-size:13px;">{{introduce1}}<a href="">查看更多优势></a></li>
                                <li><input v-model="commodityType1" class="commodity_type" type="text"
                                           disabled="disabled"/></li>
                                <li><input style="margin-top: 10px;width: 100px" type="button" value="立即购买">
                                    <div style="float: right;margin-top: 10px;"><input type="button"
                                                                                       style="width: 30px;"
                                                                                       id="subtract3"
                                                                                       @click="subtract3()"
                                                                                       value="-"><input
                                            id="purchase_amount3" class="port" type="text" value="1"/><input
                                            type="button" id="add3" style="width: 30px;" @click="add3()" value="+">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--footer-->
        <Footer/>
    </div>
</template>

<script>
    import Footer from "../components/Footer";

    export default {
        name: "shoppingCart",
        components: {Footer},
        data() {
            return {
                producer1: '美的',
                producer2: '惠普',
                producer3: '飞利浦',
                price1: '￥1230',
                price2: '￥1230',
                price3: '￥1230',
                introduce1: '飞利浦创意玲珑小巧容积，多种健康菜单，带来新鲜每一餐。创新屏显，时尚外观，化身厨房新风景',
                introduce2: '飞利浦创意玲珑小巧容积，多种健康菜单，带来新鲜每一餐。创新屏显，时尚外观，化身厨房新风景',
                introduce3: '飞利浦创意玲珑小巧容积，多种健康菜单，带来新鲜每一餐。创新屏显，时尚外观，化身厨房新风景',
                commodityType1: '电压力锅蒸煮  适用家庭:2-3人',
                commodityType2: '电压力锅蒸煮  适用家庭:2-3人',
                commodityType3: '电压力锅蒸煮  适用家庭:2-3人',
            }
        },
        methods: {
            subtract1() {
                var a = document.getElementById('purchase_amount1').value;
                a--;
                if (a < 0) {
                    var x = document.getElementById('subtract');
                    x.style.disabled = "disabled";
                } else {
                    document.getElementById('purchase_amount1').value = a;
                }
            },
            add1() {
                var b = document.getElementById('purchase_amount1').value;
                b++;
                if (b > 5) {
                    var x = document.getElementById('add');
                    x.style.disabled = "disabled";
                    alert('限购五件');
                }
                document.getElementById('purchase_amount1').value = b;
            },
            subtract2() {
                var a = document.getElementById('purchase_amount2').value;
                a--;
                if (a < 0) {
                    var x = document.getElementById('subtract');
                    x.style.disabled = "disabled";
                } else {
                    document.getElementById('purchase_amount2').value = a;
                }
            },
            add2() {
                var b = document.getElementById('purchase_amount2').value;
                b++;
                if (b > 5) {
                    var x = document.getElementById('add');
                    x.style.disabled = "disabled";
                    alert('限购五件');
                }
                document.getElementById('purchase_amount2').value = b;
            },
            subtract3() {
                var a = document.getElementById('purchase_amount3').value;
                a--;
                if (a < 0) {
                    var x = document.getElementById('subtract');
                    x.style.disabled = "disabled";
                } else {
                    document.getElementById('purchase_amount3').value = a;
                }
            },
            add3() {
                var b = document.getElementById('purchase_amount3').value;
                b++;
                if (b > 5) {
                    var x = document.getElementById('add');
                    x.style.disabled = "disabled";
                    alert('限购五件');
                }
                document.getElementById('purchase_amount3').value = b;
            }
        }
    }
</script>

<style scoped>
    .avatar {
        width: 100px;
        height: 100px;
        /*background-image: url('./新建文件夹/timg.jpg');*/
        background-size: cover;
        border-radius: 50px;
        margin-left: 30px;
    }

    .shopping_bigdiv1 {
        width: 100%;
        height: 150px;
    }

    .shopping_bigdiv {
        width: 100%;
        height: 310px;
    }

    .content_div {
        width: 80%;
        height: 310px;
        margin-left: auto;
        margin-right: auto;
        border-top: grey solid 1px;
        border-bottom: grey solid 1px;
    }

    .head {
        width: 80%;
        height: 100px;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }

    .head div {
        float: left;
    }

    .head_address {
        width: 50%;
        height: 30px;
        margin-bottom: 0;
        position: absolute;
        bottom: 10px;
        left: 130px;
    }

    .head_address ul {
        width: 100%;
        height: 30px;
        margin: 0;
        padding: 0;
        line-height: 20px;
        list-style-type: none;
    }

    .head_address ul li {
        background: #1d2b64;
        color: #d3d5dd;
        float: left;
        margin-left: 30px;
        padding: 3px;
        border-radius: 3px;
        border: black 1px solid;
        box-shadow: #eb8204 2px 2px 2px;
    }

    .content_title {
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        font-weight: bold;
        width: 80%;
        height: 30px;
        font-size: 20px;
    }

    .content {
        width: 100%;
        height: 100%;
    }

    .content_div_one {
        width: 100%;
        height: 25px;
    }

    .content_div_one p {
        width: 50%;
        height: 25px;
        float: left;
        text-align: left;
    }

    .content_div_one_checkbox {
        width: 50%;
        height: 25px;
        text-align: right;
        float: right;
    }

    .content_div_two {
        width: 100%;
        height: 285px;
        position: relative;
    }

    .content_div_two_img {
        width: 180px;
        height: 240px;
        margin-top: 20px;
        margin-left: 20px;
        border: grey 1px solid;
    }

    .content_div_two_introduce {
        width: 300px;
        height: 240px;
        position: absolute;
        top: 20px;
        left: 220px;
    }

    .content_div_two_introduce ul {
        width: 180px;
        height: 240px;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .content_div_two_introduce ul li {
        width: 300px;
        height: 60px;
        text-align: left;
    }

    .content_div_two_introduce ul li a {
        margin-left: 150px;
    }

    .commodity_type {
        width: 280px;
        height: 60px;
    }

    .port {
        width: 50px;
        height: 30px;
        text-align: center;
    }

</style>
