<template>
  <component-details
    :compData= 'd_textarea'
  >
    <vue-textarea
        :label= "d_label"
        :tag= "d_name"
        :value= 'd_value'
        :pattern= 'd_pattern'
        :placeholder= "d_placeholder"
        :minlength= 'd_minlength'
        :maxlength= 'd_maxlength'
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
  import vueTextarea from "@/components/FormElements/vueTextarea";
  import { alerts } from "@/typeScript/common/alerts";

	export default {
    name: "navTextarea",

    mixins: [alerts], //mixins

    components: {
			componentDetails,
      vueTextarea
    }, //components

		data() {
      const d_label= 'Description'
      const d_name= 'textareaField'
      const d_value= 'JohnDoe123'
      const d_pattern= /([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*/
      const d_maxlength= 512
      const d_minlength= 8
      const d_placeholder= 'Enter desctiption here...'
      const d_booleanTrue= true
      const d_autofocus= !d_booleanTrue;
      const d_disabled= !d_booleanTrue;
      const d_readonly= !d_booleanTrue;
      const d_required= !d_booleanTrue;
      const d_autocomplete= !d_booleanTrue;
      const d_inline= !d_booleanTrue;
      const d_mask= !d_booleanTrue;
      const d_icon= 'fas fa-comment-alt';
      const d_alertObject = {
        error: "",
        warning: ""
      }
      return {
        d_label,
        d_name,
        d_value,
        d_pattern,
        d_maxlength,
        d_minlength,
        d_placeholder,
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
      d_textarea: function() {
        return {
          title: 'Textarea Input Field',
          compName: 'vue-textarea',
          import: 'import vueTextarea from "@/components/FormElements/vueTextarea";',
          pattern: new RegExp(this.d_pattern),
          description: '<p>The &lt;vue-textarea&gt; tag defines a multi-line text input control.</p>\
					A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).\
					The size of a text area can be specified by the cols and rows attributes, or even better; through CSS height and width properties.</p>',
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
              text: "Specifies the value for the &lt;text-input&gt element.",
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
              type: "minlength",
              value: this.d_minlength,
              description: this.$store.state.navText.minlength,
              text: this.$store.state.navText.minlengthText,
            },
            {
              type: "maxlength",
              value: this.d_maxlength,
              description: this.$store.state.navText.maxlength,
              text: this.$store.state.navText.maxlengthText,
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
      } //d_text
    }
  } //default
</script>