//https://markus.oberlehner.net/blog/replicating-the-twitter-tweet-box-with-vue/
<template>
    <div 
        class= 'passwordInput'
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
                :type= 'd_type'
                :name= 'name'
                v-model= 'd_passwordValue'
                :placeholder= 'placeholder'
                :maxlength= 'maxlength'
                :pattern= 'pattern'
                :autofocus= 'autofocus'
                :disabled= 'disabled'
                :readonly= 'readonly'
                :required= 'required'
                @input = 'validate'
            />
            <span
                class= 'fas fa-eye'
                @click= 'toggleType'
            />
        </div>
        <input-response
            :warning= 'warning'
            :error= 'danger'
            :charLimitReached= 'lengthDelta== 0'
            :maxlength= 'maxlength'
        />
    </div>
</template>

<script>

    import inputResponse from '@/components/Alerts/inputResponse';

    export default {

        name: "passwordInput",

        data() {
            return {

                //stores errors thrown by the input fields 
                danger: null,

                //stores errors thrown by the input fields 
                warning: null,

                //stores textbox password values
                d_passwordValue: null,

                d_type: 'password'
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
                default: 'passwordInput'
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
                type: [RegExp, String],
                default: function () {
                    return new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
                }
            },

            //sets the placeholder attribute for the input field
            placeholder: {
                required: false,
                type: String,
                default: "Enter passsword here..."
            },

            //sets the maxlength attribute for the input field
            maxlength: {
                required: false,
                type: Number,
                default: 50
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

            //if a valid fontawesome icon class string is passed, it displays it in the input field
            //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
            inputIcon: {
                required: false,
                type: String,
                default: null
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
        }, //props

        components: {

            inputResponse
        }, //components

        computed: {

            //returns the difference between maxlength and textboxValue.
            //a negative value indicates that we have exceeded the allowed maximum for the textbox and 
            lengthDelta: function () {
                var val= this.d_passwordValue
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
                this.danger= null
                this.warning= null
                //loads current value stored from data variables into temp variable val for readability of code
                var val= this.d_passwordValue
                var maxlength= this.maxLength
                var pattern= new RegExp(this.pattern)

                //emit/send new values to parent component v-model attribute
                this.$emit('input', val)

                //if value for val(temp) exists check for warning triggers
                if (val) {
                    //if a patters for acceptable value exists, then trigger warning and set warning message if val (temp) does not follow the patter
                    if (pattern && !val.match(pattern))
                    {
                        this.warning= 'Wrong format: Please follow the pattern '+ pattern;
                    }
                    //if a pattern does not exist or value matches the pattern, check if maxlength exists and length of password entered is greater than maxlength 
                    //if true trigger an alert and set warning message
                    else if (maxlength && maxlength< val.length)
                    {
                        this.warning= 'Invalid Input: Allowed maxlength for password exceeded by -'+this.lengthDelta+' characters.';
                    }
                }
                //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
                else {
                    if (this.required) {
                        this.danger= 'Required field.';
                    }
                }
            }, //validate

            toggleType: function () {
                if(this.d_type=='password') {
                    this.d_type= 'text'
                }
                else {
                    this.d_type= 'password'
                }
            }, //toggleType
        }, //methods

        created() {
                     //store values passed as props into d_passwordValue for future manipulation  
            if (this.value) {
                this.d_passwordValue= this.value
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

    .passwordInput {
        min-width: 160px;

        .inputcss();
    }
</style>
