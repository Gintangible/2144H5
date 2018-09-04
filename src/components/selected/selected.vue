<template>
  <div class="selected-wrap">
    <div class="slider-wrap">
      <slider :sliderList="sliderList" :src="src"></slider>
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
      src: 'image'
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
  },

  computed: {},

  methods: {}
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
}
</style>