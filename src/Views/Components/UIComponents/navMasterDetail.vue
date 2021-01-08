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
            :value= 'd_searchKey'
            icon= 'fas fa-search'
            @notify= 'alerts'
            @value= 'val=> d_searchKey = val'
          />
          <template slot='master'>                      	<div
              v-for= '(emp, index) in employees.data'
              :key= 'index'
            >
              <vue-card
                logo= 'fas fa-user fa-3x'
                :details= '{"cols": employees.cols, "values": emp}'
                :ctx= 'selected.bind(this, emp[0])'
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
  import vueTable from "vue2-component-library"
  import masterDetail from '@/components/UIComponents/MasterDetail/masterDetail'
  import componentDetails from '@/Views/componentDetails'
  import { vueText as textInput  } from "vue2-component-library"

  import { mapGetters, mapState } from 'vuex';

  export default {
    name: 'navMasterDetail',

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

          description: '<p>The &lt;master-detail&gt; tag specifies an input field where user can enter tect data. &lt;master-detail&gt; elements are used within a &lt;form&gt; element to declare input controls that allow users to input data.An &lt;master-detail&gt; tag can vary in many ways, depending on the type attribute. The attributes for the master-detail tag can be seen in the sample code. </p>',
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
        }                 // console.log(this.employeeData.data.length, this.empData.data.length, newValue)
      }, //d_searchKey
    }, //watch
  } //default
</script>
