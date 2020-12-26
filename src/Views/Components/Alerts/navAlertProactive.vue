<template>
    <div class= "navAlertsProactive">
            <component-details
                :compData= 'inputResponse'
                :d_attr= 'd_attr'
            >
                <input-response
                    :d_warning= 'd_warning'
                    :error= 'd_danger'
                    :d_charLimitReached= 'd_charLimitReached'
                    :maxlength= 'maxlength'
                />
            </component-details>
               <div>
            <h2>Email Input</h2>
            <email-input 
                :label= "Elabel"
                :name= "Ename"
                :value= 'd_emailValue'
                :pattern= 'Epattern'
                :placeholder= "placeholder"
                :maxlength= 'maxlength'
                :multiple= 'd_booleanTrue'
                :required= 'd_booleanTrue'
               
                
                
                :d_inputIcon= 'Ed_inputIcon'
                
                @notify= 'alerts'
                @value= 'val=> d_emailValue = val'
            />
        </div>
        <div>
            <h2>Searchable DropDown Input</h2>
            <searchable-dropdown-list 
                :label= "DDlabel"
                :name= "SDDname"
                :value= 'd_searchDropboxValue'
                :options= 'options'
                :placeholder= 'placeholder'
                :strict= 'd_booleanTrue'
                :maxlength= 'maxlength'
                
                :required= 'd_booleanTrue'
               
                
                :d_inputIcon= 'd_inputIcon'
                
                @notify= 'alerts'
                @value= 'val=> searchDropdownValue = val'
            />
        </div>
        <div>
            <h2>CheckBox Input</h2>
            <radio-input 
                :label= "DDlabel"
                :name= "Cname"
                :value= 'd_checkboxValue'
                :options= 'options'
                :required= 'd_booleanTrue'
               
                
                
                @notify= 'alerts'
                @value= 'val=> d_checkboxValue = val'
            />
        </div>
        <div>
            <h2>Date Input</h2>
            <vue-date 
                :label= "DTlabel"
                :name= "DTname"
                :value= 'd_dateValue'
                
                :min= 'DTmin'
                :max= 'DTmax'
                :pattern= "DTpattern"
                :required= 'd_booleanTrue'
               
                
                
                
                :d_inputIcon= 'DTd_inputIcon'
                @notify= 'alerts'
                @value= 'val=> d_dateValue = val'
            />
        </div>
    </div>
</template>

<script>

    import inputResponse from '@/components/Alerts/inputResponse'
    import vueButton from '@/components/UIComponents/Button'
    import componentDetails from '@/Views/componentDetails'
    import { alerts } from "@/typeScript/common/alerts"
    import emailInput from "@/components/FormElements/emailInput";
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList";
    import radioInput from "@/components/FormElements/radioInput";
    import vueDate from "@/components/FormElements/vueDate";

    export default {
        name: 'navAlertsProactive',

        mixins: [alerts ], //mixins

        data () {
            const d_danger= 'this is an error' 
            const d_warning= '' 
            const d_info= '' 
            const d_booleanTrue= true
            const d_charLimitReached= d_booleanTrue;
            const d_inputIcon= 'fas fa-user'
            const d_attr= null
            const d_emailValue= ''
            const d_searchDropboxValue= ''
            const d_checkboxValue= null
            const d_dateValue= ''
            const Elabel= 'Email'
            const DDlabel= 'Warehouse'
            const DTlabel= 'Date'
            const Ename= 'emailField'
            const SDDname= 'searchableDropdownField'
            const Cname= 'checkboxField'
            const DTname= 'dateField'
            const value= ''
            const DTvalue= ''
            const Epattern= '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
            const DTpattern= "^d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$"
            const maxlength= 20
            const min= 0
            const max= 99999 
            const DTmin= '2000-12-12'
            const DTmax= '2040-12-12'
            const placeholder= 'Enter text here...'
            const Ed_inputIcon= 'fas fa-at'
            const Dd_inputIcon= 'fas fa-user'
            const DTd_inputIcon= 'fas fa-calendar-alt'
            const options= this.$store.state.warehouse
            const size= null
            const inputResponse= {
                title: 'Proactive Alerts',
                import: 'import vueAlert from "@/components/Alerts/inputResponse"',
                compName: 'input-response',
                description: '<p>In the <em>reactive</em>  model of alert monitoring, you react to problems reported by your users (for example, website users).</p>\
                            <p>In such a scenario, the CAS monitors a given website and the AMD continuously measures operation times for operations, transactions, and users. Using the gathered data, the report server displays details on charts so you can measure performance and troubleshoot problems.</p>\
                            <p>When problems are reported by users, you look at the reports and find out that, for example, the problem is with HTTP response time from a certain server. You then go and fix the problem: reboot or restart the process or take other corrective action. In other words, you <em>react</em>  to a problem that has already affected your users.</p>',
                d_attributes: [
                    {
                        type: "error",
                        value: d_danger,
                        description: this.$store.state.navText.tag,
                        text: this.$store.state.navText.tagText,
                    },
                    {
                        type: "d_warning",
                        value: d_warning,
                        description: this.$store.state.navText.tag,
                        text: this.$store.state.navText.tagText,
                    },
                    {
                        type: "d_info",
                        value: d_info,
                        description: this.$store.state.navText.text,
                        text: this.$store.state.navText.textText,
                    },
                    {
                        type: "d_charLimitReached",
                        value: d_charLimitReached,
                        description: this.$store.state.navText.icon,
                        text: this.$store.state.navText.iconText,
                    },
                    {
                        type: "maxlength",
                        value: maxlength,
                        description: this.$store.state.navText.icon,
                        text: this.$store.state.navText.iconText,
                    },
                ] //d_attributes
            }
            return {
                d_booleanTrue,
                d_emailValue,
                d_searchDropboxValue,
                d_checkboxValue,
                d_dateValue,
                options,
                size,
                Elabel,
                DDlabel,
                DTlabel,
                Ename,
                SDDname,
                Cname,
                DTname,
                value,
                DTvalue,
                Epattern,
                DTpattern,
                maxlength,
                min,
                max,
                DTmin,
                DTmax,
                placeholder,
                Ed_inputIcon,
                DTd_inputIcon,
                d_danger,
                d_attr,
                d_warning,
                d_info,
                d_charLimitReached,
                d_inputIcon,
                inputResponse
            } //return
        }, //data
               methods: {

            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.d_d_danger= message;
                }
                else {
                    this.d_d_warning= message;
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
                                  emailInput,
            searchableDropdownList,
            radioInput,
            vueDate,
        }, //components
    } //default
</script>