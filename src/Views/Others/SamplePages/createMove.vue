<template>
    <div class= 'createMove'>
        <vue-wizard
            :steps= 'steps'
            :alert= "{'error': danger, 'warning': warning}"
        >
            <template slot= '1'>
                <fieldset>
                    <div>
                        <div style= 'width: 240px;'>
                            <div>
                                <text-input
                                    label= "First Name"
                                    name= "First Name"
                                    :value= 'fName'
                                    :required= 'd_booleanTrue'

                                    @notify= 'alerts'
                                    @value= 'val=> fName = val'
                                />
                            </div>
                            <div>
                                <text-input
                                    label= "Last Name"
                                    name= "Last Name"
                                    :value= 'lName'
                                    :required= 'd_booleanTrue'

                                    @notify= 'alerts'
                                    @value= 'val=> lName = val'
                                />
                            </div>
                            <div>
                                <vue-button
                                    :type= 'type'
                                    tag= "ApplyFilter"
                                    text= "Filter"
                                    :category= 'category[2]'


                                    :form= "form"
                                    :ctx= 'consoleClickApply'
                                />
                            </div>
                        </div>
                        <!-- {{tags}} -->

                        <div>
                            <vue-table
                                v-if= 'tagsData'
                                :tableData= 'tagsData'
                                :columns= 'columns'
                                :metadata= 'metadata'
                                :select= 'columns[0]'
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

    import { vueButton } from "vue2-component-library"
    import { vueWizard } from "vue2-component-library"
    import { vueTable } from "vue2-component-library"
    import { vueText as textInput  } from "vue2-component-library"
    import { vuePassword as passwordInput } from "vue2-component-library"
    import { vueEmail as emailInput } from "vue2-component-library"
    import { vueNumber as numberInput } from "vue2-component-library"
    import { vueFile as fileInput } from "vue2-component-library"
    import { vueSearchableDropdown as searchableDropdownList  } from "vue2-component-library"
    import dropdownList from "@/components/FormElements/dropdownList";
    import { vueToggle as multiToggle } from "vue2-component-library";
    import { vueCheckbox  as checkboxInput } from "vue2-component-library"
    import { vueDate } from "vue2-component-library"
    import { vueTextarea } from "vue2-component-library"
    import { vueInfo } from "vue2-component-library"

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
            checkboxInput,
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
                var tempColumns= this.columns

                if (!tempColumns.indexOf(newValue)!=-1) {
                    tempColumns.push(newValue)
                    // console.log('added')
                }
                else {
                    tempColumns.splice(tempColumns.indexOf(newValue), 1)
                    // console.log('deleted')
                }

                this.columns= tempColumns
            }, //toggleCloumns

            consoleClickApply: function () {
                this.tableToggle= true
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
                // console.log('input', value, gValue)
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
            const gender= ["Male", "Female", "Other"]
            const steps= [
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
            const danger= ""
            const warning= ""
            const d_booleanTrue= true
            const fName= null
            const lName= null
            const dateValue= null
            const gValue= null
            const email= null
            const PNumber= null
            const mNumber= null
            const type= 'button'
            const tag= 'consoleTextButton'
            const text= 'Click Me'
            const icon= 'fas fa-registered'
            const category= this.$store.state.category
            const form= ''
            const ctx= this.consoleClickApply
            return {

                tableToggle: false,

                type: type,

                tag: tag,

                text: text,

                icon: icon,

                category: category,

                d_booleanTrue: d_booleanTrue,

                form: form,

                ctx: ctx,

                columns: ['Tag Number', 'Product', 'Quantity'],

                fName: fName,
                lName: lName,
                dateValue: dateValue,
                gValue: gValue,
                email: email,
                PNumber: PNumber,
                mNumber: mNumber,

                mPattern: /^\d{10}$/,

                gender: gender,

                steps: steps,

                danger: danger,

                warning: warning,

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

