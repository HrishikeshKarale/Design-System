<template>
    <div class= "navButton">
            <component-details
                :compData= 'd_vueButton'
                :d_attr= 'd_attr'
            >        
                <vue-button 
                    :buttonType= 'd_buttonType'
                    :buttonName= "d_buttonName"
                    :buttonText= "d_buttonText"
                    :buttonIcon= "d_buttonIcon"
                    :buttonStyle= 'd_buttonStyle[0]'
                    :disabled= '!d_booleanTrue'
                    :autofocus= '!d_booleanTrue'
                    :formID= "d_form"
                    :onClickAction= 'd_onClickAction'
                />
            </component-details>
        
    </div><!--buttons-->
</template>

<script>

    import componentDetails from '@/Views/componentDetails'
    import vueButton from '@/components/UIComponents/Buttons'
    

    export default {
        name: 'navButton',
        
        data () {

            var d_buttonType= 'button'

            var d_buttonName= 'consoleTextButton'

            var d_buttonText= 'Click Me'

            var d_buttonIcon= 'fas fa-registered'

            var d_buttonStyle= this.$store.state.buttonStyle

            var d_booleanTrue= true

            var d_form= ''

            var d_onClickAction= this.consoleClick

            return {

                d_buttonType: d_buttonType,

                d_buttonName: d_buttonName,

                d_buttonText: d_buttonText,

                d_buttonIcon: d_buttonIcon,

                d_buttonStyle: d_buttonStyle,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_onClickAction: d_onClickAction,

                d_attr: {'type':['buttonStyle', ] , 'value': [d_buttonStyle]},

                d_vueButton: {

                    title: 'vueButton',

                    compName: 'vue-button',

                    import: 'import vueButton from "@/components/UIComponents/Buttons"',

                    description: '<p>The &lt;text-input&gt; tag specifies an input field where user can enter tect data.</p>\
                                <p>&lt;text-input&gt; elements are used within a &lt;form&gt; element to declare input controls that allow users to input data.</p>\
                                <p>An &lt;text-input&gt; tag can vary in many ways, depending on the type attribute. The attributes for the text-input tag can be seen in the sample code.',

                    attributes: [
                        {
                            type: "buttonType",
                            value: d_buttonType,
                            description: this.$store.state.navText.buttonType,
                            text: this.$store.state.navText.buttonTypeText,
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
                            type: "buttonStyle",
                            value: d_buttonStyle[0],
                            description: this.$store.state.navText.buttonStyle,
                            text: this.$store.state.navText.buttonStyleText,
                        },
                        {
                            type: "disabled",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.disabled,
                            text: this.$store.state.navText.disabledText,
                        },
                        {
                            type: "autofocus",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.autofocus,
                            text: this.$store.state.navText.autofocusText,
                        },
                        {
                            type: "formID",
                            value: d_form,
                            description: this.$store.state.navText.formID,
                            text: this.$store.state.navText.formIDText,
                        },
                        {
                            type: "onClickAction",
                            value: d_onClickAction,
                            description: this.$store.state.navText.onClickAction,
                            text: this.$store.state.navText.onClickActionText,
                        },
                    ] //attributes
                }, //d_vueButton
            } //return
        }, //data
        
        components: {

            componentDetails,
            vueButton,
            
        }, //components

        methods: {

            consoleClick: function () {
                // console.log("ButtonClick")
            }, // consoleClick
        }, //methods
    } //default
</script>