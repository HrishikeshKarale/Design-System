<template>
  <component-details
		:compData= 'd_searchableDropdownList'
	>
		<searchable-dropdown-list
			:label= "d_label"
			:tag= "d_name"
			:value= 'd_value'
			:options= 'd_options'
			:pattern= 'd_pattern'
			:placeholder= 'd_placeholder'
			:maxlength= 'd_maxlength'
      :alert= 'd_alertObject'
			:multiple= 'd_multiple'
			:strict= 'd_strict'
      :required= 'd_required'
      :disabled= 'd_disabled'
      :autocomplete= 'd_autocomplete'
      :inline= 'd_inline'
      :readOnly= 'd_readonly'
      :autofocus= 'd_autofocus'
      :mask = 'd_mask'
      :icon= 'd_icon'
			@notify= 'alerts'
			@value= 'val=> d_searchDropdownValue = val'
		/>
	</component-details>
</template>

<script>

  import componentDetails from "@/Views/componentDetails";
  import { vueSearchableDropdown as searchableDropdownList  } from "vue2-component-library"
	import { alerts } from "@/typeScript/common/alerts";

  export default {
    name: "navSearchableDropdownList",

  	mixins: [ alerts], //mixins

    components: {
      componentDetails,
      searchableDropdownList
		}, //components

		data() {
			const d_label= "Warehouse"
      const d_name= "searchableDropdownField"
			const d_options= this.$store.state.warehouse
      const d_pattern= '([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*'
      const d_placeholder= 'Enter a value/Select an option'
			const d_multiple=!d_booleanTrue
      const d_value= d_multiple? [] : ""
      const d_maxlength= 20
      const d_booleanTrue= true
			const d_strict=!d_booleanTrue
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
        d_pattern,
        d_placeholder,
        d_maxlength,
				d_strict,
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
			d_searchableDropdownList: function() {
				return {
          title: 'Searchable Dropdown Input Field',
          compName: 'searchable-dropdown-list',
          import: 'import { vueSearchableDropdown as searchableDropdownList } from "vue2-component-library"',
          pattern: new RegExp(this.d_pattern),
					description: "<p>The &lt;searchable-dropdown-list&gt; element specifies a list of pre-defined options for an &lt;input&gt; element.\
					The &lt;searchable-dropdown-list&gt; element is used to provide an 'autocomplete' feature on &lt;input&gt; elements. Users will see a drop-down list of pre-defined options as they input data.\
					It uses the &lt;input&gt; element's list attribute to bind it together with a &lt;datalist&gt; element.\
					<p>By default the &lt;searchable-dropdown-list&gt; element element works like a searchable dropdown but can be set to allow user generated custom values as inputs as well</p>",
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
              description: this.$store.state.navText.vModel,
              text: this.$store.state.navText.vModelText,
            },
            {
              type: "strict",
              value: this.d_strict,
              description: this.$store.state.navText.strict,
              text: this.$store.state.navText.strictText,
            },
            {
              type: "options",
              value: this.d_options,
              description: this.$store.state.navText.options,
              text: this.$store.state.navText.optionsText,
            },
            {
              type: "placeholder",
              value: this.d_placeholder,
              description: this.$store.state.navText.placeholder,
              text: this.$store.state.navText.placeholderText,
            },
            {
              type: "maxlength",
              value: this.d_maxlength,
              description: this.$store.state.navText.maxlength,
              text: this.$store.state.navText.maxlengthText,
            },
            {
              type: "pattern",
              value: new RegExp(this.d_pattern),
              description: this.$store.state.navText.pattern,
              text: this.$store.state.navText.patternText,
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
              type: "autocomplete",
              value: this.d_autocomplete,
              description: this.$store.state.navText.autocomplete,
              text: this.$store.state.navText.autocompleteText,
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
              text: this.$store.state.navText.inlineText
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
			}//d_searchableDropdownList
		}
  }
</script>