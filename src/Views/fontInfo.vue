<template>
    <div 
        class= 'fontInfo'
    >
        <div class= 'fontInfoCategory' 
            :class= '(fontWeight== "Bold")? "bold":null'
        >
            <div>
                <label v-html= 'category'/>
            </div>
            <div>
                <div>
                    <label>Family:</label>
                </div>
                <div>
                    Roboto
                </div>
            </div>
            <div>
                <div>
                    <label>Style:</label>
                </div>
                <div>
                    {{fontWeight}}
                </div>
            </div>
            <div v-if= 'size'>
                <div>
                    <label>Size:</label>
                </div>
                <div>
                    {{size}}
                </div>
            </div>
        </div>
        <div 
            class= 'fontInfoText'
            :class= '(fontWeight== "Bold")? "bold":null'
            v-html= 'text'
        />

    </div>
</template>

<script>

    export default {
        name: 'fontInfo',

        props: [
            'category',
            'fontWeight',
            'text',
            'size'
        ],//props
    } //default
</script>

<style>

    .bold {
        font-weight: bold;
    }

    .fontInfo {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .fontInfoCategory {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 8px 16px;
    }

    .fontInfoCategory > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow: 1;
    }

    .fontInfoCategory > div > div {
        flex-grow: 1;
    }

    .fontInfoText {
        display: flex;
        padding: 8px 16px;
        border-left: 1px solid grey;
        align-items: center;
    }

    .bold {
        font-weight: bold;
    }

</style>