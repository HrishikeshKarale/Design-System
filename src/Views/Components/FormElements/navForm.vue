<template>
    <div class= "navForm">
            <component-details :compData= 'd_form' >
                <vue-form
                    :ctx="d_ctx"
                    :form="d_formName"
                    :alert="alertObject"
                    :validate="d_validate"
                    :autocomplete="d_autocomplete"
                    @notify="alerts"
                >
                    <h3>Order Processing Details</h3>
                    <text-input
                        label= "Customer"
                        tag= "customerField"
                        :value= 'd_customerVal'
                        placeholder= "Enter a value/Select an option"
                        :maxlength= 'd_maxlength'
                        :required= 'd_booleanTrue'
                        icon= 'fas fa-user'
                        @notify= 'alerts'
                        @value= "val => d_customerVal = val"
                    />
                    <searchable-dropdown-list
                        label= "Cost Center"
                        tag= "costCenterField"
                        :value= 'd_costCenterVal'
                        :options= 'warehouse'
                        :strict= 'd_booleanTrue'
                        :maxlength= 'd_maxlength'
                        icon= 'fas fa-closed-captioning'
                        @notify= 'alerts'
                        @value= "val => d_costCenterVal = val"
                    />
                    <text-input
                        label= "Order Name"
                        tag= "orderNameField"
                        :value= 'd_orderNameVal'
                        placeholder= "Enter a value/Select an option"
                        :maxlength= 'd_maxlength'
                        :required= 'd_booleanTrue'
                        icon= 'fas fa-file-signature'
                        @notify= 'alerts'
                        @value= "val => d_orderNameVal = val"
                    />
                    <text-input
                        label= "Recipient"
                        tag= "orderNameField"
                        :value= 'd_recipientVal'
                        placeholder= "Enter a value/Select an option"
                        :maxlength= 'd_maxlength'
                        :required= 'd_booleanTrue'
                        icon= 'fas fa-user'
                        @notify= 'alerts'
                        @value= "val => d_recipientVal = val"
                    />
                    <searchable-dropdown-list
                        label= "Delivery Option"
                        tag= "customerField"
                        :value= 'd_deliveryOptionVal'
                        :options= 'warehouse'
                        :strict= 'd_booleanTrue'
                        :maxlength= 'd_maxlength'
                        icon= 'fas fa-truck'
                        @notify= 'alerts'
                        @value= "val => d_deliveryOptionVal = val"
                    />
                    <checkbox-input
                        label= 'I want to specify a date for shipping'
                        tag= "checkboxField"
                        :value= 'd_shipping'
                        :required= 'd_booleanTrue'
                        @notify= 'alerts'
                        @value= "val => d_shipping = val"
                    />
                    <vue-textarea
                        label= "Add a note for Recipient"
                        tag= "recipientNoteField"
                        :value= "d_recipientNote"
                        placeholder= "Enter a value/Select an option"
                        :required= 'd_booleanTrue'
                        icon= 'fas fa-comment'
                        @notify= 'alerts'
                        @value= "val => d_recipientNote = val"
                    />
                </vue-form>
            </component-details>
           </div>
</template>

<script>
    import { vueForm } from "vue2-component-library"
    import { vueSearchableDropdown as searchableDropdownList  } from "vue2-component-library"
    import componentDetails from '@/Views/componentDetails'
    import { vueText as textInput  } from "vue2-component-library"
    import { vueCheckbox  as checkboxInput } from "vue2-component-library"
    import { vueTextarea } from "vue2-component-library"
    import { alerts } from "@/typeScript/common/alerts";

    import { mapState } from 'vuex';

    export default {
        name: 'uiComponents',

        mixins: [ alerts ],

        mapState,

        data () {
            const d_maxlength= 20;
            const d_booleanTrue= true;
            const d_validate= d_booleanTrue;
            const d_autocomplete= d_booleanTrue;
            const d_shipping= false;
            const d_recipientNote= null;
            const d_customerVal= null;
            const d_costCenterVal= null;
            const d_deliveryOptionVal= null;
            const d_recipientVal= null;
            const d_orderNameVal= null;
            const d_ctx= function(){
                alert("button clicked");
                //your code goes here
            };
            const d_formName="samleNavForm";
            return {
                d_maxlength,
                d_booleanTrue,
                d_validate,
                d_autocomplete,
                d_shipping,
                d_customerVal,
                d_recipientVal,
                d_costCenterVal,
                d_deliveryOptionVal,
                d_orderNameVal,
                d_recipientNote,
                d_ctx,
                d_formName,
            } //return
        }, //data

        computed: {
        ...mapState (['warehouse'] ),
        d_form: function() {
            return {
                title: 'Vue Form',
                compName: 'vue-form',
                import: 'import { vueForm } from "vue2-component-library"',
                description: '<p></p>',
                attributes: [
                    {
                        type: "alert",
                        value: this.alertObject,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                    {
                        type: "ctx",
                        value: this.d_ctx,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                    {
                        type: "form",
                        value: this.d_formName,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                    {
                        type: "validate",
                        value: !this.d_validate,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                    {
                        type: "autocomplete",
                        value: this.d_autocomplete,
                        description: '<p>alerts is used to catch any alerts thrown by the form elements inside our form.</p>\
                                        <p>The form elements that are inside the form are passed as slots.</p>',
                        text: 'catches the alerts thrown by the form elements'
                    },
                ] //attributes
            } //form
        }
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
