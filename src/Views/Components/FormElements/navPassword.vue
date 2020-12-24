<template>
    <div class= "navPassword"> 
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_passwordValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_passwordValue}}
                </div>
                <div 
                    v-if= 'danger'
                    class= 'error'
                >
                    <label>Error Returned:</label> {{danger}}
                </div>
                <div 
                    v-if= 'warning'
                    class= 'warning'
                >
                    <label>Warning Returned:</label> {{warning}}
                </div>
            </div>
            <div class= "FormElementsContent">
                <form>                                      <component-details
                        :compData= 'd_password'
                    >
                        <password-input 
                            :label= "d_label"
                            :name= "d_name"
                            :value= 'd_passwordValue'
                            :pattern= 'd_pattern'
                            :placeholder= "d_placeholder"
                            :maxlength= 'd_maxlength'
                            :required= 'd_booleanTrue':inputIcon= 'd_inputIcon'
                            @notify= 'alerts'
                            @value= 'val=> d_passwordValue = val'
                        />
                    </component-details>
                </form>
            </div>
           </div>
</template>

<script>
    import componentDetails from "@/Views/componentDetails";
    import passwordInput from "@/components/FormElements/passwordInput";
    

    // import { store } from '@/store/store'

    export default {
        name: "navPassword",

        // store,

        components: {

            componentDetails,
            passwordInput
        }, //components

        methods: {

            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.danger= message;
                }
                else {
                    this.warning= message;
                }
            }, //alerts
        }, //methods

        data() {

            const label= 'Password'

            const name= 'passwordTextField'

            const value= ''

            const passwordValue= ''

            const pattern= '([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*'

            const maxlength= 20

            const placeholder= 'Enter password here...'

            const d_booleanTrue= true

            const inputIcon= 'fas fa-key'

            const alerts= this.alerts

            return {

                d_label: d_label,

                d_name: d_name,

                d_value: d_value,

                d_passwordValue: d_passwordValue,

                d_pattern: d_pattern,

                d_maxlength: d_maxlength,

                d_placeholder: d_placeholder,

                d_booleanTrue: d_booleanTrue,

                d_inputIcon: d_inputIcon,

                d_alerts: d_alerts,

                danger: null,

                warning: null,
                           d_password: {

                    title: 'Password Input Field',

                    compName: 'password-input',

                    import: 'import passwordInput from "@/components/FormElements/passwordInput";',

                    description: '<p>The &lt;password-input&gt; tag defines a password field (characters are masked).</p>\
                                    <p><strong>Note:</strong> Any forms involving sensitive information like passwords should be served over HTTPS.</p>',

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
                            value: 'd_passwordValue',
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
                            type: "alerts",
                            value: d_alerts,
                            description: this.$store.state.navText.alerts,
                            text: this.$store.state.navText.alertsText,
                        }
                    ]
                }, //password
            } //return
        }, //data
    }
</script>
