<template>
  <div id="app">
    <div class="explain border-1px">
      个人学习
      <span>vue</span>
    </div>
    <div class="content">
      <div class="router-content">
        <router-view></router-view>
      </div>
      <div class="bottom-tab border-1px">
        <router-link class="tab-item tab-selected" to="/" exact>精选</router-link>
        <router-link class="tab-item tab-game" to="/game">小游戏</router-link>
        <a class="tab-item tab-community" target="_blank" href="//buluo.qq.com/mobile/barindex.html?_bid=128&amp;_wv=1027&amp;bid=391805">社区</a>
        <router-link class="tab-item tab-user" to="/user">个人</router-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang='scss' scoped>
@import './common/sass/index.scss';

#app {
  width: 100%;
  height: 100%;
}

.explain {
  @extend %ps;
  top: 0;
  width: 100%;
  @include singleHeight(0.8);
  font-size: 0.3rem;
  @extend %tac;
  color: #000;
  background: #f1f1f1;
  @include border-bottom-1px(#c1c1c1);
  span {
    color: #f00;
  }
}

.content {
  @extend %df;
  flex-direction: column;
  height: calc(100% - 0.8rem);

  .router-content {
    flex: 1;
  }

  .bottom-tab {
    padding: 0.1rem 0;
    @extend %df;
    width: 100%;
    align-content: center;
    @include border-top-1px(#c1c1c1);

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
}
</style>
