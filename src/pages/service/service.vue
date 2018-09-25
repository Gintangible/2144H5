<template>
    <div class="service-wrap">
        <h2 class="service-tit">长按二维码加好友</h2>
        <img class="my-avator" src="./code.jpg" alt="">
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
.service-wrap {
    @extend %df;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .service-tit {
        @extend %pr;
        @extend %df;
        align-items: center;
        justify-content: center;
        width: 100%;
        @include singleHeight(0.28);
        @extend %c3;
        @extend %fwn;
        @extend %tac;
        font-size: 0.28rem;
        &:before,
        &:after {
            content: '';
            @extend %pa;
            width: 1.5rem;
            border: 1px solid #ccc;
        }
        &:before {
            left: 0.3rem;
        }
        &:after {
            right: 0.3rem;
        }
    }
    .my-avator {
        @extend %db;
        margin-top: 0.3rem;
        width: 2.7rem;
        height: 2.7rem;
    }
}
</style>