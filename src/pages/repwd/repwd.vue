<template>
    <div class="repwd-wrap">
        <span @click="repwd">修改密码</span>
        <msg :isShow="isMsgShow" @on-disappear="disappear">
            <div slot="msg">{{message}}</div>
        </msg>
    </div>
</template>

<script>
import msg from 'components/message/message';

export default {
    data() {
        return {
            message: '',
            isMsgShow: false
        };
    },

    components: {
        msg
    },

    computed: {},

    mounted() {},

    methods: {
        repwd() {
            this.message = '修改密码';
            this.isMsgShow = true;
        },
        disappear() {
            this.isMsgShow = false;
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