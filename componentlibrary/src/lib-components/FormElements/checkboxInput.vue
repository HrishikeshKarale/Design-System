// https://tympanus.net/Development/AnimatedCheckboxes/
<template>
  <div class="checkboxInput" :class="{ inline: inline }">
    <label
      v-if="label || (type == 'checkbox' && !options)"
      :class="{ maskField: mask }"
    >
      <!-- checkbox only -->
      <input
        v-if="type == 'checkbox' && !options && !mask"
        ref="singleCheckbox"
        type="checkbox"
        :name="name"
        :checked="value"
        :disabled="disabled"
        :autofocus="autofocus"
        @input="check(value)"
      />
      {{ label }}
      <abbr v-if="required" title="Required Field">*</abbr>
      <span v-else> - Optional field<abbr>*</abbr></span>
      <input :name="name" type="hidden" :value="value" :required="required" />
      <vue-button
        v-if="options && typeof value!= 'boolean'? value: false"
        id="clearSelection"
        tag="resetValue"
        text="Reset"
        icon="fas fa-undo"
        category="icon-sm"
        :ctx="clearSelection.bind(this)"
      />
    </label>
    <div
      v-if="options"
      :class="{
        box: box,
        warningContainer: alert? alert.warning: false,
        errorContainer: alert? alert.error: false,
        maskField: mask,
        inline: inline
      }"
    >
      <template v-if="!mask">
        <label
          v-for="(option, index) in options"
          :key="index"
          :class="{
            errorLabel: alert? alert.error: false,
            checked: isChecked(option)
          }"
          :style="{
            'color: #aaaaaa; cursor: not-allowed;': disabled
          }"
        >
          <input
            :ref="option"
            :type="type"
            :name="option"
            :checked="isChecked(option)"
            :value="option"
            :disabled="disabled"
            :autofocus="index == 0 ? autofocus : false"
            @input="check(option)"
          />
          {{ option }}
        </label>
      </template>
    </div>
    <input-response :error="alert? alert.error: false" />
  </div>
</template>

<script>
import vueButton from "../UIComponents/Button/index.vue";
import inputResponse from "../Alerts/inputResponse.vue";
import { validator } from "../../typeScript/validator";
import { alerts } from "../../typeScript/common/alerts";

export default {
  name: "checkboxInput",

  mixins: [validator, alerts], //mixins

  components: {
    inputResponse,
    vueButton
  }, //components

  props: {
    //sets type for the input field
    //valid values include ['checkbox', 'radio']
    type: {
      required: false,
      type: String,
      validator: function(value) {
        return ["checkbox", "radio", null].indexOf(value) !== -1;
      },
      default: "checkbox"
    },

    //sets heading for the checkboxes category
    //in case of single/no-option checkbox, label is used as checkbox text
    label: {
      required: false,
      type: String,
      default: ""
    },

    //sets the name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "checkboxInput"
    },

    //users can pass preset values for the input field
    value: {
      required: true,
      type: [Boolean, Array, String, Number, null],
      // type: function() {
      //   if (!this.options) {
      //     return [Boolean, null];
      //   } else if (this.type != "radio") {
      //     return [Array, null];
      //   } else {
      //     //type == radio
      //     return [String, Number, null];
      //   }
      // },
      default: function() {
        if (!this.options) {
          return false;
        } else if (this.type == "checkbox") {
          return [];
        } else {
          //type == radio
          return null;
        }
      }
    },

    //Array of options/labels in case of multiple checkboxes.
    options: {
      required: false,
      type: Array,
      default: null
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

    //checks if label options should appear on the same line or as buttons
    box: {
      required: false,
      type: Boolean,
      default: false
    }
  }, //props

  created() {
    this.d_needsValidation= false;
  }, //created

  methods: {

    isChecked: function (option) {
      const value = this.value;
      if(this.type != 'radio') {
        return (typeof value == 'object')? value.indexOf(option)!=-1: value;
      }
      return value == option;
    }, //isChecked

    clearSelection: function() {
      // const options = this.options;
      // options.forEach(option => {
      //   this.$refs[option].checked= false;
      // });
      this.$emit("value", "");
    }, //clearSelection

    check: function(checkedValue) {
      let value = this.value;
      if (this.options) {
        //checkbox
        if (this.type == "checkbox") {
          if (value) {
            value = [...value];
            const index = value.indexOf(checkedValue);
            if (index != -1) {
              value = value.splice(index, 1);
              // console.log("check: ", Array.from(value), typeof value);
              this.$emit("value", value);
            } else {
              value = [...this.value, checkedValue];
              this.$emit("value", value);
            }
          } else {
            this.$emit("value", [checkedValue]);
          }
        } else {
          // if type = radio
          // console.log(checkedValue, this.type);
          this.$emit("value", checkedValue);
        }
      } else {
        //this.options does not exist
        // console.log(this.$refs["singleCheckbox"].checked);
        this.$emit("value", this.$refs["singleCheckbox"].checked);
      }
    } //check
  } //components
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../Less/customMixins.less";
@import (reference) "../../Less/customVariables.less";

.checkboxInput {
  .checkboxCss();
}
</style>
