<template>
    <div class= 'vueHeader'>
        <div>
            <span 
                class= 'fas fa-bars'
                @click.stop= 'nav'
            />
            <router-link
                :to= "'/'"
                    v-if= 'logoLink'
            >
                <img
                    :src= 'logoLink'
                    @click.stop= 'select(null)'
                />
            </router-link>
        </div>
        <div>
            <slot/>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'vueHeader',

        data () {
            return {
                selected: null,

            } //return
        }, //data

        props: {

            logoLink: {
                required: false,
                type: String,
                default: null
            },

            nav: {
                required: false,
                type: Function,
                default: null
            }
        }, //props

        methods: {

            select: function (id) {
                // console.log('select', id)
                this.$emit('select', id)
            }, //select

            openSubNav: function (id) {
                // console.log(id)
                var selected= this.selected+"";
                if (selected) {
                // console.log('openSubNav', selected)
                    var index= selected.indexOf('.');
                    // console.log('openSubNav: ', index, selected.substring(0, index))
                    if (index!= -1 && selected.substring(0, index)==id) {
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

    @import (reference) '../../../Less/customVariables.less';
    @import (reference) '../../../Less/customMixins.less';

    .vueHeader {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: @spaceMd @spaceLg;
        width: 100%;
        height: max-content;

        background-color: transparent;
        .boxShadow(@two);
        //0px 2px 4px 2px rgba(40, 40, 40, 0.5)

        & > div {
            margin: auto 0;

            img {
                height: 32px;
                padding: @spaceSm @spaceMd;
            }

            span {
                color: @white;
                margin: auto 16px;
            }
        }
    }
</style>
