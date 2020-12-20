<template>
    <div class= "navMasterDetail">
            <component-details
                :compData= 'd_masterDetail'
            >
                <master-detail
                    :selected= 'd_selected'
                    v-if= 'employees'
                >
                    <text-input 
                        name= "tableSearchField"
                        placeholder= "Search..."
                        v-model= 'd_searchKey'
                        inputIcon= 'fas fa-search'
                    />
                    <template slot= 'master'>                   
                        <div
                            v-for= '(emp, index) in employees.data'
                            :key= 'index'
                        >
                            <vue-card
                                cardLogo= 'fas fa-user fa-3x'
                                :cardData= '{"cols": employees.cols, "data": emp}'
                                :onClickAction= 'selected.bind(this, emp[0])'
                                :low= '1'
                                high= '5'
                                :style= '{"background-color: #00B6A8;": d_selected}'
                            />
                        </div>
                    </template>

                    <template
                        v-if= 'd_selected' 
                        slot= 'detail'
                    >
                        <vue-table 
                            :tableData= 'paginatedData'
                            :columns= 'd_cols'
                            :metadata= 'metadata'
                            :title= 'd_selected'
                            low= '1'
                        />
                    </template>
                </master-detail>
            </component-details>
        
    </div><!--uiComponents-->
</template>

<script>

    import vueCard from '@/components/UIComponents/Cards/vueCard'
    import vueTable from '@/components/UIComponents/Table/vueTable'
    import masterDetail from '@/components/UIComponents/MasterDetail/masterDetail'
    import componentDetails from '@/Views/componentDetails'
    import textInput from "@/components/FormElements/textInput";
    
    
    // import { store } from '@/store/store'
    import { mapGetters, mapState } from 'vuex';

    export default {
        name: 'navMasterDetail',

        // store,

        mapGetters,

        mapState, 

        data () {
            return {

                d_searchKey: null,

                d_selected: null,

                employeeData: null,

                tempData: null,

                d_cols: [
                    'Order Number',
                    'Status',
                    'Created On',
                    'Created By'
                ],

                d_masterDetail: {
                    id: 1,

                    title: 'Master detail',

                    import: 'import masterDetail from "@/components/UIComponents/MasterDetail/masterDetail"',

                    compName: 'master-detail',

                    text: [
                        {
                            content: 'The &lt;text-input&gt; tag specifies an input field where user can enter tect data.'
                        },
                        {
                            content: '&lt;text-input&gt; elements are used within a &lt;form&gt; element to declare input controls that allow users to input data.'
                        },
                        {
                            content: 'An &lt;text-input&gt; tag can vary in many ways, depending on the type attribute. The attributes for the text-input tag can be seen in the sample code.'
                        }
                    ],

                    attributes: [
                        {
                            type: "tableDetails",
                            dataType: Object,
                            value: null,
                            id: 1,
                            text: [
                                {
                                    content: 'Label accepts a String value and uses the assigned value as a label for the textbox.'
                                },
                                {
                                    content: "If a label is not provided or set as null (null), &lt;text-input&gt; will result in a text-box without a label."
                                }
                            ]
                        },
                        {
                            type: "employees",
                            dataType: Array,
                            value: null,
                            id: 4,
                            text: [
                                {
                                    content: 'Label accepts a String value and uses the assigned value as a label for the textbox.'
                                },
                                {
                                    content: "If a label is not provided or set as null (null), &lt;text-input&gt; will result in a text-box without a label."
                                }
                            ]
                        }
                    ] //attributes
                }, //masterDetail
            } //return
        }, //data

        beforeCreate () {

            this.$store.dispatch('setData', 'https://api.myjson.com/bins/ci3nq')
            this.$store.dispatch('initData', 'https://api.myjson.com/bins/qcjt6')
        }, //beforeCreate

        computed: {
            
            ...mapState (
                [
                    'paginatedData',
                    'metadata',
                    'selectedFilter',
                ]
            ),

            employees: function () {
                if (!this.d_searchKey) {
                    return this.$store.state.employees
                }
                else {
                    // this.employeeData= this.empData
                    return this.employeeData
                }
            },
        }, //computed

        methods: {

            selected: function (id) {
                this.d_selected= id
            }, //selected
        }, //methods

        components: {
            
            masterDetail,
            componentDetails,
            vueCard,
            vueTable,
            textInput
        }, //components

        watch: {

            d_searchKey: function (newValue, oldValue) {
                // console.log('watch()')
                if (newValue!= oldValue) {
                    // console.log(newValue, this.$store.state.employees.data.length, this.$store.state.employees.data)
                    this.tempData= this.$store.state.employees
                    this.employeeData= this.tempData
                    this.employeeData.data = this.tempData.data.filter(function (row) {
                            // console.log('YAYAaaa: ', row, this.tempData.data.length)
                            return Object.keys(row).some(function (key) {
                            // console.log('YAYA: ', row[key], String(row[key]).toLowerCase().indexOf(newValue) > -1)
                                    return String(row[key]).toLowerCase().indexOf(newValue) > -1
                        })
                    })
                }                
                // console.log(this.employeeData.data.length, this.empData.data.length, newValue)
            }, //d_searchKey
        }, //watch
    } //default
</script>
