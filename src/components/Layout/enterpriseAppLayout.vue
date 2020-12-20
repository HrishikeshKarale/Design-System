<template>
    <div class= 'enterpriseAppLayout'>
        <div class= 'head'>
            <slot name= "header"/>
        </div>
        <div class= 'body'>
            <div class= 'menu'>
                <slot name= "menu"/>
            </div>
            <div class= 'content'>
                <slot name= "content"/>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'enterpriseAppLayout'
    }
</script>

<style lang= "less" scoped>

    @import (reference) "./../../Less/customMixins.less";
    @import (reference) "./../../Less/customVariables.less";

    .enterpriseAppLayout {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;

        & > div {
            display: flex;
            flex-direction: row;
            height: 100%;

            &:last-child {
                width: 100%;
            }

            &.head {
                background-color: @secondaryColor;
                height: auto;
            
                @media screen {
                    @media (min-width: 1240px) {
                        display: none !important;
                    }
                }
            }

            &.body > div {
                display: flex;
                flex-direction: column;
                z-index: 1000;

                &.menu {
                    display: flex;
                    justify-content: space-between;
                    width: fit-content;
                    height: 100%;
                    position: sticky;
                    top: 0;
                    left: 0;
                    z-index: 2000;
                    background-color: @navBackground;

                    .boxShadow(@one);

                    & > div:last-child {
                        flex-direction: row-reverse;
                    }
                
                    @media screen {
                        @media (max-width: 1240px) {
                            .vueNavigation {
                                display: none;

                                &.showNav {
                                    display: flex;
                                }
                            }
                        }
                    }
                }

                &.content {
                    height: fit-content;
                    width: 100%;
                    padding: @spaceLg @spaceXl;
                    color: @textColor;
                    
                    .scroll(100%);
                }
            }
        }

    }
</style>
