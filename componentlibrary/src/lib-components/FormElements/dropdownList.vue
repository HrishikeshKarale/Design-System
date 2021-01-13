<template>
  <div class="dropdownList" :class="{ inline: inline }">
    <label v-if="label" :class="{ maskField: mask }" :for="name">
      {{ label }}
      <abbr v-if="required" title="Required Field">*</abbr>
      <span v-else> - Optional field<abbr>*</abbr></span>
    </label>
    <div
      :class="{
        warningContainer: alert? alert.warning: false,
        errorContainer: alert? alert.error: false,
        iconPadding: icon,
        maskField: mask
      }"
    >
      <span v-if="icon" :class="icon" />
      <select
        v-if="!mask"
        :id="name"
        v-model="d_value"
        :autofocus="autofocus"
        :disabled="disabled"
        :required="required"
        :multiple="multiple"
        :readonly="readonly"
        :size="size"
        @change="validate"
      >
        <!-- <option
                    value= ''
                    :selected= '!d_value'
                    disabled= 'true'
                    :hidden= 'options.indexOf(d_value)!=-1 && required'
                >
                    pick an option
               </option> -->
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <input-response :error="alert? alert.error: false" />
  </div>
</template>

<script>
import inputResponse from "../Alerts/inputResponse.vue";
import { validator } from "../../typeScript/validator";
import { alerts } from "../../typeScript/common/alerts";

export default {
  name: "DropdownList",

  mixins: [validator, alerts], //mixins

  components: {
    inputResponse
  }, //components

  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },

    //sets name attribute for the input field (required field in case of forms)
    tag: {
      required: false,
      type: String,
      default: "dropdownInput"
    },

    //users can pass preset values for the input field (v-model)
    value: {
      required: false,
      type: [String, Number, Array],
      default: function() {
        if (this.multiple) {
          return [];
        }
        return "";
      }
    },

    //Array of options for user to select .
    options: {
      required: true,
      type: Array
    },

    //no of options  to display at a time.
    size: {
      required: false,
      type: Number,
      default: 5
    },

    //sets the multiple attribute for the input field to accept multiple values
    multiple: {
      required: false,
      type: Boolean,
      default: false
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

  created() {

    this.d_needsValidation = false;
    //store value of prop in temp variable for code readability
    const val = this.value;
    const options = this.options;
    const multiple = this.multiple;

    //if val is a singlevalue, check if it is na acceptable input
    if (!multiple && (typeof val == "string" || typeof val == "number")) {
      //if value is an acceptable input store it in d_value for future manipulation
      if (options && options.indexOf(val)!=-1) {
        this.d_value = val;
      }
      //if not trigger alert and set error message
      else {
        this.error =
          "Invalid Input: The preset value " +
          val +
          " is not included in the options for the dropdown.";
      }
    }
    //if val is an array check if each value towards acceptable values as input
    else if (multiple && Array.isArray(val)) {
      const tempVal = [];
      const alertVal = [];

      //loop through each value to check for validity of input value
      for (const v in val) {
        //if value is an acceptable input store it intempVal for future manipulation
        if (options && options.indexOf(v)!=-1) {
          tempVal.push(v);
        }
        //if not save it in a temp errorval variable for further use to trigger alert
        else {
          alertVal.push(v);
        }
      }

      //save acceptable values back to d_value for future manipulation
      this.d_value = tempVal;

      //if errorVal exists trigger an alert and set d_warning message
      if (alertVal) {
        this.d_danger =
          "Invalid Input: The preset value(s) " +
          alertVal +
          " is/are not included in the options for the dropdown.";
      }
    } else if (val) {
      this.d_danger =
        "Invalid Input: The preset value(s) " + val + " are not valid";
    }
  }, //created

  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function() {
      //initialize d_warning and error messages to null to accomodate change in alert messages
      this.d_danger = null;
      //loads current value stored from d_value(data) into val(temp) variable val for readability of code
      const val = this.d_value;

      //if value for val(temp) does not exists check if value is required
      //if value is required then trigger alert and set error message
      if (val) {
        //emit/send new values to parent component v-model attribute
        this.$emit("value", val);
      } else {
        if (this.required) {
          this.d_danger = "Required field.";
        }
      }
    } //validate
  } //WATCH
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../Less/customMixins.less";
.dropdownList {
  min-width: 160px;
  .inputcss();
}
</style>
