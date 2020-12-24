<template>
    <div
        class= 'vueFilter'
    >
        <div :class= '{open: showFilter || (selected && selected["type"].length!=0)}'>
            <vue-button 
                type= "button"
                tag= "filterButton"
                icon= "fas fa-filter"
                category= "icon"
                :ctx= 'toggleFilter'
            />
            <template 
                v-if= 'selected && selected["type"].length!=0'
            >
                <div 
                    class= 'selectedFilter'
                    v-for= '(item, index) in selected["type"]'
                    :key= 'index'

                >
                    <div data-toggle= "tooltip" data-placement= "top" :title= "item">
                        {{selected["value"][index]}}
                    </div>
                    <div>
                        <span 
                            class= 'fas fa-times'
                            @click.self= 'removeFilter(item, selected["value"][index])'
                        />
                    </div>
                </div>
            </template>
        </div>
        <div v-show= 'showFilter'>
            <div>
                <dropdown-list 
                    label= "Type"
                    name= "filterType"
                    :value= "d_filterTypeValue"
                    :options= 'filters["type"]'
                    @notify= 'alerts'
                    @value= 'val=> d_filterTypeValue = val'
                />
            </div>
            <div v-if= 'optionsIndex> -1'>
                <dropdown-list 
                    label= 'Value'
                    name= "filterType"
                    :value= "d_filterOptionValue"
                    :options= 'filters["options"][optionsIndex]'
                    @notify= 'alerts'
                    @value= 'val=> d_filterOptionValue = val'
                />
            </div>
            <div v-if= 'optionsIndex> -1'>
                <vue-button 
                    type= "button"
                    tag= "filterButton"
                    text= "Add"
                    category= "small"
                    :disabled= 'd_filterOptionValue==null'
                    :ctx= 'updateFilter'
                />
            </div>
        </div>
    </div>
</template>

<script>

    import vueButton from "@/components/UIComponents/Buttons"
    import dropdownList from "@/components/FormElements/dropdownList"

    export default {
        name: 'vueFilter',

        data () {

            const filterTypeValue= null

            const filterOptionValue= null

            var showFilter= false
            return {

                d_filterTypeValue: d_filterTypeValue,

                d_filterOptionValue: d_filterOptionValue,

                showFilter: showFilter,
            } //return
        }, //data

        props: {

            filters: {
                required: true,
                type: Object
            },
                       selected: {
                required: false,
                type: Object,
                default: null
            },
        }, //props

        methods: {

            toggleFilter: function () {
                this.showFilter= !this.showFilter
            }, //toggleFilter

            removeFilter: function (type, value) {
                this.d_filterOptionValue= value
                this.d_filterTypeValue= type
                this.updateFilter()
            }, //removeFilter

            updateFilter: function (e) {
                this.$emit("updateFilter", {type: this.d_filterTypeValue, value: this.d_filterOptionValue})
                this.d_filterOptionValue= null
                this.d_filterTypeValue= null
                if (this.showFilter) {
                    this.toggleFilter()
                }
            }, //updateFilter
        }, //methods

        computed: {

            optionsIndex: function () {
                return this.filters["type"].indexOf(this.d_filterTypeValue)
            }

        }, //computed

        components: {

            dropdownList,
            vueButton,
        }, //components

        created() {
            // console.log(this.filters['type'], this.filters['options'])
        }, //created
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "../../../Less/customVariables.less";

    @color: @secondaryColor;// #1B746D;

    .vueFilter {
        display: flex;
        flex-direction: column;
        max-width: 480px;
        min-width: 80px;
        position: relative;

        & > div {

            &:first-child {
                           &.open {
                    background-color: @backgroundColor;
                    width: fit-content;
                    border-radius: @borderRadius;
                    border: 1px solid ~"darken(@backgroundColor, 10%)";
                }

                .selectedFilter {
                    display: inline-flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    background-color: @secondaryColor;
                    color: @white;
                    margin-right: 8px;
                    border-radius: @borderRadius;
                    padding: @spaceXs @spaceSm;

                    & > div {
                        font-weight: bold;
                        letter-spacing: 1px;

                        span {
                            margin-left: 8px;
                        }
                    }
                }
            }

            &:last-child {
                display: flex;
                flex-direction: column;
                padding: @spaceSm @spaceMd;
                border: 1px solid ~"darken(@backgroundColor, 10%)";
                border-radius: 0 4px 4px 4px;
                background-color: @backgroundColor;
                position: absolute;
                top: 32px;

                & > div {

                    &:last-child {
                        display: flex;
                        flex-direction: row-reverse;
                    }
                }
            }
        }

    }
</style>
