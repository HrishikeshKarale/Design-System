// http://codeforamerica.clearleft.com/?url=/elements/forms/fieldset.select-checkboxes.html
<template>
    <enterprise-app-layout :navigation="d_navData">
      <template slot= 'menu'>
      <side-nav :logo-link= "d_logoLink" :nav= "d_navData" />
      </template>
      <template slot= 'content'>
          <router-view/>
      </template>
    </enterprise-app-layout>
</template>

<script>
  import {  vueSideNav as sideNav } from 'vue2-component-library';
  import { enterpriseAppLayout } from 'vue2-component-library';

  import { mapState } from 'vuex';
  import { toggle, show } from '@/typeScript/toggle'
  import { cookie } from './typeScript/cookie.js'

  export default {
    name: 'app',

    mapState,

    data () {
      const d_logoLink= require('@/assets/logo.svg');
      return {
        d_logoLink
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
      enterpriseAppLayout,
      sideNav,
    }, //components
  }
</script>