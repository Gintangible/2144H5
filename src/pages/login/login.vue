<template>
    <div class="login-wrap">
        <h3 class="login-tit">登陆</h3>
        <input type="text" placeholder="请输入用户名" v-model="nameText">
        <div class="login-btn" @click="handleLogin">登陆</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nameText: ''
        };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        handleLogin() {
            // if (!this.nameText) return console.log('输入姓名');
            this.$store
                .dispatch('user/getUserInfo', this.nameText)
                // .dispatch('user/getUserInfo', this.nameText)
                .then(res => {
                    console.log('login success');
                    this.$router.push({ path: '/user' });
                })
                .catch(err => {
                    console.error('user logout fail' + err);
                });
        }
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';
.login-wrap {
    @extend %df;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
        font-size: 0.32rem;
        @include singleHeight(0.6);
        @extend %fwn;
    }
    input {
        margin-top: 0.2rem;
        text-indent: 0.2rem;
        width: 70%;
        border: 1px solid #333;
        height: 0.8rem;
        font-size: 0.32rem;
        color: #333;
    }
    .login-btn {
        margin-top: 0.4rem;
        padding: 0 0.4rem;
        @include singleHeight(0.6);
        font-size: 0.32rem;
        color: #fff;
        border-radius: 0.1rem;
        background: #0bacff;
    }
}
</style>