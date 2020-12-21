<template>
<div class= 'navReassign'>
    <vue-wizard 
      :steps= 'd_steps'
      :alerts= "{'error': d_danger, 'warning': d_warning}"
    >
      <template slot= '1'>
        <master-detail
          :selected= 'd_selected'
          v-if= 'empData'
        >
          <template slot= 'master' >     
            <div
              v-for= '(emp, index) in empData.data'
              :key= 'index'
            >
              <vue-card
                cardLogo= 'fas fa-user fa-3x'
                :cardData= '{"cols": empData.cols, "data": emp}'
                :ctx= 'select.bind(this, emp[0])'
                :low= 'd_selected==emp[0]? "2": "4"'
                :class= '{selected: (d_selected==emp[0])}'
              />
            </div>
          </template>

          <template slot= 'detail'>
            <div v-if= 'd_selected'>
              {{d_selected}}
              <vue-table 
                :tableData= 'data.data'
                :columns= 'data.cols'
                :metadata= 'metadata'
                :title= 'd_selected'
                low= '1'
              />
            </div>
            <div 
              v-else
              class= 'defaultDetail'
            >
              <h1>
                Please select an employee to see the details of his/her assignments for the day.
              </h1>
            </div>
          </template>
        </master-detail>
      
      </template>

      <template slot= '2'>
        <h3>Product Details</h3>
        <div class= 'two'/>
      </template>
    </vue-wizard> 
  </div>  
</template>

<script>

  import vueCard from '@/components/UIComponents/Cards/vueCard'
  import vueTable from '@/components/UIComponents/Table/vueTable'
  import vueWizard from '@/components/UIComponents/StepWizard/vueWizard' 
  import searchableDropdownList from "@/components/FormElements/searchableDropdownList"
  import masterDetail from '@/components/UIComponents/MasterDetail/masterDetail'
  import textInput from "@/components/FormElements/textInput";

  // import { store } from '@/store/store'
  import { mapGetters, mapState } from 'vuex';

  export default {
    name:'navReassign',

    // store,

    mapGetters,

    mapState, 

    data() {
      
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

      return {

        d_steps: d_steps,

        d_selected: null,

        employeeData: null,

        tempData: null,

      } //return
    }, //data

    components: {

      vueWizard,
      searchableDropdownList,
      vueCard,
      vueTable,
      vueWizard,
      textInput,
      masterDetail,
    }, //components

    computed: {

      ...mapState (
        [
          'paginatedData',
          'metadata',
          'selectedFilter',
        ]
      ),

      ...mapState (
        {
          empData: 'employees'
        }
      ),

      ...mapState (['paginatedData'] ),
    }, //computed

    methods: {

      select: function (id) {
        this.d_selected= id
        // console.log(id)
      }, //select
    }, //methods

    beforeCreate () {

      this.$store.dispatch('setData', 'https://api.myjson.com/bins/ci3nq')
      this.$store.dispatch('initData', 'https://api.myjson.com/bins/qcjt6')
    }, //beforeCreate
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) "./../../Less/customMixins.less";
  @import (reference) "./../../Less/customVariables.less";

  .navReassign {

    .defaultDetail {
      width: 100%;
      background-color: @infoBackground;
      padding: @spaceLg @spaceXl;

      h1 {    
        text-align: center;
      }
    }
  }
</style>

