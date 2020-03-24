
// onerror= "this.onerror=null; this.src='image.png'"     
<template>
    <img 
        class= 'vueImg'
        :src= "src? src:d_temp" 
        :alt= "alt"
        :title= 'alt'
    >
</template>

<script>

    export default {
        name: 'vueImg',
        
         data () {
            
            const d_temp= require('@/assets/SVG/SVG/default.svg')
            return {

                d_temp: d_temp,
            } //return
        }, //data
        
        props: {

            src: {
                required: false,
                type: String,
                default: function (value) {
                    if(value) {
                        return value
                    }
                    return null
                }
            },

            alt: {
                required: false,
                type: String,
                default: function (value) {
                    if(value) {
                        return value
                    }
                    return 'An image goes here'
                }
            },
        }, //props
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "../../../Less/customVariables.less";

    .vueImg {
        display: inline-flex;
    }
       
</style>
