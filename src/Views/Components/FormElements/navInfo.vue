<template>
  <component-details :compData= 'd_info' >
		<vue-info :label= "d_label" :value= 'd_value' :mask= "d_mask" :inline= "d_inline" />
	</component-details>
</template>

<script>
  import componentDetails from "@/Views/componentDetails";
  import vueInfo from "@/components/FormElements/vueInfo";

  export default {
    name: "navInfo",

    components: {
      componentDetails,
      vueInfo,
		}, //components

    data() {
      const d_label= 'Available Quantity'
      const d_value= '3200'
			const d_booleanTrue= true
			const d_mask = !d_booleanTrue
			const d_inline = !d_booleanTrue
      return {
        d_label,
        d_value,
				d_mask,
				d_inline
      } //return
		}, //data
		computed: {
			d_info: function () {
				return {
					title: 'Info Field',
          compName: 'vue-info',
          import: 'import vueInfo from "@/components/FormElements/vueInfo";',
          description: '<p>The &lt;vue-info&gt; tag specifies a non-interactive field where data passed to it are displayed as text</p>',
          attributes:[
            {
              type: "label",
              value: this.d_label,
              description: this.$store.state.navText.label,
              text: this.$store.state.navText.labelText,
            },
            {
              type: "value",
              value: this.d_value,
              description: this.$store.state.navText.value,
              text: 'specifies the value for the &lt;vue-info&gt; element',
            },
            {
              type: "mask",
              value: this.d_mask,
              description: this.$store.state.navText.mask,
              text: this.$store.state.navText.maskText,
            },
            {
              type: "inline",
              value: this.d_inline,
              description: this.$store.state.navText.inline,
              text: this.$store.state.navText.inlineText,
            }
          ]
				};
			}
		}
  }
</script>