<template>
        <div class= 'copyClipboard'>
            <div>
                <vue-button 
                    v-if= 'buttonText && buttonText'
                    :buttonType= 'd_buttonType'
                    :buttonName= "buttonName"
                    :buttonText= "buttonText"
                    :buttonIcon= "buttonIcon"
                    :buttonStyle= 'd_buttonStyle[11]'
                    :disabled= '!d_booleanTrue'
                    :autofocus= '!d_booleanTrue'
                    :formID= "d_form"
                    :onClickAction= 'copyToClipboard'
                />
                <vue-button 
                    v-else-if= 'buttonText'
                    :buttonType= 'd_buttonType'
                    :id= 'buttonName'
                    :buttonName= "buttonName"
                    :buttonText= "buttonText"
                    :buttonIcon= "buttonIcon"
                    :buttonStyle= 'd_buttonStyle[2]'
                    :disabled= '!d_booleanTrue'
                    :autofocus= '!d_booleanTrue'
                    :formID= "d_form"
                    :onClickAction= 'copyToClipboard'
                />
                <vue-button 
                    v-else
                    :buttonType= 'd_buttonType'
                    buttonName= "togglecode"
                    :buttonText= "buttonText"
                    :buttonIcon= "buttonIcon"
                    :buttonStyle= 'd_buttonStyle[9]'
                    :disabled= '!d_booleanTrue'
                    :autofocus= '!d_booleanTrue'
                    :formID= "d_form"
                    :onClickAction= 'copyToClipboard'
                />
            </div>
            <div>
                <!-- <input type= 'hidden' :id= "id" :value= 'componentCode'> -->
                <textarea :id= "id" :value= 'componentCode'></textarea>
            </div>
        </div>
</template>
<script>

    import vueButton from "@/components/UIComponents/Buttons";

    export default {
        name: "vueClipboard",

        data() {

            var d_buttonType= 'button'

            var d_buttonStyle= this.$store.state.buttonStyle

            var d_booleanTrue= true

            var d_form= ''

            var d_onClickAction= this.consoleClick

            return {

              d_buttonType: d_buttonType,

              d_buttonStyle: d_buttonStyle,

              d_booleanTrue: d_booleanTrue,

              d_form: d_form,

              d_onClickAction: d_onClickAction,
            } //return 
        }, //data

        props: {

            buttonText: {
                required: false,
                type: String,
                default: null
            },

            buttonName: {
                required: false,
                type: String,
                default: "copyToClipboard"
            },

            buttonIcon: {
                required: false,
                type: String,
                default: "fas fa-copy"
            },

            componentCode: {
                required: true,
            },
            
            id: {
                required: true,
                type: String
            }
        }, //props

        components: {
            vueButton
        }, //components

        methods: {
            copyToClipboard: function () {
                var tempId= '#'+ this.id
                var codeToCopy = document.querySelector(tempId);
                codeToCopy.style.display= "block";
                codeToCopy.select();

                try {
                    var successful = document.execCommand("copy");
                    var msg = successful ? "successful" : "unsuccessful";
                    // alert("code copied!");
                    // console.log('copy successfull', tempId)
                    // alert("copied: ", successful)
                } catch (err) {
                    alert("Oops, unable to copy");
                }

                document.querySelector(tempId).style.display= "none";
                window.getSelection().removeAllRanges();
            }, //copyToClipboard
        }, //methods
    } //default
</script>

<style lang= "less" scoped>

    .copyClipboard {
        display: flex;

        textarea {
            display: none;
        }
    }
</style>