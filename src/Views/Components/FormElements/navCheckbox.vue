<template>
  <component-details
    :compData= 'd_checkbox'
  >
    <checkbox-input
      :label= "d_label"
      :name= "d_name"
      :value= 'd_value'
      :options= 'd_options'
      :alert= 'd_alertObject'
      :required= 'd_required'
      :disabled= 'd_disabled'
      :autocomplete= 'd_autocomplete'
      :inline= 'd_inline'
      :readOnly= 'd_readonly'
      :autofocus= 'd_autofocus'
      :mask = 'd_mask'
      :box = 'd_box'
      :icon= 'd_icon'
      @notify= 'alerts'
      @value= 'val=> d_value = val'
    />
  </component-details>
</template>

<script>
  import componentDetails from "@/Views/componentDetails";
  import checkboxInput from "@/components/FormElements/checkboxInput";
  import { alerts } from "@/typeScript/common/alerts";

  export default {
    name: "navCheckbox",

    mixins: [ alerts ],

    components: {
      componentDetails,
      checkboxInput,
    }, //components

    data() {
      const d_label= "Warehouse"
      const d_name= "checkboxField"
      const d_value= ''
      const d_options= this.$store.state.warehouse
      const d_booleanTrue= true
      const d_autofocus= !d_booleanTrue;
      const d_disabled= !d_booleanTrue;
      const d_readonly= !d_booleanTrue;
      const d_required= !d_booleanTrue;
      const d_autocomplete= !d_booleanTrue;
      const d_inline= !d_booleanTrue;
      const d_mask= !d_booleanTrue;
      const d_box= !d_booleanTrue;
      const d_icon= 'fas fa-user';
      const d_alertObject = {
        error: "",
        warning: ""
      }
			return {
        d_label,
        d_name,
        d_value,
        d_options,
        d_autofocus,
        d_disabled,
        d_readonly,
        d_required,
        d_autocomplete,
        d_inline,
        d_box,
        d_mask,
        d_icon,
        d_alertObject
      } //return
    }, //data

    computed: {
      d_checkbox: function() {
        return {
          title: 'Checkbox Input Field',
          compName: 'checkbox-input',
          import: 'import checkboxInput from "@/components/FormElements/checkboxInput";',
          description: '<p>The &lt;checkbox-input&gt; tag defines a checkbox.\
          The checkbox is shown as a square box that is ticked (checked) when activated.\
          Checkboxes are used to let a user select one or more options of a limited number of choices.</p>',
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
              description: this.$store.state.navText.value,
              text: "Specifies the value (boolean/array)for the &lt;checkbox-input&gt element.",
            },
            {
              type: "options",
              value: this.d_options,
              description: this.$store.state.navText.options,
              text: this.$store.state.navText.optionsText,
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
              text: this.$store.state.navText.inlineText
            },
            {
              type: "box",
              value: this.d_box,
              description: this.$store.state.navText.box,
              text: this.$store.state.navText.boxText,
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
      } //checkbox
    }
  } //default
</script>