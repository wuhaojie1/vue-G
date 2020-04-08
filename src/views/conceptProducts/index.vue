<template>
    <div id="index">
        <Header></Header>
        <div class="phone">
            <div class="imgs" v-for="(item, index) in conceptProductImg" :key="index">
                <img :src="item.img" @click="todetail(item.path)">
            </div>

        </div>
    </div>
</template>

<script>
    import Header from "../../components/header/header";

    export default {
        name: "index",
        components: {
            Header
        },
        data() {
            return {
                conceptProductImg: [
                    {
                        img: require('../../assets/img/conceptProducts/OnePlus7TPro.png'),
                        path: 'onePlus7TPro',
                    },
                    {
                        img: require('../../assets/img/conceptProducts/vivoApex.jpg'),
                        path: '',
                    },
                    {
                        img: require('../../assets/img/conceptProducts/HuaweiGlasses.jpg'),
                        path: '',
                    },



                ],
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            //监听滚动条事件
            handleScroll() {
                //获取设备高度
                // let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //滚动的高度
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                window.console.log(scrollTop);
                // window.console.log(clientHeight);
            },
            todetail(path){
                this.$router.push({
                    name: path,
                })
            }
        },
    }
</script>

<style scoped lang="less">
    #index {
        width: 100%;

        .phone {
            .imgs {
                box-sizing: border-box;

                img:hover {
                    /*transform: scale(0.95,0.95);*/
                    cursor: pointer;
                }
            }
        }
    }
</style>