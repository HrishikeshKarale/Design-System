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
                    @click= 'ctx'
                >
                    <template
                        v-if= 'title'
                    >
                        <div
                            class= 'row11'
                        >
                            {{title}}
                            <template
                                v-if= 'bookmark'
                            ><span
                                :class= '{inActive:!bookmark}'
                                class= "fas fa-bookmark"
                                @click= 'toggleBookmark'
                            />
                            </template>
                        </div>
                    </template>
                    <div class= 'row12'>
                        <div
                            v-if= 'logo'
                            class= 'logoDetails'
                        >
                            <span :class= 'logo' :style= '"color: "+ logoColor' />
                        </div>
                        <div v-if= 'details'>
                        <!-- {{details}} -->
                            <card-details :data= 'details'/>
                        </div>
                        <div v-else>
                            <slot/>
                        </div>
                    </div>
                </div>
                <template v-if= 'this.$slots.actionButtons'>
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
               props: {

            title: {
                required: false,
                type: String,
                default: null
            },

            logo: {
                required: false,
                type: String,
                default: null
            },

            logoColor: {
                required: false,
                String,
                default: '#333'
            },

            details: {
                required: false,
                type: Object,
                rewuired: true,
                default: null
            },

            cardFooter: {
                required: false,
                type: Array,
                default: null
            },

            ctx: {
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
                this.$emit("bookmark", !this.bookmark);
            }, // consoleClickBookmark
        }, //methods

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
            background-color: @primaryColor;
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
                    color: @primaryColor;
                    font-weight: bold;
                    margin-bottom: 16px;

                    span {
                        color: @primaryColor;

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
                    }                                   }
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
                color: @primaryColor;
            }

        }
    }
      </style>
