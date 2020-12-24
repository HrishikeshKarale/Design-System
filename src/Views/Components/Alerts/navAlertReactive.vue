<template>
    <div class= "navAlertsReactive">
            <component-details
                :compData= 'd_alert'
                :attr= 'd_attr'
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
            const d_code= "5.2.105";
            const d_alertType= ['danger', 'warning', 'info', 'success']
            const d_alertMessage= 'Order creation failed.'
            const d_message= 'Please select a valid shipping method and try again.'
            const d_booleanTrue= true
            const d_timeout= 0
            const d_attr= {'type':['type'] , 'value': [d_alertType]};
            const d_alert= {

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
                }; //d_alert
            return {
                d_alertType,
                d_alertMessage,
                d_message,
                d_booleanTrue,
                d_timeout,
                d_attr,
                d_alert
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