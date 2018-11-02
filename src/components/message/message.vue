<template>
    <transition name="fade">
        <div class="message" v-if="isShow">
            <slot name="msg">弹窗内容</slot>
        </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
      time: 100
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  mounted() {
    // setTimeout(function() {
    //   this.$emit("on-disappear");
    // }, this.time);
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../../common/sass/index.scss";
/** 弹窗动画*/
.fade-enter-active {
  transition: all 1s ease;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-active {
  opacity: 0;
}

.message {
  @extend %pf;
  @extend %df;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  font-size: 0.5rem;
  border-radius: 0.1rem;
  background: rgba(#000, 0.4);
}
</style>