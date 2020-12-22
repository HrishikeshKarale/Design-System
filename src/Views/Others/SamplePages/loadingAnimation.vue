// https://codepen.io/istiaktridip/pen/BZqaOd
<template>
  <div>
    <div :class= '{
        "loadingAnimation": true, 
        "load-complete": loading
      }'
    >
      <div :class= '{
          "checkmark": true, 
          "draw block": loading
        }'
      />
    </div>
    <div class= 'fas fa-7x'
    :class= '{
          "draw block fa-spinner fa-spin": !loading,
          "fa-check-circle": loading
        }'
    >
    </div>
    <div class= 'fas fa-7x'
    :class= '{
          "draw block fa-fan fa-spin": !loading,
          "fa-check-circle": loading
        }'
    >
    </div>
    <div class= 'fas fa-7x'
    :class= '{
          "draw block fa-asterisk fa-spin": !loading,
          "fa-check-circle": loading
        }'
    >
    </div>
    <div class= 'fas fa-7x'
    :class= '{
          "draw block fa-certificate fa-spin": !loading,
          "fa-check-circle": loading
        }'
    >
    </div>
    <div class= 'fas fa-7x'
    :class= '{
          "draw block fa-snowflake fa-spin": !loading,
          "fa-check-circle": loading
        }'
    >
    </div>
    <div class= 'fas fa-7x'
    :class= '{
          "draw block fa-stroopwafel fa-spin": !loading,
          "fa-check-circle": loading
        }'
    >
    </div>
    <div class= 'fas fa-7x'
    :class= '{
          "draw block fa-circle-notch fa-spin": !loading,
          "fa-check-circle": loading
        }'
    >
    </div>
    <div class= 'fa-7x'
    :class= '{
          "draw block fab fa-codiepie fa-spin": !loading,
          "fas fa-check-circle": loading
        }'
    >
    </div>
  </div>
</template>

<script>

  export default {

    name:'loadingAnimation',

    props: {

      loading: {
        type: Boolean,
        required: true,
        default: true
      } //loading
    }
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) "./../../Less/customMixins.less";
  @import (reference) "./../../Less/customVariables.less";

  /* Define vars we'll be using */
  @brand-success: #5cb85c;
  @loader-size: 104px;
  @check-height: @loader-size/1.618;
  @check-width: @check-height/1.618;
  @check-left: (@loader-size/6 + @loader-size/12);
  @check-thickness: 14px;
  @check-color: white;

  .loadingAnimation {
    /* margin-bottom: @loader-size/2; */
    border: @check-thickness solid rgba(0, 0, 0, 0.2);
    border-left-color: @check-color;
    background-color: transparent;
    animation: loader-spin 1s infinite linear;
    position: relative;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
    width: @loader-size;
    height: @loader-size;
  }

  .load-complete {
    -webkit-animation: none;
    animation: none;
    border-color: @brand-success;
    background-color: @brand-success;
    transition: border 500ms ease;
  }

  .checkmark {
    display: none;
    
    &.draw {
      border-width: 0px;

      &:after {
        border-radius: 4px;
        animation-duration: 800ms;
        animation-timing-function: ease;
        animation-name: checkmark;
        transform: scaleX(-1) rotate(135deg);
      }
           &.block {
        display: block;

        &:after {
          opacity: 1;
          height: @check-height;
          width: @check-width;
          transform-origin: left top;
          border-right: @check-thickness solid @check-color;
          border-top: @check-thickness solid @check-color;
          content: '';
          left: 0%;
          top: 56%;
          position: absolute;
        }
      }
    }
  }

  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes checkmark {
    0% {
      height: 0;
      width: 0;
      opacity: 1;
    }
    20% {
      height: 0;
      width: @check-width;
      opacity: 1;
    }
    40% {
      height: @check-height;
      width: @check-width;
      opacity: 1;
    }
    100% {
      height: @check-height;
      width: @check-width;
      opacity: 1;
    }
  }
</style>

