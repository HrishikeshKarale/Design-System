<template>
    <div class= "navText">
        <phone-input 
            :label= "d_label"
            :name= "d_name"
            v-model= 'd_textBoxValue'
            :required= 'd_booleanTrue'
            :disabled= '!d_booleanTrue'
            :readonly= '!d_booleanTrue'
            :autofocus= '!d_booleanTrue'
            :inline= '!d_booleanTrue'
            :mask= '!d_booleanTrue'
            @alerts= 'd_alerts'
        />
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_textBoxValue'
                    class= 'value'
                >
                    <label>Value Returned: </label>{{d_textBoxValue}}
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
                        :compData= 'd_text'
                    >
                        <text-input 
                            :label= "d_label"
                            :name= "d_name"
                            v-model= 'd_textBoxValue'
                            :value= 'd_value'
                            :pattern= 'd_pattern'
                            :placeholder= "d_placeholder"
                            :maxlength= 'd_maxlength'
                            :required= 'd_booleanTrue'
                            :disabled= '!d_booleanTrue'
                            :readonly= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :mask= '!d_booleanTrue'
                            :inputIcon= 'd_inputIcon'
                            :inline= '!d_booleanTrue'
                            @alerts= 'd_alerts'
                        />
                    </component-details>                
                </form>
            </div>
        
    </div>
</template>

<script>

    import componentDetails from "@/Views/componentDetails";
    import textInput from "@/components/FormElements/textInput";
    import phoneInput from "@/components/FormElements/phoneInput";
    

    // import { store } from '@/store/store'

    export default {
        name: "navText",

        // store,

        components: {
            
            componentDetails,
            textInput,
            phoneInput,
            
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

            var d_label= 'Username'

            var d_name= 'usernameTextField'

            var d_value= 'qwerty'

            var d_textBoxValue= ''

            // ^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$
            // └─────┬────┘└───┬──┘└─────┬─────┘└─────┬─────┘ └───┬───┘
            //     │         │         │            │           no _ or . at the end
            //     │         │         │            │
            //     │         │         │            allowed characters
            //     │         │         │
            //     │         │         no __ or _. or ._ or .. inside
            //     │         │
            //     │         no _ or . at the beginning
            //     │
            //     username is 8-20 characters long
            var d_pattern= new RegExp(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)

            var d_maxlength= 20

            var d_placeholder= 'Username'

            var d_booleanTrue= true

            var d_inputIcon= 'fas fa-user'

            var d_alerts= this.alerts

            return {

                d_label: d_label,

                d_name: d_name,

                d_value: d_value,

                d_textBoxValue: d_textBoxValue,

                d_pattern: d_pattern,

                d_maxlength: d_maxlength,

                d_placeholder: d_placeholder,

                d_booleanTrue: d_booleanTrue,

                d_inputIcon: d_inputIcon,

                d_alerts: d_alerts,

                d_danger: null,

                d_warning: null,

                d_text: {

                    title: 'Text Input Field',

                    compName: 'text-input',

                    import: 'import textInput from "@/components/FormElements/textInput";',

                    description: "<p>The &lt;text-input&gt; defines a single-line text field.</p>\
                                <p>It used the &lt;input type= 'text'&gt; within &lt;text-input&gt;</p>\
                                <p>&lt;text-input&gt; elements are usually used within a &lt;form&gt; element to declare input controls that allow users to input data.</p>\
                                <p>The attributes for the text-input tag can be seen in the sample code.</p>",

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
                            value: d_textBoxValue,
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "value",
                            value: d_value,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value for the &lt;text-input&gt element.",
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
                }, //text
            } //return
        }, //data
    }
</script>