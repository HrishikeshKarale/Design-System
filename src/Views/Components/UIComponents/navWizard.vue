<template>
  <component-details
    :compData= 'd_wizard'
  >
    <vue-wizard
      :steps= 'd_steps'
      :alert= "{'error': danger, 'warning': warning}"
    >
      <template slot= '1'>
        <h3>Order Processing Details</h3>
        <div>
          <text-input
            label= "Customer"
            name= "customerField"
            :value= 'd_customerVal'
            :pattern= 'd_pattern'
            :placeholder= "d_placeholder"
            :maxlength= 'd_maxlength'
            :required= 'd_booleanTrue'
            icon= 'fas fa-user'
            @notify= 'alerts'
            @value= 'val=> d_customerVal = val'
          />
        </div>
        <div>
          <searchable-dropdown-list
            label= "Cost Center"
            name= "costCenterField"
            :value= 'd_costCenterVal'
            :options= 'warehouse'
            :pattern= 'd_pattern'
            :placeholder= 'd_placeholder'
            :strict= 'd_booleanTrue'
            :maxlength= 'd_maxlength'
            :required= 'd_booleanTrue'
            icon= 'fas fa-closed-captioning'
            @notify= 'alerts'
            @value= 'val=> d_costCentreVal = val'
          />
        </div>
        <div>
          <text-input
            label= "Order Name"
            name= "orderNameField"
            :value= 'd_OrderNameVal'
            :pattern= 'd_pattern'
            :placeholder= "d_placeholder"
            :maxlength= 'd_maxlength'
            :required= 'd_booleanTrue'
            icon= 'fas fa-file-signature'
            @notify= 'alerts'
            @value= 'val=> d_OrderNameVal = val'
          />
        </div>
        <div>
          <text-input
            label= "Recipient"
            name= "orderNameField"
            :value= 'd_recipientVal'
            :pattern= 'd_pattern'
            :placeholder= "d_placeholder"
            :maxlength= 'd_maxlength'
            :required= 'd_booleanTrue'
            icon= 'fas fa-user'
            @notify= 'alerts'
            @value= 'val=> d_recipientVal = val'
          />
        </div>
        <div>
          <searchable-dropdown-list
            label= "Delivery Option"
            name= "customerField"
            :value= 'd_deliveryOptionVal'
            :options= 'warehouse'
            :pattern= 'd_pattern'
            :placeholder= 'd_placeholder'
            :strict= 'd_booleanTrue'
            :maxlength= 'd_maxlength'
            :required= 'd_booleanTrue'
            icon= 'fas fa-truck'
            @notify= 'alerts'
            @value= 'val=> d_deliveryOptionVal = val'
          />
        </div>
        <div>
          <checkbox-input
            label= 'I want to specify a date for shipping'
            name= "checkboxField"
            :value= 'd_shipping'
            :required= 'd_booleanTrue'
            @notify= 'alerts'
            @value= 'val=> d_shipping = val'
          />
        </div>
        <div>
          <vue-textarea
            label= "Add a note for Recipient"
            name= "recipientNoteField"
            :value= "d_recipientNote"
            :pattern= 'd_pattern'
            :placeholder= "d_placeholder"
            :required= 'd_booleanTrue'
            icon= 'fas fa-comment'
            @notify= 'alerts'
            @value= 'val=> d_recipientNote = val'
          />
        </div>
      </template>
      <template slot= '2'>
        <h3>Product Details</h3>
        <div class= 'two'/>
      </template>
    </vue-wizard>
  </component-details>
</template>

<script>

  import { vueWizard } from "vue2-component-library"
  import { vueSearchableDropdown as searchableDropdownList  } from "vue2-component-library"
  import componentDetails from '@/Views/componentDetails'
  import { vueText as textInput  } from "vue2-component-library"
  import { vueCheckbox  as checkboxInput } from "vue2-component-library"
  import { vueTextarea } from "vue2-component-library"

  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'uiComponents',

    mapState,

    data () {
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
      const d_label= "Warehouse"
      const d_name= "searchableDropdownField"
      const d_value= ''
      const d_searchDropboxValue= ''
      const d_options= this.$store.state.warehouse
      const d_pattern= '([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*'
      const d_placeholder= 'Enter a value/Select an option'
      const d_maxlength= 20
      const d_booleanTrue= true
      const d_icon= 'fas fa-warehouse'
      const d_alerts= this.alerts
      return {
        d_label: d_label,
        d_name: d_name,
        d_value: d_value,
        d_searchDropboxValue: d_searchDropboxValue,
        d_options: d_options,
        d_pattern: d_pattern,
        d_placeholder: d_placeholder,
        d_maxlength: d_maxlength,
        d_booleanTrue: d_booleanTrue,
        d_icon,
        d_alerts: d_alerts,
        danger: null,
        warning: null,
        d_customerVal: null,
        d_costCenterVal: null,
        d_OrderNameVal: null,
        d_recipientVal: null,
        d_deliveryOptionVal: null,
        d_shipping: false,
        d_recipientNote: null,
        d_steps: d_steps
      } //return
    }, //data

    computed: {
      ...mapState (['warehouse'] ),

        d_wizard: function() {
          return {
          title: 'Step Wizard',
          compName: 'vue-wizard',
          import: 'import { vueWizard } from "vue2-component-library"',
          description: '<p></p>',
          attributes: [
            {
              type: "steps",
              value: this.d_steps,
              description: '<p>The steps attribute provides widget ith total no of steps, their title and the icons for each step for the wizard.\
              The steps attribute accepts an Array of objects, where each object specifies the title and icon for each step for the wizard.\
              <p>This is a required field and cannot be left null/empty.</p>',
              text: 'Specifies the steps that the wizard needs to walk through before the user submits the request'
            },
            {
              type: "alert",
              value: {'error': this.d_danger, 'warning': this.d_warning},
              description: '<p>The steps attribute provides widget ith total no of steps, their title and the icons for each step for the wizard.\
              The steps attribute accepts an Array of objects, where each object specifies the title and icon for each step for the wizard.\
              <p>This is a required field and cannot be left null/empty.</p>',
              text: 'Specifies the steps that the wizard needs to walk through before the user submits the request'
            },
          ] //attributes
        }
      }  //wizard
    },

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
        // console.log("WizardClick")
      }, // consoleClick

    }, //methods

    components: {

      vueWizard,
      componentDetails,
      searchableDropdownList,
      textInput,
          checkboxInput,
            vueTextarea
        }, //components
    } //default
</script>
