<template>
    <div
        v-if= '!d_close' 
        class= 'alert'
        :class= 'type'
    >
        <div>
            <span 
                :class= '[type, d_alertIcon]'
            />
            <div :class= 'type'>
                <div class= 'message'>
                    <h5><b>{{type=="danger"? code+" - ":""}} {{message}}</b></h5> 
                    <p>
                        {{description}}
                    </p>
                </div>
            </div>
        </div>
        <div v-if= 'dismissible' >
            <vue-button 
                :buttonType= 'd_buttonType'
                :buttonName= "d_buttonName"
                :buttonText= "d_buttonText"
                :buttonIcon= "d_buttonIcon"
                :buttonStyle= 'd_buttonStyle[11]'
                :disabled= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                :formID= "d_form"
                :onClickAction= 'd_onClickAction'
            />
        </div>
    </div>
</template>

<script>

    import vueButton from '@/components/UIComponents/Buttons'

    export default {
        name: 'alert',

        data () { 
            
            var d_alertIcon= ''

            var d_close= false

            var d_buttonType= 'button'

            var d_buttonName= 'closeAlertButton'

            var d_buttonText= null

            var d_buttonIcon= 'fas fa-times'

            var d_buttonStyle= this.$store.state.buttonStyle

            var d_booleanTrue= true

            var d_form= ''

            var d_onClickAction= this.closeAlertBox

            return {

                d_alertIcon: d_alertIcon,

                d_close: d_close,

                d_buttonType: d_buttonType,

                d_buttonName: d_buttonName,

                d_buttonText: d_buttonText,

                d_buttonIcon: d_buttonIcon,

                d_buttonStyle: d_buttonStyle,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_onClickAction: d_onClickAction,
            } //return
        }, //data

        components: {

            vueButton
        }, //components

        props: {

            type: {
                required: true,
                type: String,
                default: 'info',
                validator: function (value) {
                    if (['info', 'success', 'warning', 'danger'].includes(value)) {
                        return true
                    }
                    else {
                        alert("Invalid prop value found in <vue-alert>.\nPossible values: [info, success, warning, danger]\nYou Entered: "+value)
                    }
                }
            },

            code: {
                required: function () {
                    if(type== 'danger') {
                        return true
                    }
                    return false
                },
                type: String,
            },

            message: {
                required: true,
                type: String,
                default: 'default/no alert message specified'
            },

            description: {
                required: true,
                type: String,
                default: 'default/no alert message specified'
            },

            dismissible: {
                required: false,
                type: Boolean,
                default: false
            },

            timeout: {
                required: false,
                type: Number,
                default: null
            },
        }, //props

        methods: {

            closeAlertBox() {
                this.d_close= true
            }, //closeAlertBox

            closeAlert: function () {
                document.getElementsByClassName('dangerAlert')
                            .fadeTo(5000, 0)
                                .slideUp(500, function () {
                                    $(this).remove()
                                }
                        )//slideUp
            }, //closeAlert
        }, //methods

        created() {

            switch (this.type) {
                case 'warning': this.d_alertIcon= 'fas fa-exclamation-triangle'
                    break;
                case 'info': this.d_alertIcon= 'fas fa-info-circle'
                    break;
                case 'success': this.d_alertIcon= 'fas fa-check-circle'
                    break;
                case 'danger': this.d_alertIcon= 'fas fa-exclamation-circle'
                    break;
            }
        }, //created

        mounted () {
            var timeout= this.timeout

            if(timeout && timeout!=0) {
                setTimeout(this.closeAlertBox, timeout*1000);
            }
        }, //mounted
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) '../../Less/customVariables.less';

    .alert{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        border-radius: @borderRadiusMd;
        border: 1px solid transparent;
        width: fit-content;
        background-color: @white;
        border-left-width: 8px;
        padding: @spaceSm @spaceMd;

        &.danger {
            border-color: @dangerText;
            
            h5, span {
                color: @dangerText;
            }
        }
        &.warning {
            border-color:@warningText;

            h5, span {
                color: @warningText;
            }
        } 
        &.success {
            border-color: @successText;

            h5, span {
                color: @successText;
            }
        }
        &.info {
            border-color: @infoText;

            h5, span {
                color: @infoText;
            }
        }

        & > div {
            display: flex;
            flex-direction: row;

            & > span {
                padding: @spaceSm*3+@spaceXs @spaceMd @spaceSm @spaceSm;
            }

            & > div {
                display: flex;
                flex-direction: column;

                & > .alertMessage {
                    
                    & > p {
                        font-size: 16px;
                    }
                }

                & > .slot {
                    display: flex;
                    flex-direction: row-reverse;
                }
            }            
        }
    }
</style>
