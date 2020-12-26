<template>
  <div class="searchableDropdownList" :class="{ inline: inline }">
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
        v-model="d_value"
        :list="name"
        :placeholder="placeholder"
        :multiple="multiple"
        :required="required"
        :disabled="disabled"
        :autofocus="autofocus"
        :maxlength="maxlength"
        @blur="validate"
      />
      <datalist :id="name">
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
        <!-- option --></datalist
      ><!--datalist-->
    </div>
    <input-response :d_warning="d_warning" :error="d_danger" />
  </div>
</template>

<script>
import inputResponse from "@/components/Alerts/inputResponse";
import { validator } from "@/typeScript/validator";
import { alerts } from "@/typeScript/common/alerts";

export default {
  name: "SearchableDropdownList",
  
  mixins: [validator, alerts], //mixins

  components: {
    inputResponse
  }, //components

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
      default: "dropdownInput"
    },

    //users can pass preset values for the input field
    value: {
      required: false,
      type: function() {
        let temp = null;
        switch (typeof this.options[0]) {
          case "object":
            break;
          case "number":
            temp = Number;
            break;
          case "string":
            temp = String;
            break;
        }
        if (this.multiple) {
          temp = [temp, Array, null];
        }
        return temp;
      },
      default: function() {
        if (this.multiple) {
          return [];
        }
        return null;
      }
    },

    //looks for exact match
    //if set true wors like a dropdown list while if toggles between
    strict: {
      required: false,
      type: [Boolean, null],
      default: true
    },

    //Array of options for user to select .
    options: {
      required: true,
      type: Array
    },

    //sets the format/pattern for acceptable values for the input field
    pattern: {
      required: false,
      type: [RegExp, String, null],
      default: () => /([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*/
    },

    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: [String, null],
      default: function() {
        if (this.strict) {
          return "Select an option...";
        }
        return "Enter value or Select an option...";
      }
    },

    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: [Number, null],
      default: 50
    },

    //sets the multiple attribute for the input field to accept multiple values
    multiple: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //sets the manual alerts
    alert: {
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

  created() {
    // sets flag to false for using default validator
    this.d_needsValidation = false;
    //store value of prop in temp variable for code readability
    const val = this.value;
    const options = this.options;
    const strict = this.strict;
    const multiple = this.multiple;

    //if val is a singlevalue, check if it is na acceptable input
    if (!multiple && (typeof val == "string" || typeof val == "number")) {
      //if value is an acceptable input store it in d_value for future manipulation
      if ((options && options.indexOf(val)!=-1) || !strict) {
        this.d_value = val;
      }
      //if not trigger alert and set error message
      else if (this.strict) {
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
        //if value is an acceptable input store sit intempVal for future manipulation
        if ((options && options.indexOf(v)!=-1) || !strict) {
          tempVal.push(v);
        }
        //if not save it in a temp errorval variable for further use to trigger alert
        else if (this.strict) {
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
      this.d_warning = null;
      //loads current value stored from d_value(data) into val(temp) variable val for readability of code
      const val = this.d_value;

      //if value for val(temp) exists check for d_warning triggers
      if (val) {
        //if an acceptable value exists,emit/send new values to parent component v-model attribute
        //if not then trigger d_warning and set d_warning message
        if (this.options.indexOf(val)!=-1 || !this.strict) {
          this.$emit("value", val);
        }
        //if options do not include the optio na dn user customized input is not acceptable then trigger alert and set d_warning message
        else if (this.strict) {
          this.d_warning =
            "Invalid Input. Please select an option from the options below.";
        }
      }
      //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
      else {
        if (this.required) {
          this.d_danger = "Required field.";
        }
      }
    } //validate
  } //watch
}; //default
</script>

<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
.searchableDropdownList {
  min-width: 160px;
  .inputcss();
}
</style>
