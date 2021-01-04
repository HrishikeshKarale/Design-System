<template>
	<component-details
		:compData= 'd_dropdownList'
	>
		<dropdown-list
			:label= "d_label"
			:name= "d_name"
			:value= 'd_value'
			:options= 'd_options'
			:size= 'd_size'
      :alert= 'd_alertObject'
      :required= 'd_required'
      :multiple= 'd_multiple'
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
  import dropdownList from "@/components/FormElements/dropdownList";
	import { alerts } from "@/typeScript/common/alerts";


  export default {
		name: "navDropdownList",

  	mixins: [ alerts], //mixins

    components: {
      componentDetails,
      dropdownList
    }, //components

    data() {
			const d_label= "Warehouse"
      const d_name= "dropdownField"
			const d_options= this.$store.state.warehouse
      const d_size= 0
			const d_booleanTrue= true
			const d_multiple= !d_booleanTrue
      const d_value= d_multiple? [] : ""
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
      const d_icon= 'fas fa-warehouse'
				return {
        d_label,
        d_name,
        d_value,
        d_options,
        d_size,
				d_icon,
				d_multiple,
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
			d_dropdownList: function () {
				return {
          title: 'Dropdown Input Field',
          compName: 'dropdown-list',
          import: 'import dropdownList from "@/components/FormElements/dropdownList"',
					description: "<p>The &lt;dropdown-list&gt; element is used to create a drop-down list.\
          The &lt;option&gt;</a> tags inside the &lt;select&gt; element define the available options in the list.</p>",
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
              type: "options",
              value: this.d_options,
              description: this.$store.state.navText.options,
              text: this.$store.state.navText.optionsText,
            },
            {
              type: "size",
              value: this.d_size,
              description: this.$store.state.navText.size,
              text: this.$store.state.navText.sizeText
            },
            {
              type: "multiple",
              value: this.d_multiple,
              description: this.$store.state.navText.multiple,
              text: this.$store.state.navText.multipleText,
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
              value: this.d_alerts,
              description: this.$store.state.navText.alerts,
              text: this.$store.state.navText.alertsText,
            }
          ]
				};
			} //dropdownList
		}
  } //default
</script>