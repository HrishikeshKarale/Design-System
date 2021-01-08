<template>
  <component-details
    :compData= 'd_alert'
  >
    <vue-alert
      :type= 'd_alertType[0]'
      :code= 'd_code'
      :message= 'd_message'
      :description= 'd_description'
    />
  </component-details>
</template>

<script>

  import { vueAlert } from "vue2-component-library"
  import { vueButton } from "vue2-component-library"
  import componentDetails from '@/Views/componentDetails'


  export default {
    name: 'navAlertsReactive',
    data () {
      const d_code= "5.2.105";
      const d_alertType= ['danger', 'warning', 'info', 'success']
      const d_message= 'Order creation failed.'
      const d_description= 'Please select a valid shipping method and try again.'
      const d_dismissible= true
      const d_timeout= 0
      return {
        d_alertType,
				d_description,
				d_code,
        d_message,
        d_dismissible,
        d_timeout
        } //return
		}, //data

		computed: {

			d_alert: function() {
				return {

          title: 'Reactive Alerts',

          import: 'import { vueAlert } from "vue2-component-library"',

          compName: 'vue-alert',

          description: '<p>The Modal plugin is a dialog box/popup window that is displayed on top of the current page</p>',

          attributes: [
            {
              type: "type",
              value: this.d_alertType[0],
              description: this.$store.state.navText.tag,
              text: this.$store.state.navText.tagText,
            },
            {
              type: "message",
              value: this.d_message,
              description: this.$store.state.navText.tag,
              text: this.$store.state.navText.tagText,
            },
            {
              type: "description",
              value: this.d_description,
              description: this.$store.state.navText.text,
              text: this.$store.state.navText.textText,
            },
            {
              type: "code",
              value: this.d_code,
              description: '<p>Error code.</p>',
              text: '<p>Allows the developers to display an error code that speaks to them about what error is thrown by the system without having to write system error messages.</p>',
            },
            {
              type: "dismissible",
              value: this.d_dismissible,
              description: '<p>if true allows the user to close the alert.</p>',
              text: '<p>If the value of this option is set to true, the user is presented with a close (icon) button at the top right corner ofthe alert.</p>',
            },
            {
              type: "timeout",
              value: this.d_timeout,
              description: '<p>Auto dismisses alerts after a set amount of time in seconds.</p>',
              text: '<p>Takes a positive numeric value and sets a counter on the alerts for the specified time.</p>\
              <p>The when the timer is up, the alert is automatically dismissed.</p>',
            },
          ] //attributes
				};
			} //d_alert
		}, //computed

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