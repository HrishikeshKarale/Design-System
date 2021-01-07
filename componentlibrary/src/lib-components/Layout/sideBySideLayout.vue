<template>
    <div class= 'sideBySideLayout'>
        <div class= 'leftComponent'>
            <slot name= "left"/>
        </div>
        <div class= 'divide32' />
        <div class= 'rightComponent'>
            <slot name= "right"/>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'sideBySideLayout',
    }
</script>

<style lang= "less" scoped>

    .sideBySideLayout {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        & > div {
            display: flex;
            flex-direction: column;
            height: 100%;

            &.leftComponent {
                width: fit-content;
                height: fit-content;
            }

            &.rightComponent {
                width: auto;
                height: fit-content;
            }
        }
    }
</style>
