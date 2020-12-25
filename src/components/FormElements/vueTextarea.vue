<template>
  <div class="vueTextarea" :class="{ inline: inline }">
    <label v-if="label" :class="{ maskField: mask }">
      {{ label }}
      <abbr v-if="required" title="Required Field">*</abbr>
      <span v-else> - Optional field<abbr>*</abbr></span>
    </label>
    <div
      :class="{
        warningContainer: d_warning,
        errorContainer: d_danger,
        iconPadding: inputIcon,
        maskField: mask
      }"
    >
      <span v-if="inputIcon" :class="inputIcon" />
      <textarea
        v-if="!mask"
        v-model="d_value"
        :name="name"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :pattern="pattern"
        :autofocus="autofocus"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        @input="validate"
      />
    </div>
    <input-response
      :warning="d_warning"
      :error="d_danger"
      :char-limit-reached="
        d_value ? maxlength - d_value.length <= 0 : false
      "
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
import inputResponse from "@/components/Alerts/inputResponse.vue";

export default {
  name: "VueTextarea", //props

  components: {
    inputResponse
  }, //data

  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: [String, null],
      default: null
    },

    //sets the name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: [String, null],
      default: "textareaInput"
    },

    //users can pass preset values for the input field
    value: {
      required: false,
      type: [String, null],
      default: null
    },

    //sets the format/pattern for acceptable values for the input field
    pattern: {
      required: false,
      type: [RegExp, String, null],
      default: null
    },

    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: [String, null],
      default: "Click to enter"
    },

    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: [Number, null],
      default: 256
    },

    //sets the manual alerts
    alert : {
      required: false,
      type: [Object, null],
      default: null
    },

    //sets the required attribute for the input field
    required: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: [Boolean, null],
      default: true
    },
    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    inputIcon: {
      required: false,
      type: [String, null],
      default: null
    },

    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: [Boolean, null],
      default: false
    }
  }, //props
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../Less/customMixins.less";

.vueTextarea {
  min-width: 160px;
  .inputcss();
}
</style>
