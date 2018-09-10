<template>
    <div class="selected-wrap">
        <div class="explain border-1px">
            个人学习
            <span>vue</span>
        </div>
        <div class="slider-wrap">
            <slider :sliderList="sliderList" :src="src"></slider>
        </div>
        <div class="game-wrap" v-for="(gameClassfy, index) in gameData" :key="index">
            <div class="game-list">
                <h2 class="list-tit" :class="getTit(index)">
                    {{gameClassfy.name}}
                </h2>
                <div class="game-item" v-for="(item, ii) in gameClassfy.games" :key="ii">
                    <img class="game-icon" :src="item.icon" alt="">
                    <div class="game-intro">
                        <h3 class="game-name">
                            {{item.name}}
                        </h3>
                        <p class="game-slogan">
                            {{item.slogan}}
                        </p>
                    </div>
                    <a class="game-start" :href="item.link_startgame">开始</a>
                </div>
            </div>
        </div>
        <div class="load-wrap">
            {{loadMsg}}
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
            gameData: [],
            loadMsg: ''
        };
    },

    components: {
        slider
    },

    created() {
        // this.$store.commit('showLoading');

        this.$axios
            .all([this.carousel(), this.recommendList()])
            .then(
                this.$axios.spread((acct, perms) => {
                    if (acct.data.code === ERR_OK) {
                        this.sliderList = acct.data.data;
                    }

                    if (perms.data.code === ERR_OK) {
                        const data = perms.data.data;

                        this.gameData = [
                            data[32],
                            data[33],
                            data[34],
                            data[35],
                            data[36],
                            data[6]
                        ];
                    }
                })
            )
            .then(() => {
                // this.$store.commit('hideLoading');
                this.loadMsg = '没有更多了~';
            });
    },

    computed: {},

    methods: {
        getTit(index) {
            return 'tit' + index;
        },
        carousel() {
            return this.$axios.get(URL + '/api/game/carousel');
        },
        recommendList() {
            return this.$axios.get(URL + '/api/game/recommend-list');
        }
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';

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
.selected-wrap {
    width: 100%;
    height: 100%;
    @extend %oa;
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
            &.tit0 {
                background-position: 0 0.04rem;
            }
            &.tit1 {
                background-position: 0 -0.7rem;
            }
            &.tit2 {
                background-position: 0 -1.38rem;
            }
            &.tit3 {
                background-position: 0 -2.12rem;
            }
            &.tit4 {
                background-position: 0 -2.93rem;
            }
            &.tit5 {
                background-position: 0 -3.8rem;
            }
        }
        .game-item {
            @extend %df;
            align-items: center;
            justify-content: space-between;
            height: 1.6rem;
            border-bottom: 0.01rem solid #f5f5f5;
            .game-icon {
                margin-left: 0.3rem;
                width: 1.14rem;
                height: 1.14rem;
                border-radius: 0.25rem;
            }
            .game-intro {
                margin-left: 0.12rem;
                width: 4rem;
                .game-name {
                    @include singleHeight(0.32);
                    max-width: 2.2rem;
                    font-size: 0.3rem;
                    @extend %fwn;
                    @extend %nowrap;
                }
                .game-slogan {
                    max-width: 3.2rem;
                    padding-top: 0.1rem;
                    font-size: 0.26rem;
                    color: #a9a9a9;
                    @extend %nowrap;
                }
            }
        }
        .game-start {
            margin-right: 0.2rem;
            padding: 0.09rem 0.26rem;
            line-height: 0.4rem;
            font-size: 0.28rem;
            color: #0bacff;
            border: 1px solid #0bacff;
            border-radius: 4px;
        }
    }
    .load-wrap {
        @include singleHeight(0.8);
        font-size: 0.3rem;
        color: #999;
        @extend %tac;
    }
}

@media only screen and (min-width: 360px) {
    .game-slogan {
        max-width: 4rem;
    }
}
@media only screen and (min-width: 320px) {
    .game-slogan {
        max-width: 3.2rem;
    }
}
</style>