// http://codeforamerica.clearleft.com/?url=/elements/forms/fieldset.select-checkboxes.html
<template>
    <div id= "app">
        <enterprise-app-layout>
            <template slot= 'header'>
                <vue-header
                    :logoLink= 'd_logoLink'
                    :nav= 'toggleNav'
                >
                <Span @click.prevent= 'toggleTheme' class= "fas fa-adjust"/>
                </vue-header>
            </template>
            <template slot= 'menu'>
                <vue-navigation 
                    class= 'sideNav'
                    :class= '{"showNav": show}'
                    :navigationTitles= 'd_navData'
                    :logoLink= 'd_logoLink'
                    :hideNav= 'show'
                    :selected= 'd_selected'
                    @nav= 'nav'
                />
                <vue-button 
                    class= 'toggle' 
                    :buttonIcon= 'show? "fas fa-angle-double-right": "fas fa-angle-double-left"'
                    buttonStyle= 'icon'
                    :onClickAction= 'toggleNav'
                />
            </template>
            <template slot= 'content'>
                <router-view/>
            </template>
        </enterprise-app-layout>
    </div>
</template>

<script>

    import vueHeader from '@/components/UIComponents/Navigation/vueHeader'
    import vueNavigation from '@/components/UIComponents/Navigation/vueNavigation'
    import sideBySideLayout from '@/components/Layout/sideBySideLayout'
    import enterpriseAppLayout from '@/components/Layout/enterpriseAppLayout'
    import vueButton from '@/components/UIComponents/Buttons'

    import { mapState, mapActions } from 'vuex';
    import { toggle, show } from '@/typeScript/toggle'
    import { cookie } from '@/typeScript/cookie'

    export default {
        name: 'app',

        mapState,

        data () {

            // const d_logoLink= require('./assets/logoArtboard 1 copy 4 copy 4.svg')

            const d_logoLink= require('@/assets/SVG/design-system-logo.svg')

            const d_logo= require('@/assets/Asset 7.svg')

            var d_booleanTrue= false

            var d_navCategories= null

            var d_val= null

            return {

                d_val: d_val,

                d_navCategories: d_navCategories,

                d_logoLink: d_logoLink,

                d_logo: d_logo,

                d_booleanTrue: d_booleanTrue,

                d_selected: null,
            } //return
        }, //data

        mixins: [toggle, cookie],

        computed: {

            ...mapState(
                {
                    d_navData: 'navigation',
                }
            ),
        }, //computed

        methods: {

            trans: function () {
                document.documentElement.classList.add('transition');
                window.setTimeout(() => {
                    document.documentElement.classList.remove('transition')
                }, 300)
            }, //trans

            toggleTheme: function () {
                var theme= this.getCookie('theme')
                
                if(theme != 'lightMode') {
                    this.setCookie("theme", "lightMode", 100);
                    this.trans();
                    document.documentElement.setAttribute('theme', 'darkMode');
                }
                else if(theme != 'darkMode'){
                    this.setCookie("theme", "darkMode", 100);
                    this.trans();
                    document.documentElement.setAttribute('theme', 'lightMode');
                }
                
            }, //toggleTheme

            toggleNav: function () {
                this.show= !this.show
            }, //toggleNav
            
            nav: function (id) {
                // console.log('nav', id)
                this.d_selected= id
            }
        }, //methods
        
        beforeMount() {

            var name= this.getCookie('user')
            if(name== '') {
                name = prompt("Please enter your name.", "");
                this.setCookie('user', name, 100)
            }

            var theme= this.getCookie('theme')
            if(theme) {
                document.documentElement.setAttribute('theme', theme);
            }
            else {
                this.setCookie("theme", "lightMode", 100);
            }
        },

        components: {
            vueNavigation,
            sideBySideLayout,
            enterpriseAppLayout,
            vueHeader,
            vueButton
        }, //components
    }
</script>