<template>
    <div class= "navRadio">
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_radioValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_radioValue}}
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
                        :compData= 'd_radio'
                    >
                        <radio-input-test 
                            :label= "d_label"
                            :name= "d_name"
                            v-model= 'd_radioValue'
                            :options= 'd_options'
                            :required= '!d_booleanTrue'
                            :disabled= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :inline= '!d_booleanTrue'
                            :mask= '!d_booleanTrue'
                            @selected= 'selected'
                            @alerts= 'alerts'
                        />
                    </component-details>
                </form>
            </div>
        
    </div>
</template>

<script>

    import componentDetails from "@/Views/componentDetails";
    import radioInputTest from "@/components/FormElements/radioInputTest";
    

    export default {
        name: "navRadio",

        components: {
            
            componentDetails,
            radioInputTest
        }, //components

        methods: {

            selected: function (value) {
                // console.log("selected: ", value)
                this.d_radioValue= value
            }, //selected

            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.d_danger= message;
                }
                else {
                    this.d_warning= message;
                }
            }, //change
        }, //methods

        data() {

            var d_label= "Warehouse"
            
            var d_name= "radioField"
            
            var d_value= ''
            
            var d_radioValue= null

            var d_options= this.$store.state.warehouse

            var d_booleanTrue= true

            var d_alerts= this.alerts
            
            return {

                d_label: d_label,

                d_name: d_name,

                d_value: d_value,

                d_radioValue: d_radioValue,

                d_options: d_options,

                d_booleanTrue: d_booleanTrue,

                d_alerts: d_alerts,

                d_danger: null,

                d_warning: null,

                d_radio: {

                    title: 'Radio Input Field',

                    compName: 'radio-input',

                    import: 'import radioInputTest from "@/components/FormElements/radioInputTest";',

                    description: '<p>The &lt;radio-input"&gt; tag defines a radio button.</p>\
                                    <p>Radio buttons are normally presented in groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.</p>',

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
                            type: "value",
                            value: d_value,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value (boolean/string) for the &lt;radio-inpu&gt element.",
                        },
                        {
                            type: "v-model",
                            value: 'd_radioValue',
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "options",
                            value: d_options,
                            description: this.$store.state.navText.options,
                            text: this.$store.state.navText.optionsText,
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
                            type: "inline",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.inline,
                            text: this.$store.state.navText.inlineText
                        },
                        {
                            type: "mask",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.mask,
                            text: this.$store.state.navText.maskText,
                        },
                        {
                            type: "@alerts",
                            value: d_alerts,
                            description: this.$store.state.navText.alerts,
                            text: this.$store.state.navText.alertsText,
                        }
                    ]
                }, //radio
            } //return
        }, //data
    } //default
</script>