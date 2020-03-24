<template>
    <div class= "grid">
        <div class= 'gridTitle'>
            <h1>{{title}}</h1>
        </div>

        <div> 
            <div
                v-for= 'x in 10' 
                :key= 'x.index'
            >
                <svg 
                    width= "120" 
                    height= "100"
                >
                    <rect 
                        width= "100%" 
                        height= "100%" 
                        style= "fill:rgb(110,110,255);
                                    stroke-width:1;
                                    stroke:rgb(0,0,0)" 
                    />
                </svg>
                <svg
                    width= "32" 
                    height= "100"
                    v-if= 'x<=9'
                >
                    <rect 
                        width= "100%" 
                        height= "100%" 
                        style= "fill:rgb(0,0,255);
                                    stroke-width:1;
                                    stroke:rgb(0,0,0)" 
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'grid',

        data () {
            return {
                title: 'Grid',
                msg: 'Welcome to Your Vue.js App'
            } //return
        } //data
    } //default
</script>

<style>
    .gridTitle {
        margin-bottom: 96px;
    }

    .grid > div > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow: 1;
    }

    .grid {
        width: 960px;
        margin: 0 auto;
    }

    .grid > div {
        display: flex;
    }

</style>
