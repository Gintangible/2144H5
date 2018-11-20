<template>
    <div class="user-wrap">
        <div class="user-data" v-if="!name">
            <span class="user-notLogin"></span>
            <router-link class="user-login" to="/login">登录注册</router-link>
        </div>
        <div class="user-data" v-else>
            <img class="user-img" :src="avator" alt="">
            <div class="user-login" @click="logOut">注销 {{name}}</div>
        </div>
        <router-link class="link-rz" to="/verified" v-if="!isVerified">实名认证</router-link>
        <div class="link-rz" v-else>已实名认证已实名认证</div>
        <router-link class="link-phone" to="/phone" v-if="!isPhone">绑定手机</router-link>
        <div class="link-phone" v-else>
            已绑定手机已绑定手机
        </div>
        <router-link class="link-pwd" to="/repwd">修改密码</router-link>
        <router-link class="link-kf" to="/service">联系客服</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: '',
            name: '',
            avator: '',
            isVerified: false,
            isPhone: false
        };
    },

    components: {},

    computed: {},

    mounted() {
        this.name = this.$store.state.user.name;
        this.avator = this.$store.state.user.avator;
        this.isVerified = this.$store.state.user.isVerified;
        this.isPhone = this.$store.state.user.isPhone;
    },

    methods: {
        logOut() {
            this.$store
                .dispatch('user/logOut')
                .then(() => {
                    this.$router.push({ path: '/login' });
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

.user-wrap {
    width: 100%;
    height: 100%;
    background: #f5f5fa;
    .user-data {
        padding-left: 0.3rem;
        @extend %df;
        align-items: center;
        height: 1.9rem;
        background: #fff;
        .user-notLogin {
            width: 1.02rem;
            height: 1.02rem;
            border: 1px solid #d6d6d6;
            border-radius: 50%;
            background: url(./notlogin.png) center no-repeat;
            background-size: 0.62rem 0.7rem;
        }
        .user-img {
            width: 1.02rem;
            height: 1.02rem;
            border: 1px solid #d6d6d6;
            border-radius: 50%;
        }
        .user-login {
            margin-left: 0.32em;
            font-size: 0.32rem;
            @extend %c3;
            width: 4rem;
            @include singleHeight(0.32);
        }
    }
    .link-rz,
    .link-phone,
    .link-pwd,
    .link-kf {
        @extend %pr;
        margin-top: 0.2rem;
        padding-left: 1.2rem;
        @extend %db;
        @include singleHeight(1.04);
        color: #222;
        font-size: 0.32rem;
        border-bottom: 1px solid #e5e5e5;
        background: #fff;
        &:before {
            content: '';
            @extend %pa;
            top: 50%;
            left: 0.4rem;
            margin-top: -0.25rem;
            width: 0.5rem;
            height: 0.5rem;
            background: url(./personico.png) no-repeat;
            background-size: 4rem 0.5rem;
        }
        &:after {
            content: '';
            margin-top: -0.25rem;
            @extend %pa;
            top: 50%;
            right: 0.3rem;
            width: 0.5rem;
            height: 0.5rem;
            background: url(./personico.png) -3.5rem 0 no-repeat;
            background-size: 4rem 0.5rem;
        }
        &.link-phone {
            margin-top: 0;
            &:before {
                background-position: -0.7rem 0;
            }
        }
        &.link-pwd {
            &:before {
                background-position: -1.4rem 0;
            }
        }
        &.link-kf {
            &:before {
                background-position: -2.1rem 0;
            }
        }
    }
}
</style>