<template>
    <div class= "navEmail">
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_emailValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_emailValue}}
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
                <form>                                  <component-details
                        :compData= 'd_email'
                    >
                        <email-input 
                            :label= "d_label"
                            :name= "d_name"
                            v-model= 'd_emailValue'
                            :pattern= 'd_pattern'
                            :placeholder= "d_placeholder"
                            :maxlength= 'd_maxlength'
                            :multiple= 'd_booleanTrue'
                            :required= 'd_booleanTrue'
                            :disabled= '!d_booleanTrue'
                            :readonly= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :inputIcon= 'd_inputIcon'
                            :inline= '!d_booleanTrue'
                            :mask= '!d_booleanTrue'
                            @notify= 'd_alerts'
                        />
                    </component-details>
                </form>
            </div>
           </div>
</template>

<script>
    import componentDetails from "@/Views/componentDetails";
    import emailInput from "@/components/FormElements/emailInput";
    

    // import { store } from '@/store/store'

    export default {
        name: "navEmail",

        components: {

            componentDetails,
            emailInput
        }, //components
               methods: {

            alerts: function (type, message) {
                if (type== 'error') {
                    this.d_danger= message;
                }
                if (type== 'warning') {
                    this.d_warning= message;
                }
            }, //change
        }, //methods

        data() {

            var d_label= 'Email'

            var d_name= 'uemailTextField'

            var d_value= 'abc'

            var d_emailValue= ''

            var d_pattern= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

            var d_maxlength= 50

            var d_placeholder= 'Enter email here...'

            var d_booleanTrue= true

            var d_inputIcon= 'fas fa-at'

            var d_alerts= this.alerts

            return {

                d_label: d_label,

                d_name: d_name,

                d_value: d_value,

                d_emailValue: d_emailValue,

                d_pattern: d_pattern,

                d_maxlength: d_maxlength,

                d_placeholder: d_placeholder,

                d_booleanTrue: d_booleanTrue,

                d_inputIcon: d_inputIcon,

                d_alerts: d_alerts,

                d_danger: null,

                d_warning: null,

                d_email: {
                                       title: 'Email Input Field',

                    compName: 'email-input',

                    import: 'import emailInput from "@/components/FormElements/emailInput";',

                    description: '<p>The &lt;email-input&gt; tag defines a field for an e-mail address.</p>\
                                    <p>The input value is automatically validated to ensure it is a properly formatted e-mail address.</p>\
                                    <p>To define an e-mail field that allows multiple e-mail addresses, add the "multiple" attribute.</p>',

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
                            value: 'd_emailValue',
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "value",
                            value: d_value,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value for the &lt;email-input&gt element.",
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
                            description: this.$store.state.navText.maxlength,
                            text: this.$store.state.navText.maxlengthText,
                        },
                        {
                            type: "pattern",
                            value: d_pattern,
                            description: this.$store.state.navText.pattern,
                            text: this.$store.state.navText.patternText,
                        },
                        {
                            type: "multiple",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.multiple,
                            text: this.$store.state.navText.multipleText
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
                            type: "alerts",
                            value: d_alerts,
                            description: this.$store.state.navText.alerts,
                            text: this.$store.state.navText.alertsText,
                        }
                    ]
                }, //email
            } //return
        }, //data 
    } //default
</script>