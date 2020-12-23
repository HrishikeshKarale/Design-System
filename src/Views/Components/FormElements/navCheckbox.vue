<template>
    <div class= "navCheckbox">
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_checkboxValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_checkboxValue}}
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
            <checkbox-input 
                label= "Ship on the same day"
                name= "shipDyaCheckboxField"
                v-model= 'd_checkboxValue'
            />
            <div class= "FormElementsContent">
                <form>                           <component-details
                        :compData= 'd_checkbox'
                    >
                        <checkbox-input 
                            :label= "d_label"
                            :name= "d_name"
                            v-model= 'd_checkboxValue'
                            :options= 'd_options'
                            :required= 'd_booleanTrue'
                            :disabled= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :inline= '!d_booleanTrue'
                            :mask= '!d_booleanTrue'
                            @notify= 'alerts'
                        />
                    </component-details>
                </form>
            </div>
           </div>
</template>

<script>

    import componentDetails from "@/Views/componentDetails";
    import checkboxInput from "@/components/FormElements/checkboxInput";
    

    export default {
        name: "navCheckbox",

        components: {

            componentDetails,
            checkboxInput,
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

            var d_label= "Warehouse"
                       var d_name= "checkboxField"
                       var d_value= ''
                       var d_checkboxValue= null

            var d_options= this.$store.state.warehouse

            var d_booleanTrue= true

            var d_alerts= this.alerts
                       return {

                d_label: d_label,

                d_name: d_name,

                d_value: d_value,

                d_checkboxValue: d_checkboxValue,

                d_options: d_options,

                d_booleanTrue: d_booleanTrue,

                d_alerts: d_alerts,

                d_danger: null,

                d_warning: null,

                d_checkbox: {

                    title: 'Checkbox Input Field',

                    compName: 'checkbox-input',

                    import: 'import checkboxInput from "@/components/FormElements/checkboxInput";',

                    description: '<p>The &lt;checkbox-input&gt; tag defines a checkbox.</p>\
                                    <p>The checkbox is shown as a square box that is ticked (checked) when activated.<p>\
                                    </p>Checkboxes are used to let a user select one or more options of a limited number of choices.</p>',

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
                            text: "Specifies the value (boolean/array)for the &lt;checkbox-input&gt element.",
                        },
                        {
                            type: "v-model",
                            value: 'd_checkboxValue',
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
                }, //checkbox
            } //return
        }, //data 
    } //default
</script>