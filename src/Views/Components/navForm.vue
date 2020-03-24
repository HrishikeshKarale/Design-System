<template>
    <div class= "navForm">
        <content-nav
            :attributes= 'd_form.attributes'
            :title= 'd_form.title'
        >  
            <component-details
                :compData= 'd_form'
            >
                <vue-form :alerts= "{'error': d_danger, 'warning': d_warning}">
                    <h3>Order Processing Details</h3>
                    <text-input 
                        label= "Customer"
                        name= "customerField"
                        v-model= 'd_customerVal'
                        :pattern= 'd_pattern'
                        :placeholder= "d_placeholder"
                        :maxlength= 'd_maxlength'
                        :required= 'd_booleanTrue'
                        :disabled= '!d_booleanTrue'
                        :readonly= '!d_booleanTrue'
                        :autofocus= '!d_booleanTrue'
                        inputIcon= 'fas fa-user'
                        :inline= '!d_booleanTrue'
                        @alerts= 'd_alerts'
                    />
                    <searchable-dropdown-list 
                        label= "Cost Center"
                        name= "costCenterField"
                        v-model= 'd_costCenterVal'
                        :options= 'warehouse'
                        :pattern= 'd_pattern'
                        :placeholder= 'd_placeholder'
                        :strict= 'd_booleanTrue'
                        :maxlength= 'd_maxlength'
                        :multiple= '!d_booleanTrue'
                        :required= 'd_booleanTrue'
                        :disabled= '!d_booleanTrue'
                        :autofocus= '!d_booleanTrue'
                        inputIcon= 'fas fa-closed-captioning'
                        :inline= '!d_booleanTrue'
                        @alerts= 'd_alerts'
                    />
                    <text-input 
                        label= "Order Name"
                        name= "orderNameField"
                        v-model= 'd_OrderNameVal'
                        :pattern= 'd_pattern'
                        :placeholder= "d_placeholder"
                        :maxlength= 'd_maxlength'
                        :required= 'd_booleanTrue'
                        :disabled= '!d_booleanTrue'
                        :readonly= '!d_booleanTrue'
                        :autofocus= '!d_booleanTrue'
                        inputIcon= 'fas fa-file-signature'
                        :inline= '!d_booleanTrue'
                        @alerts= 'd_alerts'
                    />
                    <text-input 
                        label= "Recipient"
                        name= "orderNameField"
                        v-model= 'd_recipientVal'
                        :pattern= 'd_pattern'
                        :placeholder= "d_placeholder"
                        :maxlength= 'd_maxlength'
                        :required= 'd_booleanTrue'
                        :disabled= '!d_booleanTrue'
                        :readonly= '!d_booleanTrue'
                        :autofocus= '!d_booleanTrue'
                        inputIcon= 'fas fa-user'
                        :inline= '!d_booleanTrue'
                        @alerts= 'd_alerts'
                    />
                    <searchable-dropdown-list 
                        label= "Delivery Option"
                        name= "customerField"
                        v-model= 'd_deliveryOptionVal'
                        :options= 'warehouse'
                        :pattern= 'd_pattern'
                        :placeholder= 'd_placeholder'
                        :strict= 'd_booleanTrue'
                        :maxlength= 'd_maxlength'
                        :multiple= '!d_booleanTrue'
                        :required= 'd_booleanTrue'
                        :disabled= '!d_booleanTrue'
                        :autofocus= '!d_booleanTrue'
                        inputIcon= 'fas fa-truck'
                        :inline= '!d_booleanTrue'
                        @alerts= 'd_alerts'
                    />
                    <checkbox-input 
                        label= 'I want to specify a date for shipping'
                        name= "checkboxField"
                        v-model= 'd_shipping'
                        :options= null
                        :required= 'd_booleanTrue'
                        :disabled= '!d_booleanTrue'
                        :autofocus= '!d_booleanTrue'
                        :inline= '!d_booleanTrue'
                        @alerts= 'alerts'
                    />
                    <vue-textarea 
                        label= "Add a note for Recipient"
                        name= "recipientNoteField"
                        v-model= "d_recipientNote"
                        :pattern= 'd_pattern'
                        :placeholder= "d_placeholder"
                        :maxlength= 'd_TAmaxlength'
                        :required= 'd_booleanTrue'
                        :disabled= '!d_booleanTrue'
                        :readonly= '!d_booleanTrue'
                        :autofocus= '!d_booleanTrue'
                        inputIcon= 'fas fa-comment'
                        :inline= '!d_booleanTrue'
                        @alerts= 'd_alerts'
                    />
                </vue-form>
            </component-details>
        </content-nav>
    </div>
</template>

<script>

    import vueForm from '@/components/FormElements/vueForm'
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList"
    import componentDetails from '@/Views/componentDetails'
    import textInput from "@/components/FormElements/textInput";
    import checkboxInput from "@/components/FormElements/checkboxInput";
    import vueTextarea from "@/components/FormElements/vueTextarea";
    import contentNav from '@/Views/components/contentNav';

    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'uiComponents',

        // store,

        mapState,

        data () {
            
            var d_label= "Warehouse"

            var d_name= "searchableDropdownField"

            var d_value= ''

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

                d_value: d_value,

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

                d_customerVal: null,

                d_costCenterVal: null,

                d_OrderNameVal: null,

                d_recipientVal: null,

                d_deliveryOptionVal: null,

                d_shipping: false,

                d_recipientNote: null,

                d_form:{

                    title: 'Vue Form',

                    compName: 'vue-form',

                    import: 'import vueForm from "@/components/FormElements/vueForm"',

                    description: '<p></p>',

                    attributes: [
                        {
                            type: "alerts",
                            value: d_alerts,
                            description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                            <p>The form elements that are inside the form are passed as slots.</p>',
                            text: 'catches the alerts thrown the form elements'
                        },
                    ] //attributes
                }, //wizard
            } //return
        }, //data

        computed: {
            
            ...mapState (['warehouse'] ),
        },

        components: {

            vueForm,
            componentDetails,
            searchableDropdownList,
            textInput,
            checkboxInput,
            vueTextarea,
            contentNav
        }, //components
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "../../Less/customMixins.less";
    @import (reference) "../../Less/customVariables.less";

    .navForm {

        .two {
            background-color: green;
            width: 100%;
            height: 480px;
        }
    }
</style>
