<template>
    <div 
        class= 'checkboxInput'
        :class= '{inline: inline}'
    >
        <label v-if= 'label || !options'>
            <input
                v-if= '!options && !mask'
                type= 'checkbox'
                v-model= 'd_checkboxValue'
                :name= 'name'
                :disabled= 'disabled'
                :autofocus= 'autofocus'
                @input= '$emit("value", $event.target.checked)'
            />
            {{label}}
            <abbr v-if= 'options && required' title= 'Required field'>*</abbr>
            <span v-else-if= 'options'> - Optional field<abbr >*</abbr></span>
        </label>
        <template v-if= 'options'>
            <div>
                <template v-if= '!mask'>
                    <label
                        v-for= '(option, index) in options'
                        :key= 'index'
                        :class= '{
                                    errorLabel: d_danger
                                }'
                        :style= '{
                                    "color: #aaaaaa; cursor: not-allowed;": disabled,
                                }'
                    >
                        <input
                            type= 'checkbox'
                            :name= 'name'
                            :value= 'option'
                            :disabled= 'disabled'
                            :autofocus= 'index== 0? autofocus: false'
                            :checked= 'isChecked (option)'
                            @input= "storeValues (option)"
                        />
                        {{option}}
                    </label>
                </template>
            </div>
        </template>
        <input-response
            :error= 'd_danger'
            :warning= 'd_warning'
        />
    </div>
</template>

<script>

    import inputResponse from '@/components/Alerts/inputResponse'; 

    export default {

        name: 'checkboxInput',

        data () {
            return {

                //stores errors thrown by the input fields 
                d_danger: null,

                //stores errors thrown by the input fields 
                d_warning: null,

                //stores checkbox values
                d_checkboxValue: null,
            } //return
        }, //data

        props: {

            //sets heading for the checkboxes category
            //in case of single/no-option checkbox, label is used as checkbox text
            label: {
                required: false,
                type: String,
                default: null
            },

            //sets the name attribute for the input field (required field in case of forms)
            name: {
                required: false,
                type: String,
                default: 'checkboxInput'
            },

            //users can pass preset values for the input field 
            value: {
                required: false,
                type: [Array, Boolean],
                default: function () {
                    if (options) {
                        return []
                    }
                    return false;
                }
            },

            //Array of options/labels in case of multiple checkboxes.
            options: {
                required: false,
                type: Array,
                default: null
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
        }, //props

        components: {

            inputResponse,
        }, //components

        methods: {

            //this method stores the values of checked boxed and sends them back to its parent component as v-model attribute value
            storeValues: function (value) {

                //initialize warning and error messages to null to accomodate change in alert messages
                this.d_danger= null
                this.d_warning= null
                //temporarily stores values passed to the function
                var checkboxValue= []                              //stores the index location within the above 'checkboxValue[]' of the value passed down to the function.
                var index= 0;

                //check if the a value is passed by the function
                if (value) {

                    //if checkboxValue is empty, push value in checkboxValue
                    if (!this.d_checkboxValue) {
                        console.log(this.checkboxValue, checkboxValue, typeof checkboxValue)
                        checkboxValue.push(value)
                    }
                    //if checkboxValue is not empty, check if value already exists in checkbox
                    else {
                        //loads values previously stored from d_checkboxValue(data) into checkboxValue(temp) variable val for readability of code
                        checkboxValue= this.d_checkboxValue
                        //get index location of value within checkboxValue
                        // console.log(typeof value, this.d_checkboxValue, checkboxValue, value)
                        index= checkboxValue.indexOf(value);
                        // console.log(index)
                                               //if value already exist in checkboxValue, remove value from checkboxValue
                        if (index!=-1) {
                            checkboxValue.splice(index, 1)
                        }
                        //add value to checkboxValue
                        else {
                            checkboxValue.push(value)
                        }
                    }

                    //store mutated checkboxValue(temp) values back into  original d_checkboxValue(data) 
                    this.d_checkboxValue= checkboxValue

                    //emit or send new values to parent component v-model attribute
                    this.$emit("value", this.d_checkboxValue)

                    //check to trigger error/warning conditions and set d_danger/d_warning messages accordingly
                    if (checkboxValue.length<=0) {
                        if (this.required) {
                            this.d_danger= 'Required Field.'
                        }
                        else {
                            this.d_warning= 'No checkbox selected.'
                        }
                    }
                }
            }, //storeValues

            isChecked: function (value) {

                if (typeof this.d_checkboxValue== 'array' && this.d_checkboxValue.includes(value)) {
                    return true
                }
                else if (typeof this.d_checkboxValue== 'boolean') {
                    return true
                }
                return false
            } //isChecked
        }, //methods

        created() {

            //store value of prop in temp variable for code readability
            var val= this.value
            var options= this.options

            if (val) {

                //if val is a singlevalue (boolean), store it in d_checkboxValue for future manipulation
                if (typeof val== 'boolean') {
                    this.d_checkboxValue= val                       }
                //if val is an array check if each value towards acceptable values as input
                else if (typeof val== 'array') {
                    var tempVal= []
                    var alertVal= []

                    //loop through each value to check for validity of input value
                    for (var v in val) {

                        //if value is an acceptable input store it intempVal for future manipulation
                        if (options.includes(v)) {
                            tempVal.push(v)
                            // console.log('v-', v)
                        }
                        //if not save it in a temp errorval variable for further use to trigger alert
                        else {
                            // console.log('!v-', v)
                            alertVal.push(V)
                        }
                    }

                    //save acceptable values back to d_checkboxValue for future manipulation
                    this.d_checkboxValue= tempVal
                                       //if errorVal exists trigger an alert and set warning message
                    if (alertVal) {
                        this.d_danger= 'Invalid Input: The preset value(s) '+alertVal+' is/are not included in the checkbox options.'
                    }
                }
                else {
                    this.d_danger= 'Invalid Input: The preset value(s) '+val+' are not valid'
                }
            }
        }, //created

        beforeMount() {

            var alertMessage= this.alertMessage

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

            //send error messages back to parent component
            d_danger: function (newValue) {
                this.$emit('notify', 'error', newValue)
            },

            //send warning messages back to parent component
            d_warning: function (newValue) {
                this.$emit('notify', 'warning', newValue)
            },
        }, //watch
    } //default
</script>

<style lang= "less" scoped>
    
    @import (reference) "./../../Less/customMixins.less";

    .checkboxInput {

        .checkboxCss();
    }
</style>
