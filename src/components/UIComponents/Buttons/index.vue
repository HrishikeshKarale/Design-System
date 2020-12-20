<template>
    <div class= 'vueButton'
        :class= '(buttonStyle== "fullWidth" || buttonStyle== "border-fwidth")? "fullWidth": null'
    >
        <button 
            :type='buttonType' 
            :class= 'buttonClass'
            :name= 'buttonName'
            :autofocus= 'autofocus'
            :disabled= 'disabled'
            form= 'formID'
            @click.stop= "onClickAction"
        >
            <span 
                v-if= 'buttonIcon'
                :class= "buttonIcon"
            />
            <template 
                v-if= 'buttonStyle!= "icon" && buttonStyle!= "icon-sm" && buttonStyle!= "icon-lg"'
            >
                {{buttonText}}
            </template>
        </button>
    </div><!--div-->
</template>

<script>

    export default {
        name: 'vueButton',

        props: {

            buttonType: {
                required: false,
                type: String,
                default: 'button',
                validator: function (value) {
                    return ['button', 'submit', 'reset', null ].indexOf(value) !== -1
                }
            },
            
            buttonName: {
                required: false,
                type: String,
                default: null
            },

            buttonIcon: {
                required: function () {
                    if (this.buttonStyle== 'icon') {
                        return true
                    }
                    return false
                },
                type: String,
            },

            buttonText: {
                required: false,
                type: String,
                default: null
            },

            buttonStyle: {
                required: false,
                type: String,
                default: 'standard',
                validator: function (value) {
                    return ['standard', 'large', 'small', 'fullWidth', 'border', 'border-sm', 'border-lg','border-fwidth', 'text', 'text-sm', 'text-lg', 'icon', 'icon-sm', 'icon-lg', null ].indexOf(value) !== -1
                }
            },

            disabled: {
                required: false,
                type: Boolean,
                default: false
            },

            autofocus: {
                required: false,
                type: Boolean,
                default: false
            },

            buttonClass: {
                required: false,
                type: String,
                default: function () {
                    var tempClass= 'btn';

                    switch (this.buttonStyle) {
                        case 'standard': tempClass+= ' btn-primary';
                            break;
                        case 'icon': tempClass+= ' btn-icon';
                            break;
                        case 'icon-sm': tempClass+= ' btn-icon btn-sm';
                            break;
                        case 'icon-lg': tempClass+= ' btn-icon btn-lg';
                            break;
                        case 'text': tempClass+= ' btn-link btn-text';
                            break;
                        case 'text-sm': tempClass+= ' btn-text btn-sm';
                            break;
                        case 'text-lg': tempClass+= ' btn-text btn-lg';
                            break;
                        case 'small': tempClass+= ' btn-primary btn-sm';
                            break;
                        case 'large': tempClass+= ' btn-primary btn-lg';
                            break;
                        case 'fullWidth': tempClass+= ' btn-fullWidth btn-block';
                            break;
                        case 'border': tempClass+= ' btn-border';
                            break;
                        case 'border-sm': tempClass+= ' btn-border btn-sm';
                            break;
                        case 'border-lg': tempClass+= ' btn-border btn-lg';
                            break;
                        case 'border-fwidth': tempClass+= ' btn-border btn-fullWidth btn-block';
                            break;
                        default: tempClass+= ' btn-primary';
                    }
                    return tempClass
                }
            },

            formID: {
                required: false,
                type: String,
                default: null
            },

            onClickAction: {
                required: true,
                type: Function,
                default: function () {
                    alert("button undefined: Please send a function to execute when the button is clicked")
                }
            }
        }, //props
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "../../../Less/customVariables.less";
    @import (reference) "../../../Less/customMixins.less";

    @color: @secondaryColor;// #1B746D;

    .vueButton {
        display: inline-flex;
        
        & > button {
            letter-spacing: 2px;
            font-weight: bold;
            
            .boxShadow(@one);

            &:hover {
                .boxShadow(@five);
            }

            &.btn-icon{
                background-color: transparent;
                color: transparent;
                .boxShadow(none);
                color: @color;
                padding: @spaceSm;
                font-size: @fontSize;

                .textShadow(@oneText);
                
                &:hover {
                    .textShadow(@fourText);
                }

                &.btn-sm {
                    padding: @spaceSm;
                    font-size: @fontSizeSm;
                }

                &.btn-lg {
                    padding: @spaceSm;
                    font-size: @fontSizeSm*2;
                }
            }
            &.btn-text {
                background-color: transparent;
                color: transparent;
                .boxShadow(none);
                color: @color;
                padding: @spaceSm @spaceMd;
                border-radius: @borderRadius;
                text-decoration: none;
                font-weight: bold;

                &:hover {
                    border: 1px solid @color;
                    background-color: ~"lighten(@color, 78%)";
                }
            }

            &.btn-border {
                border-radius: @borderRadius;
                background-color: @white;
                border: 1px solid @color;
                color: @color;
                font-weight: bold;

                &:hover {
                    background-color: ~"lighten(@color, 60%)";
                }
            }
        }

        &.fullWidth, 
        .btn-fullWidth {
            width: 100%;
        }
    }
</style>

