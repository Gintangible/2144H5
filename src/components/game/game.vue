<template>
    <div class="game-list" ref="gameList" @scroll="dataScroll()">
        <div class="game-item" v-for="(item, index) in gameData" :key="index">
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
        <div class="scroll-loading">
            {{msgTip}}
        </div>
    </div>
</template>

<script>
const URL = 'http://h5.2144.cn';
const ERR_OK = 200;

export default {
    data() {
        return {
            gameData: [],
            totalPage: '',
            curPage: 1,
            dataStatus: false,
            msgTip: '努力加载中...'
        };
    },

    components: {},

    created() {
        this.getGameData();
    },

    computed: {},

    mounted() {
        const box = this.$refs.gameList;

        box.addEventListener(
            'scroll',
            () => {
                this.dataScroll();
            },
            true
        );
    },

    methods: {
        getGameData() {
            if (this.dataStatus) return;
            this.dataStatus = true;
            this.$axios
                .get(URL + '/api/game/games', {
                    params: {
                        type: 2,
                        pagesize: 10,
                        page: this.curPage
                    }
                })
                .then(response => {
                    if (response.data.code === ERR_OK) {
                        this.curPage++;
                        this.totalPage = response.data.allpage;
                        this.gameData = this.gameData.concat(
                            response.data.data
                        );
                        this.dataStatus = false;
                    }
                });
        },

        dataScroll() {
            const gameBox = this.$refs.gameList;
            const sH = gameBox.scrollHeight;
            const sT = gameBox.scrollTop;
            const oH = gameBox.offsetHeight;
            if (this.curPage > this.totalPage) {
                this.msgTip = '沒有更多了~ ';
                return;
            }

            if (sT + oH + 50 > sH) {
                this.getGameData();
            }
        }
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';
.game-list {
    height: 100%;
    @extend %oa;
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
    .scroll-loading {
        @include singleHeight(0.8);
        font-size: 0.3rem;
        color: #999;
        @extend %tac;
    }
}
</style>