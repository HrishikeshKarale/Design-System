<template>
    <div class= "navSearchableDropdownList">
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_searchDropboxValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_searchDropboxValue}}
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
                <form>                           <component-details
                        :compData= 'd_searchableDropdownList'
                    >
                        <searchable-dropdown-list 
                            :label= "d_label"
                            :name= "d_name"
                            v-model= 'd_searchDropboxValue'
                            :options= 'd_options'
                            :pattern= 'd_pattern'
                            :placeholder= 'd_placeholder'
                            :strict= 'd_booleanTrue'
                            :maxlength= 'd_maxlength'
                            :multiple= '!d_booleanTrue'
                            :required= 'd_booleanTrue'
                            :disabled= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :inputIcon= 'd_inputIcon'
                            :inline= '!d_booleanTrue'
                            :mask= '!d_booleanTrue'
                            @alerts= 'd_alerts'
                        />
                    </component-details>
                </form>
            </div>
           </div>
</template>

<script>

    import componentDetails from "@/Views/componentDetails";
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList";
    

    // import { store } from '@/store/store'

    export default {
        name: "navSearchableDropdownList",

        // store,

        components: {

            componentDetails,
            searchableDropdownList
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

            var d_name= "searchableDropdownField"

            var d_searchDropboxValue= ''
                       var d_options= this.$store.state.warehouse

            var d_pattern= '([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*'

            var d_placeholder= 'Enter a value/Select an option'

            var d_maxlength= 20

            var d_booleanTrue= true

            var d_inputIcon= 'fas fa-warehouse'

            var d_alerts= this.alerts
                       return {

                d_label: d_label,

                d_name: d_name,

                d_searchDropboxValue: d_searchDropboxValue,

                d_options: d_options,

                d_pattern: d_pattern,

                d_placeholder: d_placeholder,

                d_maxlength: d_maxlength,

                d_booleanTrue: d_booleanTrue,

                d_inputIcon: d_inputIcon,

                d_alerts: d_alerts,

                d_danger: null,

                d_warning: null,

                d_searchableDropdownList: {

                    title: 'Searchable Dropdown Input Field',

                    compName: 'searchable-dropdown-list',

                    import: 'import searchableDropdownList from "@/components/FormElements/searchableDropdownList"',
                                       description: "<p>The &lt;searchable-dropdown-list&gt; element specifies a list of pre-defined options for an &lt;input&gt; element.</p>\
                                    <p>The &lt;searchable-dropdown-list&gt; element is used to provide an 'autocomplete' feature on &lt;input&gt; elements. Users will see a drop-down list of pre-defined options as they input data.</p>\
                                    <p>It uses the &lt;input&gt; element's list attribute to bind it together with a &lt;datalist&gt; element.</p>\
                                    <p>By default the &lt;searchable-dropdown-list&gt; element element works like a searchable dropdown but can be set to allow user generated custom values as inputs as well</p>",

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
                            value: 'd_searchDropboxValue',
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "strict",
                            value: d_booleanTrue,
                            description: this.$store.state.navText.strict,
                            text: this.$store.state.navText.strictText,
                        },
                        {
                            type: "options",
                            value: d_options,
                            description: this.$store.state.navText.options,
                            text: this.$store.state.navText.optionsText,
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
                }, //d_searchableDropdownList
            } //return
        }, //data
    }
</script>