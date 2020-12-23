<template>
    <div class= 'createMove'>
        <vue-wizard 
            :steps= 'd_steps'
            :alert= "{'error': d_danger, 'warning': d_warning}"
        >
            <template slot= '1'>
                <fieldset>
                    <div>
                        <div style= 'width: 240px;'>
                            <div>
                                <text-input 
                                    label= "First Name"
                                    name= "First Name"
                                    v-model= 'd_fName'
                                    :required= 'd_booleanTrue'
                                    :readonly= '!d_booleanTrue'
                                    @notify= 'alerts'
                                />
                            </div>
                            <div>
                                <text-input 
                                    label= "Last Name"
                                    name= "Last Name"
                                    v-model= 'd_lName'
                                    :required= 'd_booleanTrue'
                                    :readonly= '!d_booleanTrue'
                                    @notify= 'alerts'
                                />
                            </div>
                            <div>
                                <vue-button
                                    :type= 'd_type'
                                    tag= "ApplyFilter"
                                    text= "Filter"
                                    :category= 'd_category[2]'
                                    :disabled= '!d_booleanTrue'
                                    :autofocus= '!d_booleanTrue'
                                    :form= "d_form"
                                    :ctx= 'consoleClickApply'
                                />
                            </div>
                        </div>
                        <!-- {{d_tags}} -->

                        <div>
                            <vue-table 
                                v-if= 'tagsData'
                                :tableData= 'tagsData'
                                :columns= 'd_columns'
                                :metadata= 'metadata'
                                :select= 'd_columns[0]'
                                low= '1'
                                @setPage= 'setPage'
                                @setSortKey= 'setSortKey'
                                @selectRow= 'selectRow'
                                @setRowElements= 'setRowElements'
                                @toggleCloumns= 'toggleCloumns'
                            />
                        </div>
                    </div>    
                </fieldset>
            </template>

            <template slot= '2'>
                <h3>Product Details</h3>
                <div class= 'two'/>
            </template>
        </vue-wizard> 
    </div>  
</template>

<script>

    import vueButton from "@/components/UIComponents/Buttons"
    import vueWizard from "@/components/UIComponents/StepWizard/vueWizard"
    import vueTable from "@/components/UIComponents/Table/vueTable"

    import textInput from "@/components/FormElements/textInput";
    import passwordInput from "@/components/FormElements/passwordInput";
    import emailInput from "@/components/FormElements/emailInput";
    import numberInput from "@/components/FormElements/numberInput";
    import fileInput from "@/components/FormElements/fileInput";
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList";
    import dropdownList from "@/components/FormElements/dropdownList";
    import multiToggle from "@/components/FormElements/multiToggle";
    import checkboxInput from "@/components/FormElements/checkboxInput";
    import radioInput from "@/components/FormElements/radioInput";
    import vueDate from "@/components/FormElements/vueDate";
    import vueTextarea from "@/components/FormElements/vueTextarea";
    import vueInfo from "@/components/FormElements/vueInfo";

    // import { store } from '@/store/store'
    import { mapGetters, mapState, mapActions } from 'vuex';

    export default {
        name:'createMove',

        // store,

        mapGetters,

        mapState, 

        mapActions,

        components: {
                       vueButton,
            vueWizard,
            vueTable,

            textInput,
            passwordInput,
            emailInput,
            numberInput,
            searchableDropdownList,
            dropdownList,
            fileInput,
            multiToggle,
            checkboxInput,
            radioInput,
            vueDate,
            vueInfo,
            vueTextarea,
        }, //components

        computed: {

            ...mapState (
                [
                    'metadata',
                    'tagsData'
                ]
            ),
        }, //computed

        methods: {

            ...mapActions(
                [
                    'selectRow',
                    'setSortKey',
                    'setPage',
                    'setRowElements',
                ]
            ),

            toggleCloumns: function (newValue) {
                var tempColumns= this.d_columns

                if (!tempColumns.includes(newValue)) {
                    tempColumns.push(newValue)
                    // console.log('added')
                }
                else {
                    tempColumns.splice(tempColumns.indexOf(newValue), 1)
                    // console.log('deleted')
                }

                this.d_columns= tempColumns
            }, //toggleCloumns

            consoleClickApply: function () {
                this.d_tableToggle= true
                    // console.log("Apply filter")
            }, // consoleClickApply

            rowElements: function (newValue) {
                this.$store.dispatch('setRowElements', newValue)
            }, //rowElements

            setPage: function (newValue) {
                // console.log('setPage: ', newValue)
                this.$store.dispatch('setPage', newValue)
            }, //setPage

            input: function (value) {
                // console.log('input', value, d_gValue)
            }, //input

            buttonClick: function () {}, //buttonClick

            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.d_danger= message;
                }
                else {
                    this.d_warning= message;
                }
            }, //alerts
        }, //methods

        data() {

            var d_gender= ["Male", "Female", "Other"]

            var d_steps= [
                {
                    id: 1,
                    title: "Select Assignment",
                    icon_class: "fa fa-user"
                },
                {
                    id: 2,
                    title: "Select Items",
                    icon_class: "fa fa-th-list"
                }
            ]

            var d_danger= null

            var d_warning= null

            var d_booleanTrue= true

            var d_fName= null
            var d_lName= null
            var d_dateValue= null
            var d_gValue= null
            var d_email= null
            var d_PNumber= null
            var d_mNumber= null

            var d_type= 'button'

            var d_tag= 'consoleTextButton'

            var d_text= 'Click Me'

            var d_icon= 'fas fa-registered'

            var d_category= this.$store.state.category

            var d_booleanTrue= true

            var d_form= ''

            var d_ctx= this.consoleClickApply

            return {

                d_tableToggle: false,

                d_type: d_type,

                d_tag: d_tag,

                d_text: d_text,

                d_icon: d_icon,

                d_category: d_category,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_ctx: d_ctx,

                d_columns: ['Tag Number', 'Product', 'Quantity'],

                d_fName: d_fName,
                d_lName: d_lName,
                d_dateValue: d_dateValue,
                d_gValue: d_gValue,
                d_email: d_email,
                d_PNumber: d_PNumber,
                d_mNumber: d_mNumber,

                d_mPattern: /^\d{10}$/,

                d_gender: d_gender,

                d_steps: d_steps,

                d_danger: d_danger,

                d_warning: d_warning,

                d_booleanTrue: d_booleanTrue,
            } //return
        }, //data
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "../../../Less/customMixins.less";
    @import (reference) "../../../Less/customVariables.less";
    
    .createMove {

        fieldset {
            margin

            & > div {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                & > div {

                    &:first-child {
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                                           & > div {
                            width: fit-content;
                            height: fit-content;

                            & > div {
                                margin-right: 32px;
                                margin-bottom: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

