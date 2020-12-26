<template>
    <div class= "navNumber"> 
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_numberValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_numberValue}}
                </div>
                <div 
                    v-if= 'd_error'
                    class= 'error'
                >
                    <label>Error Returned:</label> {{d_error}}
                </div>
                <div 
                    v-if= 'warning'
                    class= 'warning'
                >
                    <label>Warning Returned:</label> {{warning}}
                </div>
            </div>
            <div class= "FormElementsContent">
                <form>  
                    <component-details
                        :compData= 'd_number'
                    >
                        <number-input 
                            :label= "d_label"
                            :name= "d_name"
                            :value= 'd_numberValue'
                            :pattern= 'd_pattern'
                            :placeholder= "d_placeholder"
                            :min= 'd_min'
                            :max= 'd_max'
                            :inputIcon= 'd_inputIcon'
                            
                            
                            @notify= 'alerts'
                            @value= 'val=> d_numberValue = val'
                        />
                    </component-details>
                </form>
            </div>
           </div>
</template>

<script>
    import componentDetails from "@/Views/componentDetails";
    import numberInput from "@/components/FormElements/numberInput";
    

    // import { store } from '@/store/store'

    export default {
        name: "navNumber",

        // store,

        components: {

            componentDetails,
            numberInput
        }, //components

        methods: {

            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.d_error= message;
                }
                else {
                    this.d_warning= message;
                }
            }, //alerts
        }, //methods

        data() {

            const label= 'Quantity'

            const name= 'numberTextField'

            const value= 0

            const numberValue= ''

            const pattern= '^(([0-9]*)|(([0-9]*).([0-9]*)))$'

            const min= 0

            const max= 99999

            const placeholder= '0-9999'

            const d_booleanTrue= true

            const inputIcon= 'fas fa-hashtag'

            const alerts= this.alerts

            return {

                d_label: d_label,

                d_name: d_name,

                d_value: d_value,

                d_numberValue: d_numberValue,

                d_pattern: d_pattern,

                d_min: d_min,

                d_max: d_max,

                d_placeholder: d_placeholder,

                d_booleanTrue: d_booleanTrue,

                d_inputIcon: d_inputIcon,

                d_alerts: d_alerts,

                d_error: null,

                warning: null,

                d_number: {
                    id: 4,
                                       title: 'Number Input Field',

                    compName: 'number-input',

                    import: 'import numberInput from "@/components/FormElements/numberInput";',

                    description: '<p>The &lt;number-input&gt; defines a field for entering a number.</p>\
                                    <p>Use the following attributes to specify restrictions:</p>\
                                    <ul>\
                                    <li><a href= "att_input_max.asp">max</a> - specifies the maximum value allowed</li>\
                                    <li><a href= "att_input_min.asp">min</a> - specifies the minimum value allowed</li>\
                                    <li><a href= "att_input_step.asp">step</a> - specifies the legal number intervals</li>\
                                    <li><a href= "att_input_value.asp">value</a> - Specifies the default value</li>\
                                    </ul>',

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
                            value: 'd_numberValue',
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "value",
                            value: d_value,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value for the &lt;number-input&gt element.",
                        },
                        {
                            type: "placeholder",
                            value: d_placeholder,
                            description: this.$store.state.navText.placeholder,
                            text: this.$store.state.navText.placeholderText,
                        },
                        {
                            type: "min",
                            value: d_min,
                            description: this.$store.state.min,
                            text: this.$store.state.minText
                        },
                        {
                            type: "max",
                            value: d_max,
                            description: this.$store.state.max,
                            text: this.$store.state.maxText
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
                }, //number
            } //return
        }, //data
    }
</script>