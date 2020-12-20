<template>
    <card-background
        :low= "low"
        :high= "high"
    >
        <div
            class= 'vueCard'
            :class= '{selectedCard: selectedCard}'
        >
            <div class= 'row1'>
                <div 
                    class= 'col1'
                    @click= 'onClickAction'
                >
                    <template
                        v-if= 'cardTitle'
                    >
                        <div 
                            class= 'row11'
                        >
                            {{cardTitle}}
                            <template
                                v-if= 'd_bookmark'
                            ><span
                                :class= '{inActive:!d_bookmark}'
                                class= "fas fa-bookmark"
                                @click= 'toggleBookmark'
                            />
                            </template>
                        </div>
                    </template>
                    <div class= 'row12'>
                        <div 
                            v-if= 'cardLogo'
                            class= 'logoDetails'
                        >
                            <span :class= 'cardLogo' :style= '"color: "+ logoColor' />
                        </div>
                        <div v-if= 'cardData'>
                            <card-details :cardData= 'cardData'/>
                        </div>
                        <div v-else>
                            <slot/>
                        </div>
                    </div>
                </div>
                <template v-if= 'actionButtons'>
                    <div class= 'col2'>
                        <slot name= 'actionButtons'/>
                    </div>
                </template>
            </div>
            <template v-if= 'cardFooter!=null && cardFooter.length> 0'>
                <div class= 'row2'>
                    <div
                        v-for= '(detail, index) in cardFooter'
                        :key= 'index'
                        class= 'footer'
                    >
                        <div v-html= 'detail.value'/>
                    </div>
                </div>
            </template>
        </div>
    </card-background>
</template>

<script>
    
    import cardDetails from '@/components/UIComponents/Cards/cardDetails'
    import cardBackground from'@/components/UIComponents/Cards/cardBackground'

    export default {
        name: 'vueCard',
        
         data () {
            return {

                d_bookmark: null,
            } //return
        }, //data
        
        props: {

            cardTitle: {
                required: false,
                type: String,
                default: null
            },

            cardLogo: {
                required: false,
                type: String,
                default: null
            },

            logoColor: {
                required: false,
                String,
                default: '#333'
            },

            cardData: {
                required: false,
                type: Object,
                rewuired: true,
                default: null
            },

            actionButtons: {
                required: false,
                type: Boolean,
                default: false
            },

            cardFooter: {
                required: false,
                type: Array,
                default: null
            },

            onClickAction: {
                required: false,
                type: Function,
                default: function () {}
            },

            selectedCard: {
                required: false,
                type: Boolean,
                default: false
            },

            bookmark: {
                required: false,
                type: Boolean,
                default: null
            },
            
            low: {
                type: String,
                validator: function (value) {
                    // console.log(value)
                    return ["1", "2", "3", "4", "5", null].indexOf(value)!= -1
                }
            },

            high: {
                type: String,
                validator: function (value) {
                    return ["1", "2", "3", "4", "5", null].indexOf(value)!= -1
                }
            }, 
        }, //props

        methods: {

            toggleBookmark: function () {
                
                this.d_bookmark= !this.d_bookmark
            }, // consoleClickBookmark
        }, //methods

        created () {

            this.d_bookmark= this.bookmark
        }, //created

        components: {

            cardDetails,
            cardBackground
        }, //components
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "../../../Less/customVariables.less";

    .vueCard {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        // border: 1px solid #333;
        border-radius: @borderRadius;
        background-color: transparent;
        min-width: 320px;

        &.selectedCard{
            background-color: @secondaryColor;
        }

        .row1 {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;

            .col1 {
                width: 100%;

                .row11 {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    font-size: 24px;
                    color: @secondaryColor;
                    font-weight: bold;
                    margin-bottom: 16px;

                    span {
                        color: @secondaryColor;

                        &.inActive {
                            color: @gray;
                        }
                    }
                }

                .row12 {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: no-wrap;

                    & > div {

                        &.logoDetails {
                            margin: auto 0px;
                            min-width: fit-content;
                            margin-right: 16px;
                        }
                        
                        &:last-child {
                            width: 100%;
                        }
                    }                    
                }
            }

            .col2 {
                float: right;
            }
        }
        
        .row2 {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            
            & > div {
                margin-right: 16px;
                color: @secondaryColor;
            }

        }
    }
       
</style>
