<template>
    <section>
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-start offset-3">产品介绍</h5>
            <hr class="hr1"/>
            <div class="item-standard d-flex align-items-center flex-wrap">
                <ul class="row" v-for="item in items" :key="item">
                    <li class="col d-flex flex-wrap">
                        <div>
                            <p class="col-p d-flex align-items-start">{{item.speci}}</p>
                        </div>
                        <div class="detail d-flex">
                            <ul class="dl d-flex">
                                <li class="dt d-flex align-items-start">{{item.texture}}</li>
                                <li class="dt d-flex align-items-start">{{item.size}}</li>
                                <li class="dt d-flex align-items-start">{{item.color}}</li>
                            </ul>
                            <ul class="dl d-flex">
                                <li class="dd d-flex align-items-start">{{item.a}}</li>
                                <li class="dd d-flex align-items-start">{{item.b}}</li>
                                <li class="dd d-flex align-items-start">{{item.c}}</li>
                            </ul>
                        </div>
                    </li>
                    <hr class="hr"/>
                </ul>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "Standard",
        data() {
            return {
                items: {
                    item1: {
                        speci: '设计规格',
                        texture: '机身材质',
                        size: '尺寸(长×宽×高)',
                        color: '颜色',
                        a: '高强度pc',
                        b: '395*300*245mm',
                        c: '黑色和蓝色'
                    },
                    item2: {
                        speci: '配件',
                        texture: '可立饭勺',
                        size: '量杯',
                        color: '漏油汤勺',
                        a: '是',
                        b: '是',
                        c: '是'
                    }
                }
            }
        }
    }
</script>

<style scoped>

    @media (min-width: 768px) {
        .flex-md-equal > * {
            -ms-flex: 1;
            -webkit-box-flex: 1;
            flex: 1;
        }
    }

    ul li {
        list-style: none;
        padding: 0;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    .hr {
        width: 100%;
        height: 1rem;
        border: none;
        border-top: 0.1rem solid #555555;
    }

    .hr1 {
        width: 60%;
        height: 1rem;
        border: none;
        border-top: 0.1rem solid #555555;
    }

    .item-standard {
        width: 50%;
        margin: 0 auto;
    }

    .row {
        padding: 0;
        width: 100%;
    }

    .col {
        width: 33%;
        justify-content: space-between;
    }

    .col-p {
        font-size: 1.4rem;
    }


    .dd, .dt {
        font-size: 1rem;
        margin: 0.9rem 0;
    }

    .dd {
        width: auto;
    }

    .dl {
        flex-direction: column;
        width: 50%;
    }

    .detail {
        width: 65%;
    }

</style>
