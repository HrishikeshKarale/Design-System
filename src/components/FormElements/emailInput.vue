<template>
  <div class="emailInput" :class="{ inline: inline }">
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
      <input
        v-if="!mask"
        type="email"
        v-model="d_Value"
        :name="name"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :pattern="pattern"
        :multiple="multiple"
        :autofocus="autofocus"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        @input="validate"
      />
      <!-- [A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$ -->
      <div v-if="d_Value" class="conditions">
        <div>
          <span
            :class="
              d_Value.match(/^[A-Za-z0-9._%+-]/g)
                ? 'fas fa-check'
                : 'fas fa-times'
            "
          />
          Has account name consisting of alphabets and/or numbers and/or special
          characters(%.-+_).
        </div>
        <div>
          <span
            :class="
              d_Value.match(/(?=@[A-Za-z0-9.-])/g)
                ? 'fas fa-check'
                : 'fas fa-times'
            "
          />
          Has a domain name consisting of alphabets, numbersm . and -. Ex:
          @google, @yahoo, @facebook etc.
        </div>
        <div>
          <span
            :class="
              d_Value.match(/(?=.[A-Za-z]{2,3}$)/)
                ? 'fas fa-check'
                : 'fas fa-times'
            "
          />
          Ends with a 2-3 character To plevel domain (TLD). Ex: .net, .com,
          .edu, .co etc...
        </div>
      </div>
    </div>
    <input-response
      :warning="d_warning"
      :error="d_danger"
      :char-limit-reached="
        d_Value ? maxlength - d_Value.length < 0 : false
      "
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
import inputResponse from "@/components/Alerts/inputResponse.vue";
import { validator } from "@/typeScript/validator";

export default {
  name: "EmailInput",

  components: {
    inputResponse
  }, //components

  mixins: [validator], //mixins

  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: [String, null],
      default: null
    },

    //sets name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: [String, null],
      default: "emailInput"
    },

    //users can pass preset values for the input field
    value: {
      required: false,
      type: [String, null],
      default: null
    },

    //sets the format/pattern for acceptable values for the input field
    //[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$
    ///^[^\s@]+@[^\s@]+\.[^\s@]+$/
    pattern: {
      required: false,
      type: [RegExp, String, null],
      default: new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$")
    },

    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: [String, null],
      default: "abc@yahoo.com"
    },

    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: [Number, null],
      default: 50
    },

    //sets the multiple attribute for the input field
    multiple: {
      required: false,
      type: [Boolean, null],
      default: false
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

    //checks if label options should appear on the same line or not
    inline: {
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
    }
  }, //props
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../Less/customMixins.less";
.emailInput {
  min-width: 160px;
  .inputcss();
}
</style>
