<template>
    <div id="app">
        <div class="content">
            <router-view></router-view>
            <loading v-if="isLoading"></loading>
        </div>
        <div class="bottom-tab border-1px">
            <router-link class="tab-item tab-selected" to="/" exact>精选</router-link>
            <router-link class="tab-item tab-game" to="/game">小游戏</router-link>
            <a class="tab-item tab-community" target="_blank" href="//buluo.qq.com/mobile/barindex.html?_bid=128&amp;_wv=1027&amp;bid=391805">社区</a>
            <router-link class="tab-item tab-user" to="/user">个人</router-link>
        </div>
    </div>
</template>

<script>
import loading from 'components/load/load';

export default {
    components: {
        loading
    },
    computed: {
        isLoading: function() {
            return this.$store.state.loading.isLoading;
        }
    }
};
</script>

<style lang='scss' scoped>
@import './common/sass/index.scss';

#app {
    width: 100%;
    height: 100%;
}

.content {
    @extend %pr;
    height: calc(100% - 1.08rem);
}
.bottom-tab {
    position: fixed;
    bottom: 0;
    padding: 0.1rem 0;
    @extend %df;
    width: 100%;
    align-content: center;
    @include border-top-1px(#c1c1c1);
    background: #fff;
    .tab-item {
        flex: 1;
        @extend %tac;
        font-size: 0.24rem;
        color: #a9a9a9;

        &.active {
            color: #0bacff;

            &:before {
                background: url(./assets/bottom_icon2.png) no-repeat;
                background-size: auto 100%;
            }
        }

        &:before {
            @extend %db;
            @extend %ma;
            content: '';
            width: 0.54rem;
            height: 0.54rem;
            background: url(./assets/bottom_icon1.png) no-repeat;
            background-size: auto 100%;
        }

        &.tab-game {
            &:before {
                background-position: -1.52rem 0;
            }
        }

        &.tab-community {
            &:before {
                background-position: -3.04rem 0;
            }
        }

        &.tab-user {
            &:before {
                background-position: -2.28rem 0;
            }
        }
    }
}
</style>
