<template>
    <div 
        class= 'multiToggle'
        :class= '{inline: inline}'
    >
        <label 
            v-if= 'label'
            :class= '{maskField: mask}'
        >
            {{label}}
        </label>
        <div 
            class= "checkbox-toggle" 
            :class= '{
                        warningContainer: d_warning,
                        errorContainer: d_danger,
                        iconPadding: inputIcon,
                        maskField: mask 
                    }'
            role= "checkbox" 
            tabindex= "0" 
            :aria-checked= "d_toggled"
            @keydown= "toggle" 
            @click.prevent= "toggle"
        >
            <template v-if= '!mask'>
                <div 
                    class= "checkbox-slide" 
                    :class= "classes"
                >
                    <div 
                        class= "checkbox-switch" 
                        :class= "classes"
                    />
                </div>
                <div
                    v-show= "showLabels"
                    class= "checkbox-label"
                    v-html= "labelToggle"
                />
            </template>
        </div>
    </div>
</template>

<script>

    export default {

        name: 'multiToggle',

        data () {
            return {
                
                //stores toggle state
                d_toggled: null,
            } //return
        }, //data
        
        props: {
            
            //sets heading/Label for multitoggle 
            label: {
                required: false,
                type: String,
                default: null
            },

            //sets name attribute for multitoggle  (required field in case of forms)
            name: {
                required: false,
                type: String,
                default: 'textInput'
            },

            //users can pass preset values for multitoggle 
            value: {
                required: false,
                type: [Boolean, String],
                default: false
            },

            //toggles label for multitoggle 
            showLabels: {
                required: false,
                type: Boolean,
                default: false
            },

            //sets label text for checked state for multitoggle 
            labelChecked: {
                required: true,
                type: String,
                default: ""
            },

            //sets label text for unchecked state for multitoggle 
            labelUnchecked: {
                required: true,
                type: String,
                default: ""
            },

            //sets the manual alerts
            alertMessage: {
                required: false,
                type: Object,
            },

            //sets the disabled attribute for multitoggle 
            disabled: {
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

        computed: {

            //triggers and returns class values depending on the toggle state
            classes: function () {
                return {
                    checked: this.d_toggled,
                    unchecked: !this.d_toggled,
                    disabled: this.disabled
                }
            }, //classes

            //triggers and returns label title depending on the toggle state
            labelToggle: function () {
                return this.d_toggled && this.showLabels
                    ? this.labelChecked
                    : this.labelUnchecked;
            }, //labelToggle
        }, //computed

        methods: {

            //toggle state unless toggle is disabled
            toggle: function (e) {
                if (this.disabled && e.keyCode === 9) { 
                    // not if disabled or tab is pressed
                    return
                }
                this.d_toggled = !this.d_toggled;
                this.$emit("input", !this.d_toggled);
            }, //toggle
        }, //methods
        
        created() {

            //store values passed as props into d_toggled for future manipulation 
            if (this.value) {
                this.d_toggled= this.value
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
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "../../Less/customVariables.less";

    @round: 16px;

    .multiToggle {
        width: fit-content;        

        .checkbox-toggle {
            display: flex;
            flex-direction: row;
            align-items: center;

            &:focus {
                outline: none;
            }

            .checkbox-slide {
                display: block;
                width: 64px;
                height: 32px;
                border-radius: @round;
                cursor: pointer;
                border: 1px solid ~"darken(#e0e0e0, 10%)";;

                &.checked {
                    transition: all 350ms;
                    background: #ffffff;
                    border-color: @accentColor;
                }
                
                &.unchecked {
                    transition: all 350ms;
                    background: #e0e0e0;
                }

                &.disabled {
                    cursor: not-allowed;
                    background: #e0e0e0;
                }

                .checkbox-switch {
                    display: block;
                    padding: 0;
                    margin: 0;
                    width: 32px;
                    height: 32px;
                    border-radius: @round;
                    background: #8da3ba;
                    cursor: pointer;

                    &.checked {
                        transform: translateX(32px);
                        transition: all 350ms;
                        background: @accentColor;
                    }

                    &.unchecked {
                        transition: all 350ms;
                    }

                    &.disabled {
                        cursor: not-allowed;
                    }
                }
            }

            .checkbox-label {
                width: 32px;
                margin-left: 8px;
                font-weight: bold;
            }
        }
    }
</style>
