<template>
    <fieldset>
      <legend :id= 'compData.title'>
        <h3>{{compData.title}}</h3>
      </legend>
      <div class= 'contentWrapper'>
        <div class= 'contentText'>
          <div>
            <h3>Definition and Usage</h3>
          </div>
        </div>
      </div>
      <div class= 'contentWrapper'>
          <div class= 'contentText'>
            <!-- definitionand usage text goes here-->
            <div v-html= 'compData.description'/> 
            <div class= 'sampleCode'>
              <div>
                <div class= 'title'>Syntax:</div>
              <div>
              <vue-clipboard
                :componentCode= 'defaultComponentCode'
                tag= 'copySyntax'
                icon= 'fas fa-copy'
                id= 'codeSyntax'
              />
            </div>
          </div>
          <div>
            <div class= 'contentImport'>
              <vue-info
                label= 'Import Statement'
                name= 'importstatement'
                :value= 'compData.import'
              />
              <vue-clipboard
                :componentCode= 'compData.import'
                tag= 'copyImportStatement'
                text= 'copy import'
                id= 'importStatement'
              />
            </div>
          </div>
          <div>
            <div class= 'syntaxCode'>
              <pre><code v-html= 'd_code'/></pre>
            </div>
            <div class= 'syntaxComponent'>
              <slot/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class= 'contentWrapper'>
      <div class= 'contentText'>
        <div>
          <h3 id= 'AttributeTable' href= '#AttributeTable'>Attributes
          </h3>
        </div>
      </div>
      <div class= 'attributeTable'>
        <table>
          <body>
            <tr>
              <th>Name</th>
              <th>Value Type</th>
              <th>Description</th>
            </tr>
            <tr v-for= "(attr, index) in compData.attributes" :key= 'index' >
              <td>
                <a :href= '"#"+ attr.type'>{{attr.type}}</a>
              </td>
              <td>
                <span v-if= 'attr.type== "inputIcon"'>{{typeof attr.value}}</span>
                <span v-else-if= 'attr.type!= "pattern"'>{{typeof attr.value}}</span>
                <span v-else>RegExp</span>
              </td>
              <td>{{attr.text}}</td>
            </tr>
          </body>
        </table>
      </div>
    </div>
    <div class= 'contentWrapper'>
      <div class= 'contentText'>
        <h3 id= 'AttributeDetails' href= '#AttributeDetails' >
          Attributes details
        </h3>
      </div>
      <div class= 'attributeDetails'>
        <div 
          class= 'subSection'
          v-for= "(attribute, index) in compData.attributes"
          :key= 'index'
        >
          <h4 :id= 'attribute.type'>{{attribute.type}}</h4>
          <div v-html= 'attribute.description'/>
          <div v-if= 'typeof attribute.value!= "function" && attribute.type!= "v-model" && attribute.type!= "value"'>
            <code-details 
              :attributes= 'd_vModelVariables'
              :attribute= 'attribute'
              :compName= 'compData.compName'
              :hideCode= 'd_hideCode'
              :index= "index"
              @change= 'change'
            />
        </div>
      </div>
    </div>
  </div> <!-- attr in compData.attributes LOAD ATTRIBUTE DETAILS-->
</fieldset>
</template>

