<template>
    <div class= 'cardDetails'>
        <div
            v-for= '(data, index) in cardData.data'
            :key= 'index'
        >
            <div>
                <label v-if= 'cardData.cols[index]'>
                    {{cardData.cols[index]}}:
                </label>
            </div>
            <div>
                {{cardData.data[index]}}
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'cardDetails',

        props: {
            cardData: {
                type: Object,
                required: true,
                default: null
            }
        }, //props        
    } //default
</script>

<style lang= "less" scoped>

    .cardDetails {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        & > div {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;

            & > div {
                display: flex;
                flex-direction: row;

                &:first-child {
                    margin-right: 8px;
                }
            }
        }
    }
</style>
