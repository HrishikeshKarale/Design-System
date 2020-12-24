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
                <form>
                    <component-details
                        :compData= 'd_radio'
                    >
                        <radio-input-test 
                            :label= "d_label"
                            :name= "d_name"
                            :value= 'd_radioValue'
                            :options= 'd_options'
                            
                           
                            
                            
                            
                            @selected= 'selected'
                            @notify= 'alerts'
                            @value= 'val=> d_radioValue = val'
                        />
                    </component-details>
                </form>
            </div>
           </div>
</template>

<script>
    import componentDetails from "@/Views/componentDetails";
    import radioInputTest from "@/components/FormElements/radioInputTest";
    import { alerts } from "@/typeScript/common/alerts";    

    export default {
        name: "navRadio",  

        mixins: [ alerts ],

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
                    this.danger= message;
                }
                else {
                    this.warning= message;
                }
            }, //change
        }, //methods

        data() {

            const label= "Warehouse"
                       const name= "radioField"
                       const value= ''
                       const radioValue= null

            const options= this.$store.state.warehouse

            const d_booleanTrue= true

            const alerts= this.alerts
                       return {

                d_label: d_label,

                d_name: d_name,

                d_value: d_value,

                d_radioValue: d_radioValue,

                d_options: d_options,

                d_booleanTrue: d_booleanTrue,

                d_alerts: d_alerts,

                danger: null,

                warning: null,

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
                            type: "alerts",
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