<script>
  import codeDetails from '@/Views/codeDetails'
  import dynamicComponent from '@/Views/dynamicComponent'
  import textInput from "@/components/FormElements/textInput";
  import passwordInput from "@/components/FormElements/passwordInput";
  import emailInput from "@/components/FormElements/emailInput";
  import numberInput from "@/components/FormElements/numberInput";
  import fileInput from "@/components/FormElements/fileInput";
  import searchableDropdownList from "@/components/FormElements/searchableDropdownList";
  import multiToggle from "@/components/FormElements/multiToggle";
  import dropdownList from "@/components/FormElements/dropdownList";
  import radioInput from "@/components/FormElements/radioInput";
  import vueDate from "@/components/FormElements/vueDate";
  import vueTextarea from "@/components/FormElements/vueTextarea";
  import vueInfo from "@/components/FormElements/vueInfo";
  import vueClipboard from "@/components/Code/vueClipboard";
  import vueModal from "@/components/UIComponents/Modal/vueModal";
  import vueButton from '@/components/UIComponents/Button'
  import vueAlert from '@/components/Alerts/vueAlert'

  export default {
  name: "componentDetails",

  data() {

    const d_vModelVariables= null;
    return {

    d_hideCode: null,

    d_vModelVariables,

    d_code: "",

    defaultComponentCode: null,

    } //return
  }, //data

  props: {

    compData: {
      required: true,
      type: Object,
      default: function () {
        alert('No compData passed down to componentDetails')
      }
    },

    attr: {
    required: false,
    type: Object,
    default: null
    },
  }, //props

  methods: { 

    change: function (type, value) {
    var attributes= this.d_vModelVariables

    for (var attr in attributes) {
      if (attributes[attr].type== type) {
      // console.log('change: ', attributes[attr].value, value, type)
           //dropdown list
      if (Array.isArray(value)) {
        // this.attr= value.type
        attributes[attr].value= value.value
        // console.log('change!!!!!: ', value.type, type)
      }
      //searchable dropdown list
      else if (typeof value == 'object') {
        this.attr= value.type
        attributes[attr].value= value.selected
        // console.log('change!!!!!: ', value.type, value.selected, type)
      }
      //any other input
      else {
        attributes[attr].value= value 
      }
      }
    }
    this.d_vModelVariables= attributes
    // console.log('change: ', attributes, this.d_vModelVariables)
    }
  }, //methods

  created() {
    // console.log('0')
    
    var compData= this.compData

    var codet = '';
    var defaultCodet = '';
    var data= compData.attributes
    this.d_vModelVariables= data;
    this.hidecode= false
    var str= ''

    for (this.attr in data) {
    var type= data[this.attr].type
    var value= data[this.attr].value
    var tempStr= null
    var defaultTempStr= null
    // console.log('0-', this.attr, type, value, this.attr)
 
    if (typeof value== 'string') {
      // console.log('0-', this.attr, typeof value)
      if (this.attr) {
      var index= (this.attr.type).indexOf(type)
      if (index!= -1){
        var tempval= '['
        var defaultVal= '['
        var val
        const attrValue= this.attr.value[index]

        for (val in attrValue) {
               if (value==attrValue[val]) {
          tempval+='<label>'+attrValue[val]+'</label>' 
          defaultVal+=''+attrValue[val]+'' 
        }
        else {
          tempval+= attrValue[val]
          defaultVal+= attrValue[val]
        } 
        if (val < attrValue.length-1) {
          tempval+= ', '
          defaultVal+= ', '
        } //formatting arrays to include commas for display
        }
        tempval+= ']'
        defaultVal+= ']'
        // console.log(tempval, defaultVal)
        tempStr= '\t\t'+type+'= "'+tempval+'"\n';
        defaultTempStr= '\t\t'+type+'= "'+defaultVal+'"\n';
      }
      }
           tempStr= '\t\t'+type+'= "'+value+'"\n';
      defaultTempStr= '\t\t'+type+'= "'+value+'"\n';
    }
    else if (typeof value== 'array'|| typeof value== 'object') {
      // console.log(type, value)
      var tempval= '['
      var val

      for (val in value) {
      tempval+='"'+data[this.attr].value[val]+'"' 
      if (val < value.length-1) {
        tempval+= ', '
      } //formatting arrays to include commas for display
      }
      tempval+= ']'

      tempStr= '\t\t'+type+'= '+tempval+'\n';
      defaultTempStr= tempStr;
    }
    else if (typeof value== 'boolean' || 
      typeof value== 'number' || 
      typeof value== 'date' ) {
      tempStr= '\t\t'+type+'= '+value+'\n';
      defaultTempStr= tempStr;
    }
    else if (typeof value== 'function') {
      tempStr= '\t\t'+type+'= '+value+'\n';
      defaultTempStr= tempStr;
    }
    else {
      tempStr= '\t\t'+type+'= '+value+'\n';
      defaultTempStr= tempStr;
    }
    codet += tempStr;
    defaultCodet += defaultTempStr;
    }
    this.d_code = "\t&lt;"+ compData.compName+" \n" + codet + "\t/&gt;";
    this.defaultComponentCode = "<"+ compData.compName+" \n" + defaultCodet + "/>";
  }, //created

  components: {
    codeDetails,
    dynamicComponent,
    textInput,
    passwordInput,
    emailInput,
    numberInput,
    searchableDropdownList,
    dropdownList,
    fileInput,
    multiToggle,
    radioInput,
    radioInput,
    vueDate,
    vueTextarea,
    vueInfo,
    vueClipboard,
    vueModal,
    vueButton,
    vueAlert,
  }, //components

  watch: {

    d_vModelVariables: function (newValue, oldValue) {
      // console.log(newValue)
      if (newValue!= oldValue){
        return newValue
      }
    }
  } //watch
} // default
</script>

<style lang= "less" scoped>

  @import (reference) "./../Less/customMixins.less";
  @import (reference) "./../Less/customVariables";

  .componentDetails {

  fieldset {
    legend {
    border-color: #333;
    margin-bottom: 16px;

    h3 {
      color: @textColor;
      font-weight: bold;
    }
    }

    div {

    &.contentWrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 16px 32px;

      div {

      &.contentText {
        width: 100%;

        & > .sampleCode {

        .displayCode();

        .boxShadow(@three);
        }
      }

      &.attributeTable {

        & > table {
               & > body {

          & > tr {
          background: white;

          & > td,
          & > th {
            padding: @spaceMd @spaceLg;
          }

          & > th {
            color: white;
          }

          &:first-child {
            background-color: grey;
          }

          &:nth-child(2n) {
            background-color: @backgroundColor;
          }
          }
        }
        }
      }
      }
    }
    }
  }
  }

</style>