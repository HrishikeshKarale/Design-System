<template>
    <div class= "navAlertsProactive">
            <component-details
                :compData= 'inputResponse'
                :attr= 'attr'
            >
                <input-response
                    :warning= 'warning'
                    :error= 'danger'
                    :charLimitReached= 'charLimitReached'
                    :maxlength= 'maxlength'
                />
            </component-details>
               <div>
            <h2>Email Input</h2>
            <email-input 
                :label= "Elabel"
                :name= "Ename"
                :value= 'emailValue'
                :pattern= 'Epattern'
                :placeholder= "placeholder"
                :maxlength= 'maxlength'
                :multiple= 'd_booleanTrue'
                :required= 'd_booleanTrue'
               
                
                
                :inputIcon= 'EinputIcon'
                
                @notify= 'alerts'
                @value= 'val=> emailValue = val'
            />
        </div>
        <div>
            <h2>Searchable DropDown Input</h2>
            <searchable-dropdown-list 
                :label= "DDlabel"
                :name= "SDDname"
                :value= 'searchDropboxValue'
                :options= 'options'
                :placeholder= 'placeholder'
                :strict= 'd_booleanTrue'
                :maxlength= 'maxlength'
                
                :required= 'd_booleanTrue'
               
                
                :inputIcon= 'inputIcon'
                
                @notify= 'alerts'
                @value= 'val=> searchDropdownValue = val'
            />
        </div>
        <div>
            <h2>CheckBox Input</h2>
            <checkbox-input 
                :label= "DDlabel"
                :name= "Cname"
                :value= 'checkboxValue'
                :options= 'options'
                :required= 'd_booleanTrue'
               
                
                
                @notify= 'alerts'
                @value= 'val=> checkboxValue = val'
            />
        </div>
        <div>
            <h2>Date Input</h2>
            <vue-date 
                :label= "DTlabel"
                :name= "DTname"
                :value= 'dateValue'
                
                :min= 'DTmin'
                :max= 'DTmax'
                :pattern= "DTpattern"
                :required= 'd_booleanTrue'
               
                
                
                
                :inputIcon= 'DTinputIcon'
                @notify= 'alerts'
                @value= 'val=> dateValue = val'
            />
        </div>
    </div>
</template>

<script>

    import inputResponse from '@/components/Alerts/inputResponse'
    import vueButton from '@/components/UIComponents/Buttons'
    import componentDetails from '@/Views/componentDetails'
    import { alerts } from "@/typeScript/common/alerts"
    import emailInput from "@/components/FormElements/emailInput";
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList";
    import checkboxInput from "@/components/FormElements/checkboxInput";
    import vueDate from "@/components/FormElements/vueDate";

    export default {
        name: 'navAlertsProactive',

        mixins: [alerts ], //mixins

        data () {
            const danger= 'this is an error' 
            const warning= '' 
            const info= '' 
            const d_booleanTrue= true
            const charLimitReached= d_booleanTrue;
            const inputIcon= 'fas fa-user'
            const attr= null
            const emailValue= ''
            const searchDropboxValue= ''
            const checkboxValue= null
            const dateValue= ''
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
            const EinputIcon= 'fas fa-at'
            const DinputIcon= 'fas fa-user'
            const DTinputIcon= 'fas fa-calendar-alt'
            const options= this.$store.state.warehouse
            const size= null
            const inputResponse= {
                title: 'Proactive Alerts',
                import: 'import vueAlert from "@/components/Alerts/inputResponse"',
                compName: 'input-response',
                description: '<p>In the <em>reactive</em>  model of alert monitoring, you react to problems reported by your users (for example, website users).</p>\
                            <p>In such a scenario, the CAS monitors a given website and the AMD continuously measures operation times for operations, transactions, and users. Using the gathered data, the report server displays details on charts so you can measure performance and troubleshoot problems.</p>\
                            <p>When problems are reported by users, you look at the reports and find out that, for example, the problem is with HTTP response time from a certain server. You then go and fix the problem: reboot or restart the process or take other corrective action. In other words, you <em>react</em>  to a problem that has already affected your users.</p>',
                attributes: [
                    {
                        type: "error",
                        value: danger,
                        description: this.$store.state.navText.tag,
                        text: this.$store.state.navText.tagText,
                    },
                    {
                        type: "warning",
                        value: warning,
                        description: this.$store.state.navText.tag,
                        text: this.$store.state.navText.tagText,
                    },
                    {
                        type: "info",
                        value: info,
                        description: this.$store.state.navText.text,
                        text: this.$store.state.navText.textText,
                    },
                    {
                        type: "charLimitReached",
                        value: charLimitReached,
                        description: this.$store.state.navText.icon,
                        text: this.$store.state.navText.iconText,
                    },
                    {
                        type: "maxlength",
                        value: maxlength,
                        description: this.$store.state.navText.icon,
                        text: this.$store.state.navText.iconText,
                    },
                ] //attributes
            }
            return {
                d_booleanTrue,
                emailValue,
                searchDropboxValue,
                checkboxValue,
                dateValue,
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
                EinputIcon,
                DTinputIcon,
                danger,
                attr,
                warning,
                info,
                charLimitReached,
                inputIcon,
                inputResponse
            } //return
        }, //data
               methods: {

            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.danger= message;
                }
                else {
                    this.warning= message;
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
            checkboxInput,
            vueDate,
        }, //components
    } //default
</script>