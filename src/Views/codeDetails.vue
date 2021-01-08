<template>
  <div class= 'codeDetails'>
    <div>
      <div class= 'title'>
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
          v-for= 'attribute in attributes'
        >
          <div :key= 'attribute.type'>
            <div v-if= 'attributes[index].type== attribute.type || d_hideCode'>
              {{attribute.type}}:
            </div>
            <div v-if= 'attributes[index].type==attribute.type'>
              <template v-if= 'typeof attribute.value== "number"'>
                <number-input
                  name= "numField"
                  :value= 'd_value'
                  icon= 'fas fa-hashtag'
									@value= 'val => d_value = val'
                />
              </template>
              <template v-else-if= 'typeof attribute.value== "boolean"'>
								<checkbox-input
									:label= "d_value.toString()"
									type= "checkbox"
									tag= "radioBool"
									:value= "d_value"
									@value= "val => (d_value = val)"
									@notify= "alerts"
								/>
              </template>
              <template v-else-if= 'Array.isArray(attributes[index].value)' >
                <dropdown-list
                  name= "playpen"
                  :value= 'd_value'
                  :options= 'attribute.value'
                  @value= "val => (d_value = val)"
                />
              </template>
              <template v-else>
                <template v-if= 'typeof attributes[index].value== "object"' >
                  <div
                    v-for= 'k in Object.keys(attributes[index].value)'
                    :key= 'k'
                  >
                    {{k}}:
                    <text-input
                      :name= "attributes[index].type+'textField'"
                      :value= 'd_value[k]'
                      @value= "val => (d_value[k] = val)"
                    />
                  </div>
                </template>
                <template v-else>
                  <text-input
                    :name= "attributes[index].type+'textField'"
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
  import { vueSearchableDropdown as searchableDropdownList  } from "vue2-component-library"
  import { vueDropdown as dropdownList } from "vue2-component-library"
  import vueButton from "vue2-component-library"
  import { vueNumber as numberInput } from "vue2-component-library"
  import { vueText as textInput  } from "vue2-component-library"
  import { vueCheckbox  as checkboxInput } from "vue2-component-library"
  import { alerts } from "@/typeScript/common/alerts"

  export default {

    name: 'codeDetails',

    mixins: [alerts],

    watch: {
      d_value: function (newValue, oldValue) {
        const tempAttr = this.attributes[this.index];
        tempAttr.value = newValue;
        if (newValue !== oldValue) {
          this.$emit("change", this.index, tempAttr);
        }
      }
    },

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
      }
    }, //props

    components: {

      dropdownList,
      dynamicComponent,
      searchableDropdownList,
      vueButton,
      numberInput,
			textInput,
			checkboxInput
    }, //components

    computed: {

      reactiveCode: function () {
        let attributes= this.attributes
        let attr= this.attributes[this.index]
        let str= {};

        for (let attribute in attributes) {
					let type= attributes[attribute].type
          let value= attributes[attribute].value
          if (attr.type== type) {
						// if(attr.type == "ctx") {
						// 	str[type] = this.d_value;
            // }
            // else {
							str[type]= this.d_value;
            // }
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

			this.d_hideCode = this.hideCode
      let attributes = this.attributes
      this.d_value = attributes[this.index].value
    }, //created
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) "./../Less/customMixins.less";
  @import (reference) "./../Less/customVariables";

  .codeDetails {
    .displayCode();
    .boxShadow(@one, @secondaryColor);
  }
</style>