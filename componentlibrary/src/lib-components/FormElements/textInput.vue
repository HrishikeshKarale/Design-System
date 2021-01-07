<template>
  <div class= "textInput" :class= "{ inline: inline }">
    <label v-if= "label" :class= "{ maskField: mask }">
      {{ label }}
      <abbr v-if= "required" title= "Required Field">*</abbr>
      <span v-else> - Optional field<abbr>*</abbr></span>
    </label>
    <div
      :class= "{
        warningContainer: alert? alert.warning: false,
        errorContainer: alert? alert.error: false,
        iconPadding: icon,
        maskField: mask
      }"
    >
      <span v-if= "icon" :class= "icon" />
      <input
        v-if= "!mask"
        v-model= "d_value"
        type= "text"
        :name= "tag"
        :placeholder= "placeholder"
        :maxlength= "maxlength"
        :minlength= "minlength"
        :pattern= "pattern"
        :autofocus= "autofocus"
        :disabled= "disabled"
        :readonly= "readonly"
        :autocomplete= "autocomplete"
        :required= "required"
        @input= "validate"
      />
    </div>
    <input-response
      :warning= "alert? alert.warning: false"
      :error= "alert? alert.error: false"
      :char-limit-reached= "
        d_value ? maxlength - d_value.length <= 0 : false
      "
      :maxlength= "maxlength"
    />
  </div>
</template>

<script>
import inputResponse from "../Alerts/inputResponse.vue";
import { validator } from "../../typeScript/validator";
import { alerts } from "../../typeScript/common/alerts";

export default {
  name: "TextInput",

  components: {
    inputResponse
  }, //components

  mixins: [validator, alerts], //mixins

  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },

    //sets tag attribute for the input field (required field in case of forms)
    tag: {
      required: false,
      type: String,
      default: "textInput"
    },

    //users can pass preset values for the input field
    value: {
      required: false,
      type: String,
      default: ""
    },

    //sets the format/pattern for acceptable values for the input field
    //^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$
    //https://learning.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    // phone number with extension
    pattern: {
      required: false,
      type: [RegExp, String],
      default: null
    },

    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: String,
      default: "Enter text here..."
    },

    //sets the minlength attribute for the input field
    minlength: {
      required: false,
      type: Number,
      default: 0
    },

    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: Number,
      default: 50
    },

    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default:  () => {
          return {
              error: "",
              warning: ""
          }
      }
    },

    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },

    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },

    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },

    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },

    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },

    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },

    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },

    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: ""
    }
  }, //props
}; //default
</script>

<style lang= "less" scoped>
@import (reference) "../../Less/customMixins.less";
.textInput {
  .inputcss();
  /* .placeholder(); */
}
</style>
