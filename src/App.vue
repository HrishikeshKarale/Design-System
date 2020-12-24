// http://codeforamerica.clearleft.com/?url=/elements/forms/fieldset.select-checkboxes.html
<template>
    <enterprise-app-layout>
      <!-- <template slot= 'header'>
        <vue-header
          :logoLink= 'd_logoLink'
          :nav= 'toggleNav'
        >
        <Span @click.prevent= 'toggleTheme' class= "fas fa-adjust"/>
        </vue-header>
      </template> -->
      <template slot= 'menu'>
      <side-nav :logo-link="d_logoLink" :nav="d_navData" />
        <!-- <vue-navigation 
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
          :icon= 'show? "fas fa-angle-double-right": "fas fa-angle-double-left"'
          category= 'icon'
          :ctx= 'toggleNav'
        /> -->
      </template>
      <template slot= 'content'>
        <scroll-indicator>
          <router-view/>
        </scroll-indicator>
      </template>
    </enterprise-app-layout>
</template>

<script>

  import sideNav from '@/components/UIComponents/Navigation/sideNav'
  import vueHeader from '@/components/UIComponents/Navigation/vueHeader'
  import sideBySideLayout from '@/components/Layout/sideBySideLayout'
  import enterpriseAppLayout from '@/components/Layout/enterpriseAppLayout'
  import vueButton from '@/components/UIComponents/Buttons'

  import { mapState, mapActions } from 'vuex';
  import { toggle, show } from '@/typeScript/toggle'
  import { cookie } from './typeScript/cookie.js'

  export default {
    name: 'app',

    mapState,

    data () {

      // const d_logoLink= require('./assets/logoArtboard 1 copy 4 copy 4.svg')

      const d_logoLink= require('@/assets/logo.svg')

      const d_logo= require('@/assets/Asset 7.svg')

      const d_booleanTrue= false

      const d_navCategories= null

      const d_val= null

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
          document.documentElement.classList.remove('transition');
        }, 300)
      }, //trans

      toggleTheme: function () {
        var theme= this.getCookie('theme');
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
        this.show= !this.show;
      }, //toggleNav
           nav: function (id) {
        // console.log('nav', id)
        this.d_selected= id;
      }
    }, //methods
    
    beforeMount() {
      var name= this.getCookie('user');
      if(name== '') {
        name = prompt("Please enter your name.", "");
        this.setCookie('user', name, 100);
      }

      var theme= this.getCookie('theme');
      if(theme) {
        document.documentElement.setAttribute('theme', theme);
      }
      else {
        this.setCookie("theme", "lightMode", 100);
      }
    },

    components: {
      vueHeader,
      sideBySideLayout,
      enterpriseAppLayout,
      sideNav,
      vueButton
    }, //components
  }
</script>