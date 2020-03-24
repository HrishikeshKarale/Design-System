<template>
    <div class= "navAlerts">
        https://designsystem.digital.gov/components/alert/
        https://uxplanet.org/how-to-write-good-error-messages-858e4551cd4
        https://uxplanet.org/how-to-write-a-perfect-error-message-da1ca65a8f36
        https://uxplanet.org/how-to-write-the-perfect-error-message-ffc132fda06a
        <h1> Alert System </h1>
        <div class= "content">
            <div class= "content--main">
                <p>You can use the alert system to deal with problems reactively or proactively.</p>
                <h3 id= "reactive-model">Reactive model</h3>
                <p>In the <em>reactive</em>  model of alert monitoring, you react to problems reported by your users (for example, website users).</p>
                <p>In such a scenario, the CAS monitors a given website and the AMD continuously measures operation times for operations, transactions, and users. Using the gathered data, the report server displays details on charts so you can measure performance and troubleshoot problems.</p>
                <p>When problems are reported by users, you look at the reports and find out that, for example, the problem is with HTTP response time from a certain server. You then go and fix the problem: reboot or restart the process or take other corrective action. In other words, you <em>react</em>  to a problem that has already affected your users.</p>
                <h3 id= "proactive-model">Proactive model</h3>
                <p>In the <em>proactive</em>  model of alert monitoring, you detect problems before your users notice them.</p>
                <p>To do this, you need two things:</p>
                <ul class= "list">
                <li>Knowledge of how the problems manifest themselves in your particular environment, and the</li>
                <li>Means of detecting such situations.</li>
                </ul>
                <p>For example, if long HTTP response time is the best early indicator of developing problems, you could display a chart showing the HTTP response time metric and take action if the value of the metric is above a certain value.</p>
                <p>It is even better to automate the process and let the system inform you when the metric exceeds the threshold. This is exactly what the alert mechanism was designed to do. Ideally, the system could inform a designated operator about the problem and feed data into an alert management engine. The engine could then perform a corrective action such as restarting the offending server or process.</p>
                <p>Thus, the report mechanism enables you to move some of the responsibility and intelligence from a human operator (watching the charts) to the machine (acting on alerts).</p>
                <h2>Defining and modifying alert</h2>
                <p>For an alert to be raised, you need to specify the alert triggering conditions, which requires careful observation and knowledge of the system.</p>
                <p>You need to ensure that:</p>

                <ul class= "list">
                    <li>
                        <p>You understand what you are trying to achieve.</p>
                    </li>
                    <li>
                        <p>You have gathered your requirements.</p>
                    </li>
                    <li>
                        <p>You know how problems in the monitored system manifest themselves.</p>
                    </li>
                    <li>
                        <p>You can translate your intentions into alert configuration. You must ensure that alerts detect error situations and nothing but error situations. In other words, you must ensure that failure notifications are sent and corrective actions are performed always when needed, but only in those situations.</p>
                    </li>
                </ul>
                
                <p>When configuring alerts, first of all you must consider what the system would be showing if you were troubleshooting a failure in a reactive mode. These could be, for example, slow operations, HTTP response time, SSL handshake errors, stopped pages, 5xx HTTP errors on the login URL, or some textual information that needs to be captured with application error recognition.</p>
                <p>Then you need to ask yourself what values for a given time duration are still acceptable and what values mean a real problem. Thus, for example, 5 minutes of high server time might not signify a problem, but if it stays high for more than 15 minutes it might be a problem, particularly if after 30 minutes you also see 5xx HTTP errors. Then you have to react. With this type of information, you can start to think about looking for the right alerts to configure.</p>
                <p>It is not enough to detect alert conditions and then trigger and send alert notifications. You need a business process that ensures that this situation will be fixed as soon as possible. In other words, it is not enough to generate many alerts from monitoring tools if you still react to problems only when users call to complain.</p>
                <h2>Usage scenarios for alerts</h2>
                <p>The alert system can satisfy various user requirements and operational scenarios, such as:</p>
                <ul class= "list">
                    <li>
                        <p>Notifying the recipient of both the beginning and the end of the alert condition. The user is notified when an alert condition is raised and also when the situation returns to normal.</p>
                    </li>
                    <li>
                        <p>Notifying the recipient only if a given condition lasts for a certain period of time, or if a given event is repeated several times. This enables the user to focus on real issues and not on insignificant or intermittent glitches.</p>
                    </li>
                    <li>
                        <p>Notifying the recipient several times at regular intervals throughout the duration of the problem.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div 
                v-for= 'type in d_alertType'
                :key= 'type'    
            >
                <vue-alert
                    :code= 'd_code'
                    :type= 'type'
                    :message= 'd_alert'
                    :description= 'd_message'
                    :dismissible= 'd_booleanTrue'
                />
            </div>
        </div>
        <div>
            <div 
                v-for= 'type in d_alertType'
                :key= 'type'    
            >
                <vue-alert
                    :code= 'd_code'
                    :type= 'type'
                    :message= 'd_alert'
                    :description= 'd_message'
                    :dismissible= '!d_booleanTrue'
                />
            </div>
        </div>
        <div>
            <div 
                v-for= 'type in d_alertType'
                :key= 'type'    
            >
                <vue-alert
                    :code= 'd_code'
                    :type= 'type'
                    :message= 'd_alert'
                    :description= 'd_message'
                    :dismissible= '!d_booleanTrue'
                    :timeout= 'd_timeout'
                />
            </div>
        </div>
    </div>
</template>

<script>

    import vueAlert from '@/components/Alerts/vueAlert'
    import vueButton from '@/components/UIComponents/Buttons'
    import componentDetails from '@/Views/componentDetails'

    export default {
        name: 'navAlerts',
        
        data () {

            var d_alertType= ['danger', 'warning', 'info', 'success']

            var d_alert= 'Order creation failed.'
                
            var d_message= 'Please select a valid shipping method and try again.'
            
            var d_buttonType= 'button'

            var d_buttonName= 'closeAlertButton'

            var d_buttonText= 'Cancel Request'

            var d_buttonIcon= ''

            var d_buttonStyle= this.$store.state.buttonStyle

            var d_booleanTrue= true

            var d_form= ''

            var d_onClickAction= this.consoleClick

            var d_timeout= 10
            
            var d_code= '5.1.104'


            return {

                d_alertType: d_alertType,

                d_alert: d_alert,
                
                d_message: d_message,

                d_buttonType: d_buttonType,

                d_buttonName: d_buttonName,

                d_buttonText: d_buttonText,

                d_buttonIcon: d_buttonIcon,

                d_buttonStyle: d_buttonStyle,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_onClickAction: d_onClickAction,

                d_timeout: d_timeout,

                d_code: d_code,
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


<style lang= "less" scoped>

    @import (reference) "./../Less/customMixins.less";
    @import (reference) "./../Less/customVariables.less";

    .navAlerts {

        > div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;

            > div {
                margin: @spaceMd @spaceLg;
            }
        }
    }
</style>
