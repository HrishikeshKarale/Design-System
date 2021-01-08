<template>
  <component-details
		:compData= 'd_date'
	>
		<vue-date
			:label= "d_label"
			:name= "d_name"
			:value= 'd_value'
			:min= 'd_min'
			:max= 'd_max'
			:pattern= "d_pattern"
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
  import { vueDate } from "vue2-component-library"
	import { alerts } from "@/typeScript/common/alerts"

  export default {
    name: "navDate",
    mixins: [alerts],

    components: {
      componentDetails,
      vueDate
    }, //components

    data() {
			const d_label= "Date"
			const d_name= "dateField"
      const d_value= '2018-12-12'
      const d_min= '2000-12-12'
      const d_max= '2040-12-12'
			//"^d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$"
      const d_pattern= /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/
      const d_booleanTrue= true
      const d_autofocus= !d_booleanTrue;
      const d_disabled= !d_booleanTrue;
      const d_readonly= !d_booleanTrue;
      const d_required= !d_booleanTrue;
      const d_autocomplete= !d_booleanTrue;
      const d_inline= !d_booleanTrue;
      const d_mask= !d_booleanTrue;
      const d_alertObject = {
        error: "",
        warning: ""
      }
			const d_icon = 'fas fa-calendar-alt'
      return {
				d_label,
				d_name,
        d_value,
				d_value,
        d_pattern,
        d_min,
        d_max,
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
		computed: {
			d_date: function() {
				return {
					title: 'Date Input Field',
          compName: 'vue-date',
          import: 'import { vueDate } from "vue2-component-library"',
          pattern: new RegExp(this.d_pattern),
          description: '<p>The &lt;vue-datet&gt tag defines a date picker.\
					The resulting value includes the year, month, and day.</p>',
          attributes:[
            {
              type: "label",
              value: this.d_label,
              description: this.$store.state.navText.label,
              text: this.$store.state.navText.labelText,
            },
            {
              type: "name",
              value: this.d_name,
              description: this.$store.state.navText.name,
              text: this.$store.state.navText.nameText,
            },
            {
              type: "value",
              value: this.d_value,
              description: this.$store.state.navText.vModel,
              text: this.$store.state.navText.vModelText,
            },
            {
              type: "value",
              value: this.d_value,
              description: this.$store.state.navText.value,
              text: "Specifies the value for the &lt;vue-date&gt element.",
            },
            {
              type: "setDefaultDate",
              value: this.d_setDefaultDate,
              description: '<p> Specifies if a default date of the current date should be set as the value or not.</p>',
              text: 'Specifies if a default date of the current date should be set as the value or not',
            },
            {
              type: "min",
              value: this.d_min,
              description: this.$store.state.min,
              text: this.$store.state.minText
            },
            {
              type: "max",
              value: this.d_max,
              description: this.$store.state.max,
              text: this.$store.state.maxText
            },
            {
              type: "pattern",
              value: this.d_pattern,
              description: this.$store.state.navText.pattern,
              text: this.$store.state.navText.patternText,
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
              value: this.d_autofovus,
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
			} //date
		}
  } //default
</script>