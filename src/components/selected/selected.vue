<template>
  <div class="selected-wrap">
    <div class="slider-wrap">
      <slider :sliderList="sliderList" :src="src"></slider>
    </div>
    <div class="game-wrap">
      <div class="game-list">
        <h2 class="list-tit tit1">
          精品推荐
        </h2>
        <div class="game-item">
          <img class="game-icon" src="http://h5.2144.cn/m/game/view/fdzs?fdzs" alt="">
          <div class="game-intro">
            <h3 class="game-name">
              游戏名字
            </h3>
            <p class="game-info">
              游戏介绍
            </p>
          </div>
          <a class="game-start" href="http://h5.2144.cn/game/fdzs">开始</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slider from 'components/slider/slider';

const URL = 'http://h5.2144.cn';
const ERR_OK = 200;

export default {
    data() {
        return {
            sliderList: [],
            src: 'image',
            gameData: []
        };
    },

    components: {
        slider
    },

    created() {
        this.$axios
            .get(URL + '/api/game/carousel', {
                params: {
                    count: 5
                }
            })
            .then(response => {
                if (response.data.code === ERR_OK) {
                    this.sliderList = response.data.data;
                }
            });
        this.$axios.get(URL + '/api/game/recommend-list').then(response => {
            if (response.data.code === ERR_OK) {
                adjustData(response.data.data);
            }
        });
    },

    computed: {},

    methods: {
        adjustData(data) {}
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';

.selected-wrap {
    width: 100%;
    height: 100%;
    .slider-wrap {
        width: 100vw;
    }
    .game-list {
        height: 0.58rem;
        border-top: 0.2rem solid #f8f8f8;
        background: #fff;
        .list-tit {
            padding-left: 0.55rem;
            margin: 0.23rem 0 0 0.32rem;
            @include singleHeight(0.35);
            font-size: 16px;
            color: #020202;
            @extend %fwb;
            background: url(./title-ico.png) no-repeat;
            background-size: 0.3rem 6rem;
            &.tit1 {
                background-position: 0 0.04rem;
            }
            &.tit2 {
                background-position: 0 -0.7rem;
            }
            &.tit3 {
                background-position: 0 -1.38rem;
            }
            &.tit4 {
                background-position: 0 -2.12rem;
            }
            &.tit5 {
                background-position: 0 -2.93rem;
            }
            &.tit6 {
                background-position: 0 -3.8rem;
            }
        }
        .game-item {
            @extend %df;
            height: 1.6rem;
            border-bottom: 0.01rem solid #f5f5f5;
            .game-icon {
                width: 1.14rem;
                height: 1.14rem;
                border-radius: 0.25rem;
            }
            .game-intro {
                width: 4rem;
                .game-name {
                }
                .game-info {
                }
            }
        }
        .game-start {
        }
    }
}
</style>