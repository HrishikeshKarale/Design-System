<template>
    <div 
        class= 'cardBackground'
        :class= '[ low? "idle-"+low: null, high? "hover-"+high: null]'
    >
        <slot />
    </div>
</template>

<script>

    export default {
        name: 'cardBackground',

        props: {
                       low: {
                required: false,
                type: String,
                validator: function (value) {
                    return ["0", "1", "2", "3", "4", "5", null].indexOf(value)!= -1
                },
                default: "1"
            },

            high: {
                required: false,
                type: String,
                validator: function (value) {
                    return ["0", "1", "2", "3", "4", "5", null].indexOf(value)!= -1
                }
            },
        }, //props
    } //default
</script>

<style lang= 'less' scoped>

    @import (reference) "./../../../Less/customMixins.less";
    @import (reference) "./../../../Less/customVariables";

    .cardBackground {
        border-radius: @borderRadius;
        padding: @spaceMd @spaceLg;
               &.idle-1 {
            .boxShadow(@one);

            &:hover.hover-1 {
                .boxShadow(@one);
            }

            &:hover.hover-2 {
                .boxShadow(@two);
            }

            &:hover.hover-3 {
                .boxShadow(@three);
            }

            &:hover.hover-4 {
                .boxShadow(@four);
            }

            &:hover.hover-5 {
                .boxShadow(@five);
            }
        }

        &.idle-2 {
            .boxShadow(@one);

            &:hover.hover-2 {
                .boxShadow(@two);
            }

            &:hover.hover-3 {
                .boxShadow(@three);
            }

            &:hover.hover-4 {
                .boxShadow(@four);
            }

            &:hover.hover-5 {
                .boxShadow(@five);
            }
        }

        &.idle-3 {
            .boxShadow(@three); 

            &:hover.hover-3 {
                .boxShadow(@three);
            }

            &:hover.hover-4 {
                .boxShadow(@four);
            }

            &:hover.hover-5 {
                .boxShadow(@five);
            }
        }

        &.idle-4 {
            .boxShadow(@four);

            &:hover.hover-4 {
                .boxShadow(@four);
            }

            &:hover.hover-5 {
                .boxShadow(@five);
            }
        }

        &.idle-5 {
            .boxShadow(@five);

            &:hover.hover-5 {
                .boxShadow(@five);
            }
        }
    }
</style>
