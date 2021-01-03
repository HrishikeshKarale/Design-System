<template>
  <div class= 'codeDetails'>
    <div>
      <div class='title'>
        Playpen:
      </div>
      <div>
        <vue-button
          tag= "togglecode"
          :icon= 'd_hideCode? "fas fa-minus":"fas fa-plus"'
          category= 'icon'
          :ctx= 'toggle.bind(this)'
        />
      </div>
    </div>
    <div>
      <div class= 'interactiveCode'>
        <div>
          &lt;{{compName}}
        </div>
        <template
          v-for= '(attribute, index) in attributes'
        >
          <div :key= 'index'>
            <div v-if= 'attr.type== attribute.type || d_hideCode'>
              {{attribute.type}}:
            </div>
            <div v-if= 'attr.type==attribute.type'>
              <template v-if= 'typeof attribute.value== "number"'>
                <number-input
                  name= "numField"
                  :value= 'd_value'
                  icon= 'fas fa-hashtag'
									@value= 'val => d_value = val'
                />
              </template>
              <template v-else-if= 'typeof attribute.value== "boolean"'>
								<radio-input
									label="d_value"
									type="checkbox"
									tag="radioBool"
									:value="d_value"
									@value="val => (d_value = val)"
									@notify="alerts"
								/>
              </template>
              <template v-else-if= 'Array.isArray(attr.value) || typeof attr.value== "array"' >
                <searchable-dropdown-list
                  name= "playpen"
                  :value= 'd_value'
                  :options= 'attribute.value'
                  :strict= '!d_booleanTrue'
                  @value= "val => (d_value = val)"
                />
              </template>
              <template v-else>
                <template v-if= "d_attr && d_attr.type.indexOf(attr.type)!= -1">
                  <dropdown-list
                    :name= 'attr.type+"dropdownField"'
                    :value= 'd_value'
                    :options= 'd_attr.value[d_attr.type.indexOf(attr.type)]'
                  	@value= "val => (d_value = val)"
                  />
                </template>
                <template v-else-if= 'typeof attr.value== "object"' >
                  <div
                    v-for= '(keys, index) in Object.keys(attr.value)'
                    :key= 'index'
                  >
                    {{keys}}: {{attr.value[keys]}}
                  </div>
                </template>
                <template v-else>
                  <text-input
                    :name= "attr.type+'textField'"
                    :value= 'd_value'
                  	@value= "val => (d_value = val)"
                  />
                </template>
              </template>
            </div>
            <div v-else-if= 'd_hideCode'>
              {{attribute.value}}
            </div>
          </div>
        </template><!-- attributte in d_compData.attributes LOAD CODE DETAILS-->
        <div>
          /&gt;
        </div>
      </div>
      <div class= 'reactiveComponent'>
        <dynamic-component :type= "compName" :props= 'reactiveCode'></dynamic-component>
      </div>
    </div>
  </div>
</template>

<script>

  import dynamicComponent from '@/Views/dynamicComponent'
  import searchableDropdownList from "@/components/FormElements/searchableDropdownList"
  import dropdownList from "@/components/FormElements/dropdownList"
  import vueButton from "@/components/UIComponents/Button"
  import numberInput from "@/components/FormElements/numberInput";
  import textInput from "@/components/FormElements/textInput";
  import radioInput from "@/components/FormElements/radioInput";
  import { alerts } from "@/typeScript/common/alerts"

  export default {

    name: 'codeDetails',

    mixins: [alerts],

    data () {
      const d_hideCode= false;
      const d_value= null;
      return {
        d_hideCode,
        d_value
      } //return
    }, //data

    props: {

      attributes: {
        required: true,
        type: Array
      },

      compName: {
        required: true,
        type: String
      },

      index: {
        type: Number,
        required: true,
      },

      attr: {
        required: true,
        type: Object,
        default: null
      },

      hideCode: {
        required: false,
        type: Boolean,
        default: false
      },

      d_attr: {
        required: false,
        type: Object,
        default: null
      }
    }, //props

    components: {

      dropdownList,
      dynamicComponent,
      searchableDropdownList,
      vueButton,
      numberInput,
			textInput,
			radioInput
    }, //components

    computed: {

      reactiveCode: function () {
        let attr= this.attr
				let attributes= this.attributes
        let str= {};
        for (let attribute in attributes) {
					let type= attributes[attribute].type
          let value= attributes[attribute].value
          if (type!= 'v-model' && attr.type== type) {
						if(attr.type == "ctx") {
							str[type] = this.d_value;
            }
            else {
							str[type]= this.d_value;
            }
          } //when the attribute types match, replace the value for user input
          else {
            str[type]= value
          }
        }
        return str
      }, //reactiveCode
    }, //computed

    methods: {

      toggle: function () {
        this.d_hideCode= !this.d_hideCode
      }, //toggle
		}, //methods

    created() {

			this.d_hideCode= this.hideCode
			let attributes= this.attributes

      for (let attribute in attributes) {
        if (this.attr.type== attributes[attribute].type) {
					this.d_value= attributes[attribute].value;
        }
      }
    }, //created
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) "./../Less/customMixins.less";
  @import (reference) "./../Less/customVariables";

  .codeDetails {
         .displayCode();
    .boxShadow(@one);
  }
</style>