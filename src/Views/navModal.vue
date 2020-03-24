<template>
    <div class= "navModal">
        <content-nav
            :attributes= 'd_modal.attributes'
            :title= 'd_modal.title'
        >  
            <component-details
                :compData= 'd_modal'
            >
                <vue-modal
                    :modalTitle= 'd_modalTitle'
                    :buttonText= 'd_buttonText'
                    :buttonName= 'd_buttonName'
                    :buttonIcon= 'd_buttonIcon'
                    :onClickAction= 'd_onClickAction'
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
        </content-nav>
    </div><!--uiComponents-->
</template>

<script>
    import vueModal from '@/components/UIComponents/Modal/vueModal';
    import componentDetails from '@/Views/componentDetails';
    import contentNav from '@/Views/components/contentNav';

    export default {
        name: 'uiComponents',

        data () {

            var d_modalTitle= 'Modal title'
            
            var d_buttonText= 'openModal'
            
            var d_buttonName= 'approveText'
            
            var d_buttonIcon= 'fas fa-eject'
            
            var d_onClickAction= this.consoleClick

            var d_showModal= false

            return {
                
                d_modalTitle: d_modalTitle,

                d_buttonText: d_buttonText,

                d_buttonName: d_buttonName,

                d_buttonIcon: d_buttonIcon,

                d_onClickAction: d_onClickAction,

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
                            description: this.$store.state.navText.buttonName,
                            text: this.$store.state.navText.buttonNameText,
                        },
                        {
                            type: "buttonName",
                            value: d_buttonName,
                            description: this.$store.state.navText.buttonName,
                            text: this.$store.state.navText.buttonNameText,
                        },
                        {
                            type: "buttonText",
                            value: d_buttonText,
                            description: this.$store.state.navText.buttonText,
                            text: this.$store.state.navText.buttonTextText,
                        },
                        {
                            type: "buttonIcon",
                            value: d_buttonIcon,
                            description: this.$store.state.navText.buttonIcon,
                            text: this.$store.state.navText.buttonIconText,
                        },
                        
                        {
                            type: "showModal",
                            value: d_showModal,
                            description: this.$store.state.navText.buttonIcon,
                            text: this.$store.state.navText.buttonIconText,
                        },
                        {
                            type: "onClickAction",
                            value: d_onClickAction,
                            description: this.$store.state.navText.onClickAction,
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
            contentNav,
        }, //components
    } //default
</script>
