<template>
  <div class="selected-wrap">
    <div class="slider-wrap">
      <!-- <slider :sliders="sliders"></slider> -->
    </div>
  </div>
</template>

<script>
// import slider from 'components/slider/slider';
import axios from 'axios';

const URL = 'h5.2144.cn';

export default {
  data() {
    return {
      sliders: {}
    };
  },

  components: {},

  created: {
    getImgs() {
      // axios
      //   .get(URL + '/api/game/carousel', {
      //     count: 5
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //     this.sliders = response.data;
      //   });

        this.$http.get('http://h5.2144.cn/api/game/carousel?callback=jsonp_70CD93D3AE7644BAB53D1A98138FF4B1&count=5').then((response) => {
          console.log(response);
        });
    }
  },

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
@import '../../common/sass/index.scss';

.selected-wrap {
  width: 100%;
  height: 100%;
  .slider-wrap {
    @extend %pr;
    width: 100%;
    min-height: 2.4rem;
  }
}
</style>