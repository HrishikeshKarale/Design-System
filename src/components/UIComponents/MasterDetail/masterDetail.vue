<template>
    <div class= 'masterDetail'>
        <div class= 'master'>
            <div>
                <slot/>
            </div>
            <div>
                <slot name= 'master'>
                    default master space
                </slot>
            </div>
        </div>
        <div class= 'divide32'/>
        <div class= 'detail'>
            <slot name= 'detail'>
                default detail space
            </slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'masterDetail',
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "./../../../Less/customMixins.less";

    .masterDetail {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        & > div {
                    &.master {
                           & > div{
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 8px;

                    &:last-child{
                        padding-right: 8px;

                        > div {
                            margin-bottom: 8px;

                            &:last-child {
                                margin-bottom: 0;
                            }
                        }

                        .scroll(64vh);
                    }
                }
            }
        }
    }
</style>
