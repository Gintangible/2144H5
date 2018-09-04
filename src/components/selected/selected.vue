<template>
  <div class="selected-wrap">
    <div class="slider-wrap">
      <slider :sliderList="sliderList" :src="src"></slider>
    </div>
    <div class="game-wrap" v-for="(gameClassfy, index) in gameData" :key="index">
      <div class="game-list">
        <h2 class="list-tit tit1">
          {{gameClassfy.name}}
        </h2>
        <div class="game-item" v-for="(item, ii) in gameClassfy.games" :key="ii">
          <img class="game-icon" :src="item.icon" alt="">
          <div class="game-intro">
            <h3 class="game-name">
              {{item.name}}
            </h3>
            <p class="game-info">
              {{item.slogan}}
            </p>
          </div>
          <!-- <a class="game-start" href="http://h5.2144.cn/game/fdzs">开始</a> -->
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
            gameData: [
                {
                    id: 6,
                    name: '休闲益智',
                    games: [
                        {
                            id: 20106,
                            name: '啪啪动物城',
                            icon:
                                '//static.2144gy.com/h5/images/20106_d776d04ecdcd1144db90e6e9f37cdff1.png',
                            slogan: '就会拥有新世界',
                            link_startgame: 'http://h5.2144.cn/game/ppdwc',
                            link_gamecontent:
                                'http://h5.2144.cn/m/game/view/ppdwc?ppdwc',
                            hot: '0',
                            gift: 1,
                            new: '1'
                        },
                        {
                            id: 20032,
                            name: '全民穿越之宫',
                            icon:
                                '//static.2144gy.com/h5/images/20032_7901380503b5b2547ba7d8c35ad4d4e1.png',
                            slogan: '穿越时空寻找TA',
                            link_startgame: 'http://h5.2144.cn/game/qmcy',
                            link_gamecontent:
                                'http://h5.2144.cn/m/game/view/qmcy?qmcy',
                            hot: '0',
                            gift: 0,
                            new: '0'
                        },
                        {
                            id: 20086,
                            name: '首富2',
                            icon:
                                '//static.2144gy.com/h5/images/20086_bd0c0fb5b6978fe3da04e66c49bf4484.png',
                            slogan:
                                '想要体验赚钱的感觉吗？想要成为世界首富吗？',
                            link_startgame: 'http://h5.2144.cn/game/sf2',
                            link_gamecontent:
                                'http://h5.2144.cn/m/game/view/sf2?sf2',
                            hot: '0',
                            gift: 1,
                            new: 0
                        },
                        {
                            id: 20164,
                            name: '青蛙吐珠',
                            icon:
                                '//static.2144gy.com/h5/images/20164_f32d59d43a53e208d65dac8c549ca660.png',
                            slogan: '连环吐珠，青蛙也疯狂！',
                            link_startgame: 'http://h5.2144.cn/game/qwtz',
                            link_gamecontent:
                                'http://h5.2144.cn/m/game/view/qwtz?qwtz',
                            hot: '0',
                            gift: 0,
                            new: '1'
                        }
                    ]
                }
            ]
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
                this.gameDatea = this.adjustData(response.data.data);
            }
        });
    },

    computed: {},

    methods: {
        adjustData(data) {
            var arr = [
                data[32],
                data[33],
                data[34],
                data[35],
                data[36],
                data[6]
            ];
            console.log(arr);
            return arr;
        }
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
                margin: 0.24rem 0 0 0.3rem;
                width: 1.14rem;
                height: 1.14rem;
                border-radius: 0.25rem;
            }
            .game-intro {
                margin-left: 0.12rem;
                width: 4rem;
                .game-name {
                    max-width: 2.2rem;
                    font-size: 0.3rem;
                    @extend %fwn;
                }
                .game-info {
                    padding-top: 0.1rem;
                    font-size: 0.26rem;
                    color: #a9a9a9;
                }
            }
        }
        .game-start {
        }
    }
}
</style>