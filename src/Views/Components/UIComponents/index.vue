<template>
  <div class= "uiComponents">
  <h1>
    Filters
  </h1>
  <vue-filter
    :filters= 'd_filters'
    :selected= 'd_filterSelected'
    @updateFilter= "updateFilter"
  />

  <h1>
    Buttons
  </h1>
  <div
    v-for= "(category, index) in d_category"
    :key= 'index'
  >
    <h4>
    type: {{category}}
    </h4>
    <vue-button 
      tag= "consoleTextButton"
      text= "Click Me "
      icon= "fas fa-registered"
      category= 'category'
      :ctx= 'd_ctx'
    />
  </div>

  <h1>
    Cards
  </h1>
  <vue-card
    title= 'Sample Navigation'
    logo= 'fas fa-user fa-3x'
    :details= 'd_details'
    :ctx= 'd_carctx' 
    :cardFooter= 'd_cardFooter'
    :bookmark= 'bookmark'
    @bookmark="val => bookmark = val"
    low= '2'
  >
    <div slot= 'actionButtons'>
      <div >  
      <vue-button
            tag= "toggleFilter"
            text= "Click Me "
            icon= "fas fa-times"
            category= 'icon'
            :ctx= 'consoleClickDelete'
          />
      </div>
    </div>
  </vue-card>

    
    <h3>Clickable Employee Card</h3>
    <vue-card
      logo= 'fas fa-user fa-3x'
      :details= 'd_details'
      :ctx= 'd_carctx' 
      low= '2'
      high= '3'
    />

    <h3>Employee Card (no click event)</h3>
    <vue-card
      logo= 'fas fa-user fa-3x'
      :details= 'd_details' 
      low= '1'
    />
    
    <h3>Customer Card</h3>
    <vue-card
      title= 'Custom Card'
      logo= 'fas fa-user fa-3x'
      :details= 'd_details'
      :ctx= 'd_carctx' 
      low= '2'
      high= '3'
    >
      <div slot= 'actionButtons'>
        <div>
          <vue-button 
            tag= "toggleFilter"
            text= "Click Me "
            icon= "fas fa-times"
            category= 'icon'
            :ctx= 'consoleClickDelete'
          />
        </div>
      </div>
    </vue-card>
    
    <h3>Customer Card no actionButton</h3>
    <vue-card
      title= 'Custom Card'
      logo= 'fas fa-user fa-3x'
      :details= 'd_details'
      :ctx= 'd_carctx' 
      :cardFooter= 'd_cardFooter'
      low= '1'
    />

    <h3>Customer Card no carts no actionButton</h3>
    <vue-card
      title= 'Custom Card'
      logo= 'fas fa-user fa-3x'
      :details= 'd_details'
      :ctx= 'd_carctx'
      low= '1'
    />

    <h3>Customer Card no carts no actionButton no header</h3>
    <vue-card
      logo= 'fas fa-user fa-3x'
      :details= 'd_details'
      :ctx= 'd_carctx'
      low= '1'
    />


    <h3>Step Wizard</h3>  
    <vue-wizard 
      :steps= 'd_steps'
      :alert= "{'error': danger, 'warning': warning}"
    >
      <template slot= '1'>
        <form>
          <fieldset>
            <legend>Order Processing Details</legend>
            <div>
              <text-input 
                label= "Customer"
                name= "customerField"
                :value= 'd_customerVal'
                :pattern= 'd_pattern'
                placeholder= "Enter a value/Select an option"
                :maxlength= 'd_maxlength'
                :required= 'd_booleanTrue'
                inputIcon= 'fas fa-user'
                @notify= 'alerts'
                @value= "val=> d_customerVal = val"
              />
            </div>
            <div>
              <searchable-dropdown-list 
                label= "Cost Center"
                name= "costCenterField"
                :value= 'd_costCenterVal'
                :options= 'd_warehouse'
                :pattern= 'd_pattern'
                placeholder= 'Enter a value/Select an option'
                :strict= 'd_booleanTrue'
                :maxlength= 'd_maxlength'
                :required= 'd_booleanTrue'
                inputIcon= 'fas fa-closed-captioning'
                @notify= 'alerts'
                @value= "val=> d_costCenterVal = val"
              />
            </div>
            <div>
              <text-input 
                label= "Order Name"
                name= "orderNameField"
                :value= 'd_OrderNameVal'
                :pattern= 'd_pattern'
                placeholder= "Enter a value/Select an option"
                :maxlength= 'd_maxlength'
                :required= 'd_booleanTrue'
                inputIcon= 'fas fa-file-signature'
                @notify= 'alerts'
                @value= "val=> d_orderNameVal = val"
              />
            </div>
            <div>
              <text-input 
                label= "Recipient"
                name= "orderNameField"
                :value= 'd_recipientVal'
                :pattern= 'd_pattern'
                placeholder= "Enter a value/Select an option"
                :maxlength= 'd_maxlength'
                :required= 'd_booleanTrue'
                inputIcon= 'fas fa-user'
                @notify= 'alerts'
                @value= "val=> d_recipientVal = val"
              />
            </div>
            <div>
              <searchable-dropdown-list 
                label= "Delivery Option"
                name= "customerField"
                :value= 'd_deliveryOptionVal'
                :options= 'd_warehouse'
                :pattern= 'd_pattern'
                placeholder= 'Enter a value/Select an option'
                :strict= 'd_booleanTrue'
                :maxlength= 'd_maxlength'
                :required= 'd_booleanTrue'
                inputIcon= 'fas fa-truck'
                @notify= 'alerts'
                @value= 'val=> d_deliveryOptionVal = val'
              />
            </div>
            <div>
              <checkbox-input 
                label= 'I want to specify a date for shipping'
                name= "checkboxField"
                :value= 'd_shipping'
                :options= null
                :required= 'd_booleanTrue'
                @notify= 'alerts'
                @value= "val=> d_shipping = val"
              />
            </div>
            <div>
              <vue-textarea 
                label= "Add a note for Recipient"
                name= "recipientNoteField"
                :value= 'd_recipientNote'
                :pattern= 'd_pattern'
                placeholder= "Enter a value/Select an option"
                :maxlength= 'd_TAmaxlength'
                :required= 'd_booleanTrue'
                inputIcon= 'fas fa-comment'
                @notify= 'alerts'
                @value= "val=> d_recipientNote = val"
              />
            </div>
          </fieldset>
        </form>
      </template>

      <template slot= '2'>
        <h3>Product Details</h3>
        <div class= 'two'/>
        <div class= 'tag'>
          <card-background
            low= '1'
          >
            <div class= 'content'>
              <div>
                <text-input 
                  label= "SKU"
                  name= "SKUinputName"
                  :value= 'd_SKU'
                  placeholder= "Enter SKU..."
                  :maxlength= 'd_maxlength'
                  :required= 'd_booleanTrue'
                  inputIcon= 'fas fa-barcode'
                  @notify= 'alerts'
                  @value= 'val=> d_SKU = val'
                />
              </div>
              <div>
                <div>
                  <number-input 
                    label= "Quantity"
                    name= "OrderQuantity"
                    :value= 'd_numberValue'
                    value= ''
                    placeholder= "0"
                    :required= 'd_booleanTrue'
                    inputIcon= 'fas fa-hashtag'
                    @notify= 'alerts'
                    @value= 'val=> d_numberValue = val'
                  />
                </div>
                <div>
                  <vue-info 
                    label= "Available"
                    :value= 'info'
                  />
                </div>
              </div>
            </div>
            <div>
              <vue-button 
                tag= "AddSKUButton"
                text= "Add SKU"
                icon= "fas fa-plus"
                category= 'icon'
                :ctx= 'createCard()'
              />
            </div>
          </card-background>
          <div
            v-for= '(dat, index) in d_SKUdetails["details"]' 
            :key= 'index'
            class= 'tagCards'
          >
            <vue-card
              :details= '{"cols": d_SKUdetails["cols"], "details": dat}'
            >
              <div slot= 'actionButtons'>
                <div >  
                  <vue-button 
                    tag= "closeButton"
                    text= "Click Me "
                    icon= "fas fa-times"
                    category= 'icon'
                    :ctx= 'delCard.bind(this, index)'
                  />
                </div>
              </div>
            </vue-card>
          </div>
        </div>
      </template>
    </vue-wizard>

    <h3>Navigation</h3>
    <div style= 'background-color: grey; 
          width: fit-content'
    >
      <side-nav :logo-link="d_logoLink" :nav="d_nav" />
    </div>
  
    <h3>Header</h3>
    <div style= 'background-color: #0B304F; 
          height: fit-content;'
      >
        <vue-header
          :logoLink= 'd_logoLink'
          nav= '["nav1", "nav2", "nav3", "nav4", "nav5"]'
        />
    </div>
    <h3>Table</h3>
    <vue-table 
      v-if= 'd_details'
      :tabledetails= 'd_details'
      :columns= 'd_columns'
      :metadetails= 'metadetails'
      :select= 'd_columns[0]'
      title= 'Sample Table'
      low= '1'
      @setPage= 'setPage'
      @setSortKey= 'setSortKey'
      @selectRow= 'selectRow'
      @setRowElements= 'setRowElements'
      @toggleCloumns= 'toggleCloumns'
    />
  </div>
