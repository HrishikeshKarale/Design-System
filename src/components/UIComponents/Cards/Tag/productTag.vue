<template>
    <div class= 'productTag'>
        <card-background>
            <div class= 'tag'>
                <div class= 'col1'>
                    <div class= 'row1'>
                        <searchable-dropdown-list
                            label= 'SKU'
                            name= 'SKUNumber'
                            :options= 'options'
                            required= true
                        />
                    </div>
                    <div class= 'divide4'/>
                    <div class= 'row2'>
                        <vue-info
                                label= 'Available'
                                :value= 'available'
                        />
                        <number-input
                            label= 'Quantity'
                            name= 'Quantity'
                            placeholder= 'Enter Quantity'
                            required= true
                        />
                    </div>
                </div>
                <div class= 'col2'>
                    <div>
                        <vue-button 
                            :buttonType= 'd_buttonType'
                            buttonName= "toggleFilter"
                            buttonIcon= 'fas fa-redo-alt'
                            :buttonStyle= 'd_buttonStyle[0]'
                            :disabled= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :formID= "d_form"
                            :onClickAction= 'd_onClickAction'
                        />
                    </div>
                    <div class= 'divide16'/>
                    <div>
                        <vue-button 
                            :buttonType= 'd_buttonType'
                            buttonName= "toggleFilter"
                            buttonIcon= 'fas fa-plus'
                            :buttonStyle= 'd_buttonStyle[0]'
                            :disabled= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :formID= "d_form"
                            :onClickAction= 'd_onClickAction'
                        />
                    </div>
                </div>
            </div>
        </card-background>
        <div 
            v-if= 'd_tags' 
            class= 'divide16'
        />
        <template
            v-for= "t in d_tags"
        >
            <card-background
                :key= 't.index'
            >
                <div 
                    class= 'tag'
                    :id= 't.sku'
                    :key= 't.index'
                >
                    <div class= 'col1'>
                        <div class= 'row1'>
                            <div>
                                <searchable-dropdown-list
                                    label= 'SKU'
                                    name= 'SKUNumber'
                                    required= true
                                    :options= 'options'
                                    :selected= 't.sku' 
                                    disabled= true
                                />
                            </div>
                        </div>
                        <div class= 'divide4' />
                        <div class= 'row2'>
                            <vue-info
                                label= 'Available'
                                :value= 't.available'
                            />
                            <number-input
                                label= 'Quantity'
                                name= 'Quantity'
                                :value= 't.quantity'
                                required= true
                                disabled= true
                            />
                        </div>
                    </div>
                    <div class= 'divide8' />
                    <div class= 'col2'>
                        <div v-if= 'editable'>
                            <vue-button 
                                :buttonType= 'd_buttonType'
                                buttonName= "deleteTag"
                                :buttonText= "d_buttonText"
                                buttonIcon= 'fas fa-times'
                                :buttonStyle= 'd_buttonStyle[0]'
                                :disabled= '!d_booleanTrue'
                                :autofocus= '!d_booleanTrue'
                                :formID= "d_form"
                                :onClickAction= 'deleteTag.bind(this, t.sku)'
                            />
                        </div>
                        <div class= 'divide16'/>
                        <div>
                            <vue-button 
                                :buttonType= 'd_buttonType'
                                buttonName= "toggleFilter"
                                :buttonText= "d_buttonText"
                                :buttonIcon= 'editId && editId==t.sku? "fas fa-plus":"fas fa-pen-alt"'
                                :buttonStyle= 'd_buttonStyle[0]'
                                :disabled= '!d_booleanTrue'
                                :autofocus= '!d_booleanTrue'
                                :formID= "d_form"
                                :onClickAction= 'toggleEdit.bind(this, t.sku)'
                            />
                        </div>
                    </div>
                </div>
            </card-background>    
            <div
            v-if= 'spaceCounter'
                :key= 't.index'
                class= 'divide8'
            />
        </template>
    </div>
</template>

<script>
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList";
    import numberInput from "@/components/FormElements/numberInput";
    import vueInfo from "@/components/FormElements/vueInfo";
    import vueButton from "@/components/UIComponents/Buttons";
    import cardBackground from '@/components/UIComponents/Cards/cardBackground'

    export default {
        name: "productTag",

        data() {

            var d_buttonType= 'button'

            var d_buttonName= 'consoleTextButton'

            var d_buttonText= ''

            var d_buttonStyle= this.$store.state.buttonStyle

            var d_booleanTrue= true

            var d_form= ''

            var d_onClickAction= this.toggle

            return {

                d_buttonType: d_buttonType,

                d_buttonName: d_buttonName,

                d_buttonStyle: d_buttonStyle,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_onClickAction: d_onClickAction,

                sku: null,

                d_tags: null,

                quantity: null,

                available: 300,

                options: ["rochester", 'perks'],

                index: 0,
                
                editId: null

            } //return
        }, //data

        props: {
            tags: {
                type: Array,
                default: null
            },

            editable: {
                type: Boolean,
                default: true 
            }
        }, //props

        methods: {

            consoleClick: function () {
                // console.log("ButtonClick")
            }, // consoleClick

            toggleEdit: function (id) {
                // console.log(id, this.editID)

                var index= this.d_tags.findIndex(x => x.sku == id);
                
                var tag= document.getElementById(id);
                var dropdown= tag.getElementsByTagName('input')
                dropdown[0].disabled=!dropdown[0].disabled
                dropdown[1].disabled=!dropdown[1].disabled
                
                if (this.editId) {
                    if (id== this.editId) {
                        id= null
                        this.editId= id;
                    }
                    else {
                        // console.log('id!= this.editId')
                        dropdown[0].disabled=!dropdown[0].disabled
                        dropdown[1].disabled=!dropdown[1].disabled
                        alert('please complete the edit on id')
                    }
                }
                else {
                    this.editId= id;
                }

                // if (index > -1) {
                //     this.d_tags.splice(index, 1);
                // }

                // console.log(id, this.editID)
            }, //toggleEdit

            deleteTag: function (id) {
                var index= this.d_tags.findIndex(x => x.sku == id);
                
                if (index > -1) {
                    this.d_tags.splice(index, 1);
                }
            }, //deleteTag

            spaceCounter: function () {
                var index= this.index
                var result= (this.totalEmployees-index) > 1
                this.index= index + 1
                return result
            }, //spaceCounter
            
        }, //methods

        components: {
            searchableDropdownList,
            numberInput,
            vueButton,
            vueInfo,
            cardBackground
        }, //components

        created() {

            this.d_tags= this.tags
        }
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "./../../../../Less/customMixins.less";
    @import (reference) "./../../../../Less/customVariables.less";

    .productTag {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .tag {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            border: 1px solid black;
            border-radius: @borderRadiusMd;
            background-color: @white;
            padding: @spaceMd @spaceLg;
            width: 320px;

            .col1 {
                width: 100%;

                .row1 {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                .row2 {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    flex-grow: 1;
                    justify-content: space-around;
                }

                .row3 {
                    display: flex;
                    flex-direction: row-reverse;
                    flex-wrap: wrap;
                }
            }

            .col2 {
                float: right;
            }
        }
    }

</style>
