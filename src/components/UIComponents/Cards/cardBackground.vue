<template>
    <div 
        class= 'cardBackground'
        :class= '[ (box)? null: "text", low? "idle-"+low: null, high? "hover-"+high: null]'
    >
        <div>
            <slot></slot>
        </div>
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
                    return ["1", "2", "3", "4", "5", null].indexOf(value)!= -1
                },
                default: "1"
            },

            high: {
                required: false,
                type: String,
                validator: function (value) {
                    return ["1", "2", "3", "4", "5", null].indexOf(value)!= -1
                }
            },

            box: {
                required: false,
                type: Boolean,
                default: true
            }
        }, //props
    } //default
</script>

<style lang= 'less' scoped>

    @import (reference) "./../../../Less/customMixins.less";
    @import (reference) "./../../../Less/customVariables";

    .cardBackground {
        background: transparent;
        border-radius: @borderRadiusMd;

        &.text {
            &.idle-1 {
                .textShadow(@one);
                transition: @transition;

                &:hover.hover-2 {
                    .textShadow(@two);
                    transition: @transition;
                }

                &:hover.hover-3 {
                    .textShadow(@three);
                    transition: @transition;
                }

                &:hover.hover-4 {
                    .textShadow(@four);
                    transition: @transition;
                }

                &:hover.hover-5 {
                    .textShadow(@five);
                    transition: @transition;
                }
            }

            &.idle-2 {
                .textShadow(@two);
                transition: @transition;

                &:hover.hover-3 {
                    .textShadow(@three);
                    transition: @transition;
                }

                &:hover.hover-4 {
                    .textShadow(@four);
                    transition: @transition;
                }

                &:hover.hover-5 {
                    .textShadow(@five);
                    transition: @transition;
                }
            }

            &.idle-3 {
                .textShadow(@three); 
                transition: @transition;

                &:hover.hover-4 {
                    .textShadow(@four);
                    transition: @transition;
                }

                &:hover.hover-5 {
                    .textShadow(@five);
                    transition: @transition;
                }
            }

            &.idle-4 {
                .textShadow(@four);
                transition: @transition;

                &:hover.hover-5 {
                    .textShadow(@five);
                    transition: @transition;
                }
            }

            &.idle-5 {
                .textShadow(@five);
                transition: @transition;
            }

            &:hover.hover-5 {
                .textShadow(@five);
                transition: @transition;
            }
        }

        //box            
        &.idle-1 {
            .boxShadow(@one);
            transition: @transition;

            &:hover.hover-1 {
                .boxShadow(@one @accentColor);
                transition: @transition;
            }

            &:hover.hover-2 {
                .boxShadow(@two @accentColor);
                transition: @transition;
            }

            &:hover.hover-3 {
                .boxShadow(@three @accentColor);
                transition: @transition;
            }

            &:hover.hover-4 {
                .boxShadow(@four @accentColor);
                transition: @transition;
            }

            &:hover.hover-5 {
                .boxShadow(@five @accentColor);
                transition: @transition;
            }
        }

        &.idle-2 {
            .boxShadow(@one);
            transition: @transition;

            &:hover.hover-2 {
                .boxShadow(@two @accentColor);
                transition: @transition;
            }

            &:hover.hover-3 {
                .boxShadow(@three @accentColor);
                transition: @transition;
            }

            &:hover.hover-4 {
                .boxShadow(@four @accentColor);
                transition: @transition;
            }

            &:hover.hover-5 {
                .boxShadow(@five @accentColor);
                transition: @transition;
            }
        }

        &.idle-3 {
            .boxShadow(@three); 
            transition: @transition;

            &:hover.hover-3 {
                .boxShadow(@three @accentColor);
                transition: @transition;
            }

            &:hover.hover-4 {
                .boxShadow(@four @accentColor);
                transition: @transition;
            }

            &:hover.hover-5 {
                .boxShadow(@five @accentColor);
                transition: @transition;
            }
        }

        &.idle-4 {
            .boxShadow(@four);
            transition: @transition;

            &:hover.hover-4 {
                .boxShadow(@four @accentColor);
                transition: @transition;
            }

            &:hover.hover-5 {
                .boxShadow(@five @accentColor);
                transition: @transition;
            }
        }

        &.idle-5 {
            .boxShadow(@five);
            transition: @transition;

            &:hover.hover-5 {
                .boxShadow(@five @accentColor);
                transition: @transition;
            }
        }
    }
</style>
