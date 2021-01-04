<template>
  <component-details
    :compData= 'd_modal'
  >
    <vue-modal
      :modalTitle= 'd_modalTitle'
      :text= 'd_text'
      :tag= 'd_tag'
      :icon= 'd_icon'
      :ctx= 'd_ctx'
      :showModal= 'd_showModal'
    >
      <!--
        you can use custom content here to overwrite default content
      -->
      <h3>
        Custom body
      </h3>
    </vue-modal>
  </component-details>
</template>

<script>
  import vueModal from '@/components/UIComponents/Modal/vueModal';
  import componentDetails from '@/Views/componentDetails';

  export default {
    name: 'uiComponents',
    data () {
      const d_modalTitle= 'Modal title'
			const d_text= 'openModal'
			const d_tag= 'approveText'
			const d_icon= 'fas fa-eject'
			const d_ctx= this.consoleClick
      const d_showModal= false
      return {
				d_modalTitle,
        d_text,
        d_tag,
        d_icon,
        d_ctx,
        d_showModal
      } //return
		}, //data

		computed: {
			d_modal: function() {
				return {
          title: 'Modal',
          import: 'import vueModal from "@/components/UIComponents/Modal/vueModal"',
          compName: 'vue-modal',
          description: '<p>The Modal plugin is a dialog box/popup window that is displayed on top of the current page</p>',
          attributes: [
            {
              type: "modalTitle",
              value: this.d_modalTitle,
              description: this.$store.state.navText.tag,
              text: this.$store.state.navText.tagText,
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
              type: "showModal",
              value: this.d_showModal,
              description: this.$store.state.navText.icon,
              text: this.$store.state.navText.iconText,
            },
            {
              type: "ctx",
              value: this.d_ctx.bind(this),
              description: this.$store.state.navText.ctx,
              text: 'Specifies the function that should be called when the confirm button inside the modal is clicked.'
            },
          ] //attributes
				};
			} //modal
		}, //computed

    methods: {

      consoleClick: function () {
        this.d_showModal= false
        // console.log("ModalClick", this.d_showModal)
      }, // consoleClick

    }, //methods

    components: {
             vueModal,
      componentDetails,
           }, //components
  } //default
</script>
