<template>
    <div 
        class= 'searchableDropdownList'
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
                :list= 'name'
                v-model= 'd_selectedOption'
                :placeholder= 'placeholder'
                :multiple= 'multiple'
                :required= 'required'
                :disabled= 'disabled'
                :autofocus= 'autofocus'
                :maxlength= 'maxlength'
                @blur= 'validate'
            >
            <datalist 
                :id= 'name'
            >
                <option 
                    v-for= '(option, index) in options'
                    :key= 'index'
                    :value= 'option'
                >
                    {{option}}
                </option><!-- option -->
            </datalist><!--datalist-->
        </div>
        <input-response
            :warning= 'd_warning'
            :error= 'd_danger'
        />
    </div>
</template>

<script>

    import inputResponse from '@/components/Alerts/inputResponse';

    export default {

        name: 'searchableDropdownList',

        components: {

            inputResponse,
        }, //components

        data () {
            return {

                //stores errors thrown by the input fields 
                d_danger: null,

                //stores errors thrown by the input fields 
                d_warning: null,

                //stores dropdown values
                d_selectedOption: null,
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
                default: 'dropdownInput'
            },

            //users can pass preset values for the input field 
            value: {
                required: false,
                type: [String, Number, Array],
                default: function () {
                    if (this.multiple) {
                        return []
                    }
                    return null;
                }
            },

            //users can pass preset values for the input field 
            strict: {
                required: false,
                type: Boolean,
                default: true
            },

            //Array of options for user to select .
            options: {
                required: true,
                type: Array
            },

            //sets the format/pattern for acceptable values for the input field
            pattern: {
                required: false,
                type: [RegExp, String],
                default: function () {
                    return new RegExp(/([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*/)
                }
            },

            //sets the placeholder attribute for the input field
            placeholder: {
                required: false,
                type: String,
                default: function () {
                    if (this.strict) {
                        return "Select an option..."
                    }
                    return 'Enter value or Select an option...'
                }
            },

            //sets the maxlength attribute for the input field
            maxlength: {
                required: false,
                type: Number,
                default: 50
            },

            //sets the multiple attribute for the input field to accept multiple values
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

        methods: {

            //validate the textbox input and set alert messages if required.
            //it also emits/send the current textbox value to  parent component as v-model attribute value
            validate: function () {
                //initialize warning and error messages to null to accomodate change in alert messages
                this.d_danger= null
                this.d_warning= null
                //loads current value stored from d_selectedOption(data) into val(temp) variable val for readability of code
                var val= this.d_selectedOption

                //if value for val(temp) exists check for warning triggers
                if (val) {
                    //if an acceptable value exists,emit/send new values to parent component v-model attribute
                    //if not then trigger warning and set warning message
                    if (this.options.includes(val) || !this.strict){
                        this.$emit("input", val)
                    }
                    //if options do not include the optio na dn user customized input is not acceptable then trigger alert and set warning message
                    else if (this.strict) {
                        this.d_warning= 'Invalid Input. Please select an option from the options below.'
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

            //store value of prop in temp variable for code readability
            var val= this.value
            var options= this.options
            var strict= this.strict
            var multiple= this.multiple

            //if val is a singlevalue, check if it is na acceptable input
            if (!multiple && (typeof val== 'string' || typeof val== 'number')) {

                //if value is an acceptable input store it in d_selectedOption for future manipulation
                if (options && options.includes(val) || !strict) {
                    this.d_selectedOption= val
                }
                //if not trigger alert and set error message
                else if (this.strict) {
                    this.error= 'Invalid Input: The preset value '+val+' is not included in the options for the dropdown.'
                }        
            }
            //if val is an array check if each value towards acceptable values as input
            else if (multiple && typeof val== 'array') {
                var tempVal= []
                var alertVal= []

                //loop through each value to check for validity of input value
                for (var v in val) {

                    //if value is an acceptable input store it intempVal for future manipulation
                    if (options && options.includes(v) || !strict) {
                        tempVal.push(v)
                    }
                    //if not save it in a temp errorval variable for further use to trigger alert
                    else if (this.strict) {
                        alertVal.push(V)
                    }
                }

                //save acceptable values back to d_selectedOption for future manipulation
                this.d_selectedOption= tempVal
                
                //if errorVal exists trigger an alert and set warning message
                if (alertVal) {
                    this.d_danger= 'Invalid Input: The preset value(s) '+alertVal+' is/are not included in the options for the dropdown.'
                }
            }
            else if (val) {
                this.d_danger= 'Invalid Input: The preset value(s) '+val+' are not valid'
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
                this.$emit('alerts', 'warning', newValue)
            },

            //send error messages back to parent component
            d_danger: function (newValue) {
                this.$emit('alerts', 'error', newValue)
            },
        }, //watch
    } //default
</script>

<style lang= "less" scoped>
    
    @import (reference) "./../../Less/customMixins.less";

    .searchableDropdownList {
        min-width: 160px;

        .inputcss();
    }
</style>
