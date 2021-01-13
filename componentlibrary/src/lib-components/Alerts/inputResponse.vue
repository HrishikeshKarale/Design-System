<template>
  <div class="inputResponse">
    <span v-if="error" class="errorMessage fas fa-exclamation-circle">
      <b>{{ error }}</b>
    </span>
    <span
      v-else-if="warning"
      class="warningMessage fas fa-exclamation-triangle"
    >
      <b>{{ warning }}</b>
    </span>
    <span v-else-if="info" class="infoMessage fas fa-info-circle">
      <b>{{ info }}</b>
    </span>
    <span v-else-if="success" class="successMessage fas fa-check-circle">
      <b>{{ success }}</b>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'inputResponse',

    props: {
      error: {
        required: false,
        type: String,
        default: ""
      },

      warning: {
        required: false,
        type: String,
        default: ""
      },

      info: {
        required: false,
        type: String,
        default: ""
      },

      success: {
        required: false,
        type: String,
        default: ""
      }
    } //props
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) '../../Less/customVariables.less';

  .inputResponse {
    display: flex;
    flex-direction:  row;
    flex-wrap: wrap;
         & > div {
      margin: @spaceSm 0;
      font-size: @fontSizeSm;
      font-family: monospace;
      font-weight: 700;

      &.infoMessage {
        color: @infoText;
      }

      &.warningMessage {
        color: @warningText;
      }

      &.errorMessage {
        color: @dangerText;
      }
    }
  }
</style>


