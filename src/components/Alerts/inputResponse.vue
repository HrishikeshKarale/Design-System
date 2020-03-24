<template>
    <div class= 'inputResponse'>
        <div
            class= 'errorMessage'
            v-if= 'error'
        >
            <span class= 'fas fa-exclamation-circle'/>
            <b>{{error}}</b>
        </div> 
        <div
            class= 'warningMessage'
            v-else-if= 'warning'
        >
            <span class= 'fas fa-exclamation-triangle'/>
            <b>{{warning}}</b>
        </div>
        <div
            class= 'infoMessage'
            v-else-if= 'info'
        >
            <span class= 'fas fa-info-circle'/>
            <b>{{info}}</b>
        </div>
        <div
            class= 'infoMessage'
            v-else-if= 'charLimitReached'
        >
            <span class= 'fas fa-info-circle'/>
            Character limit of {{maxlength}} reached
        </div>
    </div>      
</template>

<script>

    export default {
        name: 'inputResponse',

        props: {

            error: {
                type: String,
                default: null
            },

            warning: {
                type: String,
                default: null
            },

            info: {
                type: String,
                default: null
            },

            charLimitReached: {
                type: Boolean,
                default: false
            },

            maxlength: {
                type: Number,
                default: null
            },
        }, //props
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) '../../Less/customVariables.less';

    .inputResponse {
        display: flex;
        flex-direction:  row;
        flex-wrap: wrap;
        
        & > div {
            margin: @spaceSm 0;
            font-size: @fontSizeSm;
            font-family: monospace;
            font-weight: 700;

            &.infoMessage {
                color: @infoText;
            }

            &.warningMessage {
                color: @warningText;
            }

            &.errorMessage {
                color: @dangerText;
            }
        }
    }
</style>


        