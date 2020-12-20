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
    v-for= "(buttonStyle, index) in d_buttonStyle"
    :key= 'index'
  >
    <h4>
    ButtonType: {{buttonStyle}}
    </h4>
    <vue-button 
    :buttonType= 'd_buttonType'
    :buttonName= "d_buttonName"
    :buttonText= "d_buttonText"
    :buttonIcon= "d_buttonIcon"
    :buttonStyle= 'buttonStyle'
    :disabled= '!d_booleanTrue'
    :autofocus= '!d_booleanTrue'
    :formID= "d_form"
    :onClickAction= 'd_onClickAction'
    />
  </div>

  <h1>
    Cards
  </h1>
  <vue-card
    :cardTitle= 'd_cardTitle'
    :cardLogo= 'd_cardLogo'
    :actionButtons= 'd_booleanTrue'
    :cardData= 'd_cardData'
    :onClickAction= 'd_cardOnClickAction' 
    :cardFooter= 'd_cardFooter'
    :bookmark= '!d_booleanTrue'
    low= '2'
  >
    <div slot= 'actionButtons'>
    <div >  
      <vue-button 
           :buttonType= 'd_buttonType'
            buttonName= "toggleFilter"
            :buttonText= "d_buttonText"
            buttonIcon= "fas fa-times"
            buttonStyle= 'icon'
            :disabled= '!d_booleanTrue'
            :autofocus= '!d_booleanTrue'
            :formID= "d_form"
            :onClickAction= 'consoleClickDelete'
          />
        </div>
      </div>
    </vue-card>

    
    <h3>Clickable Employee Card</h3>
    <vue-card
      :cardLogo= 'd_cardLogo'
      :cardData= 'd_cardData'
      :onClickAction= 'd_cardOnClickAction' 
      low= '2'
      high= '3'
    />

    <h3>Employee Card (no click event)</h3>
    <vue-card
      :cardLogo= 'd_cardLogo'
      :cardData= 'd_cardData' 
      low= '1'
    />
    
    <h3>Customer Card</h3>
    <vue-card
      :cardTitle= 'd_cardTitle'
      :cardLogo= 'd_cardLogo'
      :actionButtons= 'd_booleanTrue'
      :cardData= 'd_cardData'
      :onClickAction= 'd_cardOnClickAction' 
      low= '2'
      high= '3'
    >
      <div slot= 'actionButtons'>
        <div>
          <vue-button 
            :buttonType= 'd_buttonType'
            buttonName= "toggleFilter"
            :buttonText= "d_buttonText"
            buttonIcon= "fas fa-times"
            buttonStyle= 'icon'
            :disabled= '!d_booleanTrue'
            :autofocus= '!d_booleanTrue'
            :formID= "d_form"
            :onClickAction= 'consoleClickDelete'
          />
        </div>
      </div>
    </vue-card>
    
    <h3>Customer Card no actionButton</h3>
    <vue-card
      :cardTitle= 'd_cardTitle'
      :cardLogo= 'd_cardLogo'
      :actionButtons= 'd_booleanTrue'
      :cardData= 'd_cardData'
      :onClickAction= 'd_cardOnClickAction' 
      :cardFooter= 'd_cardFooter'
      low= '1'
    />

    <h3>Customer Card no carts no actionButton</h3>
    <vue-card
      :cardTitle= 'd_cardTitle'
      :cardLogo= 'd_cardLogo'
      :actionButtons= 'd_booleanTrue'
      :cardData= 'd_cardData'
      :onClickAction= 'd_cardOnClickAction'
      low= '1'
    />

    <h3>Customer Card no carts no actionButton no header</h3>
    <vue-card
      :cardLogo= 'd_cardLogo'
      :actionButtons= 'd_booleanTrue'
      :cardData= 'd_cardData'
      :onClickAction= 'd_cardOnClickAction'
      low= '1'
    />


    <h3>Step Wizard</h3>  
    <vue-wizard 
      :steps= 'd_steps'
      :alerts= "{'error': d_danger, 'warning': d_warning}"
    >
      <template slot= '1'>
        <form>
          <fieldset>
            <legend>Order Processing Details</legend>
            <div>
              <text-input 
                label= "Customer"
                name= "customerField"
                :value= 'd_value'
                v-model= 'd_customerVal'
                :pattern= 'd_pattern'
                :placeholder= "d_placeholder"
                :maxlength= 'd_maxlength'
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :readonly= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                inputIcon= 'fas fa-user'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
              />
            </div>
            <div>
              <searchable-dropdown-list 
                label= "Cost Center"
                name= "costCenterField"
                v-model= 'd_costCenterVal'
                :value= 'd_costCenterVal'
                :options= 'd_warehouse'
                :pattern= 'd_pattern'
                :placeholder= 'd_placeholder'
                :strict= 'd_booleanTrue'
                :maxlength= 'd_maxlength'
                :multiple= '!d_booleanTrue'
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                inputIcon= 'fas fa-closed-captioning'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
              />
            </div>
            <div>
              <text-input 
                label= "Order Name"
                name= "orderNameField"
                v-model= 'd_OrderNameVal'
                :value= 'd_value'
                :pattern= 'd_pattern'
                :placeholder= "d_placeholder"
                :maxlength= 'd_maxlength'
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :readonly= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                inputIcon= 'fas fa-file-signature'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
              />
            </div>
            <div>
              <text-input 
                label= "Recipient"
                name= "orderNameField"
                v-model= 'd_recipientVal'
                :value= 'd_value'
                :pattern= 'd_pattern'
                :placeholder= "d_placeholder"
                :maxlength= 'd_maxlength'
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :readonly= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                inputIcon= 'fas fa-user'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
              />
            </div>
            <div>
              <searchable-dropdown-list 
                label= "Delivery Option"
                name= "customerField"
                v-model= 'd_deliveryOptionVal'
                :value= 'd_value'
                :options= 'd_warehouse'
                :pattern= 'd_pattern'
                :placeholder= 'd_placeholder'
                :strict= 'd_booleanTrue'
                :maxlength= 'd_maxlength'
                :multiple= '!d_booleanTrue'
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                inputIcon= 'fas fa-truck'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
              />
            </div>
            <div>
              <checkbox-input 
                label= 'I want to specify a date for shipping'
                name= "checkboxField"
                v-model= 'd_shipping'
                :value= 'd_value'
                :options= null
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
              />
            </div>
            <div>
              <vue-textarea 
                label= "Add a note for Recipient"
                name= "recipientNoteField"
                v-model= "d_recipientNote"
                :value= 'd_value'
                :pattern= 'd_pattern'
                :placeholder= "d_placeholder"
                :maxlength= 'd_TAmaxlength'
                :required= 'd_booleanTrue'
                :disabled= '!d_booleanTrue'
                :readonly= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                inputIcon= 'fas fa-comment'
                :inline= '!d_booleanTrue'
                @alerts= 'd_alerts'
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
                  v-model= 'd_SKU'
                  value= ''
                  placeholder= "Enter SKU..."
                  :maxlength= 'd_maxlength'
                  :required= 'd_booleanTrue'
                  :disabled= '!d_booleanTrue'
                  :readonly= '!d_booleanTrue'
                  :autofocus= '!d_booleanTrue'
                  inputIcon= 'fas fa-barcode'
                  :inline= '!d_booleanTrue'
                  @alerts= 'alerts'
                />
              </div>
              <div>
                <div>
                  <number-input 
                    label= "Quantity"
                    name= "OrderQuantity"
                    v-model= 'd_numberValue'
                    value= ''
                    placeholder= "0"
                    :required= 'd_booleanTrue'
                    :disabled= '!d_booleanTrue'
                    :readonly= '!d_booleanTrue'
                    :autofocus= '!d_booleanTrue'
                    inputIcon= 'fas fa-hashtag'
                    :inline= '!d_booleanTrue'
                    @alerts= 'alerts'
                  />
                </div>
                <div>
                  <vue-info 
                    label= "Available"
                    :value= 'd_info'
                  />
                </div>
              </div>
            </div>
            <div>
              <vue-button 
                :buttonType= 'd_buttonType'
                buttonName= "AddSKUButton"
                buttonText= "Add SKU"
                buttonIcon= "fas fa-plus"
                buttonStyle= 'icon'
                :disabled= '!d_booleanTrue'
                :autofocus= '!d_booleanTrue'
                :formID= "d_form"
                :onClickAction= 'createCard()'
              />
            </div>
          </card-background>
          <div
            v-for= '(dat, index) in d_SKUData["data"]' 
            :key= 'index'
            class= 'tagCards'
          >
            <vue-card
              :actionButtons= 'd_booleanTrue'
              :cardData= '{"cols": d_SKUData["cols"], "data": dat}'
            >
              <div slot= 'actionButtons'>
                <div >  
                  <vue-button 
                    :buttonType= 'd_buttonType'
                    buttonName= "closeButton"
                    :buttonText= "d_buttonText"
                    buttonIcon= "fas fa-times"
                    buttonStyle= 'icon'
                    :disabled= '!d_booleanTrue'
                    :autofocus= '!d_booleanTrue'
                    :formID= "d_form"
                    :onClickAction= 'delCard.bind(this, index)'
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
      <vue-navigation 
        :navigationTitles= 'd_navigation'
        :logoLink= 'd_logoLink'
        :title= 'd_title'
        @nav= 'd_nav'
      />
    </div>
  
    <h3>Header</h3>
    <div style= 'background-color: #0B304F; 
          height: fit-content;'
      >
      <vue-header>
        <div>
          <span class= 'fas fa-th' />
        </div>
      </vue-header>
    </div>
    <h3>Table</h3>
    <vue-table 
      v-if= 'd_data'
      :tableData= 'd_data'
      :columns= 'd_columns'
      :metadata= 'metadata'
      :select= 'd_columns[0]'
      :title= 'd_title'
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
  import vueNavigation from '@/components/UIComponents/Navigation/vueNavigation'
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
  
  import radioInput from "@/components/FormElements/radioInput";

  // import { store } from '@/store/store'
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'uiComponents',

    // store,

    mapState,

    mapActions,

    data () {

      //buttons
      var d_buttonType= 'button'

      var d_buttonName= 'consoleTextButton'

      var d_buttonText= 'Click Me'

      var d_buttonIcon= 'fas fa-registered'
      
      var d_buttonStyle= this.$store.state.buttonStyle

      var d_form= ''

      var d_booleanTrue= true

      var d_onClickAction= this.consoleClick

      //card
      var d_cardDetails= this.$store.state.cardDetails

      var d_customerCarts= this.$store.state.customerCarts

      var d_cardFooter= this.$store.state.customfooter

      var d_cardTitle= 'Custom Card'

      var d_cardLogo= 'fas fa-user fa-3x'

      var d_cardData= {"cols": d_cardDetails.cols, "data": d_cardDetails.data[0]}

      var d_cardOnClickAction= this.consoleClick

      //navigation
      const d_logoLink= require('@/assets/CometDocsTransparent.svg')

      var d_title= 'Sample Navigation'

      var d_navigation= this.$store.state.navigation

      var d_nav= this.nav 
      
      //table
      var d_title= 'Sample Table'

      //stepWizard
      var d_steps= [
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

      var d_label= "Warehouse"

      var d_name= "searchableDropdownField"

      var d_value= ''

      var d_searchDropboxValue= ''

      var d_pattern= '([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*'

      var d_placeholder= 'Enter a value/Select an option'

      var d_maxlength= 20

      var d_TAmaxlength= 120

      var d_booleanTrue= true

      var d_inputIcon= 'fas fa-warehouse'

      var d_alerts= this.alerts

      var d_column= ['SKU', 'Quantity', 'Available']

      var d_SKUData= {
        'cols': d_column, 
        'data': new Array()
      }

      var d_warehouse= this.$store.state.warehouse
      var d_recordsPerPage= this.$store.state.metadata.recordsPerPage

      var d_filters= {
        type: ['warehouse', 'recordsPerPage'],
        options:[d_warehouse, d_recordsPerPage ]
      }

      var d_filterSelected= {
        type: ['warehouse'],
        value:['Rochester']
      }      

      var d_columns= [
        'Order Number',
        'Status',
        'Created On',
        'Created By'
      ]

      return {
        d_radioValue: null,
        d_options: ["Rochester", "Harrisburg", "Reno", "Oklahoma", "Buffalo"],

        d_columns: d_columns,

        d_filters: d_filters,
        d_filterSelected: d_filterSelected,

        //tag
        d_maxlength: 20,
        d_value: null,
        d_SKU: null,
        d_SKUData: d_SKUData,
        d_numberValue: null,
        d_info: 900,

        //stepWaizard

        d_SKUData: d_SKUData,

        d_label: d_label,

        d_name: d_name,

        d_value: d_value,

        d_searchDropboxValue: d_searchDropboxValue,

        d_pattern: d_pattern,

        d_placeholder: d_placeholder,

        d_maxlength: d_maxlength,

        d_TAmaxlength: d_TAmaxlength,

        d_booleanTrue: d_booleanTrue,

        d_inputIcon: d_inputIcon,

        d_alerts: d_alerts,

        d_danger: null,

        d_warning: null,

        d_customerVal: null,

        d_costCenterVal: null,

        d_OrderNameVal: null,

        d_recipientVal: null,

        d_deliveryOptionVal: null,

        d_shipping: false,

        d_recipientNote: null,

        d_steps: d_steps,

        //table
        d_title: d_title,

        //button

        d_buttonType: d_buttonType,

        d_buttonName: d_buttonName,

        d_buttonText: d_buttonText,

        d_buttonIcon: d_buttonIcon,

        d_buttonStyle: d_buttonStyle,

        d_booleanTrue: d_booleanTrue,

        d_form: d_form,

        d_onClickAction: d_onClickAction,

        //card
        d_customerCarts: d_customerCarts,

        d_customerCarts: d_customerCarts,

        d_cardFooter: d_cardFooter,

        d_cardTitle: d_cardTitle,
        
        d_cardLogo: d_cardLogo,

        d_cardData: d_cardData,

        d_cardOnClickAction: d_cardOnClickAction,

        //navigation
         d_logoLink: d_logoLink,

        d_title: d_title,

        d_navigation: d_navigation,

        d_nav: d_nav,

        content: false,
      } //return
    }, //data

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

      updateFilter: function (filter) {
        var index= this.d_filterSelected["type"].indexOf(filter.type)
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
        this.d_SKUData.data.splice(index, 1)
      }, //delCard

      createCard: function () {
        var quantity= this.d_numberValue
        var sku= this.d_SKU
        var info= this.d_info
        var data= new Array()
        // console.log('data: ', sku, quantity, info)
          
        if (quantity && sku) {
          // console.log('this', this.d_SKUData['data'][0])
          if (this.d_SKUData['data'][0]){
            this.d_SKUData['data'].push(new Array(sku, quantity, info))
            // console.log('data: ', typeof this.d_SKUData['cols'], Array.isArray(this.d_SKUData), Array.isArray(this.d_SKUData.cols), this.d_SKUData)
          }
          else{
            // console.log('cols: ', typeof this.d_SKUData.cols, Array.isArray(this.d_SKUData), Array.isArray(this.d_SKUData.cols), this.d_SKUData)
            this.d_SKUData['data']= new Array(new Array(sku, quantity, info))
          }
        }
        else{
          // console.log('ERROR in data')
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
          this.d_danger= message;
        }
        else {
          this.d_warning= message;
        }
      }, //alerts
    }, //methods

    computed: {

      ...mapState (
        {
          d_navData: 'navigation',
          d_warehouse: 'warehouse',
          d_data: 'paginatedData',
          empData: 'employees'
        }
      ),

      ...mapState (
        [
          'paginatedData',
          'metadata',
          // 'selectedFilter',
        ]
      ),
    }, //computed

    beforeCreate () {

      this.$store.dispatch('initData', 'https://api.myjson.com/bins/qcjt6')
    }, //beforeCreate

    components: {

      vueFilter,
      vueButton,
      vueCard,
      vueNavigation,
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

  @import (reference) "./../Less/customMixins.less";
  @import (reference) "./../Less/customVariables.less";

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
