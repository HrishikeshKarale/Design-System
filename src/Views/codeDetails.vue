<template>
    <div class= 'codeDetails'>
        <div>
            <div class='title'>
                Playpen:
            </div>
            <div>
                <vue-button 
                    :type= 'd_type'
                    tag= "togglecode"
                    :icon= 'd_hideCode? "fas fa-minus":"fas fa-plus"'
                    :category= 'd_category[12]'
                   
                    
                    :form= "d_form"
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
                                    :pattern= 'd_numRegEx'
                                    inputIcon= 'fas fa-hashtag'
                                    @notify= 'alerts'
                                    @value= 'val=> d_value = val'
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
                                    :value= 'd_value'
                                    :options= 'attribute.value'
                                    @notify= 'alerts'
                                    @value= 'val=> d_value = val'
                                />
                            </template>
                            <template v-else-if= 'typeof attr.value== "object"' >
                                <template v-for=" k in Object.keys(attribute.value)">
                                    {{k}}:
                                    <template v-if= 'typeof attribute.value[k]== "number"'>
                                        <number-input 
                                            name= "numField"
                                            :value= 'attribute.value[k]'
                                            :pattern= 'd_numRegEx'
                                            inputIcon= 'fas fa-hashtag'
                                            @notify= 'alerts'
                                            @value= 'val=> d_value = val'
                                        />
                                    </template>
                                    <template v-else-if= 'typeof attribute.value[k]== "boolean"'>
                                        <label  
                                            id= 'checkbox'
                                        >
                                            <input 
                                                type= 'checkbox' 
                                                :value= "attribute.value[k]"
                                                v-model= "d_value" 
                                                for= 'checkbox'
                                                @input= "change(null)"
                                            />
                                                <span style= 'text-transform: uppercase; margin-left: 8px;'>{{d_value}} </span>
                                        </label>
                                    </template>
                                    <template v-else-if= 'Array.isArray(attribute.value[k]) || typeof attribute.value[k]== "array"' >
                                        <searchable-dropdown-list
                                            name= "playpen"
                                            :value= 'd_value'
                                            :options= 'attribute.value[k]'
                                            @notify= 'alerts'
                                            @value= 'val=> d_value = val'
                                        />
                                    </template>
                                    <template v-else>
                                        <text-input 
                                            :name= "attr.type+'textField'"
                                            :value= 'attribute.value[k]'
                                            @notify= 'alerts'
                                            @value= 'val=> attribute.value[k] = val'
                                        />
                                    </template>
                                    <!-- <searchable-dropdown-list
                                        name= "playpen"
                                        :value= 'd_value'
                                        :options= 'attribute.value'
                                        @notify= 'alerts'
                                        @value= 'val=> d_value = val'
                                    /> -->
                                </template>
                            </template>
                            <template v-else>
                                <template v-if= "attr && attr.type.indexOf(attr.type)!= -1">
                                    <dropdown-list 
                                        :name= 'attr.type+"dropdownField"'
                                        :value= 'd_value'
                                        :options= 'attr.value[attr.type.indexOf(attr.type)]'
                                        @notify= 'alerts'
                                        @value= 'val=> d_value = val'
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
                                        @notify= 'alerts'
                                        @value= 'val=> d_value = val'
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
    import { alerts } from "@/typeScript/common/alerts"

    export default {

        name: 'codeDetails',

        mixins: [alerts],

        data () {

            const type= 'button'

            const tag= 'consoleTextButton'

            const text= ''

            const category= this.$store.state.category

            const d_booleanTrue= true

            const form= ''

            const ctx= this.toggle

            const numRegEx= new RegExp(/^([0-9]*)|(([0-9]*))$/)

            return {

                d_type: d_type,

                d_tag: d_tag,

                d_category: d_category,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_ctx: d_ctx,

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

            attr: {
                required: false,
                type: Object,
                default: null
            },
            index: {
                type: Number,
                required: true,
            }
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
                for (var attribute in attributes) {
                    // console.log(attribute)
                    var type= attributes[attribute].type
                    var value= attributes[attribute].value

                    
                    // if (attr.type== 'id' || attr.type== 'name') {
                    //     this.d_value = this.d_value + "-" + this.index
                    //     console.log(this.index);
                    // } else if (attr.type== 'function') {
                    //     this.d_value = JSON.parse(this.d_value);
                    //     console.log(index, this.d_value);
                    // }
                        console.log(this.index, attr.type, type, attr.type=='ctx'? JSON.parse(value): value,typeof value,  this.d_value);
                    if (type!= 'v-model' && attr.type== type) {
                        if(attr.type == "ctx") {
                            str[type] = this.d_value+this.index;
                        }
                        else {
                            str[type]= this.d_value;
                        }
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
                const attrValue= this.attr
                var selectedValue= this.d_value
                if (index){
                    // console.log('change: ', this.attributes[4].type,  typeof index, Array.isArray(index), index)
                }

                //dropdown list
                if (index && typeof index== 'number') {
                    // console.log('change', this.attr.type, selectedValue, this.d_value)
                    this.$emit('change', this.attr.type, {type: attrValue, selected: selectedValue})
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