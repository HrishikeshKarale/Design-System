<template>
  <component-details
    :compData= 'd_file'
  >
    <file-input
      :label= "d_label"
      :tag= "d_name"
      :value= 'd_value'
      :accept= "d_accept"
      :multiple= 'd_multiple'
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
  import { vueFile as fileInput } from "vue2-component-library"
	import { alerts } from "@/typeScript/common/alerts"

  export default {
    name: "navFile",

    mixins: [alerts],

    components: {
      componentDetails,
      fileInput
    }, //components

    data() {
      const d_label= "Upload File"
      const d_name= "fileUploadField"
      const d_value= ''
      const d_fileUploadValue= null
      const d_accept= ".pdf, .doc, .docx"
      const d_booleanTrue= true
      const d_multiple= !d_booleanTrue;
      const d_autofocus= !d_booleanTrue;
      const d_disabled= !d_booleanTrue;
      const d_readonly= !d_booleanTrue;
      const d_required= !d_booleanTrue;
      const d_autocomplete= !d_booleanTrue;
      const d_inline= !d_booleanTrue;
      const d_mask= !d_booleanTrue;
      const d_icon= 'fas fa-upload';
      const d_alertObject = {
        error: "",
        warning: ""
      }
      return {
        d_label,
        d_name,
				d_value,
				d_multiple,
        d_accept,
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
      d_file: function() {
				return {
					title: 'File Upload',
					compName: 'file-input',
					import: 'import { vueFile as fileInput } from "vue2-component-library"',
					description: '<p>The &lt;file-input"&gt; tag defines a file-select field and a "Browse" button for file uploads.\
					To define a file-select field that allows multiple files to be selected, add the "multiple" attribute.</p>',
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
							text: "Specifies the value for the &lt;file-input&gt element.",
						},
						{
							type: "accept",
							value: this.d_accept,
							description: this.$store.state.navText.readonly,
							text: 'Specifies the type of files the &lt;file-input&gt element will accpt as input'
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
							type: "alerts",
							value: this.d_alertObject,
							description: this.$store.state.navText.alerts,
							text: this.$store.state.navText.alertsText,
						}
					]
				};
			} //d_file
		}
  } //default
</script>