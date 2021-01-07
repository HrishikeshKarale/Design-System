<template>
  <img
    v-once
    class="vueImg"
    :src="src ? src : dImageSource"
    :alt="alt"
    :title="alt"
  />
</template>

<script>
export default {
  name: "vueImg", //data

  props: {
    src: {
      required: true,
      type: String,
      default: null
    },

    alt: {
      required: false,
      type: String,
      default: function(value) {
        if (value) {
          return value;
        }
        return "An image goes here";
      }
    }
  },

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dImageSource = require("@/assets/SVG/SVG/default.svg");
    return {
      dImageSource: dImageSource
    }; //return
  } //props
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../../Less/customVariables.less";

.vueImg {
  display: inline-flex;
  background-color: transparent;
}
</style>