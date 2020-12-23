<template>
    <div 
        class= 'emailInput'
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
                        warningContainer: d_warning,
                        errorContainer: d_danger,
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
                type= 'email'
                :name= 'name'
                v-model= 'd_emailValue'
                :placeholder= 'placeholder'
                :maxlength= 'maxlength'
                :pattern= 'pattern'
                :multiple= 'multiple'
                :autofocus= 'autofocus'
                :disabled= 'disabled'
                :readonly= 'readonly'
                :required= 'required'
                @input= 'validate'
            />
        </div>
        <input-response
            :warning= 'd_warning'
            :error= 'd_danger'
            :charLimitReached= 'lengthDelta== 0'
            :maxlength= 'maxlength'
        />
    </div>
</template>

<script>

    import inputResponse from '@/components/Alerts/inputResponse';

    export default {

        name: 'emailInput',

        data() {
            return {

                //stores errors thrown by the input fields 
                d_danger: null,

                //stores errors thrown by the input fields 
                d_warning: null,

                //stores textbox values
                d_emailValue: null,

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
                default: 'emailInput'
            },

            //users can pass preset values for the input field 
            value: {
                required: false,
                type: String,
                default: null
            },

            //sets the format/pattern for acceptable values for the input field
            pattern: {
                required: false,
                type: RegExp,
                default: function () {
                    return new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                }
            },

            //sets the placeholder attribute for the input field
            placeholder: {
                required: false,
                type: String,
                default: "abc@yahoo.com"
            },

            //sets the maxlength attribute for the input field
            maxlength: {
                required: false,
                type: Number,
                default: 50
            },

            //sets the multiple attribute for the input field
            multiple: {
                required: false,
                type: Boolean,
                default: false
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

            inputResponse,
        }, //components

        computed: {

            //returns the difference between maxlength and textboxValue.
            //a negative value indicates that we have exceeded the allowed maximum for the textbox and 
            lengthDelta: function () {
                var val= this.d_emailValue
                var maxLength= this.maxlength

                if (maxLength && val) {
                    return maxLength- val.length
                }
                return null
            }, //lengthDelta
        }, //computed

        methods: {

            //validate the textbox input and set alert messages if required.
            //it also emits/send the current textbox value to  parent component as v-model attribute value
            validate: function () {
                //initialize warning and error messages to null to accomodate change in alert messages
                this.d_danger= null
                this.d_warning= null
                //loads current value stored from data variables into temp variable val for readability of code
                var val= this.d_emailValue
                var maxlength= this.maxLength
                var pattern= new RegExp(this.pattern)

                //if value for val(temp) exists check for warning triggers
                if (val) {
                    //if a patters for acceptable value exists, then trigger warning and set warning message if val (temp) does not follow the patter
                    if (pattern && !val.match(pattern))
                    {
                        this.d_warning= 'Wrong format: Please follow the pattern '+ pattern;
                    }
                    //if a pattern does not exist or value matches the pattern, check if maxlength exists and length of email entered is greater than maxlength 
                    //if true trigger an alert and set warning message
                    else if (maxlength && maxlength< val.length)
                    {
                        this.d_warning= 'Invalid Input: Allowed maxlength for input exceeded by -'+this.lengthDelta+' characters.';
                    }
                    else{
                        //emit/send new values to parent component v-model attribute
                        this.$emit('input', val)
                    }
                }
                //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
                else {
                    if (this.required) {
                        this.d_danger= 'Required field.';
                    }
                }
            }, //validate
        }, //methods

        created() {

            //store values passed as props into d_emailValue for future manipulation 
            //store values passed as props into d_textValue for future manipulation  
            if (this.value)
            {
                this.d_emailValue= this.value
            }
        }, //created

        beforeMount() {

            var alertMessage= this.alertMessage
                       if (this.value)
            {
                this.validate()
            }

            if (alertMessage) {
                if (alertMessage['error']) {
                    this.d_danger= alertMessage['error']
                }
                else if (alertMessage['warning']) {
                    this.d_warning= alertMessage['warning']
                }
                else if (alertMessage['success']) {
                    this.d_success= alertMessage['success']
                }
                else if (alertMessage['info']) {
                    this.d_info= alertMessage['info']
                }
            }
        }, //beforeMount

        watch: {

            //send warning messages back to parent component
            d_warning: function (newValue) {
                this.$emit('notify', 'warning', newValue)
            },

            //send error messages back to parent component
            d_danger: function (newValue) {
                this.$emit('notify', 'error', newValue)
            },
        }, //watch
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "./../../Less/customMixins.less";

    .emailInput {
        min-width: 160px;
               .inputcss();
    }
</style>
