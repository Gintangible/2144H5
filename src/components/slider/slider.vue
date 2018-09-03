<template>
  <div class="slider-content">
    <ul class="slider-item" :style="[sliderActive,{'width': silderImg.length * 100+'vw'}]">
      <li v-for="(item, index) in silderImg" :key="index" @touchstart="stopSlider($e)" @touchmove="moveSlider($e)" @touchend="endSilder($e)">
        <img :src="item.image">
      </li>
    </ul>
    <ul class="slider-btn">
      <li v-for="(item, index) in sliderList" :key="index" :class="{'active': 1 == 1}"></li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sliderActive: {
                transform: 'translate3d(-100vw,0,0)',
                transition: 'transform 2s'
            },
            timerID: '',
            curSlider: 0
        };
    },

    props: {
        sliderList: {
            type: Array,
            default: () => []
        },
        timer: {
            type: Number,
            default: 1000
        },
        isAuto: {
            type: Boolean,
            default: true
        }
    },

    components: {},

    computed: {
        silderImg() {
            const [...saveImg] = this.sliderList;
            const [firstImg, ...other] = this.sliderList;
            saveImg.unshift(other[other.length - 1]);
            saveImg.push(firstImg);
            return saveImg;
        }
    },

    mounted() {
        if (this.sliderList && this.sliderList.length && this.isAuto) {
            this.timerID = setInterval(() => {
                this.sliderStart();
            }, this.timer);
        }
    },

    methods: {
        stopSlider(e) {
            console.log('stop');
        },

        moveSlider(e) {
            console.log('move');
        },

        endSlider(e) {
            console.log('end');
        },

        sliderStart() {
            this.curSlider++;

            if (this.curSlider === this.sliderList.length) {
                this.curSlider = 0;
            }
            if (this.curSlider === -1) {
                this.curSlider = this.sliderList.length;
            }

            this.sliderActive = Object.assign(
                {},
                {
                    transition: 'transform .5s',
                    transform: `translate3d(${-100 *
                        (this.curSlider + 1)}vw,0,0)`
                }
            );
        }
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';

.slider-content {
    @extend %pr;
    width: 100%;
    height: 100%;
    @extend %oh;
    .slider-item {
        height: 100%;
        @extend %oh;
        li {
            @extend %fl;
            width: 100vw;
            height: auto;
            img {
                width: 100%;
                height: auto;
            }
        }
    }
    .slider-btn {
        @extend %pa;
        bottom: 0.1rem;
        @extend %df;
        width: 100%;
        justify-content: center;
        align-items: center;
        li {
            margin-right: 0.1rem;
            width: 0.18rem;
            height: 0.18rem;
            border-radius: 50%;
            background: #aaa;
            &.active {
                background: #48b8ff;
            }
        }
    }
}
</style>