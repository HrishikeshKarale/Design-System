<template>
    <div 
        class= 'vueInfo'
        :class= '{inline: inline}'
    >
        <label 
            v-if= 'label'
            :class= '{maskField: mask}'
        >
            {{label}}
        </label>
        <div
            :class= '{
                        maskField: mask 
                    }'
        >
            <template v-if= '!mask'>{{value}}</template>
        </div>
    </div>
</template>

<script>

    export default {

        name: 'vueInfo',

        props: {
                       //sets heading/Label for the input field
            label: {
                required: true,
                type: String,
                Default: null
            },

            //users have to pass preset values for the field 
            value: {
                required: true,
                type: [String, Number, Boolean, Array],
                default: 'default: No Value passed'
            },

            //reserves space and created a mask if set to true
            mask: {
                required: false,
                type: Boolean,
                default: false
            },

            //checks if label options should appear on the same line or not
            inline: {
                required: false,
                type: Boolean,
                default: false
            }
        }, //props
    } //default
</script>

<style lang= "less" scoped>

    .vueInfo {

        > div {
            margin-left: 18px;
        }
    }
</style>

