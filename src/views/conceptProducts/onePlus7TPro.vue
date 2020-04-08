<template>
    <div id="onePlus7TPro">
        <Header></Header>
        <section class="section-kv">
            <div class="kv-text-container" style="width: 1664px; height: 936px;">
                <div class="kv-text-wrap">
                    <div class="container-text">
                        <div class="font-container">
                            <h1 class="font-headline-3 text-red pdT40">OnePlus 7T Pro</h1>
                            <h2 class="font-headline-3 pdT10">全系 90Hz，流畅新标杆。</h2>
                            <div class="font-headline-2 pdT20">¥3999</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kv-video-container" style="position: relative; height: 936px;">
                <!--<video muted="" playsinline="" webkit-playsinline="true"
                       src="https://statics.oneplus.cn/ov/assets/medias/hotdog/19801/kv-light.mp4"
                       style="position: absolute; width: 1664px; height: 936px; left: 50%; transform: translate3d(-50%, 0px, 0px);">
                </video>-->
                <video class="video-item"
                       autoplay="autoplay"
                       muted
                       src="https://statics.oneplus.cn/ov/assets/medias/hotdog/19801/kv-light.mp4"
                       controls="controls"
                       style="position: absolute; width: 1664px; height: 936px; left: 50%; transform: translate3d(-50%, 0px, 0px); z-index: 1000;">
                </video>
                <!--<img src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/kv/kv.webp"
                     style="position: absolute; opacity: 1; left: 50%; transform: translate3d(-50%, 0px, 0px); width: 1664px; height: 936px;">-->
            </div>

        </section>
    </div>
</template>

<script>
    import Header from "../../components/header/header";

    export default {
        components: {
            Header
        },
        name: "onePlus7TPro",
        data() {
            return {

            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
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
            videoEnd(){
                console.log('播放完成');
            }
        }
    }
</script>

<style scoped lang="less">
    #onePlus7TPro {
        .section-kv {
            transition: transform .5s, -webkit-transform .5s;
            transform: translateZ(0);
            position: relative;
            /*width: 100vw;*/

            .kv-text-container {
                z-index: 2;
                position: absolute;
                left: 50%;
                top: 0;
                width: 100%;
                height: 100%;
                -webkit-transform: translate3d(-50%, 0, 0);
                transform: translate3d(-50%, 0, 0);
                will-change: transform; //使用gpu加速

                .kv-text-wrap {
                    opacity: 1;
                    -webkit-transform: translateZ(0);
                    position: absolute;
                    width: 100%;
                    left: 0;
                    top: 25%;
                    transition: all .5s cubic-bezier(.01, .66, 1, 1);

                    .container-text {
                        display: block;
                        margin: auto;
                        width: 100%;
                        max-width: 1200px;
                        min-width: 300px;
                        padding: 0;
                        font-weight: 400;

                        .font-container {
                            width: 52%;
                            text-align: left;
                            color: #000;

                            .font-headline-3 {
                                font-size: 48px;
                                line-height: 1.2;
                            }

                            .text-red {
                                color: #eb0028;
                            }

                            .font-headline-2 {
                                font-size: 40px;
                                line-height: 1.2;
                            }

                        }
                    }

                }

            }

            .kv-video-container {
                position: relative;
                height: 936px;
                width: 100%;

                .video-item{
                    border: none;
                }

                video::-webkit-media-controls {
                    display: none !important;
                }

                img {

                }
            }

        }

    }
</style>