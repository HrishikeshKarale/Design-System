<template>
    <div class= 'navNavigation'>
        <content-nav
            :attributes= 'd_navigation.attributes'
            :title= 'd_navigation.title'
        >  
            <component-details
                :compData= 'd_navigation'
            >
                <vue-navigation 
                    :navigationTitles= 'd_navigationTiles'
                    :logoLink= 'd_logoLink'
                    :title= 'd_title'
                    @nav= 'd_nav'
                />
            </component-details>
        </content-nav>
    </div>
</template>

<script>

    import vueNavigation from '@/components/UIComponents/Navigation/vueNavigation'
    import componentDetails from '@/Views/componentDetails'
    import contentNav from '@/Views/components/contentNav';

    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'navNavigation',
        
        mapState,

        data () {

            const d_logoLink= require('@/assets/logoArtboard 1 copy 4 copy 2.svg')

            var d_title= 'Sample Navigation'

            var d_navigationTiles= this.$store.state.navigation

            var d_nav= this.nav

            return {

                d_logoLink: d_logoLink,

                d_title: d_title,

                d_navigationTiles: d_navigationTiles,

                d_nav: d_nav,

                content: false,

                selected: null,

                d_navigation: {

                    title: 'Navigation',

                    compName: 'vue-navigation',

                    import: 'import vueTable from "@/components/UIComponents/Navigation/vueNavigation"',

                    description: '<p></p>',

                    attributes: [
                        {
                            type: "navigationTitles",
                            value: d_navigationTiles,
                            description: '<p>The tableDetails attribute provides the table with data pertaining to columns adn records for the particulat &lt;vue-table&gt;.</p>\
                                            <p>The tableDetails attribute is an Object and has data and cols as keys to hold records and column names respectively.</p>\
                                            <p>This is a required field and cannot be left null/empty.</p>',
                            text: 'Specifies the rows and columns for the table as an object'
                        },
                        {
                            type: "logoLink",
                            value: d_logoLink,
                            description: '<p>The title attribute provides the table with a title or name for the particulat &lt;vue-table&gt;.</p>\
                                            <p>This title attribute take a string input and displays it in the top-left corner.</p>',
                            text: 'Specifies the title/name for the table.'
                        },
                        {
                            type: "title",
                            value: d_title,
                            description: '<p>The title attribute provides the table with a title or name for the particulat &lt;vue-table&gt;.</p>\
                                            <p>This title attribute take a string input and displays it in the top-left corner.</p>',
                            text: 'Specifies the title/name for the table.'
                        },
                        {
                            type: "@nav",
                            value: d_nav,
                            description: '<p>The title attribute provides the table with a title or name for the particulat &lt;vue-table&gt;.</p>\
                                            <p>This title attribute take a string input and displays it in the top-left corner.</p>',
                            text: 'Specifies the title/name for the table.'
                        },
                    ] //attributes
                }, //d_navigation
            } //return
        }, //NAVIGATION

        methods: {
            nav: function (id) {
                this.selected= id

                if (id) {
                    this.content= true   
                }
                else {
                    this.content= false
                }
            }
        }, //methods

        components: {
            
            vueNavigation,
            componentDetails,
            contentNav,
        }, //components
    } //default
</script>

<style lang= 'less' scoped>

    .navNavigation {
        display: flex;
    }
</style>
