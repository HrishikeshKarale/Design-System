<template>
    <div class= "navTextarea">
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_textareaValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_textareaValue}}
                </div>
                <div 
                    v-if= 'd_danger'
                    class= 'error'
                >
                    <label>Error Returned:</label> {{d_danger}}
                </div>
                <div 
                    v-if= 'd_warning'
                    class= 'warning'
                >
                    <label>Warning Returned:</label> {{d_warning}}
                </div>
            </div>
            <div class= "FormElementsContent">
                <form>      
                    <component-details
                        :compData= 'd_textarea'
                    >
                        <vue-textarea 
                            :label= "d_label"
                            :name= "d_name"
                            v-model= 'd_textareaValue'
                            :value= 'd_value'
                            :pattern= 'd_pattern'
                            :placeholder= "d_placeholder"
                            :maxlength= 'd_maxlength'
                            :required= 'd_booleanTrue'
                            :disabled= '!d_booleanTrue'
                            :readonly= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :inputIcon= 'd_inputIcon'
                            :inline= '!d_booleanTrue'
                            :mask= '!d_booleanTrue'
                            @alerts= 'd_alerts'
                        />
                    </component-details>     
                </form>
            </div>
        
    </div>
</template>

<script>

    import componentDetails from "@/Views/componentDetails";
    import vueTextarea from "@/components/FormElements/vueTextarea";
    

    // import { store } from '@/store/store'

    export default {
        name: "navTextarea",

        // store,

        components: {
            
            componentDetails,
            vueTextarea
        }, //components

        methods: {

            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.d_danger= message;
                }
                else {
                    this.d_warning= message;
                }
            }, //alerts
        }, //methods

        data() {

            var d_label= 'Description'

            var d_name= 'textareaField'

            var d_value= 'qwerty'

            var d_textareaValue= ''

            var d_pattern= '([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*'

            var d_maxlength= 512

            var d_placeholder= 'Enter text here...'

            var d_booleanTrue= true

            var d_inputIcon= 'fas fa-comment'

            var d_alerts= this.alerts

            return {

                d_label: d_label,

                d_name: d_name,

                d_value: d_value,

                d_textareaValue: d_textareaValue,

                d_pattern: d_pattern,

                d_maxlength: d_maxlength,

                d_placeholder: d_placeholder,

                d_booleanTrue: d_booleanTrue,

                d_inputIcon: d_inputIcon,

                d_alerts: d_alerts,

                d_danger: null,

                d_warning: null,

                d_textarea: {

                    title: 'Textarea Input Field',

                    compName: 'vue-textarea',

                    import: 'import vueTextarea from "@/components/FormElements/vueTextarea";',

                    description: '<p>The &lt;vue-textarea&gt; tag defines a multi-line text input control.</p>\
                                    <p>A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).</p>\
                                    <p>The size of a text area can be specified by the cols and rows attributes, or even better; through CSS height and width properties.</p>',

                    attributes:[
                        {
                            type: "label",
                            value: d_label,
                            description: this.$store.state.navText.label,
                            text: this.$store.state.navText.labelText,
                        },
                        {
                            type: "name",
                            value: d_name,
                            description: this.$store.state.navText.name,
                            text: this.$store.state.navText.nameText,
                        },
                        {
                            type: "v-model",
                            value: 'd_textareaValue',
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "value",
                            value: d_value,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value for the &lt;vue-textareat&gt element.",
                        },
                        {
                            type: "placeholder",
                            value: d_placeholder,
                            description: this.$store.state.navText.placeholder,
                            text: this.$store.state.navText.placeholderText,
                        },
                        {
                            type: "maxlength",
                            value: d_maxlength,
                            description: this.$store.state.axlength,
                            text: this.$store.state.navText.maxlengthText,
                        },
                        {
                            type: "pattern",
                            value: d_pattern,
                            description: this.$store.state.navText.pattern,
                            text: this.$store.state.navText.patternText,
                        },
                        {
                            type: "required",
                            value: d_booleanTrue,
                            description: this.$store.state.navText.required,
                            text: this.$store.state.navText.requiredText,
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
                            type: "readonly",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.readonly,
                            text: this.$store.state.navText.readonlyText,
                        },
                        {
                            type: "inline",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.inline,
                            text: this.$store.state.navText.inlineText,
                        },
                        {
                            type: "mask",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.mask,
                            text: this.$store.state.navText.maskText,
                        },
                        {
                            type: "inputIcon",
                            value: d_inputIcon,
                            description: this.$store.state.navText.inputIcon,
                            text: this.$store.state.navText.inputIconText,
                        },
                        {
                            type: "@alerts",
                            value: d_alerts,
                            description: this.$store.state.navText.alerts,
                            text: this.$store.state.navText.alertsText,
                        }
                    ]
                }, //textarea
            } //return
        }, //data 
    } //default
</script>