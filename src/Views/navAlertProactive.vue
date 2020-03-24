<template>
    <div class= "navAlertsProactive">
        <content-nav
            :attributes= 'd_inputResponse.attributes'
            :title= 'd_inputResponse.title'
        >  
            <component-details
                :compData= 'd_inputResponse'
                :d_attr= 'd_attr'
            >
                <input-response
                    :warning= 'd_warning'
                    :error= 'd_danger'
                    :charLimitReached= 'd_charLimitReached'
                    :maxlength= 'd_maxlength'
                />
            </component-details>
        </content-nav>
        <div>
            <h2>Email Input</h2>
            <email-input 
                :label= "d_Elabel"
                :name= "d_Ename"
                v-model= 'd_emailValue'
                :value= 'd_value'
                :pattern= 'd_Epattern'
                :placeholder= "d_placeholder"
                :maxlength= 'd_maxlength'
                :multiple= 'd_booleanTrue'
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :readonly= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                :inputIcon= 'd_EinputIcon'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
            />
        </div>
        <div>
            <h2>Searchable DropDown Input</h2>
            <searchable-dropdown-list 
                :label= "d_DDlabel"
                :name= "d_SDDname"
                :value= 'd_value'
                v-model= 'd_searchDropboxValue'
                :options= 'd_options'
                :placeholder= 'd_placeholder'
                :strict= 'd_booleanTrue'
                :maxlength= 'd_maxlength'
                :multiple= '!d_booleanTrue'
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                :inputIcon= 'd_inputIcon'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
            />
        </div>
        <div>
            <h2>CheckBox Input</h2>
            <checkbox-input 
                :label= "d_DDlabel"
                :name= "d_Cname"
                :value= 'd_value'
                v-model= 'd_checkboxValue'
                :options= 'd_options'
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
            />
        </div>
        <div>
            <h2>Date Input</h2>
            <vue-date 
                :label= "d_DTlabel"
                :name= "d_DTname"
                v-model= 'd_dateValue'
                :value= 'd_DTvalue'
                :setDefaultDate= '!d_booleanTrue'
                :min= 'd_DTmin'
                :max= 'd_DTmax'
                :pattern= "d_DTpattern"
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                :readonly= '!d_booleanTrue'
                :inline= '!d_booleanTrue'
                :inputIcon= 'd_DTinputIcon'
                @alerts= 'd_alerts'
            />
        </div>
    </div>
</template>

