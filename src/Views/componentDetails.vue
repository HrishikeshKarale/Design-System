<template>
	<article :id= 'compData.title'>
		  <header>
				<h3>Definition and Usage</h3>
		  </header>
		  <!-- definitionand usage text goes here -->
		  <p v-html= 'compData.description'/>
		<section id= 'sampleCode'>
			<div class= 'title'>
				Syntax:
				<vue-clipboard
					:copy= 'd_defaultcopy'
					tag= 'copySyntax'
					icon= 'fas fa-copy'
					id= 'codeSyntax'
					category= "icon-sm"
				/>
			</div>
			<div class= 'import' v-if= "compData.import">
				<vue-info
					label= 'Import Statement'
					:value= 'compData.import'
				/>
				<vue-clipboard
					:copy= 'compData.import'
					tag= 'copyImportStatement'
					text= 'import'
					id= 'importStatement'
					category= "text-sm"
				/>
			</div>
			<div class= 'import' v-if= "compData.pattern">
				<vue-info
					label= 'Pattern'
					:value= 'compData.pattern.toString()'
				/>
				<vue-clipboard
					:copy= 'compData.pattern.toString()'
					tag= 'copyImportStatement'
					text= 'RegExp'
					id= 'pattern'
					category= "text-sm"
				/>
			</div>
			<div class= 'syntaxCode'>
				<pre><code v-html= 'd_code'/></pre>
				<slot/>
			</div>
		</section>
	  <section id= 'Attribute List' v-if="compData.attributes">
		  <header>
				<h3>
					Attributes
				</h3>
		  </header>
			<div class= 'subSection'>
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
								<span v-if= 'attr.type== "icon"'>{{typeof attr.value}}</span>
								<span v-else-if= 'attr.type!= "pattern"'>{{typeof attr.value}}</span>
								<span v-else>RegExp</span>
							</td>
							<td>
								{{attr.text}}
							</td>
						</tr>
					</body>
				</table>
			</div>
	  </section>
		<section v-if="compData.attributes" id = 'Attribute Details'>
			<header>
				<h3>
					Attributes details
				</h3>
			</header>
				<div
					v-for= "(attr, index) in compData.attributes"
					:key= 'index'
				 	:id= "attr.type"
					class= 'subSection'
				>
					<header :id= 'attr.type'>
						<h4>
							{{attr.type}}
						</h4>
					</header>
					<div v-html= 'attr.description'/>
					<code-details
						class= "playpen"
						:attributes= 'd_vModelVariables'
						:attr= "attr"
						:compName= 'compData.compName'
						:index= "index"
						:hideCode= 'd_hideCode'
						@change= '(index, val) => (d_vModelVariables[index] = val)'
					/>
				</div>
	  </section>
	</article>
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
  import checkboxInput from "@/components/FormElements/checkboxInput";
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
		//used by clipboard to copy code
		const d_defaultcopy= null;
		//used to display code as text
		const d_code= "";
		// creats a copy of compData for manipulation and as a prop to code details
	  const d_vModelVariables= null;
	  return {
		d_hideCode,
		d_defaultcopy,
		d_code,
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

		objectString: function(value) {
			let tempval = '\t\t{\n'
			const tempKey = Object.keys(value);
			for (const key in tempKey) {
				const val = value[tempKey[key]];
				if(typeof val === "object") {
					if(Array.isArray(val)) {
						return this.arrayString(val);
					}
					else {
						return this.objectString(val);
					}
				}
					tempval += '\t\t\t'+ tempKey[key] +': ' + (val ? val : '""');
					if (key < tempKey.length-1) {
						tempval+= ',\n'
					}
			}
			tempval+= '\n\t\t}\n'
			return tempval;
		}, //objectString

		arrayString: function(value) {
			let tempval= '\t[\n';
		  for (const val in value) {
				if(typeof value[val] === "object" && Array.isArray(value[val])) {
					tempval+= '\t"'+value[val]+'"'
					//formatting arrays to include commas for display
					if (val < value.length-1) {
						tempval+= ',\n'
					}
				} else {
					tempval += this.objectString(value[val]);
				}
		  }
		  tempval+= '\n\t]\n'
			return tempval;
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
		// console.log('0-', attr, type, value, d_attr)<side-nav

		if (typeof value== 'string') {
			// console.log('0-', attr, typeof value)
			// const base64RegExp = new RegExp(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/)
			// if(base64RegExp.test(value)) {
			// 	console.log("base64 Detected");
			// }

			//check if base64 encoded
			if(value.includes("base64")) {
				//check if type is image/svg
				if(value.includes("data:image/svg")) {
					value = "require('@/path/filename.svg')"
				}
			}

		  tempStr= '\t'+type+'= "'+value+'"\n';
		  defaultTempStr= '\t'+type+'= "'+value+'"\n';
		}
		else if (value instanceof RegExp){
		  tempStr= "\t"+type+"= "+ value + "\n";
		}
		else if (Array.isArray(value)) {
		  const tempval = this.arrayString(value);
			tempStr= '\t'+type+'= '+tempval+'\n';
		  defaultTempStr= tempStr;
		}
		else if (typeof value == "object") {
			const tempval = this.objectString(value);
		  tempStr= '\t'+type+'= '+tempval+'\n';
		  defaultTempStr= tempStr;
		}
		else if (typeof value== 'boolean' ||
			typeof value== 'number' ||
			typeof value== 'date' ) {
		  tempStr= '\t'+type+'= '+value+'\n';
		  defaultTempStr= tempStr;
		}
		else if (typeof value== 'function') {
		  tempStr= '\t'+type+'= '+JSON.stringify(value)+'\n';
		  defaultTempStr= tempStr;
		}
		else {
		  tempStr= '\t'+type+'= '+value+'\n';
		  defaultTempStr= tempStr;
		}
		codet += tempStr;
		defaultCodet += defaultTempStr;
	  }
	  this.d_code = "&lt;"+ compData.compName+" \n" + codet + "/&gt;";
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
	  checkboxInput,
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

		.playpen {
			padding: 0 !important;
		}

		#sampleCode {
			.displayCode();
			.boxShadow(@one, @secondaryColor);
			overflow-y: auto;
			padding: 0 !important;
		}

		table {
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
</style>