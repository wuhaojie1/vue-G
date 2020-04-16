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
                :class="scrollTop>2350&&scrollTop<4300?'section-child section-display gray':'section-child section-display'">
            <div class="container-text">
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
                <div class="scrollmagic-pin-spacer" :style="scrollmagic">
                    <div class="display-pin" :style="displayPin">
                        <div class="display-pin-inner">


                            <div class="display-phone-container" :style="phoneContainer">
                                <div class="phone-wrap" :style="phoneWrap">
                                    <div class="display-video-container">
                                        <video playsinline="true" webkit-playsinline="true" preload="auto" muted=""
                                               loop="loop">
                                            <source src="https://statics.oneplus.cn/ov/assets/medias/hotdog/19801/display.mp4"
                                                    type="video/mp4">
                                        </video>
                                    </div>
                                    <img data-src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/common/frame-v.webp"
                                         alt="" class="lazyload op-loaded" style=""
                                         src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/common/frame-v.webp">
                                </div>
                            </div>
                            <div class="display-text-container" :style="displayText">
                                <div class="display-text display-text-1">
                                    <div class="font-container">
                                        <div class="title">
                                            <div class="font-headline-2 text-red">90Hz 巴赫演算率</div>
                                            <div class="font-headline-2"></div>
                                            <div class="font-title pdT30">
                                                除了拥有出色的显示之外，还更加流畅。倍加丝滑的指尖体验，倍感舒适的视觉享受，不仅眼睛会爱上它，手指也会爱上它。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="display-text display-text-2">
                                    <div class="font-container text-black">
                                        <div class="title">
                                            <div class="font-headline-2 text-red">2K+ 超清分辨率</div>
                                            <div class="font-headline-2"></div>
                                            <div class="font-title padding-top-3x">超高规格定制 2K+ 柔性 OLED 显示屏，3120 x 1440
                                                超高分辨率。色彩绚丽舒适，文字清晰锐利。点开它，就是一场视觉盛宴。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="display-text display-text-3">
                                    <div class="font-container text-black">
                                        <div class="title">
                                            <div class="font-headline-2 text-red">新彩色阅读模式</div>
                                            <div class="font-headline-2"></div>
                                            <div class="font-title padding-top-3x">德国 VDE
                                                护眼认证，另外为你带来新的彩色阅读模式，可以智能调节色域和色彩饱和度，阅读体验更舒适。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="vde-logo"><img
                                            data-src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/VDE-logo.webp"
                                            alt="" class="lazyload op-loaded"
                                            src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/VDE-logo.webp">
                                    </div>
                                </div>
                            </div>
                            <!--<div class="display-photo-container" :style="displayPhoto">
                                <div class="display-photo-wrap">
                                    <div class="photo-wrap" style="border-radius: 33.677px;">
                                        <img
                                                data-src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/display-photo.webp"
                                                alt="" class="lazyload op-loaded"
                                                style="transform: matrix(1, 0, 0, 1, 0, 0);"
                                                src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/display-photo.webp">
                                        <div class="photo-mask" :style="photoMask"></div>
                                    </div>
                                </div>
                            </div>-->
                            <!--<div class="display-photo-container"
                                 :style="displayPhoto">
                                <div class="display-photo-wrap">
                                    <div class="photo-wrap" style="border-radius: 10px;">
                                        <img data-src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/display-photo.webp"
                                             alt="" class="lazyload op-loaded"
                                             style="transform: translate3d(0px, 0px, 0px) scale(1.06735, 1.06735);"
                                             src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/display-photo.webp">
                                        <div class="photo-mask" style="opacity: 0.449018;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="display-photo-text-container">

                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="photo-list-container" style="margin-top: 272px;">
                <div class="photo-list-left">
                    <div class="photo-wrap">
                        <div class="image-height"><img
                                data-src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/display-photo-backlight.webp"
                                alt="" class="lazyload op-loaded"
                                src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/display-photo-backlight.webp"
                                style=""></div>
                    </div>
                </div>
                <div class="photo-list-right">
                    <div class="photo-text-backlight font-container text-black">
                        <div class="title">
                            <div class="font-headline-2 text-red">夜晚的精彩，<br>不因夜幕降临而落幕。</div>
                            <div class="font-headline-2"></div>
                            <div class="font-title pdT30">
                                夜景算法升级，夜拍效果更棒，现在还支持广角拍摄。开启夜景模式，拿稳相机，剩下的，就是等待精彩的一幕发生。
                            </div>
                        </div>
                    </div>
                    <!--<div class="photo-wrap backlight parallax-pic">
                        <div class="image-height"><img
                                data-src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/display-photo-backlight.webp"
                                alt="" class="lazyload"></div>
                    </div>-->
                    <div :class="scrollTop>4600?'photo-wrap nightview parallax-pic show':'photo-wrap nightview parallax-pic'">
                        <div class="image-height"><img
                                data-src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/display-photo-nightview.webp"
                                alt="" class="lazyload op-loaded"
                                src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/display/display-photo-nightview.webp">
                        </div>
                    </div>
                    <div class="photo-text-nightview font-container text-black show">
                        <div class="title">
                            <div class="font-headline-2 text-red">117°超广角拍摄，<br>装下更多美。</div>
                            <div class="font-headline-2"></div>
                            <div class="font-title pdT30">不仅能拍广角照片，还能拍广角视频。将原先无法容纳的美景，原地尽收眼底。震撼的同时，眼界大开。</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-camera-zoom">
            <div class="container-text zoom-container-text">
                <div class="zoom-text-wrap font-container text-black">
                    <div class="title">
                        <div class="font-headline-2 text-red">多焦段拍摄，精彩轮番上演。</div>
                        <div class="font-headline-2"></div>
                        <div class="font-title pdT30">三颗摄像头，可进行多焦段的自由切换。无论拍摄人像还是自然风光，让精彩，在你手中轮番上演。</div>
                    </div>
                </div>
                <div class="scrollmagic-pin-spacer" :style="scrollmagicPinSpacer">
                    <div class="zoom-phone-wrap">
                        <div class="zoom-photo-container" :style="zoomPhoneContainer">
                            <div class="zoom-photo-wrap" :style="zoomPhotoWrap">
                                <img data-src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/performance/zoom-photo-pc.webp"
                                     alt="zoom-photo" class="zoom-photo lazyload op-loaded"
                                     :style="zoomPhoto"
                                     src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/overview/performance/zoom-photo-pc.webp">
                            </div>
                        </div>
                    </div>
                    <div class="zoom-frame" :style="zoomFrame">
                        <img
                                data-src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/common/frame-h.webp"
                                alt="" class="zoom-frame-img lazyload op-loaded" style=""
                                src="https://statics.oneplus.cn/ov/assets/images/events/2019/08/hotdog/19801/common/frame-h.webp">
                    </div>
                    <div class="performance-video race-video fade-in" :style="performanceVideo">
                        <div class="performance-video-container">
                            <video class="phone-video"
                                   playsinline="true"
                                   webkit-playsinline="true"
                                   muted="" loop=""
                                   autoplay="">
                                <source src="https://statics.oneplus.cn/ov/assets/medias/hotdog/19801/overview-performance.mp4"
                                        type="video/mp4">
                            </video>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-footnote">
            <div class="footnote-container footnote show">
                <div class="container-text">
                    <div class="footnote-wrap"><p class="footnote-title font-body-1">备注:</p>
                        <ol class="font-body-1">
                            <li class="font-body-1">4800 万超广角三摄是指相机推广的总称;</li>
                            <li class="font-body-1">屏幕默认显示为智能切换，根据场景自动切换分辨率，你可在设置中选择 QHD+(2K+)超清模式与 FHD+ 高清模式;</li>
                            <li class="font-body-1">屏幕流畅度体验可能会因为网络、使用时限、电量和亮度等因素受影响，请一切以实际体验为准;</li>
                            <li class="font-body-1">OnePlus 7T Pro 的三摄指的是 4800 万广角镜头，1600 万超广角镜头，800
                                万长焦镜头三颗摄像头，可实现多焦段拍摄;
                            </li>
                            <li class="font-body-1">117° 超大广角开启广角矫正后视角大小为 102°;</li>
                            <li class="font-body-1">3 倍为近似值，实际倍数为 2.87 倍。使用长焦镜头进行 3 倍变焦时(有效像素 800 万)实际等效焦距为
                                73.7mm，主摄像头等效焦距为 25.7mm，73.7/25.7≈2.87 倍;
                            </li>
                            <li class="font-body-1">性能数据为供应商提供，体验可能会因为使用时限、电量和亮度等环境因素受影响，请一切以实际体验为准;</li>
                            <li class="font-body-1">开启 Fnatic 电竞模式，会暂时屏蔽通知和来电，限制后台以加速游戏体验，屏蔽副卡以提升网络质量，让你获得更沉浸的游戏体验;</li>
                            <li class="font-body-1">OnePlus 7T Pro 须同时搭配使用 Warp 闪充适配器和 Warp 闪充数据线，才能开启闪充;</li>
                            <li class="font-body-1">4085mAh 为电池容量典型值，充电数据为实验室测试得出，仅供参考，实际充电时间请以实际为准;</li>
                            <li class="font-body-1">AG 玻璃工艺，即经 Anti-Glare 防眩光工艺处理的玻璃;</li>
                            <li class="font-body-1">系统的流畅度体验可能会因为网络、使用时限、电量和亮度等因素受影响，请一切以实际体验为准;</li>
                            <li class="font-body-1">产品图片仅供参考，请以实际为准。此处所涉及到的数据均来源于 OnePlus
                                设计技术参数、实验室及供应商测试数据，实际情况会因测试软件版本、具体测试环境、具体版本不同，而略有差异。
                            </li>
                        </ol>
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
                },
                scrollmagic: {
                    top: 'auto',
                    left: 'auto',
                    bottom: 'auto',
                    right: 'auto',
                    margin: '100px 0px 0px',
                    display: 'block',
                    position: 'relative',
                    boxSizing: 'content-box',
                    minHeight: '936px',
                    height: 'auto',
                    paddingTop: '0px',
                    paddingBottom: '900px',
                },
                displayPin: {
                    position: 'relative',
                    margin: 'auto',
                    top: '0px',
                    left: '0px',
                    bottom: 'auto',
                    right: 'auto',
                    boxSizing: 'border-box',
                    width: '100%',
                },
                phoneContainer: {
                    width: '28.7837%',
                    transform: 'matrix(3.23, 0, 0, 3.23, 0, 0)',
                },
                phoneWrap: {
                    visibility: 'inherit',
                    opacity: 1,
                },
                displayText: {
                    transform: 'matrix(1, 0, 0, 1, 0, 836)',
                },
                scrollmagicPinSpacer: {},
                zoomPhoneContainer: {
                    position: 'relative',
                    margin: 'auto',
                    top: '0px',
                    left: '0px',
                    bottom: 'auto',
                    right: 'auto',
                    boxSizing: 'border-box',
                    width: '100%',
                    transform: 'matrix(1, 0, 0, 1, 0, 0)',
                },
                zoomPhoto: {
                    width: '1200px',
                    transform: 'matrix(1, 0, 0, 1, -600, -350)',
                    opacity: '1',
                },
                zoomPhotoWrap: {
                    width: '1200px',
                    height: '700px',
                    borderRadius: '0',
                },
                zoomFrame: {
                    opacity: '0',
                },
                performanceVideo: {
                    opacity: '0',
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
        },
        watch: {
            scrollTop(v) {
                // window.console.log(v);
                if (v > 1810 && v < 2360) {
                    let top = v - 1810;
                    let scalex = 3.23 - (top * 0.00646);
                    let scaley = 3.23 - (top * 0.00646);
                    if (scaley < 1) {
                        scaley = 1
                    }
                    if (scalex < 1) {
                        scalex = 1
                    }
                    let translate3dy = top * 0.15;
                    this.phoneContainer = {
                        width: '28.7837%',
                        transform: 'translate3d(0' + ',' + translate3dy + 'px' + ',' + '0)' + 'scale(' + scalex + ',' + scaley + ')',
                        // position: 'fixed'
                    };
                    // console.log(this.phoneContainer)
                } else if (v > 2600 && v < 3500) {
                    this.phoneContainer = {
                        width: '345.39px',
                        transform: 'translate3d(0' + ',' + '30px' + ',' + '0)' + 'scale(1,1)',
                        position: 'fixed'
                    };
                } else if (v > 3500 && v < 6560) {
                    this.phoneContainer = {
                        width: '345.39px',
                        transform: 'translate3d(0' + ',' + '30px' + ',' + '0)' + 'scale(1,1)',
                        // position: 'fixed'
                        top: '955px',
                    };
                    this.zoomPhoneContainer = {
                        position: 'relative',
                        margin: 'auto',
                        top: '0px',
                        left: '0px',
                        bottom: 'auto',
                        right: 'auto',
                        boxSizing: 'border-box',
                        width: '100%',
                        transform: 'matrix(1, 0, 0, 1, 0, 0)',
                    }
                } else if (v > 6560 && v < 6836) {
                    this.zoomPhoneContainer = {
                        position: 'fixed',
                        margin: '0 auto',
                        top: '95px',
                        // left: '0px',
                        // bottom: 'auto',
                        right: 'auto',
                        boxSizing: 'border-box',
                        width: '1200px',
                        transform: 'matrix(1, 0, 0, 1, 0, 0)',
                    };
                    let scale = 1;
                    if (v > 6560) {
                        scale = scale + (v - 6560) * 0.00727
                    }
                    if (scale > 3) {
                        scale = 3
                        // console.log('scale大于三' ,v)
                    }
                    this.zoomPhoto = {
                        width: '1200px',
                        transform: 'translate3d(-600px, -350px, 0px) scale(' + scale + ',' + scale + ')',
                        opacity: '1',
                    }
                } else if (v > 6836 && v < 7100) {
                    let borderRadius = (v - 6836) / 5;
                    let height = 699 - (v - 6836);
                    let width = 1200 - (v - 6836);
                    if (borderRadius > 40) {
                        borderRadius = 40
                    }
                    if (width < 936) {
                        width = 936
                    }
                    if (height < 434) {
                        height = 434
                    }
                    this.zoomPhotoWrap = {
                        borderRadius: borderRadius + 'px',
                        height: height + 'px',
                        width: width + 'px',
                    };
                    this.zoomFrame = {
                        height: 434 + 'px',
                        width: 936 + 'px',
                        opacity: 0,
                    };
                    this.performanceVideo = {
                        opacity: 0,
                    }
                } else if (v > 7100 && v < 7301) {
                    let opacity = 1 - (v - 7100) * 0.005;
                    let zoomFrameOpacity = (v - 7100) * 0.005;
                    this.zoomPhoto = {
                        width: '1200px',
                        transform: 'matrix(1, 0, 0, 1, -600, -350)',
                        opacity: opacity,
                    };
                    if (zoomFrameOpacity > 1) {
                        zoomFrameOpacity = 1;
                        // console.log('zoomFrameOpacity', v)
                    }
                    this.zoomFrame = {
                        height: 434 + 'px',
                        width: 936 + 'px',
                        opacity: zoomFrameOpacity
                    };
                    this.performanceVideo = {
                        opacity: zoomFrameOpacity
                    }
                } else if (v > 7301) {

                }
            }
        },
        methods: {
            //监听滚动条事件
            handleScroll() {
                //获取设备高度
                // let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //滚动的高度
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.scrollTop = scrollTop;
                // console.log(scrollTop)
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
        background-color: #f4f4f4 !important;
    }

    .text-red {
        color: #eb0028;
    }

    .font-headline-2 {
        font-size: 40px;
        line-height: 1.2;
    }

    .font-title {
        font-size: 24px;
        line-height: 1.5;
    }

    .font-body-1 {
        font-size: 14px;
        line-height: 1.7;
    }

    .footnote-container {
        color: rgba(0, 0, 0, .4);
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

            .container-text {
                .scrollmagic-pin-spacer {
                    .display-pin {
                        height: 100vh;
                        padding-top: 100px;

                        .display-pin-inner {
                            position: relative;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;


                            .display-phone-container {
                                width: 100%;
                                margin: 0 auto;
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                -webkit-transform: translateZ(0) scale(3.23);
                                transform: translateZ(0) scale(3.23);
                                -webkit-transform-origin: center top;
                                transform-origin: center top;
                                -webkit-box-pack: center;
                                justify-content: center;
                                -webkit-box-align: center;
                                align-items: center;

                                .phone-wrap {
                                    width: 100%;
                                    position: relative;
                                    padding-bottom: 213.07922%;

                                    .display-video-container {
                                        position: absolute;
                                        top: 1.9%;
                                        left: 2%;
                                        width: 96.1%;
                                        height: 95.5%;
                                        overflow: hidden;
                                        background-color: #000;
                                        border-radius: 10%/5%;

                                        video {
                                            width: 100%;
                                            display: inline-block;
                                            vertical-align: baseline;
                                        }

                                    }

                                    img {
                                        width: 100%;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        border: 0;
                                        vertical-align: middle;
                                    }
                                }
                            }

                            .display-text-container {
                                height: 100%;
                                display: -webkit-box;
                                display: flex;
                                -webkit-box-orient: vertical;
                                -webkit-box-direction: normal;
                                flex-direction: column;
                                justify-content: space-around;
                                -webkit-transform: translate3d(0, 100%, 0);
                                transform: translate3d(0, 100%, 0);
                                width: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;

                                .display-text {
                                    width: 26.66667%;
                                    flex: 1;

                                    .font-container {
                                        color: #000;

                                        .title {
                                            text-align: left;

                                            .font-headline-2 {
                                                font-size: 40px;
                                                line-height: 1.2;
                                            }

                                            .font-title {
                                                font-size: 24px;
                                                line-height: 1.5;
                                            }
                                        }
                                    }
                                }

                                .display-text-2 {
                                    align-self: flex-end;
                                }
                            }

                            /*.display-photo-container {
                                width: 100%;
                                margin: 0 auto;
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                -webkit-transform: translateZ(0) scale(3.23);
                                transform: translateZ(0) scale(3.23);
                                -webkit-transform-origin: center top;
                                transform-origin: center top;
                                -webkit-box-pack: center;
                                justify-content: center;
                                -webkit-box-align: center;
                                align-items: center;

                                .display-photo-wrap {
                                    width: 100%;
                                    padding-bottom: 212%;

                                }

                                .photo-wrap {
                                    display: -webkit-box;
                                    display: flex;
                                    -webkit-box-align: center;
                                    align-items: center;
                                    -webkit-box-pack: center;
                                    justify-content: center;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    right: 0;
                                    bottom: 0;
                                    width: 100%;
                                    overflow: hidden;
                                    border-radius: 40px;
                                    img{
                                        width: 1600px;
                                        flex-shrink: 0;
                                        border: 0;
                                        vertical-align: middle;
                                    }
                                }
                            }

                            .display-photo-text-container {

                            }*/
                        }
                    }
                }
            }

            .photo-list-container {
                padding-top: 150px;
                margin-left: auto;
                margin-right: auto;
                max-width: 1650px;
                width: 90%;
                display: -webkit-box;
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-between;

                .photo-list-left {
                    width: 38.78788%;

                    .photo-wrap {
                        padding-bottom: 137.5%;
                        overflow: hidden;
                        position: relative;

                        .image-height {
                            padding-bottom: 168.75%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;

                            img {
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                border: 0;
                                vertical-align: middle;
                            }
                        }
                    }

                    .parallax-pic {

                    }
                }

                .photo-list-right {
                    width: 58.18182%;
                    display: -webkit-box;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    flex-direction: column;

                    .photo-text-backlight {
                        margin-bottom: 140px;
                        color: #000;

                        .title {
                            text-align: left;

                            .font-headline-2 {
                                font-size: 40px;
                                line-height: 1.2;
                            }

                            .font-title {
                                font-size: 24px;
                                line-height: 1.5;
                            }
                        }
                    }

                    .photo-text-nightview {
                        text-align: left;
                        margin-top: 60px;
                        opacity: 0;
                        -webkit-transition: opacity .6s;
                        transition: opacity .6s;
                    }

                    .font-container {
                        width: 65.625%;
                    }

                    .show {
                        opacity: 1 !important;
                    }

                    .photo-wrap {
                        /*padding-bottom: 72.91667%;*/
                        opacity: 0;
                        -webkit-transition: opacity .6s;
                        transition: opacity .6s;
                    }

                }


            }
        }

        .section-camera-zoom {
            padding-top: 200px;
            text-align: left;

            .container-text {
                display: block;
                margin: auto;
                width: 100%;
                max-width: 1200px;
                min-width: 300px;

                .zoom-text-wrap {
                    width: 50%;
                }
            }

            .scrollmagic-pin-spacer {
                width: 100%;
                margin-top: 100px;
                margin-bottom: 200px;
                position: relative;

                .zoom-phone-wrap {
                    width: 100%;
                    position: relative;
                    height: 2000px;
                    margin-bottom: 100px;

                    .zoom-photo-container {
                        width: 100%;
                        position: relative;

                        .zoom-photo-wrap {
                            height: 700px;
                            width: 1200px;
                            position: absolute;
                            /*top: 0;*/
                            /*bottom: 0;*/
                            left: 0;
                            right: 0;
                            margin: auto;
                            overflow: hidden;
                            background: #000;

                            img {
                                position: absolute;
                                width: 100%;
                            }

                            .zoom-photo {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                width: 100%;
                                -webkit-transform: translate3d(-50%, -50%, 0);
                                transform: translate3d(-50%, -50%, 0);
                                -webkit-transform-origin: 52% 85%;
                                transform-origin: 52% 85%;
                            }
                        }
                    }
                }

                .zoom-frame {
                    position: fixed;
                    top: 100px;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    opacity: 0;
                    display: flex;
                    z-index: 2;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    align-items: center;

                    img {
                        /*width: 80%;*/
                    }
                }

                .performance-video {
                    width: 916px;
                    height: 434px;
                    position: fixed;
                    top: 100px;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    opacity: 1;
                    display: flex;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    align-items: center;
                    z-index: 3;


                    .performance-video-container {
                        width: 100%;

                        .phone-video {
                            width: 100%;
                            border-radius: 40px;
                        }
                    }
                }
            }
        }

        .section-footnote {
            text-align: left;

            .footnote-container {
                /*padding: 120px 0 250px;*/

                .container-text {
                    display: block;
                    margin: auto;
                    width: 100%;
                    max-width: 1200px;
                    min-width: 300px;
                }
            }
        }

    }
</style>