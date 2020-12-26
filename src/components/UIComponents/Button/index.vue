// https://tympanus.net/Development/CreativeButtons/ //
// https://tympanus.net/Development/categorysInspiration/ //
// https://tympanus.net/Development/DistortedButtonEffects/ //
// https://tympanus.net/Development/Progresscategorys/ //
// https://tympanus.net/Development/categorysInspiration/
<template>
  <button
    :class="[
      'vueButton',
      ['fullWidth', 'border-fwidth'].indexOf(category)!=-1 ? 'fullWidth' : null,
      buttonClass
    ]"
    :type="type"
    :name="tag"
    :autofocus="autofocus"
    :disabled="disabled"
    :form="form"
    @click.stop.prevent="ctx"
  >
    <!-- <template v-if="!['icon', 'icon-sm', 'icon-lg'].indexOf(category)!=-1">
      {{ text }}
    </template> -->
    <span v-if="icon" :class="icon" />
  </button>
</template>

<script>
export default {
  name: "VueButton",

  props: {
    type: {
      required: false,
      type: [String, null],
      default: "button",
      validator: function(value) {
        return ["button", "submit", "reset", null].indexOf(value) !== -1;
      }
    },

    tag: {
      required: false,
      type: [String, null],
      default: null
    },


    text: {
      required: false,
      type: [String, null],
      default: null
    },

    category: {
      required: false,
      type: [String, null],
      default: "standard",
      validator: function(value) {
        return (
          [
            "standard",
            "large",
            "small",
            "fullWidth",
            "border",
            "border-sm",
            "border-lg",
            "border-fwidth",
            "text",
            "text-sm",
            "text-lg",
            "icon",
            "icon-sm",
            "icon-lg",
            null
          ].indexOf(value) !== -1
        );
      }
    },

    icon: {
      type: [String, null],
      required: false,
      // function() {
      //   return ["icon", "icon-lg", "icon-sm"].indexOf(this.category) !== -1;
      // },
      default: null
    },
    
    disabled: {
      required: false,
      type: [Boolean, null],
      default: false
    },

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

    buttonClass: {
      required: false,
      type: [String, null],
      default: function() {
        let tempClass = "btn";
        switch (this.category) {
          case "standard":
            tempClass += " btn-primary";
            break;
          case "icon":
            tempClass += " btn-icon";
            break;
          case "icon-sm":
            tempClass += " btn-icon btn-sm";
            break;
          case "icon-lg":
            tempClass += " btn-icon btn-lg";
            break;
          case "text":
            tempClass += " btn-link btn-text";
            break;
          case "text-sm":
            tempClass += " btn-text btn-sm";
            break;
          case "text-lg":
            tempClass += " btn-text btn-lg";
            break;
          case "small":
            tempClass += " btn-primary btn-sm";
            break;
          case "large":
            tempClass += " btn-primary btn-lg";
            break;
          case "fullWidth":
            tempClass += " btn-fullWidth btn-block";
            break;
          case "border":
            tempClass += " btn-border";
            break;
          case "border-sm":
            tempClass += " btn-border btn-sm";
            break;
          case "border-lg":
            tempClass += " btn-border btn-lg";
            break;
          case "border-fwidth":
            tempClass += " btn-border btn-fullWidth btn-block";
            break;
          default:
            tempClass += "";
        }
        return tempClass;
      }
    },

    form: {
      required: false,
      type: [String, null],
      default: function() {
        if (this.tag) {
          return this.tag;
        }
        return "form";
      }
    },

    ctx: {
      required: function() {
        // console.log(this.type);
        if (this.type == "button") {
          return true;
        }
        return false;
      },
      type: [Function, null],
      default: function() {
        alert(
          "button undefined: Please send a function to execute when the button is clicked"
        );
      }
    }
  } //props
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../../Less/customVariables.less";
@import (reference) "../../../Less/customMixins.less";

@color: @secondaryColor; // #1B746D;

.vueButton {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: fit-content;

  & > span {
    margin-right: @spaceMd;
  }

  &.btn-sm {
    padding: @spaceSm @spaceMd;
    font-size: @fontSizeSm;
  }

  &.btn-lg {
    padding: @spaceMd @spaceLg;
    font-size: @fontSizeSm * 2;
  }

  .boxShadow(@three);

  &:hover {
    .boxShadow(@one);
  }
  //icon buttons
  &.btn-icon {
    background-color: transparent;
    color: @color;
    padding: @spaceSm;
    font-size: @fontSize;

    & > span {
      margin-right: 0;
    }

    .textShadow(@one);

    &:hover {
      .textShadow(@base);
    }
  }

  //text links or  text as buttons
  &.btn-text {
    background-color: transparent;
    color: @color;
    padding: @spaceSm @spaceMd;
    font-weight: bold;

    &:hover {
      border: 1px solid @color;
    }
  }

  //Button with a border outline and transparent background
  &.btn-border {
    border-radius: @borderRadius;
    background-color: transparent;
    border: 1px solid @color;
    color: @color;
    font-weight: bold;
  }

  &.fullWidth,
  .btn-fullWidth {
    width: 100%;
  }
}
</style>
