<template>
    <div id="onePlus7TPro">
        <Header></Header>
        <section class="section-kv">
            <div :class="kvVideo?'kv-text-container show-text': 'kv-text-container'"
                 :style="kvText">
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
                <video class="video-item"
                       autoplay="autoplay"
                       src="https://statics.oneplus.cn/ov/assets/medias/hotdog/19801/kv-light.mp4"
                       @ended="ended"
                       controls="controls"
                       :style="videoItem">
                </video>
                <img src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/kv/kv.webp"
                     :style="videoImg">
            </div>

        </section>
        <section
                :class="scrollTop>150&&scrollTop<1680?'section-core-video section-core-video-active':'section-core-video'">
            <div class="core-video-wrapper">
                <div class="core-video-text">
                    <div class="core-video-cover"></div>
                    <div class="container-text">
                        <div class="text-content">
                            <div class="text-main">
                                <div class="core-selling-item font-title">
                                    <div>90Hz</div>
                                    <div>2K+ 流体屏</div>
                                </div>
                                <div class="core-selling-item font-title">
                                    <div>骁龙 855 Plus</div>
                                    <div>8GB+256GB UFS 3.0</div>
                                </div>
                                <div class="core-selling-item font-title">
                                    <div>4800 万超广角三摄<sup>1</sup></div>
                                    <div>3 倍混合变焦， 117° 超大广角</div>
                                </div>
                            </div>
                            <div class="core-video-play">
                                <div class="video-text font-title">观看产品视频</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="core-video-container" class="video-container">
                    <video class="phone-video"
                           playsinline="true"
                           webkit-playsinline="true"
                           muted="" loop=""
                           autoplay="">
                        <source src="https://statics.oneplus.cn/ov/assets/medias/hotdog/19801/7t-pro-core-video.mp4"
                                type="video/mp4">
                    </video>
                </div>
            </div>
        </section>
        <section
                :class="scrollTop>1680&&scrollTop<2100?'section-child section-display gray':'section-child section-display'">
            <div class="container-text" style="">
                <div class="font-container">
                    <div class="headline font-headline-4">
                        <div class="text-red">屏幕</div>
                        <div class="text-headline-black pdT10">2K+ 超清显示，<br>90Hz 流体屏。</div>
                        <div class="font-title pdT40">2K+ 超清分辨率屏幕<sup>2</sup>，支持 HDR10+ 显示，更有倍感流畅的 90Hz
                            巴赫演算率。点开它，目之所及，就是一场视觉盛宴；滑动它，所到之处，都让指尖尽享丝滑<sup>3</sup>。
                        </div>
                        <a class="learn-more font-title">
                            <span>了解屏幕</span>
                        </a>
                    </div>
                </div>

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
                scrollTop: 0,
                kvVideo: false,
                videoItem: {
                    position: 'absolute',
                    width: '1664px',
                    height: '936px',
                    left: '50%',
                    transform: 'translate3d(-50%, 0px, 0px)',
                },
                videoImg: {
                    position: 'absolute',
                    opacity: '0',
                    left: '50%',
                    transform: 'translate3d(-50%, 0px, 0px)',
                    width: '1664px',
                    height: '936px',
                },
                kvText: {
                    width: '1664px',
                    height: '936px',
                }
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
                this.scrollTop = scrollTop;
                console.log(scrollTop)
            },
            ended() {
                this.videoItem = {
                    position: 'absolute',
                    width: '1664px',
                    height: '936px',
                    left: '50%',
                    transform: 'translate3d(-50%, 0px, 0px)',
                    display: 'none',
                };
                this.videoImg = {
                    position: 'absolute',
                    opacity: '1',
                    left: '50%',
                    transform: 'translate3d(-50%, 0px, 0px)',
                    width: '1664px',
                    height: '936px',
                };
                this.kvVideo = true
            }
        }
    }
</script>

<style scoped lang="less">
    .gray {
        background-color: #f4f4f4;
    }

    #onePlus7TPro {
        .section-kv {
            transition: transform .5s, -webkit-transform .5s;
            transform: translateZ(0);
            position: relative;
            /*width: 100vw;*/

            .show-text {
                opacity: 1 !important;
                z-index: 2;
                transition: all .5s cubic-bezier(.01, .66, 1, 1);
                transform: translate3d(0, 0, 0);
            }

            .kv-text-container {
                z-index: 2;
                opacity: 0;
                position: absolute;
                /*left: 50%;*/
                top: 0;
                width: 100%;
                height: 100%;

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

                .video-item {
                    border: none;
                }

                video::-webkit-media-controls {
                    display: none !important;
                }

                img {

                }
            }

        }

        .section-core-video {
            margin-top: 100px;

            .core-video-wrapper {
                position: relative;
                margin: 0 30px;
                overflow: hidden;

                .core-video-text {
                    padding: 6% 0;
                    color: #fff;
                    z-index: 10;
                    overflow: hidden;
                    position: absolute;
                    width: 100%;
                    top: 0;
                    left: 0;
                    height: 100%;

                    .core-video-cover {
                        position: absolute;
                        width: 40%;
                        height: 100%;
                        background-color: #fff;
                        top: 0;
                        right: 0;
                        -webkit-transition: all .5s;
                        transition: all .5s;
                    }

                    .container-text {
                        display: block;
                        margin: auto;
                        width: 100%;
                        max-width: 1200px;
                        min-width: 300px;

                        .text-content {
                            height: 100%;
                            transition: all .5s;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            .text-main {
                                display: flex;
                                justify-content: space-between;
                                text-align: left;
                                line-height: 1.5;
                                font-size: 24px;
                                /*font-weight: 600;*/
                            }

                            .core-video-play {
                                line-height: 1.5;
                                font-size: 24px;

                                .video-text:hover {
                                    transition: .6s cubic-bezier(.77, 0, .175, 1);
                                    color: #eb0028;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }

        .section-core-video-active {
            margin-top: 100px;

            .core-video-wrapper {


                .core-video-text {


                    .core-video-cover {
                        transform: translateX(100%);
                    }

                    .container-text {
                        height: 100%;

                        .text-content {
                            transform: translateY(0);
                        }
                    }
                }
            }
        }

        .section-child {
            padding-top: 200px;

            .container-text {
                display: block;
                margin: auto;
                width: 100%;
                max-width: 1200px;
                min-width: 300px;

                .font-container {
                    color: #000;

                    .headline {
                        text-align: left;
                        width: 73%;
                        line-height: 1.2;
                        font-size: 60px;
                        margin: 0;
                        padding: 0;
                        font-weight: 400;

                        .text-red {
                            color: red;
                        }

                        .text-headline-black {
                        }

                        .font-title {
                            font-size: 24px;
                            line-height: 1.5;
                        }

                        .learn-more {
                            padding-top: 80px;
                            position: relative;
                            padding-bottom: 10px;
                            display: inline-block;
                        }

                        .learn-more:hover {
                            transition: .6s cubic-bezier(.77, 0, .175, 1);
                            color: #eb0028;
                        }
                    }

                }
            }
        }

        .section-display {
            position: relative;
            overflow: visible;
            -webkit-transition: background-color .6s cubic-bezier(.77, 0, .175, 1);
            transition: background-color .6s cubic-bezier(.77, 0, .175, 1);
            background-color: white;
        }

    }
</style>