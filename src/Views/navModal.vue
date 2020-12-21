<template>
    <div class= "navModal">
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
        
    </div><!--uiComponents-->
</template>

<script>
    import vueModal from '@/components/UIComponents/Modal/vueModal';
    import componentDetails from '@/Views/componentDetails';
    

    export default {
        name: 'uiComponents',

        data () {

            var d_modalTitle= 'Modal title'
            
            var d_text= 'openModal'
            
            var d_tag= 'approveText'
            
            var d_icon= 'fas fa-eject'
            
            var d_ctx= this.consoleClick

            var d_showModal= false

            return {
                
                d_modalTitle: d_modalTitle,

                d_text: d_text,

                d_tag: d_tag,

                d_icon: d_icon,

                d_ctx: d_ctx,

                d_showModal: d_showModal,

                d_modal: {

                    title: 'Modal',

                    import: 'import vueModal from "@/components/UIComponents/Modal/vueModal"',

                    compName: 'vue-modal',

                    description: '<p>The Modal plugin is a dialog box/popup window that is displayed on top of the current page</p>',

                    attributes: [
                        {
                            type: "modalTitle",
                            value: d_modalTitle,
                            description: this.$store.state.navText.tag,
                            text: this.$store.state.navText.tagText,
                        },
                        {
                            type: "tag",
                            value: d_tag,
                            description: this.$store.state.navText.tag,
                            text: this.$store.state.navText.tagText,
                        },
                        {
                            type: "text",
                            value: d_text,
                            description: this.$store.state.navText.text,
                            text: this.$store.state.navText.textText,
                        },
                        {
                            type: "icon",
                            value: d_icon,
                            description: this.$store.state.navText.icon,
                            text: this.$store.state.navText.iconText,
                        },
                        
                        {
                            type: "showModal",
                            value: d_showModal,
                            description: this.$store.state.navText.icon,
                            text: this.$store.state.navText.iconText,
                        },
                        {
                            type: "ctx",
                            value: d_ctx,
                            description: this.$store.state.navText.ctx,
                            text: 'Specifies the function that should be called when the confirm button inside the modal is clicked.'
                        },
                    ] //attributes
                }, //modal
            } //return
        }, //data

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
