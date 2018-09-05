<template>
  <div class="game-list" @scroll="dataScroll()">
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
            curPage: 1
        };
    },

    components: {},

    created() {
        this.getGameData();
    },

    computed: {},

    mounted() {
        // window.addEventListener('scroll', function() {
        //     console.log(123213);
        // });
    },

    methods: {
        getGameData() {
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
                    }
                });
        },
        dataScroll() {
            console.log(2222);
            console.log(this.curPage, this.totalPage);
            if (this.curPage >= this.totalPage) return;
            this.getGameData();
        }
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';
.game-list{
  @extend %oa;
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
</style>