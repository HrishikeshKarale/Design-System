<template>
    <div class= "navDropdownList">
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_dropdownValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_dropdownValue}}
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
                        :compData= 'd_dropdownList'
                    >
                        <dropdown-list 
                            :label= "d_label"
                            :name= "d_name"
                            :value= 'd_dropdownValue'
                            :options= 'd_options'
                            :size= 'd_size'
                            
                            :required= 'd_booleanTrue'
                           
                            
                            :inputIcon= 'd_inputIcon'
                            
                            
                            @notify= 'alerts'
                            @value= 'val=> d_dropdownValue = val'
                        />
                    </component-details>
                </form>
            </div>
           </div>
</template>

<script>
    import componentDetails from "@/Views/componentDetails";
    import dropdownList from "@/components/FormElements/dropdownList";
    

    // import { store } from '@/store/store'

    export default {
        name: "navDropdownList",

        // store,

        components: {

            componentDetails,
            dropdownList
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
                       const label= "Warehouse"

            const name= "dropdownField"

            const dropdownValue= ''
                       const options= this.$store.state.warehouse

            const size= 0

            const d_booleanTrue= true

            const inputIcon= 'fas fa-warehouse'

            const alerts= this.alerts
                       return {

                d_label: d_label,

                d_name: d_name,

                d_dropdownValue: d_dropdownValue,

                d_options: d_options,

                d_size: d_size,

                d_booleanTrue: d_booleanTrue,

                d_inputIcon: d_inputIcon,

                d_alerts: d_alerts,

                danger: null,

                warning: null,

                d_dropdownList: {

                    title: 'Dropdown Input Field',

                    compName: 'dropdown-list',

                    import: 'import dropdownList from "@/components/FormElements/dropdownList"',
                                       description: "<p>The &lt;dropdown-list&gt; element is used to create a drop-down list.</p>\
                    <p>The &lt;option&gt;</a> tags inside the &lt;select&gt; element define the available options in the list.</p>",

                    attributes:[
                        {
                            type: "label",
                            value: d_label,
                            description: this.$store.state.navText.label,
                            text: this.$store.state.navText.labelText,
                        },
                        {
                            type: "name",
                            value: 'd_name',
                            description: this.$store.state.navText.name,
                            text: this.$store.state.navText.nameText,
                        },
                        {
                            type: "v-model",
                            value: 'd_dropdownValue',
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
                            type: "size",
                            value: d_size,
                            description: this.$store.state.navText.size,
                            text: this.$store.state.navText.sizeText
                        },
                        {
                            type: "multiple",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.multiple,
                            text: this.$store.state.navText.multipleText,
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
                }, //dropdownList
            } //return
        }, //data
    } //default
</script>