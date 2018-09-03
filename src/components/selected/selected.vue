<template>
  <div class="selected-wrap">
    <div class="slider-wrap">
      <banner :sliderList="sliderList"></banner>
    </div>
  </div>
</template>

<script>
import banner from 'components/slider/slider';

const URL = 'http://h5.2144.cn';
const ERR_OK = 200;

export default {
  data() {
    return {
      sliderList: []
    };
  },

  components: {
    banner
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
    @extend %pr;
    width: 100vw;
    min-height: 2.4rem;
  }
}
</style>