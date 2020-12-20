<template>
    <div 
        class= 'vueNavigation'
    >
        <div>
            <router-link :to= "'/'" >
                <img 
                    v-if= 'logoLink && !hideNav'
                    :src= 'logoLink'
                />
            </router-link>
        </div>
        <!-- level 1 -->
        <ul>
            <template
                v-for= "(nav, index) in navigationTitles"
            >
                <li
                    :key= "index"
                    :class= '{ activeNav: (selected? selected.split("-")[0] == nav.id : false)}'
                    @click.stop.prevent= 'select(nav.id.toString())'
                >
                    <router-link  
                        :to= "'/' + nav.text" 
                    >
                        <div 
                            data-toggle= "tooltip" 
                            data-placement= "right" 
                            :title= "nav.text"
                        >
                            <span v-html= 'nav.icon'/>
                        </div>
                        <div>
                            {{nav.text}}
                        </div>
                    </router-link>
                    <!-- {{(selected && selected.split("-")[0]==nav.id || openSubNav(nav.id))) && nav.subnav}} -->
                    <div 
                        class= 'subNav'    
                        v-if= '((selected && selected.split("-")[0]==nav.id) || openSubNav(nav.id)) && nav.subnav'
                    >
                        <!-- level 2 -->
                        <ul>
                            <li 
                                v-for= 'sub in nav.subnav'
                                :key= 'nav.id + "-" + sub.id'
                                @click.stop.prevent= 'select(nav.id + "-" + sub.id)' 
                                :class= '{ activeNav: (selected? selected.split("-")[1] ==  sub.id: false)}'
                            >
                                <router-link 
                                    :to= "'/' + nav.text +'/'+ sub.text"
                                >
                                    <div data-toggle= "tooltip" data-placement= "right" :title= "sub.text">
                                        <span v-html= 'sub.icon'/>
                                    </div>
                                    <div>
                                        {{sub.text}}
                                    </div>
                                </router-link>
                                <div 
                                    class= 'subNav'    
                                    v-if= '(selected && selected.split("-")[1]==sub.id || openSubNav((nav.id + "-" + sub.id))) && sub.subnav'
                                >
                                    <!-- level 3 -->
                                    <ul>
                                        <li 
                                            v-for= 'subs in sub.subnav'
                                            :key= 'nav.id + "-" + sub.id + "-" + subs.id'
                                            @click.stop.prevent= 'select(nav.id + "-" + sub.id + "-" + subs.id)' 
                                            :class= '{ activeNav: (selected.split("-")[2] == subs.id)}'
                                        >
                                            
                                            <router-link 
                                                :to= "'/' + nav.text +'/'+ sub.text +'/'+ subs.text"
                                            >
                                                <div data-toggle= "tooltip" data-placement= "right" :title= "subs.text">
                                                    <span v-html= 'subs.icon'/>
                                                </div>
                                                <div>
                                                    {{subs.text}}
                                                </div>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </template> <!--for every nav in navigationTitles -->
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'vueNavigation',

        data() {
            return {
            }
        }, //data

        props: {

            navigationTitles: {
                required: true,
                type: Array,
                default: null
            },

            logoLink: {
                required: false,
                type: String,
                default: null
            },

            title: {
                required: false,
                type: String,
                default: null
            },

            hideNav: {
                required: false,
                type: Boolean,
                default: false
            },

            selected: {
                required: false,
                type: String,
                default: null
            }
        }, //props

        methods: {

            exist: function (type) {
                
                if(this.navCategories!= type){
                    this.navCategories= type
                    return type
                }
            }, //exist

            doNothing: function () {}, //doNothing

            select: function (id) {
                console.log(id)
                this.$emit('nav', id)
            }, //select

            openSubNav: function (id) {
                var selected= this.selected;

                if (selected) {
                
                    if(parseInt(selected) ==id){
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return false
            }, //openSubNav
        }, //methods
    } //default
</script>

<style lang= 'less' scoped>

    @import (reference) "./../../../Less/customMixins.less";
    @import (reference) "./../../../Less/customVariables.less";

    /* mixin */
    .activeNav() { 
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
                                        
        & > a > div > span {
            font-size: 20px;
            color: @secondaryColor;
        }
    };

    .nav() {
        
        > ul {
            padding-left: 0;

            & > li {
                list-style-type: none;
                text-decoration: none !important;
                display: flex;
                margin-top: 4px;
                font-size: @fontSizeMd;
                list-style-type: none;
                text-decoration: none !important;
                font-weight: bold;

                & > a {
                    display: flex;

                    & > div {
                        padding: 0 0 0 16px;
                        color: @navText;
                    }
                }

                &.activeNav {
                    
                    .activeNav();
                }
            } 
        }
    };

    .vueNavigation {
            
        @media screen {
            @media (max-width: 1239px) {
            }
        }

        /* logo and toggleNav button */
        & > div {
            display: flex;
            flex-direction: column;
            
            &:first-child {
                
                & > div {
                    position: relative;

                    /* &.toggleNav {
                        position: absolute;
                        right: 0px;
                    */
                        /* @media screen {
                            @media (max-width: 1239px) {
                                display: none !important;
                            }
                        } */
                    /* }  */
                }

                & > a {
                    margin: auto;
                    
                    & > img {
                        margin-top: 32px;
                        margin-bottom: 16px;
                        margin: 32px 48px 16px 48px;
                        width: 160px;
                    }
                }
            }
        }

        /* navigation */
        & > ul {
            width: max-content;
            padding: 8px 0 0;
            margin: 32px 0 32px;

            & > li {
                display: block;
                list-style-type: none;
                text-decoration: none !important;
                padding-top: 0;
                font-weight: bold;
                padding: 4px 16px 4px 16px;
                width: fit-content;
                margin: auto 0px;
                color: @secondaryColor;
                cursor: pointer;
                text-transform: uppercase;
                border-left: 4px solid transparent;

                &.activeNav {
                    border-color: red;
                    
                    .activeNav();
                }
    
                & > a {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    text-decoration: none;
                }

                & > div {

                    &.subNav {
                        
                        .nav();
                    }

                    & ul > li > div {
        
                        &.subNav {
                            padding-left: 32px;
            
                            .nav();
                        }
                    }
                }
            }
        }
    }
</style>