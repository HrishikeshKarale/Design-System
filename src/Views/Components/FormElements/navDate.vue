<template>
    <div class="navDate">
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_dateValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_dateValue}}
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
            <div class="FormElementsContent">
                <form>   
                    <component-details
                        :compData= 'd_date'
                    >
                        <vue-date 
                            :label= "d_label"
                            :name= "d_name"
                            :value= 'd_dateValue'
                            
                            :min= 'd_min'
                            :max= 'd_max'
                            :pattern= "d_pattern"
                            :required= 'd_booleanTrue'
                           
                            
                            
                            
                            
                            :inputIcon= 'd_inputIcon'
                            @notify= 'alerts'
                            @value= 'val=> d_dateValue = val'
                        />
                    </component-details>  
                </form>
            </div>
           </div>
</template>

<script>
    import componentDetails from "@/Views/componentDetails";
    import vueDate from "@/components/FormElements/vueDate";
    

    export default {
        name: "navDate",

        components: {

            componentDetails,
            vueDate
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
                       const label= "Date"
                       const name= "dateField"

            const value= '2018-12-12'
                       const dateValue= null

            const min= '2000-12-12'

            const max= '2040-12-12'

            const pattern= '^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$'
                            //"^d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$"

            const d_booleanTrue= true
                       const inputIcon= 'fas fa-calendar-alt'
                       const alerts= this.alerts


            return {
                           d_label: d_label,
                               d_name: d_name,

                d_value: d_value,
                               d_dateValue: d_dateValue,

                d_pattern: d_pattern,

                d_min: d_min,

                d_max: d_max,

                d_booleanTrue: d_booleanTrue,
                               d_inputIcon: d_inputIcon,
                               d_alerts: d_alerts,

                danger: null,

                warning: null,

                d_date: {
                                       title: 'Date Input Field',

                    compName: 'vue-date',

                    import: 'import vueDate from "@/components/FormElements/vueDate";',

                    description: '<p>The &lt;vue-datet&gt tag defines a date picker.</p>\
                                    <p>The resulting value includes the year, month, and day.</p>',

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
                            value: 'd_dateValue',
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "value",
                            value: d_value,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value for the &lt;vue-date&gt element.",
                        },
                        {
                            type: "setDefaultDate",
                            value: !d_booleanTrue,
                            description: '<p> Specifies if a default date of the current date should be set as the value or not.</p>',
                            text: 'Specifies if a default date of the current date should be set as the value or not',
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
                }, //date
            } //return
        }, //data
    } //default
</script>