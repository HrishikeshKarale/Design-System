<template>
  <form
    :id="form"
    :ref="form"
    class="vueForm"
    :name="form"
    :novalidate="validate"
    :autocomplete="autocomplete"
    @submit="ctx"
  >
    <div class="formElements">
      <slot />
    </div>
    <div class="formButtons">
      <vue-button
        type="submit"
        text="Submit"
        tag="formSubmitButton"
        category="small"
        icon="fas fa-clipboard-check"
        :disabled="!validInput"
        :ctx="ctx"
      />
      <input class="btn" type="reset" value="Reset" />
    </div>
  </form>
</template>

<script>
import vueButton from "@/components/UIComponents/Button";
import { alerts } from "@/typeScript/common/alerts";

export default {
  name: "VueForm", //props
  mixins: [alerts],

  components: {
    vueButton
  }, //data

  props: {
    alert: {
      required: true,
      type: Object,
        default: () => {
          return {
            error: "",
            warning
          }
        }
    },
    ctx: {
      required: true,
      type: Function
    },
    form: {
      required: false,
      type: String,
      default: ""
    },
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    validate: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  computed: {
    validInput: function() {
        if(this.validate) {
            const alerts = this.alerts;
            const form = this.$refs[this.form];
            if (form && !alerts["error"] && !alerts["warning"]) {
            const inputs = [
                ...Array.from(form.getElementsByTagName("select")),
                ...Array.from(form.getElementsByTagName("input"))
            ];

            for (let index = 0; index < inputs.length; ++index) {
                if (inputs[index].required && !inputs[index].value) {
                return false;
                }
                //skipPAsswordMatch value check
                if (inputs[index].type === "password") {
                index++;
                }
            }
            return true;
            }
            return false;
        }
        return true;
    } //validInput
  }, //computed
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../Less/customMixins.less";
@import (reference) "../../Less/customVariables.less";

.vueForm {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0 auto;
  & > div {
    display: flex;
    &.formElements {
      flex-direction: column;
    }
    &.formButtons {
      flex-direction: row-reverse;
      & > input {
        font-size: @fontSizeMd;
        margin-right: @spaceMd;
        &:first-child {
          margin-right: 0;
        }
        &[type="reset"] {
          background-color: transparent;
        }
      }
    }
  }
}
</style>
