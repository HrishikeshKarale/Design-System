<template>
    <component-details
        :compData= 'd_text'
    >
        <text-input 
            :label= "d_label"
            :tag= "d_name"
            :value= 'd_textBoxValue'
            :pattern= 'd_pattern'
            :placeholder= "d_placeholder"
            :minlength= 'd_minlength'
            :maxlength= 'd_maxlength'
            :alert= 'alertObject'
            :required= 'd_required'
            :disabled= 'd_disabled'
            :autocomplete= 'd_autocomplete'
            :inline= 'd_inline'
            :readOnly= 'd_readOnly'
            :autofocus= 'd_autofocus'
            :mask = 'd_mask'
            :icon= 'd_icon'
            @notify= 'alerts'
            @value= 'val=> d_textBoxValue = val'
        />
    </component-details> 
</template>

<script>

    import componentDetails from "@/Views/componentDetails";
    import textInput from "@/components/FormElements/textInput";
    import phoneInput from "@/components/FormElements/phoneInput";
    import { alerts } from "@/typeScript/common/alerts"

    export default {
        name: "navText",

        mixins: [alerts],

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
            const d_label= 'Username'
            const d_name= 'usernameTextField'
            const d_value= 'qwerty'
            const d_textBoxValue= ''
            const d_pattern= /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
            const d_maxlength= 20
            const d_minlength= 8
            const d_placeholder= 'Username'
            const d_booleanTrue= true
            const d_autofocus= !d_booleanTrue;
            const d_disabled= !d_booleanTrue;
            const d_readOnly= !d_booleanTrue;
            const d_required= !d_booleanTrue;
            const d_autocomplete= !d_booleanTrue;
            const d_inline= !d_booleanTrue;
            const d_mask= !d_booleanTrue;
            const d_icon= 'fas fa-user'

            return {
                d_label,
                d_name,
                d_value,
                d_textBoxValue,
                d_pattern,
                d_maxlength,
                d_minlength,
                d_placeholder,
                d_booleanTrue,
                d_autofocus,
                d_disabled,
                d_readOnly,
                d_required,
                d_autocomplete,
                d_inline,
                d_mask,
                d_icon,
            } //return
        }, //data

        computed: {
            d_text: function() {
                return {

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
                            value: this.d_label,
                            description: this.$store.state.navText.label,
                            text: this.$store.state.navText.labelText,
                        },
                        {
                            type: "tag",
                            value: this.d_name,
                            description: this.$store.state.navText.name,
                            text: this.$store.state.navText.nameText,
                        },
                        {
                            type: "v-model",
                            value: this.d_textBoxValue,
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "value",
                            value: this.d_value,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value for the &lt;text-input&gt element.",
                        },
                        {
                            type: "placeholder",
                            value: this.d_placeholder,
                            description: this.$store.state.navText.placeholder,
                            text: this.$store.state.navText.placeholderText,
                        },
                        {
                            type: "maxlength",
                            value: this.d_maxlength,
                            description: this.$store.state.navText.maxlength,
                            text: this.$store.state.navText.maxlengthText,
                        },
                        {
                            type: "pattern",
                            value: this.d_pattern,
                            description: this.$store.state.navText.pattern,
                            text: this.$store.state.navText.patternText,
                        },
                        {
                            type: "required",
                            value: this.d_required,
                            description: this.$store.state.navText.required,
                            text: this.$store.state.navText.requiredText,
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
                            type: "readonly",
                            value: this.d_readonly,
                            description: this.$store.state.navText.readonly,
                            text: this.$store.state.navText.readonlyText,
                        },
                        {
                            type: "inline",
                            value: this.inline,
                            description: this.$store.state.navText.inline,
                            text: this.$store.state.navText.inlineText,
                        },
                        {
                            type: "mask",
                            value: this.d_mask,
                            description: this.$store.state.navText.mask,
                            text: this.$store.state.navText.maskText,
                        },
                        {
                            type: "icon",
                            value: this.d_icon,
                            description: this.$store.state.navText.icon,
                            text: this.$store.state.navText.Text,
                        },
                        {
                            type: "alert",
                            value: this.alertObject,
                            description: this.$store.state.navText.alerts,
                            text: this.$store.state.navText.alertsText,
                        }
                    ]
                };
            } //d_text
        }
    }
</script>