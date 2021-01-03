//https://proto.io/freebies/onoff/

<template>
  <component-details
		:compData= 'd_multiToggle'
	>
		<multi-toggle
			:label= "d_label"
			:tag= "d_name"
			:value= "d_value"
			:labelChecked= "d_labelChecked"
			:labelUnchecked= "d_labelUnchecked"
			:showLabels= 'd_showLabels'
			:inline= 'd_inline'
			:readonly= 'd_readonly'
			:disabled= 'd_disabled'
			:mask= 'd_mask'
			@value= "val => (d_value = val)"
		/>
	</component-details>
</template>

<script>

  import componentDetails from "@/Views/componentDetails";
  import multiToggle from "@/components/FormElements/multiToggle";

  export default {
		name: "navToggle",

    components: {
      componentDetails,
      multiToggle
    }, //components

    data() {
        const d_label= 'Username'
        const d_name= 'toggleInputField'
				const d_labelChecked= "ON"
				const d_labelUnchecked= "OFF"
        const d_value= d_labelChecked
				const d_booleanTrue= true
				const d_showLabels= !d_booleanTrue
				const d_inline= !d_booleanTrue
				const d_readonly= !d_booleanTrue
				const d_disabled= !d_booleanTrue
				const d_mask= !d_booleanTrue
        return {
          d_label,
          d_name,
          d_value,
          d_value,
          d_labelChecked,
          d_labelUnchecked,
					d_showLabels,
					d_inline,
					d_readonly,
					d_disabled,
					d_mask
      } //return
		}, //data

		computed: {
			d_multiToggle: function() {
				return {
					title: 'Multi-Toggle Input Field',
          compName: 'multi-toggle',
          import: 'import multiToggle from "@/components/FormElements/multiToggle";',
          description: '<p>The &lt;multi-toggle&gt; tag specifies an input field where user can toggle between two states.</p>',
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
              text: "Specifies the value for the &lt;multi-toggle&gt element.",
            },
            {
              type: "labelUnchecked",
              value: this.d_labelUnchecked,
              description: '<p>It sets the label for unchecked value if showLabel is true.</p>',
              text: 'Specifies the value for the unchecked label'
            },
            {
              type: "labelChecked",
              value: this.d_labelChecked,
              description: '<p>It sets the label for checked value if showLabel is true.</p>',
              text: 'Specifies the value for the checked label'
            },
            {
              type: "showLabels",
              value: this.d_showLabels,
              description: '<p>display the label as checked/unchecked state for toggle.</p>',
              text: 'Specifies the if the labels should be displayed'
            },
            {
              type: "disabled",
              value: this.d_disabled,
              description: this.$store.state.navText.disabled,
              text: this.$store.state.navText.disabledText,
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
          ]
				};
			}//multiToggle
		}
  }
</script>