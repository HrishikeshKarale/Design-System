<template>
    <div class= "layout">
        <h1> Layout content </h1>

        Examples:
        <ul>
            <li>
                <a href= '#EAL'>Enterprise App Layout</a>
                <p>This Layout defines the basic structure of our vue application and contains 3 slots.</p>
            </li>
            <li>
                <a href= '#compSubnav'>Content SubNav Layout</a>
                <p>This layout defines a layout where the content is divided into two parts a subnavigation/section that sticks to the right whereas the main content stays in the content section of the parent payout.</p>
            </li>
            <li>
                <a href= '#sidebyside'>Side By Side Layout</a>
                <p>This Layout defines the basic structure of our vue application and contains 3 slots.</p>
            </li>
            <li>
                <a href= '#compSubnav'>Content SubNav Layout</a>
                <p>This layout defines a layout where the content is divided into two parts a subnavigation/section that sticks to the right whereas the main content stays in the content section of the parent payout.</p>
            </li>
            <li>
                
                <a href= '#goldenRatio'>Golden Ratio Layout</a>
                <p>This layout defines a layout where the content placed according to the golden ratio.</p>
            </li>
            <li>
                <a href= '#composite'>Composite</a>
                <p>This layout is build using a siide by side Layout as content within a Enterprise App Layout.</p>
            </li>
            <li>
                <a href= '#composite1'>Composite 1</a>
                <p>This layout is build using a side by side Layout as content within a Enterprise App Layout. This example shows how the side by side wraps when there is no space for a component in content.</p>
            </li>
            <li>
                <a href= '#composite2'>Composite 2</a>
                <p>This layout defines a layout where the content is divided into two parts a subnavigation/section that sticks to the right whereas the main content stays in the content section of the parent payout.</p>
            </li>
        </ul>

        <div>
            <div class= 'legends'>
                <div>
                    <svg width= "40" height= "40">
                        <rect width= "40" height= "40" style= "fill:@backgroundColor;stroke-width:4;stroke:rgb(0,0,0)" />
                        Sorry, your browser does not support inline SVG.
                        svg description: a Yellow rectangle of 300x300 
                    </svg>
                    Page
                </div>
                <div>
                    <svg width= "40" height= "40">
                        <rect width= "40" height= "40" style= "fill:greenyellow;stroke:rgb(0,0,0)" />
                        Sorry, your browser does not support inline SVG.
                        svg description: a Yellow rectangle of 300x300 
                    </svg>
                    Header
                </div>
                <div>
                    <svg width= "40" height= "40">
                        <rect width= "40" height= "40" style= "fill:lightcoral;stroke:rgb(0,0,0)" />
                        Sorry, your browser does not support inline SVG.
                        svg description: a Yellow rectangle of 300x300 
                    </svg>
                    Menu or Navigation
                </div>
                <div>
                    <svg width= "40" height= "40">
                        <rect width= "40" height= "40" style= "fill:lightblue;stroke:rgb(0,0,0)" />
                        Sorry, your browser does not support inline SVG.
                        svg description: a Yellow rectangle of 300x300 
                    </svg>
                    Content
                </div>
                <div>
                    <svg width= "40" height= "40">
                        <rect width= "40" height= "40" style= "fill:yellow;stroke:rgb(0,0,0)" />
                        Sorry, your browser does not support inline SVG.
                        svg description: a Yellow rectangle of 300x300 
                    </svg>
                    Master (left side) Content
                </div>
                <div>
                    <svg width= "40" height= "40">
                        <rect width= "40" height= "40" style= "fill:red;stroke:rgb(0,0,0)" />
                        Sorry, your browser does not support inline SVG.
                        svg description: a Yellow rectangle of 300x300 
                    </svg>
                    Detail (right side) Content
                </div>
            </div>
            
            <div>
                <h2 id= 'EAL'>Enterprise App Layout</h2>
                <p>This Layout defines the basic structure of our vue application and contains 3 slots.</p>
                <p>These 3 slots, namely:
                    <ul>
                        <li>
                            <svg width= "20" height= "20">
                                <rect width= "20" height= "20" style= "fill:greenyellow;stroke:rgb(0,0,0)" />
                                Sorry, your browser does not support inline SVG.
                                svg description: a Yellow rectangle of 300x300 
                            </svg>
                            Top (slot= 'header')
                        </li>
                        <li>
                            <svg width= "20" height= "20">
                                <rect width= "20" height= "20" style= "fill:lightcoral;stroke:rgb(0,0,0)" />
                                Sorry, your browser does not support inline SVG.
                                svg description: a Yellow rectangle of 300x300 
                            </svg>
                            left (slot= 'menu')
                        </li>
                        <li>
                            <svg width= "20" height= "20">
                                <rect width= "20" height= "20" style= "fill:lightblue;stroke:rgb(0,0,0)" />
                                Sorry, your browser does not support inline SVG.
                                svg description: a Yellow rectangle of 300x300 
                            </svg>
                            Right (slot= 'content')
                        </li>
                    </ul>
                </p>
                <div class= 'content'>
                    <enterprise-app-layout>
                        <template slot= 'header'>
                            <div style= ' width: 100%;
                                        height: 80px;
                                        background-color: greenyellow;'
                            />
                        </template>
                        <template slot= 'menu'>
                            <div style= ' height: 1080px;
                                        width: 320px;
                                        background-color: lightcoral;'
                            />
                        </template>
                        <template slot= 'content'>
                            <div style= ' height: 480px;
                                        width: 480px;
                                        background-color: lightblue;'
                            />
                        </template>
                    </enterprise-app-layout>  
                </div>
                <h2 id= 'sidebyside'>Side by side Layout</h2>
                <p>This Layout defines the basic structure of our vue application and contains 3 slots.</p>
                <p>These 3 slots, namely:
                    <ul>
                        <li>
                            <svg width= "20" height= "20">
                                <rect width= "20" height= "20" style= "fill:yellow;stroke:rgb(0,0,0)" />
                                Sorry, your browser does not support inline SVG.
                                svg description: a Yellow rectangle of 300x300 
                            </svg>
                            Master (slot= 'left')
                        </li>
                        <li>
                            <svg width= "20" height= "20">
                                <rect width= "20" height= "20" style= "fill:red;stroke:rgb(0,0,0)" />
                                Sorry, your browser does not support inline SVG.
                                svg description: a Yellow rectangle of 300x300 
                            </svg>
                            Detail (slot= 'right')
                        </li>
                    </ul>
                </p>
                <div 
                    style= 'background-color: lightblue; 
                            height: fit-content;
                            width: fit-content;'
                >
                    <side-by-side-layout>
                        <template slot= 'left'>
                            <div style= ' width: 320px;
                                    height: 320px;
                                    background-color: yellow;'
                            />
                        </template>
                        <template slot= 'right'>
                            <div style= ' width: 480px;
                                    height: 480px;
                                    background-color: red;'
                            />
                        </template>
                    </side-by-side-layout>
                </div>
                <h2 id= 'compSubnav'>Content Subnav Layout</h2>
                <p>This Layout defines the basic structure of our vue application and contains 3 slots.</p>
                <p>These 3 slots, namely:
                    <ul>
                        <li>
                            <svg width= "20" height= "20">
                                <rect width= "20" height= "20" style= "fill:yellow;stroke:rgb(0,0,0)" />
                                Sorry, your browser does not support inline SVG.
                                svg description: a Yellow rectangle of 300x300 
                            </svg>
                            Master (slot= 'left')
                        </li>
                        <li>
                            <svg width= "20" height= "20">
                                <rect width= "20" height= "20" style= "fill:red;stroke:rgb(0,0,0)" />
                                Sorry, your browser does not support inline SVG.
                                svg description: a Yellow rectangle of 300x300 
                            </svg>
                            Detail (slot= 'right')
                        </li>
                    </ul>
                </p>
                <div 
                    style= 'background-color: lightblue; 
                            height: fit-content;
                            width: 800px;'
                >
                                
                        <template slot= 'left'>
                            <div style= ' width: 400px;
                                    height: 480px;
                                background-color: yellow;'
                            />
                        </template>
                        <template 
                            slot= 'right'
                        >
                            <div>
                                *Part of Content SubNav Layout
                                <ul>
                                    <li>
                                        <a href= '#EAL'>Enterprise App Layout</a>
                                    </li>
                                    <li>
                                        <a href= '#sidebyside'>Side By Side Layout</a>
                                    </li>
                                    <li>
                                        <a href= '#contentSubnav'>Content SubNav Layout</a>
                                    </li>
                                    <li>
                                        <a href= '#goldenRatio'>Golden Ratio Layout</a>
                                    </li>
                                    <li>
                                        <a href= '#composite'>Composite</a>
                                    </li>
                                    <li>
                                        <a href= '#composite1'>Composite 1</a>
                                    </li>
                                    <li>
                                        <a href= '#composite2'>Composite 2</a>
                                    </li>
                                </ul>
                            </div>
                        </template>
                </div>
                <h2 id= 'goldenRatio'>Golden Ratio Layout</h2>
                <p>This Layout defines the basic structure of our vue application with a golden ratio</p>
                <div 
                    style= 'background-color: lightblue; 
                            height: fit-content;
                            width: fit-content;'
                >
                    <pack-station-layout/>
                </div>
                <h2 id= 'composite'>Composit Layout.</h2>
                This layout is build using a siide by side Layout as content within a Enterprise App Layout. 
                <div class= 'content'>
                    <enterprise-app-layout>
                        <template slot= 'header'>
                            <div style= ' width: 100%;
                                        height: 80px;
                                background-color: greenyellow;'
                            />
                        </template>
                        <template slot= 'menu'>
                            <div style= ' height: 100%;
                                        max-width: 320px;
                                        min-width: 240px;
                                        background-color: lightcoral;'
                            />
                        </template>
                        <template slot= 'content'>
                            <div style= ' height: auto;
                                        width: fit-content;
                                background-color: lightblue;
                                margin-top: 32px;'
                            >
                                <side-by-side-layout>
                                    <template slot= 'left'>
                                        <div style= ' width: 320px;
                                                height: 480px;
                                            background-color: yellow;'
                                        />
                                    </template>
                                    <template slot= 'right'>
                                        <div style= ' width: 480px;
                                                height: 480px;
                                            background-color: red;'
                                        />
                                    </template>
                                </side-by-side-layout>
                            </div>
                        </template>
                    </enterprise-app-layout>  
                </div>
                <h2 id= 'composite1'>Composit Layout where side by side content does not fit in content space</h2>
                This layout is build using a siide by side Layout as content within a Enterprise App Layout. 
                <div class= 'content'>
                    <enterprise-app-layout>
                        <template slot= 'header'>
                            <div style= ' width: 100%;
                                        height: 80px;
                                background-color: greenyellow;'
                            />
                        </template>
                        <template slot= 'menu'>
                            <div style= 'height: 100%;
                                        max-width: 320px;
                                        min-width: 240px;
                                        background-color: lightcoral;'
                            />
                        </template>
                        <template slot= 'content'>
                            <div style= ' height: fit-content;
                                        width: fit-content;
                                        background-color: lightblue;'
                            >
                                <side-by-side-layout>
                                    <template slot= 'left'>
                                        <div style= ' width: 320px;
                                                height: 480px;
                                            background-color: yellow;'
                                        />
                                    </template>
                                    <template slot= 'right'>
                                        <div style= ' width: 800px;
                                                height: 480px;
                                            background-color: red;'
                                        />
                                    </template>
                                </side-by-side-layout>
                            </div>
                        </template>
                    </enterprise-app-layout>
                </div>

                <h2 id= 'composite2'>Cooposite 2</h2>
                <div 
                    class= 'content'
                    style= 'font-size: @fontSizeMd;'
                >
                    <enterprise-app-layout>
                        <template slot= 'header'>
                            <div style= ' width: 100%;
                                        height: 80px;
                                background-color: greenyellow;'
                            />
                        </template>
                        <template slot= 'menu'>
                            <div style= 'height: 100%;
                                        max-width: 320px;
                                        min-width: 240px;
                                        background-color: lightcoral;'
                            />
                        </template>
                        <template slot= 'content'>
                            
                            <div 
                                style= ' height: fit-content;
                                        width: fit-content;
                                        background-color: lightblue;'
                            >
                                <side-by-side-layout>
                                    <template slot= 'left'>
                                        <div style= ' width: 320px;
                                                height: 320px;
                                                background-color: yellow;'
                                        />
                                    </template>
                                    <template slot= 'right'>
                                        <div style= ' width: 480px;
                                                height: 480px;
                                                background-color: red;'
                                        />
                                    </template>
                                </side-by-side-layout>
                            </div>
                        </template>
                    </enterprise-app-layout>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import sideBySideLayout from '@/components/Layout/sideBySideLayout'
    import enterpriseAppLayout from '@/components/Layout/enterpriseAppLayout'
    import packStationLayout from '@/components/Layout/packStationLayout'
    import vueTable from '@/components/UIComponents/Table/vueTable'
    // import { store } from '@/store/store'
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'layout',

        // store,

        mapState,

        mapActions,
        
        data () {

            var d_title= 'Order Details Table'

            var d_data= null

            return {

                d_title: d_title,

                d_data: d_data,
            } //return
        }, //data

        computed: {

            ...mapState (
                [
                    'paginatedData',
                    'metadata',
                    'selectedFilter',
                ]
            ),
        }, //computed

        beforeCreate () {

            this.$store.dispatch('initData', 'https://api.myjson.com/bins/qcjt6')
        }, //beforeCreate

        components: {

            sideBySideLayout,
            enterpriseAppLayout,
            packStationLayout,
            vueTable
        }, //componnets

        watch: {

            paginatedData: function (newValue, oldValue) {
                // console.log('paginatedData')
                if (newValue!= oldValue) {
                    this.d_data= newValue
                }
            }, //data
        }, //watch
    } //default
</script>


<style lang= "less" scoped>

    @import (reference) "./../../Less/customMixins.less";
    @import (reference) "./../../Less/customVariables.less";

    .layout {

        > div {
            display: flex;
            flex-direction: column;

            position: sticky;
            top: 0;

            & > .legends {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                padding: @spaceMd @spaceLg;
                border-radius: @borderRadius;
            }

            & > div {
                display: flex;
                flex-direction: column;

                .content {
                    display: flex;
                    background-color: #f5f5f5;
                    border-radius: @borderRadius;
                    max-width: 1400px;
                    min-width: 640px;
                }

            }
        }
    }
</style>
