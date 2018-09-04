<template>
  <div class="slider-content">
    <ul class="slider-item" :style="[sliderActive,{'width': sliderList.length * 100+'vw'}]">
      <li v-for="(item, index) in sliderList" :key="index" @touchstart="stopSlider($event)" @touchmove="moveSlider($event)" @touchend="leaveSlider($event)">
        <img :src="getSrc(item,index)">
      </li>
    </ul>
    <ul class="slider-btn">
      <li v-for="(item, index) in sliderList" :key="index" :class="{'active': index == curSlider}"></li>
    </ul>
  </div>
</template>

<script>
import loadImg from './loading.gif';
export default {
    data() {
        return {
            startTouch: '',
            direction: '1', // left
            sliderActive: {
                transform: 'translate3d(0,0,0)',
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
        src: {
            type: String,
            default: 'src'
        },
        timer: {
            type: Number,
            default: 1500
        },
        isAuto: {
            type: Boolean,
            default: true
        }
    },

    components: {},

    computed: {},

    mounted() {
        if (this.sliderList && this.isAuto) {
            this.timerID = setInterval(() => {
                this.next();
            }, this.timer);
        }
    },

    methods: {
        getSrc(item, index) {
            if (!item) {
                return loadImg;
            }
            if (item.isLoad) {
                return item[this.src];
            }
            if (this.curSlider === index) {
                item.isLoad = true;
                return item[this.src];
            }
            return loadImg;
        },

        stopSlider(e) {
            clearInterval(this.timerID);
            this.startTouch = e.targetTouches[0].screenX;
        },

        leaveSlider(e) {
            if (!this.direction) {
                this.prev();
            } else {
                this.next();
            }

            this.timerID = setInterval(() => {
                this.next();
            }, this.timer);
        },

        moveSlider(e) {
            let slideDis = e.targetTouches[0].screenX - this.startTouch;
            let targetWidth = parseInt(window.getComputedStyle(e.target).width);
            let tranDir;

            if (slideDis >= 0) {
                this.direction = 0;
            } else {
                this.direction = 1;
            }

            tranDir = -targetWidth * this.curSlider + slideDis;
            this.sliderActive.transform = `translate3d(${tranDir}px,0,0)`;
        },

        move() {
            if (this.curSlider >= this.sliderList.length) {
                this.curSlider = 0;
            }
            if (this.curSlider < 0) {
                this.curSlider = this.sliderList.length;
            }
            this.sliderActive = Object.assign(
                {},
                {
                    transition: 'transform .5s',
                    transform: `translate3d(${-100 * this.curSlider}vw,0,0)`
                }
            );
        },
        prev() {
            this.move(this.curSlider--);
        },
        next() {
            this.move(this.curSlider++);
        }
    }
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';

.slider-content {
    @extend %pr;
    width: 100%;
    min-height: 2.4rem;
    @extend %oh;
    .slider-item {
        @extend %clearfix;
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