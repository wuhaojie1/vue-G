<template>
    <div id="shoppingCard">

    </div>
</template>

<script>
    export default {
        name: "shoppingCard",
        data() {
            return {
                fullscreenLoading: false,
            }
        },
        methods: {
            openFullScreen1() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 2000);
            },
        }
    }
</script>

<style scoped lang="less">
    #shoppingCard {
        position: absolute;
        z-index: 100;
        width: 290px;
        min-height: 175px;
        height: auto;
        background: #fff;
        border: 1px solid #d2d2d7;
        border-radius: 18px;
        left: 10px;
        margin-top: 10px;
    }

</style>