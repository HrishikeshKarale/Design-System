<template>
  <component-details
    :compData= 'd_inputResponse'
  >
    <input-response
      :d_warning= 'd_warning'
      :error= 'd_danger'
      :info= 'd_info'
      :d_charLimitReached= 'd_charLimitReached'
      :maxlength= 'd_maxLength'
    />
  </component-details>
</template>

<script>

  import { vueInputResponse as inputResponse } from "vue2-component-library"
  import componentDetails from '@/Views/componentDetails'
  import { alerts } from "@/typeScript/common/alerts"

  export default {
    name: 'navAlertsProactive',

    mixins: [alerts ], //mixins

    data () {
      const d_booleanTrue= true
      const d_maxLength= 20
      const d_info= ''
      const d_charLimitReached= d_booleanTrue;
      return {
				d_maxLength,
        d_info,
        d_charLimitReached
      } //return
    }, //data

    computed: {
      d_inputResponse: function() {
        return {
          title: 'Proactive Alerts',
          import: 'import vueAlert from "@/components/Alerts/inputResponse"',
          compName: 'input-response',
          description: '<p>In the <em>reactive</em>  model of alert monitoring, you react to problems reported by your users (for example, website users).\
          In such a scenario, the CAS monitors a given website and the AMD continuously measures operation times for operations, transactions, and users. Using the gathered data, the report server displays details on charts so you can measure performance and troubleshoot problems.</p>\
          <p>When problems are reported by users, you look at the reports and find out that, for example, the problem is with HTTP response time from a certain server. You then go and fix the problem: reboot or restart the process or take other corrective action. In other words, you <em>react</em>  to a problem that has already affected your users.</p>',
          attributes: [
            {
              type: "error",
              value: this.d_error,
              description: this.$store.state.navText.tag,
              text: this.$store.state.navText.tagText,
            },
            {
              type: "d_warning",
              value: this.d_warning,
              description: this.$store.state.navText.tag,
              text: this.$store.state.navText.tagText,
            },
            {
              type: "d_info",
              value: this.d_info,
              description: this.$store.state.navText.text,
              text: this.$store.state.navText.textText,
            },
            {
              type: "d_charLimitReached",
              value: this.d_charLimitReached,
              description: this.$store.state.navText.icon,
              text: this.$store.state.navText.iconText,
            },
            {
              type: "maxlength",
              value: this.d_maxlength,
              description: this.$store.state.navText.icon,
              text: this.$store.state.navText.iconText,
            },
          ] //d_attributes
        };
      }
    }, //computed

    components: {
      inputResponse,
      componentDetails,
    }, //components
  } //default
</script>