<template>
  <img
    v-once
    class="vueImg"
    :src="src"
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
  }
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../../Less/customVariables.less";

.vueImg {
  display: inline-flex;
  background-color: transparent;
}
</style>