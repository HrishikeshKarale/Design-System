<template>
  <div class="multiToggle" :class="{ inline: inline }">
  <label v-if="label" :class="{ maskField: mask }">
    {{ label }}
  </label>
  <div
    class="checkbox-toggle"
    :class="{
    warningContainer: alert? alert.warning: false,
    errorContainer: alert? alert.error: false,
    maskField: mask
    }"
    role="checkbox"
    tabindex="0"
    :aria-checked="d_value"
    @keydown="toggle"
    @click.prevent="toggle"
  >
    <template v-if="!mask">
    <div class="checkbox-slide" :class="classes">
      <div class="checkbox-switch" :class="classes" />
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-show="showLabels" class="checkbox-label" v-html="labelToggle" />
    </template>
  </div>
  </div>
</template>

<script>
import { validator } from "../../typeScript/validator";
import { alerts } from "../../typeScript/common/alerts";
export default {
  name: "multiToggle",
  mixins: [validator, alerts],

  props: {
  //sets heading/Label for multitoggle
  label: {
    required: false,
    type: String,
    default: ""
  },

  //sets name attribute for multitoggle  (required field in case of forms)
  name: {
    required: false,
    type: String,
    default: "textInput"
  },

  //users can pass preset values for multitoggle
  value: {
    required: false,
    type: [Boolean, String],
    default: false
  },

  //toggles label for multitoggle
  showLabels: {
    required: false,
    type: Boolean,
    default: false
  },

  //sets label text for checked state for multitoggle
  labelChecked: {
    required: true,
    type: String,
    default: ""
  },

  //sets label text for unchecked state for multitoggle
  labelUnchecked: {
    required: true,
    type: String,
    default: ""
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

  //sets the disabled attribute for multitoggle
  disabled: {
    required: false,
    type: Boolean,
    default: false
	},

  //sets the readonly attribute for multitoggle
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
  }
  }, //props

  computed: {
		//triggers and returns class values depending on the toggle state
		classes: function() {
			return {
			checked: this.d_value,
			unchecked: !this.d_value,
			disabled: this.disabled
			};
  	}, //classes

		//triggers and returns label title depending on the toggle state
		labelToggle: function() {
			return this.d_value && this.showLabels
			? this.labelChecked
			: this.labelUnchecked;
		} //labelToggle
  }, //computed

  methods: {
		//toggle state unless toggle is disabled
		toggle: function(e) {
			if (this.disabled && e.keyCode === 9) {
			// not if disabled or tab is pressed
			return;
			}
			this.d_value = !this.d_value;
			this.$emit("value", !this.d_value);
		} //toggle
  } //methods
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../Less/customVariables.less";
@round: @spaceLg;
.multiToggle {
  width: fit-content;
  .checkbox-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  &:focus {
    outline: none;
  }
  .checkbox-slide {
    display: block;
    width: 64px;
    height: @spaceXl;
    border-radius: @round;
    cursor: pointer;
    border: 1px solid ~"darken(#e0e0e0, 10%)";
    //dLabelChecked
    &.checked {
    transition: all 350ms;
    background: blue;
    border-color: @primaryColor;
    }
    &.unchecked {
    transition: all 350ms;
    background: red;
    }
    &.disabled {
    cursor: not-allowed;
    background: red;
    }
    .checkbox-switch {
    display: block;
    padding: 0;
    margin: 0;
    width: @spaceXl;
    height: @spaceXl;
    border-radius: @round;
    background: @primaryColor;
    cursor: pointer;
    &.checked {
      transform: translateX(32px);
      transition: all 350ms;
      background: @primaryColor;
    }
    &.unchecked {
      transition: all 350ms;
    }
    &.disabled {
      cursor: not-allowed;
    }
    }
  }
  .checkbox-label {
    width: max-content;
    color: @primaryColor;
    margin-left: @spaceMd;
    font-weight: bold;
  }
  }
}
</style>
