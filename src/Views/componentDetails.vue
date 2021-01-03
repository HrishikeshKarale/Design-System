<template>
  <div class= 'componentDetails'>
	<fieldset>
	  <legend :id= 'compData.title'>
		<h3>
		  {{compData.title}}
		</h3>
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
		  <!-- definitionand usage text goes here -->
		  <div v-html= 'compData.description'/>

		  <div class= 'sampleCode'>
			<div>
			  <div class= 'title'>
				Syntax:
			  </div>
			  <div>
				<vue-clipboard
				  :copy= 'd_defaultcopy'
				  tag= 'copySyntax'
				  icon= 'fas fa-copy'
				  id= 'codeSyntax'
				  category="icon-sm"
				/>
			  </div>
			</div>
			<div>
			  <div class= 'contentImport'>

				<vue-info
				  label= 'Import Statement'
				  :value= 'compData.import'
				/>
				<vue-clipboard
				  :copy= 'compData.import'
				  tag= 'copyImportStatement'
				  text= 'import'
				  id= 'importStatement'
				  category="text-sm"
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
			<h3
			  id= 'AttributeTable'
			  href= '#AttributeTable'
			>
			  Attributes
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
			  <tr
				v-for= "(attr, index) in compData.attributes"
				:key= 'index'
			  >
				<td>
				  <a :href= '"#"+ attr.type'>
					{{attr.type}}
				  </a>
				</td>
				<td>
				  <span v-if= 'attr.type== "icon"'>
					{{typeof attr.value}}
				  </span>
				  <span v-else-if= 'attr.type!= "pattern"'>
					{{typeof attr.value}}
				  </span>
				  <span v-else>
					RegExp
				  </span>
				</td>
				<td>
				  {{attr.text}}
				</td>
			  </tr>
			</body>
		  </table>
		</div>
	  </div>
	  <div class= 'contentWrapper'>
		<div class= 'contentText'>
		  <h3
			id= 'AttributeDetails'
			href= '#AttributeDetails'
		  >
			Attributes details
		  </h3>
		</div>
		<div class= 'attributeDetails'>
		  <div
			class= 'subSection'
			v-for= "(attr, index) in compData.attributes"
			:key= 'index'
		  >
			<h4 :id= 'attr.type'>
			  {{attr.type}}
			</h4>
			<div v-html= 'attr.description'/>
			<div v-if= 'typeof attr.value!= "function" && attr.type!= "v-model" && attr.type!= "value"'>
			  <code-details
				:attributes= 'd_vModelVariables'
				:attr= "attr"
				:compName= 'compData.compName'
				:index= "index"
				:hideCode= 'd_hideCode'
				@change= 'change'
			  />
<!--
				<br><br>
				d_vModelVariables:<br> {{d_vModelVariables}}
				<br><br>
				compData:<br> {{compData.compName}}
				<br><br>
				d_hideCode:<br> {{d_hideCode}}
				<br><br>
				d_attr:<br> {{d_attr}} -->
			</div>
		  </div>
		</div>
	  </div> <!-- attr in compData.attributes LOAD ATTRIBUTE DETAILS-->
	</fieldset>
  </div>
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
	  const d_hideCode= false;
	  const d_defaultcopy= null;
	  const d_code= "";
	  const d_booleanTrue= true;
	  const d_vModelVariables= null;
	  return {
		d_hideCode,
		d_defaultcopy,
		d_code,
		d_booleanTrue,
		d_vModelVariables
	  } //return
	}, //data

	props: {

	  compData: {
		required: true,
		type: Object,
		default: function () {
		  alert('No dacompDatata passed down to componentDetails')
		}
	  },

	  d_attr: {
		required: false,
		type: Object,
		default: null
	  },
	}, //props

	methods: {

	  change: function (type, value) {
		let attributes= this.d_vModelVariables

		for (const attr in attributes) {
		  if (attributes[attr].type== type) {
			// console.log('change: ', attributes[attr].value, value, type)

			//dropdown list
			if (Array.isArray(value)) {
			  // this.d_attr= value.type
			  attributes[attr].value= value.value
			  // console.log('change!!!!!: ', value.type, type)
			}
			//searchable dropdown list
			else if (typeof value == 'object') {
			  this.d_attr= value.type
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

	  let compData= this.compData

	  let codet = '';
	  let defaultCodet = '';

	  let attr= ''
	  let data= compData.attributes
	  this.d_vModelVariables= data;
	  this.hidecode= false
	  let d_attr= this.d_attr
	  let str= ''

	  for (const attr in data) {
		let type= data[attr].type
		let value= data[attr].value
		let tempStr= null
		let defaultTempStr= null
		// console.log('0-', attr, type, value, d_attr)

		if (typeof value== 'string') {
		  // console.log('0-', attr, typeof value)
		  if (d_attr) {
			console.log(d_attr);
			let index= (d_attr.type).indexOf(type)
;            if (index!= -1){
			  let tempval= '['
			  let defaultVal= '['
			  let val
			  let D_attrValue= d_attr.value[index]

			  for (const val in D_attrValue) {

				if (value==D_attrValue[val]) {
				  tempval+='<label>'+D_attrValue[val]+'</label>'
				  defaultVal+=''+D_attrValue[val]+''
				}
				else {
				  tempval+= D_attrValue[val]
				  defaultVal+= D_attrValue[val]
				}
				if (val < D_attrValue.length-1) {
				  tempval+= ', '
				  defaultVal+= ', '
				} //formatting arrays to include commas for display
			  }
			  tempval+= ']'
			  defaultVal+= ']'
			  // console.log(tempval, defaultVal)
			  tempStr= '\t\t'+type+'= "'+tempval+'"\n';
			  defaultTempStr= '\t\t'+type+'= "'+defaultVal+'"\n';
			  break;
			}
		  }

		  tempStr= '\t\t'+type+'= "'+value+'"\n';
		  defaultTempStr= '\t\t'+type+'= "'+value+'"\n';
		}
		else if (typeof value== 'array'|| typeof value== 'object') {
		  // console.log(type, value)
		  let tempval= '['
		  let val

		  for (val in value) {
			tempval+='"'+data[attr].value[val]+'"'
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
	  this.d_defaultcopy = "<"+ compData.compName+" \n" + defaultCodet + "/>";
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
								.boxShadow(@one, @secondaryColor);
							}
						}
						&.attributeTable {
							& > table {
								.boxShadow(@one, @secondaryColor);
								& > body {
									& > tr {
										& > td,
										& > th {
											padding: @spaceMd @spaceLg;
										}
										& > th {
											color: white;
										}
										&:first-child {
											background-color: @primaryColor;
										}
										&:nth-child(2n) {
											background-color: @secondaryColor;
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