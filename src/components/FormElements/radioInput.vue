<template>
    <div 
        class= 'radioInput'
        :class= '{inline: inline}'
    >
        <label 
            v-if= 'label'
            :class= '{maskField: mask}'
        >
            {{label}}
            <abbr v-if= 'required' title= 'Required Field'>*</abbr>
            <span v-else> - Optional field<abbr >*</abbr></span>
            <input 
                :name= 'name' 
                type= 'hidden' 
                :value= 'd_checkedValue'
                :required= 'required'
            >
        <vue-button 
            v-if= 'd_checkedValue && !required'
            id= 'clearSelection'
            :type= 'd_type'
            :tag= "d_tag"
            :text= "d_text"
            :icon= "d_icon"
            :category= 'd_category[5]'
            :ctx= 'd_ctx'
        />
        </label>
        <div
            :class= '{
                        box: box,
                        warningContainer: d_warning,
                        errorContainer: d_danger,
                        maskField: mask 
                    }'
        >
            <template v-if= '!mask'>
                <label 
                    v-for= '(option, index) in options'
                    :key= 'index'
                    :class= '{
                                errorLabel: d_danger,
                                checked: option==value,
                            }'
                    :style= '{
                                "color: #aaaaaa; cursor: not-allowed;": disabled,
                            }'
                >
                    <input
                        type= 'radio'
                        :name= 'option'
                        :value= 'option'
                        :disabled= 'disabled'
                        v-model= 'd_checkedValue' 
                        :autofocus= 'index== 0? autofocus: false'
                        @input= 'checked(option)'
                    />
                    {{option}}
                </label>
            </template>
        </div>
        <input-response
            :error= 'd_danger'
        />
    </div>
</template>

<script>

    import inputResponse from '@/components/Alerts/inputResponse';
    import vueButton from '@/components/UIComponents/Buttons'

    export default {

        name: 'radioInput',

        data () {

            var d_checkedValue= null

            var d_type= 'button'

            var d_tag= 'clearRadioSelection'

            var d_text= 'Clear'

            var d_icon= 'fas fa-times'

            var d_category= this.$store.state.category

            var d_booleanTrue= true

            var d_ctx= this.clearSelection

            var d_danger= null
                        
            var d_warning= null
            
            var d_success= null
            
            var d_info= null

            return {

                d_checkedValue: d_checkedValue,

                d_type: d_type,

                d_tag: d_tag,

                d_text: d_text,

                d_icon: d_icon,

                d_category: d_category,

                d_booleanTrue: d_booleanTrue,

                d_ctx: d_ctx,

                cValue: null,

                //stores errors thrown by the input fields
                d_danger: d_danger,
                            
                d_warning: d_warning,
                
                d_success: d_success,
                
                d_info: d_info
            } //return
        }, //data

        methods: {

            clearSelection: function () {
                const table = document.getElementsByClassName('checked');

                    table.item(0).childNodes[0].checked= false
                    this.d_checkedValue= null
                    this.$emit("selected", this.checkedValue)
                // let status = cell.getAttribute('data-status');
                // if (status === 'open') {
                //     // Grab the data 
                // }
                // var parent= document.getElementById('clearSelection').parentNode
                // console.log('hi: ', parent.getElementsByTagName('input').checked)
                // parent.getElementByTagName("input").checked=  false;
            }, //clearSelection

            checked: function (checkedValue) {
                // console.log('checked: ', checkedValue)
                this.$emit("selected", checkedValue)
                const table = document.getElementsByClassName('checked');
                table.item(0).childNodes[0].checked= true
            }, //checked
        }, //methods

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
                default: 'radioInput'
            },

            //users can pass preset values for the input field 
            value: {
                required: false,
                type: [String, Array, Number, Boolean],
                default: function () {
                    if (options) {
                        return null
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

            //checks if label options should appear on the same line or as buttons
            box: {
                required: false,
                type: Boolean,
                default: false
            },
        }, //props

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

            value: function (newValue, oldValue) {
                if (newValue!= oldValue) {
                    this.cValue= newValue
                }
            }, //value
        }, //watch

        components: {

            inputResponse,
            vueButton,
        }, //components
    } //default
</script>

<style lang= "less" scoped>
    
    @import (reference) "./../../Less/customMixins.less";
    @import (reference) "./../../Less/customVariables.less";

    .radioInput {

        .checkboxCss();

        .box {
            padding: 4px 8px;
            margin-left: 8px;
            width: fit-content;
            background-color: @backgroundColor;
            border-radius: @borderRadius;

            &.checked {
                background-color: @secondaryColor;
                color: @backgroundColor;

                & > label {
                    font-weight: bold;
                }
            }

            & > label {
                
                & > input {
                    display: none;
                }
            }
        }
    }
</style>
