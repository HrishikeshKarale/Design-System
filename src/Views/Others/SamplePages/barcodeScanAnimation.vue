<template>
  <div class= 'barcodeScanAnimation'>
    <span class= 'fas fa-barcode fa-5x'/>
    <div class="diode">
      <div class="laser"/>
    </div>
  </div>
</template>

<script>

  export default {

    name:'barcodeScanAnimation',
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) "./../../Less/customMixins.less";
  @import (reference) "./../../Less/customVariables.less";

  @barHeight: 80px;
  @barWidth: 120px;
  
  .barcodeScanAnimation {
      display: block;
      position: relative;
      width: @barWidth;
      text-align: center;

      & > .diode {
        animation: beam .1s infinite;

        & > .laser {
          width: @barWidth;
          background-color: tomato;
          height: 2px;
          position: absolute;
          top: 0;
          z-index: 2;
          animation: scanning 2s infinite;
        }
      }
    }
  /* } */

  @keyframes beam {
    50% {
      opacity: 0;
    }
  }

  @keyframes scanning {
    50% {
      transform: translateY(@barHeight);
    }
  }
</style>

