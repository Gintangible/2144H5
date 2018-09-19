<template>
    <div class="loading-mask">
        <div class="loading-wrap">
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';
.loading-mask {
    @extend %pa;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    .loading-wrap {
        margin: -30px 0 0 -30px;
        @extend %pa;
        left: 50%;
        top: 50%;
        width: 60px;
        height: 60px;
        span {
            @extend %pa;
            left: 50%;
            top: 50%;
            border: 2px solid #000;
            border-top-color: transparent;
            border-bottom-color: transparent;
            border-radius: 100%;
            animation: rotate 1s ease-in-out infinite;
            &:nth-child(1) {
                margin: -18px 0 0 -18px;
                width: 36px;
                height: 36px;
            }
            &:nth-child(2) {
                margin: -8px 0 0 -8px;
                width: 16px;
                height: 16px;
                animation-duration: .5s;
                animation-direction: reverse;
            }
        }
    }
}

@keyframes rotate {
    0%{
        transform: rotate(0) scale(1);
    }
    50%{
        transform:rotate(180deg) scale(.6);
    }
    100%{
        transform:rotate(360deg) scale(1);
    }
}
</style>