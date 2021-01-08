<template>
	<component-details
		:compData= 'd_vueButton'
	>
		<vue-button
			:type= 'd_type'
			:tag= "d_tag"
			:text= "d_text"
			:icon= "d_icon"
			:category= 'd_category[0]'
			:disabled= "d_disabled"
			:autofocus= "d_autofocus"
			:form= "d_form"
			:ctx= 'd_ctx'
		/>
	</component-details>
</template>

<script>
  import componentDetails from '@/Views/componentDetails'
  import vueButton from "vue2-component-library"

  export default {
		name: 'navButton',

		data () {
      const d_type= 'button'
      const d_tag= 'consoleTextButton'
      const d_text= 'Click Me'
      const d_icon= 'fas fa-registered'
      const d_category= this.$store.state.category
			const d_booleanTrue= true
			const d_disabled= !d_booleanTrue
			const d_autofocus= !d_booleanTrue
      const d_form= ''
      const d_ctx= this.consoleClick
      return {
        d_type,
        d_tag,
        d_text,
        d_icon,
        d_category,
				d_disabled,
				d_autofocus,
        d_form,
        d_ctx,
      } //return
		}, //data

		components: {
      componentDetails,
      vueButton,
		}, //components

		computed: {
        d_vueButton: function() {
					return {
          title: 'vueButton',
          compName: 'vue-button',
          import: 'import vueButton from "vue2-component-library"',
          description: '<p>The &lt;text-input&gt; tag specifies an input field where user can enter tect data.</p>\
                <p>&lt;text-input&gt; elements are used within a &lt;form&gt; element to declare input controls that allow users to input data.</p>\
                <p>An &lt;text-input&gt; tag can vary in many ways, depending on the type attribute. The attributes for the text-input tag can be seen in the sample code.',

          attributes: [
            {
              type: "type",
              value: this.d_type,
              description: this.$store.state.navText.type,
              text: this.$store.state.navText.typeText,
            },
            {
              type: "tag",
              value: this.d_tag,
              description: this.$store.state.navText.tag,
              text: this.$store.state.navText.tagText,
            },
            {
              type: "text",
              value: this.d_text,
              description: this.$store.state.navText.text,
              text: this.$store.state.navText.textText,
            },
            {
              type: "icon",
              value: this.d_icon,
              description: this.$store.state.navText.icon,
              text: this.$store.state.navText.iconText,
            },
            {
              type: "category",
              value: this.d_category[0],
              description: this.$store.state.navText.category,
              text: this.$store.state.navText.categoryText,
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
              type: "form",
              value: this.d_form,
              description: this.$store.state.navText.form,
              text: this.$store.state.navText.formText,
            },
            {
              type: "ctx",
              value: this.d_ctx.bind(this),
              description: this.$store.state.navText.ctx,
              text: this.$store.state.navText.ctxText,
            },
          ] //attributes
        };
			} //d_vueButton
		}, //computed

    methods: {

      consoleClick: function () {
        // console.log("ButtonClick")
      }, // consoleClick
    }, //methods
  } //default
</script>