<script>

    import inputResponse from '@/components/Alerts/inputResponse'
    import vueButton from '@/components/UIComponents/Buttons'
    import componentDetails from '@/Views/componentDetails'
    import contentNav from '@/Views/components/contentNav';
    
    import emailInput from "@/components/FormElements/emailInput";
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList";
    import checkboxInput from "@/components/FormElements/checkboxInput";
    import vueDate from "@/components/FormElements/vueDate";

    export default {
        name: 'navAlertsProactive',
        
        data () {
            var d_danger= 'this is an error' 

            var d_warning= '' 

            var d_info= '' 

            var d_booleanTrue= true

            var d_charLimitReached= d_booleanTrue

            var d_maxlength= 0

            var d_inputIcon= 'fas fa-user'

            var d_attr= null

            var d_emailValue= ''
            var d_searchDropboxValue= ''
            var d_checkboxValue= null
            var d_dateValue= ''

            var d_Elabel= 'Email'
            var d_DDlabel= 'Warehouse'
            var d_DTlabel= 'Date'

            var d_Ename= 'emailField'
            var d_SDDname= 'searchableDropdownField'
            var d_Cname= 'checkboxField'
            var d_DTname= 'dateField'

            var d_value= ''
            var d_DTvalue= ''

            var d_Epattern= '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
            var d_DTpattern= "^d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$"

            var d_maxlength= 20
            var d_min= 0
            var d_max= 99999 
            var d_DTmin= '2000-12-12'
            var d_DTmax= '2040-12-12'

            var d_placeholder= 'Enter text here...'

            var d_EinputIcon= 'fas fa-at'
            var d_DinputIcon= 'fas fa-user'
            var d_DTinputIcon= 'fas fa-calendar-alt'

            var d_alerts= this.alerts
            
            var d_options= this.$store.state.warehouse

            var d_size= null

            return {

                d_emailValue: d_emailValue,
                d_searchDropboxValue: d_searchDropboxValue,
                d_checkboxValue: d_checkboxValue,
                d_dateValue: d_dateValue,

                d_options: d_options,
                d_size: d_size,

                d_Elabel: d_Elabel,
                d_DDlabel: d_DDlabel,
                d_DTlabel: d_DTlabel,

                d_Ename: d_Ename,
                d_SDDname: d_SDDname,
                d_Cname: d_Cname,
                d_DTname: d_DTname,

                d_value: d_value,
                d_DTvalue: d_DTvalue,

                d_Epattern: d_Epattern,
                d_DTpattern: d_DTpattern,

                d_maxlength: d_maxlength,
                d_min: d_min,
                d_max: d_max,
                d_DTmin: d_DTmin,
                d_DTmax: d_DTmax,

                d_placeholder: d_placeholder,

                d_booleanTrue: d_booleanTrue,

                d_EinputIcon: d_EinputIcon,
                d_DTinputIcon: d_DTinputIcon,

                d_alerts: d_alerts,

                d_danger: d_danger,

                d_attr: d_attr,

                d_warning: d_warning,

                d_info: d_info,

                d_charLimitReached: d_charLimitReached,

                d_inputIcon: d_inputIcon,

                d_inputResponse: {

                    title: 'Proactive Alerts',

                    import: 'import vueAlert from "@/components/Alerts/inputResponse"',

                    compName: 'input-response',

                    description: '<p>In the <em>reactive</em>  model of alert monitoring, you react to problems reported by your users (for example, website users).</p>\
                                <p>In such a scenario, the CAS monitors a given website and the AMD continuously measures operation times for operations, transactions, and users. Using the gathered data, the report server displays details on charts so you can measure performance and troubleshoot problems.</p>\
                                <p>When problems are reported by users, you look at the reports and find out that, for example, the problem is with HTTP response time from a certain server. You then go and fix the problem: reboot or restart the process or take other corrective action. In other words, you <em>react</em>  to a problem that has already affected your users.</p>',

                    attributes: [
                        {
                            type: "error",
                            value: d_danger,
                            description: this.$store.state.navText.buttonName,
                            text: this.$store.state.navText.buttonNameText,
                        },
                        {
                            type: "warning",
                            value: d_warning,
                            description: this.$store.state.navText.buttonName,
                            text: this.$store.state.navText.buttonNameText,
                        },
                        {
                            type: "info",
                            value: d_info,
                            description: this.$store.state.navText.buttonText,
                            text: this.$store.state.navText.buttonTextText,
                        },
                        {
                            type: "charLimitReached",
                            value: d_charLimitReached,
                            description: this.$store.state.navText.buttonIcon,
                            text: this.$store.state.navText.buttonIconText,
                        },
                        {
                            type: "maxlength",
                            value: d_maxlength,
                            description: this.$store.state.navText.buttonIcon,
                            text: this.$store.state.navText.buttonIconText,
                        },
                    ] //attributes
                }, //alert
            } //return
        }, //data
        
        methods: {

            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.d_danger= message;
                }
                else {
                    this.d_warning= message;
                }
            }, //alerts

            consoleClick: function () {
                // console.log('ButtonClick');
            }, // consoleClick
        }, //methods

        components: {

            inputResponse,
            vueButton,
            componentDetails,
            contentNav,
            
            emailInput,
            searchableDropdownList,
            checkboxInput,
            vueDate,
        }, //components
    } //default
</script>