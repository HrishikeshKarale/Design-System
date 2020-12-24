<template>
    <div 
        class= 'numberInput'
        :class= '{inline: inline}'
    >
        <label 
            v-if= 'label'
            :class= '{maskField: mask}'
        >
            {{label}}
            <abbr v-if= 'required' title= 'Required Field'>*</abbr>
            <span v-else> - Optional field<abbr >*</abbr></span>
        </label>
        <div
            :class= '{
                        warningContainer: warning,
                        errorContainer: danger,
                        iconPadding: inputIcon,
                        maskField: mask 
                    }'
        >
            <span
                v-if= 'inputIcon'
                :class= 'inputIcon'
            />
            <input
                v-if= '!mask'
                type= 'number'
                :name= 'name'
                v-model= 'd_numberValue'
                :placeholder= 'placeholder'
                :pattern= 'pattern'
                :autofocus= 'autofocus'
                :disabled= 'disabled'
                :readonly= 'readonly'
                :required= 'required'
                :min=  'min'
                :max=  'max'
                @input = 'validate'
            />
        </div>
        <input-response
            :warning= 'warning'
            :error= 'danger'
        />
    </div>
</template>

<script>

    import inputResponse from '@/components/Alerts/inputResponse';  

    export default {

        name: 'numberInput',

        data () {
            return {

                //stores errors thrown by the input fields 
                danger: null,

                //stores errors thrown by the input fields 
                warning: null,

                //stores textbox password values
                d_numberValue: null
            } //return
        }, //data

        props: {
                       //sets heading/Label for the input field
            label: {
                required: false,
                type: String,
                default: null
            },

            //sets name attribute for the input field (required field in case of forms)
            name: {
                required: false,
                type: String,
                default: 'numberInput'
            },

            //users can pass preset values for the input field 
            value: {
                required: false,
                type: [Number, String],
                default: 0
            },

            //sets the format/pattern for acceptable values for the input field
            pattern: {
                required: false,
                type: [RegExp, String],
                default: function () {
                    return new RegExp(/^(0|[1-9][0-9]*)$/)
                }
            },

            //sets the placeholder attribute for the input field
            placeholder: {
                required: false,
                type: String,
                default: "0-9999"
            },

            //sets the min attribute for the input field
            min: {
                required: false,
                type: Number,
                default: 0
            },

            //sets the max attribute for the input field
            max: {
                required: false,
                type: Number,
                default: 9999
            },

            //sets the manual alerts
            alertMessage: {
                required: false,
                type: Object,
            },

            //sets the required attribute for the input field
            required: {
                required: false,
                type: Boolean,
                default: false
            },

            //sets the disabled attribute for the input field
            disabled: {
                required: false,
                type: Boolean,
                default: false
            },

            //sets the autofocus attribute for the input field
            autofocus: {
                required: false,
                type: Boolean,
                default: false
            },

            //sets the readonly attribute for the input field
            readonly: {
                required: false,
                type: Boolean,
                default: false
            },

            //checks if label options should appear on the same line or not
            inline: {
                required: false,
                type: Boolean,
                default: false
            },

            //reserves space and created a mask if set to true
            mask: {
                required: false,
                type: Boolean,
                default: false
            },

            //if a valid fontawesome icon class string is passed, it displays it in the input field
            //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
            inputIcon: {
                required: false,
                type: String,
                default: null
            },
        }, //props

        components: {

            inputResponse
        }, //components

        methods: {

            //validate the textbox input and set alert messages if required.
            //it also emits/send the current textbox value to  parent component as v-model attribute value
            validate: function () {
                //initialize warning and error messages to null to accomodate change in alert messages
                this.danger= null
                this.warning= null
                //loads current value stored from d_numberValue(data) into val(temp) variable val for readability of code
                var val= this.d_numberValue
                if (typeof val== 'string') {
                    val= Number(val)
                }

                //store min and max in variables for code readability
                var min= this.min
                if (typeof min== 'string') {
                    min= Number(min)
                }

                var max= this.max
                if (typeof max== 'string') {
                    max= Number(max)
                }
                               var pattern= new RegExp (this.pattern)
                //if value for val(temp) exists check for warning triggers
                if (val || val==0) {
                   if (pattern && !(val.toString()).match(pattern))
                    {
                        this.warning= 'Wrong format: Please follow the pattern '+ pattern;
                    }
                    else if (min && val<min)
                    {
                        this.warning= 'Invalid Value: Value is less than allowed minimum of '+ min
                    }
                    else if (max && val>max)
                    {
                        this.warning= 'Invalid Value: Value is greater than allowed maximum of '+ max
                    }
                    else {
                        //emit/send new values to parent component v-model attribute
                        this.$emit('input', val)
                    }
                }
                //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
                else {
                    if (this.required) {
                        this.danger= 'Required field.';
                    }
                }
            }, //validate
        }, //methods

        created () {
            //store values passed as props into d_numberValue for future manipulation  
            if (this.value) {
                this.d_numberValue= this.value
            }                   }, //created

        beforeMount() {
            var alertMessage= this.alertMessage
                       if (this.value)
            {
                this.validate()
            }

            if (alertMessage) {
                if (alertMessage['error']) {
                    this.danger= alertMessage['error']
                }
                else if (alertMessage['warning']) {
                    this.warning= alertMessage['warning']
                }
                else if (alertMessage['success']) {
                    this.success= alertMessage['success']
                }
                else if (alertMessage['info']) {
                    this.info= alertMessage['info']
                }
            }
        }, //beforeMount

        watch: {

            //send warning messages back to parent component
            warning: function (newValue) {
                this.$emit('notify', 'warning', newValue)
            },

            //send error messages back to parent component
            danger: function (newValue) {
                this.$emit('notify', 'error', newValue)
            },
        }, //watch
    } //default
</script>

<style lang= "less" scoped>
    
    @import (reference) "./../../Less/customMixins.less";

    .numberInput {
        min-width: 120px !important;
        max-width: 120px !important;

        .inputcss();
    }
</style>
