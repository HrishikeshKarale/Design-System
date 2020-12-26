<template>
    <div class= "navButton">
            <component-details
                :compData= 'd_vueButton'
                :attr= 'attr'
            >                       <vue-button 
                    :type= 'd_type'
                    :tag= "d_tag"
                    :text= "d_text"
                    :icon= "d_icon"
                    :category= 'd_category[0]'
                   
                    
                    :form= "d_form"
                    :ctx= 'd_ctx'
                />
            </component-details>
           </div><!--buttons-->
</template>

<script>

    import componentDetails from '@/Views/componentDetails'
    import vueButton from '@/components/UIComponents/Button'
    

    export default {
        name: 'navButton',
               data () {

            const type= 'button'

            const tag= 'consoleTextButton'

            const text= 'Click Me'

            const icon= 'fas fa-registered'

            const category= this.$store.state.category

            const d_booleanTrue= true

            const form= ''

            const ctx= this.consoleClick

            return {

                d_type: d_type,

                d_tag: d_tag,

                d_text: d_text,

                d_icon: d_icon,

                d_category: d_category,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_ctx: d_ctx,

                attr: {'type':['category', ] , 'value': [d_category]},

                d_vueButton: {

                    title: 'vueButton',

                    compName: 'vue-button',

                    import: 'import vueButton from "@/components/UIComponents/Button"',

                    description: '<p>The &lt;text-input&gt; tag specifies an input field where user can enter tect data.</p>\
                                <p>&lt;text-input&gt; elements are used within a &lt;form&gt; element to declare input controls that allow users to input data.</p>\
                                <p>An &lt;text-input&gt; tag can vary in many ways, depending on the type attribute. The attributes for the text-input tag can be seen in the sample code.',

                    attributes: [
                        {
                            type: "type",
                            value: d_type,
                            description: this.$store.state.navText.type,
                            text: this.$store.state.navText.typeText,
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
                            type: "category",
                            value: d_category[0],
                            description: this.$store.state.navText.category,
                            text: this.$store.state.navText.categoryText,
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
                            type: "form",
                            value: d_form,
                            description: this.$store.state.navText.form,
                            text: this.$store.state.navText.formText,
                        },
                        {
                            type: "ctx",
                            value: d_ctx,
                            description: this.$store.state.navText.ctx,
                            text: this.$store.state.navText.ctxText,
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