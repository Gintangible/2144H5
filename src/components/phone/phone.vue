<template>
  <div class="phone-wrap">
    <div class="tel">
      手机号：<input id="tel" type="tel" @input="telVaf">
    </div>
    <div class="tel-vef">
      验证码：<input type="text">
      <i class="sent-code" :class="{act: phoneState}" @click="sendCode">发送验证码</i>
    </div>
    <a class="sent-btn" :class="{act: verState}" @click="verSuc">下一步</a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            phoneState: false,
            verState: false
        };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        telVaf({ type, target }) {
            let val = target.value;
            let reg = /^1[34578]\d{9}$/;
            if (reg.test(val)) {
                this.phoneState = true;
            }
        },
        sendCode() {
            if (!this.phoneState) return;

            setTimeout(() => {
                alert('验证码get');
                this.verState = true;
            }, 300);
        },
        verSuc() {
            if (!this.verState) return;

            setTimeout(() => {
                alert('bind phone is ok');
            }, 300);
        }
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';

.phone-wrap {
    padding-top: 0.6rem;
    width: 100%;
    height: 100%;
    background: #f5f5fa;
    .tel,
    .tel-vef {
        @extend %pr;
        padding-left: 0.3rem;
        @include singleHeight(1.04);
        font-size: 0.32rem;
        color: #333;
        border-top: 1px solid #d7d7d7;
        background: #fff;
        input {
            @extend %pa;
            left: 1.7rem;
            top: 0;
            width: 70%;
            border: 0;
            height: 1.04rem;
            font-size: 0.32rem;
            color: #333;
        }
    }
    .tel-vef {
        border-bottom: 1px solid #d7d7d7;
        input {
            width: 40%;
        }
        .sent-code {
            @extend %pa;
            margin-top: -0.4rem;
            top: 50%;
            right: 0.5rem;
            width: 2.2rem;
            color: #666;
            @extend %tac;
            font-size: 0.24rem;
            @include singleHeight(0.8);
            background: #ebebeb;
            border-radius: 0.1rem;
            &.act {
                @extend %cfff;
                background: #0bacff;
            }
        }
    }
    .sent-btn {
        @extend %db;
        margin: 0.3rem auto;
        width: 90%;
        font-size: 0.32rem;
        @include singleHeight(1.06);
        @extend %tac;
        color: #666;
        background: #ebebeb;
        border-radius: 0.1rem;
        &.act {
            @extend %cfff;
            background: #0bacff;
        }
    }
}
</style>