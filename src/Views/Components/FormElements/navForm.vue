<template>
    <div class= "navForm">
            <component-details
                :compData= 'form'
            >
                <vue-form 
                    :ctx="ctx"
                    :form="formName"
                    :alert="alertObject"
                    :validate="validate"
                    :autocomplete="autocomplete"
                    @notify="alerts"
                >
                    <h3>Order Processing Details</h3>
                    <text-input 
                        label= "Customer"
                        name= "customerField"
                        :value= 'customerVal'
                        placeholder= "Enter a value/Select an option"
                        :maxlength= 'maxlength'
                        :required= 'd_booleanTrue'
                        inputIcon= 'fas fa-user'
                        @notify= 'alerts'
                        @value= "val => customerVal = val"
                    />
                    <searchable-dropdown-list 
                        label= "Cost Center"
                        name= "costCenterField"
                        :value= 'costCenterVal'
                        :options= 'warehouse'
                        :strict= 'd_booleanTrue'
                        :maxlength= 'maxlength'
                        inputIcon= 'fas fa-closed-captioning'
                        @notify= 'alerts'
                        @value= "val => costCenterVal = val"
                    />
                    <text-input 
                        label= "Order Name"
                        name= "orderNameField"
                        :value= 'OrderNameVal'
                        placeholder= "Enter a value/Select an option"
                        :maxlength= 'maxlength'
                        :required= 'd_booleanTrue'
                        inputIcon= 'fas fa-file-signature'
                        @notify= 'alerts'
                        @value= "val => OrderNameVal = val"
                    />
                    <text-input 
                        label= "Recipient"
                        name= "orderNameField"
                        :value= 'recipientVal'
                        placeholder= "Enter a value/Select an option"
                        :maxlength= 'maxlength'
                        :required= 'd_booleanTrue'
                        inputIcon= 'fas fa-user'
                        @notify= 'alerts'
                        @value= "val => recipientVal = val"
                    />
                    <searchable-dropdown-list 
                        label= "Delivery Option"
                        name= "customerField"
                        :value= 'deliveryOptionVal'
                        :options= 'warehouse'
                        :strict= 'd_booleanTrue'
                        :maxlength= 'maxlength'
                        inputIcon= 'fas fa-truck'
                        @notify= 'alerts'
                        @value= "val => deliveryOptionVal = val"
                    />
                    <checkbox-input 
                        label= 'I want to specify a date for shipping'
                        name= "checkboxField"
                        :value= 'shipping'
                        :required= 'd_booleanTrue'
                        @notify= 'alerts'
                        @value= "val => shipping = val"
                    />
                    <vue-textarea 
                        label= "Add a note for Recipient"
                        name= "recipientNoteField"
                        :value= "recipientNote"
                        placeholder= "Enter a value/Select an option"
                        :maxlength= 'TAmaxlength'
                        :required= 'd_booleanTrue'
                        inputIcon= 'fas fa-comment'
                        @notify= 'alerts'
                        @value= "val => recipientNote = val"
                    />
                </vue-form>
            </component-details>
           </div>
</template>

<script>
    import vueForm from '@/components/FormElements/vueForm'
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList"
    import componentDetails from '@/Views/componentDetails'
    import textInput from "@/components/FormElements/textInput";
    import checkboxInput from "@/components/FormElements/checkboxInput";
    import vueTextarea from "@/components/FormElements/vueTextarea";
    import { alerts } from "@/typeScript/common/alerts";
    
    import { mapState } from 'vuex';

    export default {
        name: 'uiComponents',
        
        mixins: [ alerts ],

        mapState,

        data () {
            const maxlength= 20;
            const d_booleanTrue= true;
            const validate= d_booleanTrue;
            const autocomplete= d_booleanTrue;
            const danger= "";
            const warning= null;
            const alertObject= { error: danger, warning: "" };
            const customerVal= null;
            const costCenterVal= null;
            const OrderNameVal= null;
            const recipientVal= null;
            const deliveryOptionVal= null;
            const shipping= false;
            const recipientNote= null;
            const TAmaxlength= null;
            const ctx= ()=>{
                //your code goes here
            };
            const formName="samleNavForm"; 
            const form= {
                title: 'Vue Form',
                compName: 'vue-form',
                import: 'import vueForm from "@/components/FormElements/vueForm"',
                description: '<p></p>',
                attributes: [
                    {
                        type: "alert",
                        value: alertObject,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                    {
                        type: "ctx",
                        value: ctx,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                    {
                        type: "form",
                        value: formName,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                    {
                        type: "validate",
                        value: !validate,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                    {
                        type: "autocomplete",
                        value: autocomplete,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                ] //attributes
            }; //form
            return {
                maxlength: maxlength,
                d_booleanTrue: d_booleanTrue,
                validate,
                autocomplete,
                alertObject,
                danger,
                warning,
                customerVal,
                costCenterVal,
                OrderNameVal,
                recipientVal,
                deliveryOptionVal,
                shipping,
                recipientNote,
                TAmaxlength,
                form,
                ctx,
                formName,
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
            vueTextarea
        } //components
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "../../../Less/customMixins.less";
    @import (reference) "../../../Less/customVariables.less";

    .navForm {

        .two {
            background-color: green;
            width: 100%;
            height: 480px;
        }
    }
</style>
