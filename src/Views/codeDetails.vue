<template>
    <div class= 'codeDetails'>
        <div>
            <div class='title'>
                Playpen:
            </div>
            <div>
                <vue-button 
                    :buttonType= 'd_buttonType'
                    buttonName= "togglecode"
                    :buttonIcon= 'd_hideCode? "fas fa-minus":"fas fa-plus"'
                    :buttonStyle= 'd_buttonStyle[12]'
                    :disabled= '!d_booleanTrue'
                    :autofocus= '!d_booleanTrue'
                    :formID= "d_form"
                    :onClickAction= 'toggle.bind(this)'
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
                                    v-model= 'd_value'
                                    :pattern= 'd_numRegEx'
                                    inputIcon= 'fas fa-hashtag'
                                    @input= "change(null)"
                                />
                            </template>
                            <template v-else-if= 'typeof attribute.value== "boolean"'>
                                <label  
                                    id= 'checkbox'
                                >
                                    <input 
                                        type= 'checkbox' 
                                        v-model= "d_value" 
                                        for= 'checkbox'
                                        @input= "change(null)"
                                    />
                                        <span style= 'text-transform: uppercase; margin-left: 8px;'>{{d_value}} </span>
                                </label>
                            </template>
                            <template v-else-if= 'Array.isArray(attr.value) || typeof attr.value== "array"' >
                                <searchable-dropdown-list
                                    name= "playpen"
                                    v-model= 'd_value'
                                    :options= 'attribute.value'
                                    :strict= '!d_booleanTrue'
                                    @input= "change(attribute.value)"
                                />
                            </template>
                            <template v-else>
                                <template v-if= "d_attr && d_attr.type.indexOf(attr.type)!= -1">
                                    <dropdown-list 
                                        :name= 'attr.type+"dropdownField"'
                                        v-model= 'd_value'
                                        :options= 'd_attr.value[d_attr.type.indexOf(attr.type)]'
                                        @input= "change(d_attr.type.indexOf(attr.type))"
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
                                        v-model= 'd_value'
                                        @input= "change(null)"
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
    import vueButton from "@/components/UIComponents/Buttons"
    import numberInput from "@/components/FormElements/numberInput";
    import textInput from "@/components/FormElements/textInput";

    export default {

        name: 'codeDetails',

        data () {

            var d_buttonType= 'button'

            var d_buttonName= 'consoleTextButton'

            var d_buttonText= ''

            var d_buttonStyle= this.$store.state.buttonStyle

            var d_booleanTrue= true

            var d_form= ''

            var d_onClickAction= this.toggle

            var d_numRegEx= new RegExp(/^([0-9]*)|(([0-9]*))$/)

            return {

                d_buttonType: d_buttonType,

                d_buttonName: d_buttonName,

                d_buttonStyle: d_buttonStyle,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_onClickAction: d_onClickAction,

                d_hideCode: null,

                d_value: null,
                
                d_numRegEx: d_numRegEx
            } //return
        }, //data

        props: {

            attr: {
                required: true,
                type: Object
            },

            attributes: {
                required: true,
                type: Array
            },

            compName: {
                required: true,
                type: String
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
            },
        }, //props

        components: {

            dropdownList,
            dynamicComponent,
            searchableDropdownList,
            vueButton,
            numberInput,
            textInput,
        }, //components

        computed: {

            reactiveCode: function () {
                var attr= this.attr
                var attributes= this.attributes
                var str= new Object()
                
                for (var attribute in attributes)
                {
                    // console.log(attribute)
                    var type= attributes[attribute].type
                    var value= attributes[attribute].value

                    if (type!= 'v-model' && attr.type== type) {
                        str[type]= this.d_value
                    } //when the attribute types match, replace the value for user input 
                    else {
                        str[type]= value
                    }
                }
                // console.log(str)
                return str
            }, //reactiveCode
        }, //computed

        methods: {

            change: function (index) {
                var d_attrValue= this.d_attr
                var selectedValue= this.d_value
                if (index){
                    // console.log('change: ', this.attributes[4].type,  typeof index, Array.isArray(index), index)
                }

                //dropdown list
                if (index && typeof index== 'number') {
                    // console.log('change', this.attr.type, selectedValue, this.d_value)
                    this.$emit('change', this.attr.type, {type: d_attrValue, selected: selectedValue})
                }
                //searchable dropdown list
                else if (index && Array.isArray(index)) {
                    var tempIndex= index
                    var SelectedIndex= tempIndex.indexOf(selectedValue)

                    if (SelectedIndex== -1) {
                        tempIndex.push(selectedValue)
                        // console.log('NO', selectedValue, tempIndex)
                    }
                    else {
                        tempIndex.splice(index, index);
                        // console.log('YES', selectedValue, tempIndex)
                    }
                    // console.log(index)
                    this.$emit('change', this.attr.type, {type: tempIndex, selected: tempIndex})
                }
                //any other soyrce
                else {
                    if (this.attr.type== 'v-model') {
                        this.$emit('change', 'value', selectedValue)
                    }
                    else {
                        this.$emit('change', this.attr.type, selectedValue)
                    }
                }
            }, //change

            toggle: function () {
                // console.log('toggle')
                this.d_hideCode= !this.d_hideCode
            }, //toggle
        }, //methods

        created() {

            if (!this.hideCode) {
                this.d_hideCode= false
            }
            else {
                this.d_hideCode= this.hideCode
            }
            
            var attributes= this.attributes

            for (var attribute in attributes) {
                // console.log(attributes[attribute].type)
                if (this.attr.type== attributes[attribute].type) {
                    this.d_value= attributes[attribute].value
                    // console.log('value: ', this.d_value)
                }
            }

            // console.log(this.attributes, this.data)
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