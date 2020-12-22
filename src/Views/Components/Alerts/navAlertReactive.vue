<template>
    <div class= "navAlertsReactive">
            <component-details
                :compData= 'd_alert'
                :d_attr= 'd_attr'
            >
                <vue-alert 
                    :type= 'd_alertType[0]'
                    :code= 'd_code'
                    :message= 'd_alertMessage'
                    :description= 'd_message'
                />
            </component-details>
           </div>
</template>

<script>

    import vueAlert from '@/components/Alerts/vueAlert'
    import vueButton from '@/components/UIComponents/Buttons'
    import componentDetails from '@/Views/componentDetails'
    

    export default {
        name: 'navAlertsReactive',
               data () {

            var d_alertType= ['danger', 'warning', 'info', 'success']

            var d_alertMessage= 'Order creation failed.'
                           var d_message= 'Please select a valid shipping method and try again.'
                       var d_type= 'button'

            var d_tag= 'closeAlertButton'

            var d_text= 'Cancel Request'

            var d_icon= ''

            var d_category= this.$store.state.category

            var d_booleanTrue= true

            var d_form= ''

            var d_ctx= this.consoleClick

            var d_timeout= 0

            var d_code= "5.2.105"

            return {

                d_alertType: d_alertType,

                d_alertMessage: d_alertMessage,
                               d_message: d_message,

                d_type: d_type,

                d_tag: d_tag,

                d_text: d_text,

                d_icon: d_icon,

                d_category: d_category,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_ctx: d_ctx,

                d_timeout: d_timeout,

                d_code: d_code,

                d_attr: {'type':['type'] , 'value': [d_alertType]},

                d_alert: {

                    title: 'Reactive Alerts',

                    import: 'import vueAlert from "@/components/Alerts/vueAlert"',

                    compName: 'vue-alert',

                    description: '<p>The Modal plugin is a dialog box/popup window that is displayed on top of the current page</p>',

                    attributes: [
                        {
                            type: "type",
                            value: d_alertType[0],
                            description: this.$store.state.navText.tag,
                            text: this.$store.state.navText.tagText,
                        },
                        {
                            type: "message",
                            value: d_alertMessage,
                            description: this.$store.state.navText.tag,
                            text: this.$store.state.navText.tagText,
                        },
                        {
                            type: "description",
                            value: d_message,
                            description: this.$store.state.navText.text,
                            text: this.$store.state.navText.textText,
                        },
                        {
                            type: "code",
                            value: d_code,
                            description: '<p>Error code.</p>',
                            text: '<p>Allows the developers to display an error code that speaks to them about what error is thrown by the system without having to write system error messages.</p>',
                        },
                        {
                            type: "dismissible",
                            value: d_booleanTrue,
                            description: '<p>if true allows the user to close the alert.</p>',
                            text: '<p>If the value of this option is set to true, the user is presented with a close (icon) button at the top right corner ofthe alert.</p>',
                        },
                        {
                            type: "timeout",
                            value: d_timeout,
                            description: '<p>Auto dismisses alerts after a set amount of time in seconds.</p>',
                            text: '<p>Takes a positive numeric value and sets a counter on the alerts for the specified time.</p>\
                            <p>The when the timer is up, the alert is automatically dismissed.</p>',
                        },
                    ] //attributes
                }, //d_alert
            } //return
        }, //data
               methods: {

            consoleClick: function () {
                // console.log('ButtonClick');
            }, // consoleClick
        }, //methods

        components: {

            vueAlert,
            vueButton,
            componentDetails,
                   }, //components
    } //default
</script>