<template>
    <div class="repwd-wrap">
        <span @click="repwd">修改密码</span>
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

    methods: {
        repwd() {
            alert('repwd');
        }
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';
.repwd-wrap {
    @extend %df;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    span {
        padding: 0.2rem 0.4rem;
        font-size: 0.4rem;
        border: 1px solid #ccc;
        border-radius: 0.4rem;
    }
}
</style>