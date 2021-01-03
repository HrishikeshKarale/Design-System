<template>
  <component-details
    :compData= 'd_number'
  >
    <number-input
      :label= "d_label"
      :tag= "d_name"
      :value= 'd_value'
      :pattern= 'd_pattern'
      :placeholder= "d_placeholder"
			:step= "d_step"
      :min= 'd_min'
      :max= 'd_max'
      :alert= 'd_alertObject'
      :required= 'd_required'
      :disabled= 'd_disabled'
      :autocomplete= 'd_autocomplete'
      :inline= 'd_inline'
      :readOnly= 'd_readonly'
      :autofocus= 'd_autofocus'
      :mask = 'd_mask'
      :icon= 'd_icon'
      @notify= 'alerts'
      @value= 'val=> d_value = val'
    />
  </component-details>
</template>

<script>
  import componentDetails from "@/Views/componentDetails";
  import numberInput from "@/components/FormElements/numberInput";
	import { alerts } from "@/typeScript/common/alerts"

  export default {
    name: "navNumber",

    mixins: [alerts],

    components: {
      componentDetails,
      numberInput
    }, //components

    data() {
      const d_label= 'Quantity'
      const d_name= 'numberTextField'
      const d_value= 101
      const d_pattern= /^(([0-9]*)|(([0-9]*).([0-9]*)))$/
      const d_max= 200
			const d_min= 0
			const d_step= 1
      const d_placeholder= '0-9999'
      const d_booleanTrue= true
      const d_autofocus= !d_booleanTrue;
      const d_disabled= !d_booleanTrue;
      const d_readonly= !d_booleanTrue;
      const d_required= !d_booleanTrue;
      const d_autocomplete= !d_booleanTrue;
      const d_inline= !d_booleanTrue;
      const d_mask= !d_booleanTrue;
      const d_icon= 'fas fa-hashtag'
      const d_alertObject = {
        error: "",
        warning: ""
      }
      return {
        d_label,
        d_name,
        d_value,
				d_pattern,
				d_step,
        d_max,
        d_min,
        d_placeholder,
        d_booleanTrue,
        d_autofocus,
        d_disabled,
        d_readonly,
        d_required,
        d_autocomplete,
        d_inline,
        d_mask,
        d_icon,
        d_alertObject
      } //return
		}, //data

		computed : {
			d_number: function() {
				return {
					title: 'Number Input Field',
          compName: 'number-input',
          import: 'import numberInput from "@/components/FormElements/numberInput";',
          pattern: new RegExp(this.d_pattern),
          description: '<p>The &lt;number-input&gt; defines a field for entering a number.\
          Use the following attributes to specify restrictions:\
          <ul>\
          <li><a href= "att_input_max.asp">max</a> - specifies the maximum value allowed</li>\
          <li><a href= "att_input_min.asp">min</a> - specifies the minimum value allowed</li>\
          <li><a href= "att_input_step.asp">step</a> - specifies the legal number intervals</li>\
          <li><a href= "att_input_value.asp">value</a> - Specifies the default value</li>\
          </ul>',
          attributes:[
            {
              type: "label",
              value: this.d_label,
              description: this.$store.state.navText.label,
              text: this.$store.state.navText.labelText,
            },
            {
              type: "tag",
              value: this.d_name,
              description: this.$store.state.navText.name,
              text: this.$store.state.navText.nameText,
            },
            {
              type: "value",
              value: this.d_value,
              description: this.$store.state.navText.value,
              text: "Specifies the value for the &lt;number-input&gt element.",
            },
            {
              type: "placeholder",
              value: this.d_placeholder,
              description: this.$store.state.navText.placeholder,
              text: this.$store.state.navText.placeholderText,
            },
            {
              type: "pattern",
              value: new RegExp(this.d_pattern),
              description: this.$store.state.navText.pattern,
              text: this.$store.state.navText.patternText,
            },
            {
              type: "step",
              value: this.d_step,
              description: this.$store.state.navText.step,
              text: this.$store.state.navText.stepText,
            },
            {
              type: "min",
              value: this.d_min,
              description: this.$store.state.navText.min,
              text: this.$store.state.navText.minText,
            },
            {
              type: "max",
              value: this.d_max,
              description: this.$store.state.navText.max,
              text: this.$store.state.navText.maxText,
            },
            {
              type: "required",
              value: this.d_required,
              description: this.$store.state.navText.required,
              text: this.$store.state.navText.requiredText,
            },
            {
              type: "disabled",
              value: this.d_disabled,
              description: this.$store.state.navText.disabled,
              text: this.$store.state.navText.disabledText,
            },
            {
              type: "autofocus",
              value: this.d_autofocus,
              description: this.$store.state.navText.autofocus,
              text: this.$store.state.navText.autofocusText,
            },
            {
              type: "readonly",
              value: this.d_readonly,
              description: this.$store.state.navText.readonly,
              text: this.$store.state.navText.readonlyText,
            },
            {
              type: "autocomplete",
              value: this.d_autocomplete,
              description: this.$store.state.navText.autocomplete,
              text: this.$store.state.navText.autocompleteText,
            },
            {
              type: "inline",
              value: this.d_inline,
              description: this.$store.state.navText.inline,
              text: this.$store.state.navText.inlineText,
            },
            {
              type: "mask",
              value: this.d_mask,
              description: this.$store.state.navText.mask,
              text: this.$store.state.navText.maskText,
            },
            {
              type: "icon",
              value: this.d_icon,
              description: this.$store.state.navText.icon,
              text: this.$store.state.navText.Text,
            },
            {
              type: "alert",
              value: this.d_alertObject,
              description: this.$store.state.navText.alerts,
              text: this.$store.state.navText.alertsText,
            }
          ]
				};
			}
		}
  }
</script>