</template>

<script>

  import vueFilter from "@/components/UIComponents/Filter/vueFilter"
  import vueButton from "@/components/UIComponents/Buttons"
  import vueCard from '@/components/UIComponents/Cards/vueCard'
  import sideNav from '@/components/UIComponents/Navigation/sideNav'
  import vueHeader from '@/components/UIComponents/Navigation/vueHeader'
  import vueTable from '@/components/UIComponents/Table/vueTable'
  import vueWizard from '@/components/UIComponents/StepWizard/vueWizard' 
  import searchableDropdownList from "@/components/FormElements/searchableDropdownList"
  import textInput from "@/components/FormElements/textInput";
  import checkboxInput from "@/components/FormElements/checkboxInput";
  import vueTextarea from "@/components/FormElements/vueTextarea";
  import numberInput from "@/components/FormElements/numberInput";
  import vueInfo from "@/components/FormElements/vueInfo";
  import cardBackground from '@/components/UIComponents/Cards/cardBackground'
  import { alerts } from "@/typeScript/common/alerts";  
  import radioInput from "@/components/FormElements/radioInput";

  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'uiComponents',   

        mixins: [ alerts ],

    // store,

    mapState,

    mapActions,

    details () {
      //buttons
      const d_category= this.$store.state.category;
      const d_booleanTrue= true
      const bookmark= d_booleanTrue
      const d_ctx= this.consoleClick
      //card
      const d_cardDetails= this.$store.state.cardDetails
      const d_customerCarts= this.$store.state.customerCarts
      const d_cardFooter= this.$store.state.customfooter
      const d_details= {"cols": d_cardDetails.cols, "details": d_cardDetails.details[0]}
      const d_carctx= this.consoleClick
      //navigation
      const d_navigation= this.$store.state.navigation
      const d_nav= this.nav
      //stepWizard
      const d_steps= [
        {
          id: 1,
          title: "Order details",
          icon_class: "fa fa-user"
        },
        {
          id: 2,
          title: "Select Items",
          icon_class: "fa fa-th-list"
        }
      ]
      const d_pattern= '([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*'
      const d_maxlength= 20
      const d_TAmaxlength= 120
      const d_column= ['SKU', 'Quantity', 'Available']
      const d_SKUdetails= {
        'cols': d_column, 
        'details': new Array()
      }
      const d_warehouse= this.$store.state.warehouse
      const d_recordsPerPage= this.$store.state.metadetails.recordsPerPage
      const d_filters= {
        type: ['warehouse', 'recordsPerPage'],
        options:[d_warehouse, d_recordsPerPage ]
      }
      const d_filterSelected= {
        type: ['warehouse'],
        value:['Rochester']
      }
      const d_columns= [
        'Order Number',
        'Status',
        'Created On',
        'Created By'
      ]
      return {
        d_radioValue: null,
        d_options: ["Rochester", "Harrisburg", "Reno", "Oklahoma", "Buffalo"],
        d_columns,
        d_filters,
        d_filterSelected,
        //tag
        d_maxlength: 20,
        d_SKU: null,
        d_SKUdetails,
        d_numberValue: null,
        info: 900,
        //stepWaizard
        d_SKUdetails,
        bookmark,
        d_pattern,
        d_maxlength,
        d_TAmaxlength,
        d_booleanTrue,
        danger: null,
        warning: null,
        d_customerVal: null,
        d_costCenterVal: null,
        d_OrderNameVal: null,
        d_recipientVal: null,
        d_deliveryOptionVal: null,
        d_shipping: false,
        d_recipientNote: null,
        d_steps,
        //button
        d_category,
        d_booleanTrue,
        d_ctx,
        //card
        d_customerCarts,
        d_customerCarts,
        d_cardFooter,
        d_details,
        d_carctx,
        //navigation
         d_logoLink,
        d_navigation,
        d_nav,
        content: false,
      } //return
    }, //details

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
        const tempColumns= this.d_columns

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

      updateFilter: function (filter) {
        const index= this.d_filterSelected["type"].indexOf(filter.type)
        // console.log(filter, index, this.d_filterSelected["value"][index]== filter.value)

        //type alerady exists
        if (index!= -1) {
          if (this.d_filterSelected["value"][index]== filter.value) {
            this.d_filterSelected['type'].splice(index, 1)
            this.d_filterSelected['value'].splice(index, 1)
          }
          else {
            this.d_filterSelected['value'].splice(index, 1, filter.value)
          }
        }
        else {
          this.d_filterSelected['type'].push(filter.type) 
          this.d_filterSelected['value'].push(filter.value)
        }

      }, //updateFilter

      delCard: function (index) {
        this.d_SKUdetails.details.splice(index, 1)
      }, //delCard

      createCard: function () {
        const quantity= this.d_numberValue
        const sku= this.d_SKU
        const info= this.info
        const details= new Array()
        // console.log('details: ', sku, quantity, info)
                 if (quantity && sku) {
          // console.log('this', this.d_SKUdetails['details'][0])
          if (this.d_SKUdetails['details'][0]){
            this.d_SKUdetails['details'].push(new Array(sku, quantity, info))
            // console.log('details: ', typeof this.d_SKUdetails['cols'], Array.isArray(this.d_SKUdetails), Array.isArray(this.d_SKUdetails.cols), this.d_SKUdetails)
          }
          else{
            // console.log('cols: ', typeof this.d_SKUdetails.cols, Array.isArray(this.d_SKUdetails), Array.isArray(this.d_SKUdetails.cols), this.d_SKUdetails)
            this.d_SKUdetails['details']= new Array(new Array(sku, quantity, info))
          }
        }
        else{
          // console.log('ERROR in details')
        }
      }, //createCard
           nav: function (id) {
        this.d_selected= id

        if (id) {
          this.content= true   
        }
        else {
          this.content= false
        }
      }, 

      consoleClickDelete: function () {
        // console.log("CardClickClose")
      }, // consoleClickClose

      consoleClick: function () {
        // console.log("CardClick")
      }, // consoleClick

      consoleClickNull: function () {
      }, // consoleClickNull

      //handels alerts thrown by the component
      alerts: function (type, message) {
        if (type== 'error') {
          this.danger= message;
        }
        else {
          this.warning= message;
        }
      }, //alerts
    }, //methods

    computed: {

      ...mapState (
        {
          d_navdetails: 'navigation',
          d_warehouse: 'warehouse',
          d_details: 'paginateddetails',
          empdetails: 'employees'
        }
      ),

      ...mapState (
        [
          'paginateddetails',
          'metadetails',
          // 'selectedFilter',
        ]
      ),
    }, //computed

    beforeCreate () {

      this.$store.dispatch('initdetails', 'https://api.myjson.com/bins/qcjt6')
    }, //beforeCreate

    components: {

      vueFilter,
      vueButton,
      vueCard,
      sideNav,
      vueHeader,
      vueTable,
      radioInput,
           vueWizard,
      searchableDropdownList,
      textInput,
      checkboxInput,
      vueTextarea,
      numberInput,
      vueInfo,
      cardBackground,
    }, //components
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) "../../../Less/customMixins.less";
  @import (reference) "../../../Less/customVariables.less";

  .uiComponents {

    .tag {
      width: fit-content;
      margin-bottom: 32px;

      & > .content,
      & > div {
          display: flex;
          flex-direction: row;
          padding: @spaceMd @spaceLg;
          max-width: 100%;
          background-color: @backgroundColor;

        & > div {
          display: flex;
          flex-direction: column;

          & > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            justify-items: center;
                       & > div {
                            > div {
              &:last-child{
                               background-color: red;
                }
              }
            }
          }
        }
      }
           & > .tagCards {
        background-color: transparent;
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
