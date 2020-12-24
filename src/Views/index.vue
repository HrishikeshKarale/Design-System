<template>
  <div class= 'intro'>
    <h1
      @click= 'd_booleanTrue= !d_booleanTrue'>Hello {{getCookie('user')}}</h1> 
    <h2>Good to see you here.</h2>
    <h4>Click on the options in navigation on your left to get started.</h4>
    <div class= 'navIcons'>
      <div
        v-for= "(nav, index) in d_navData"
        :key= "index"
        class= 'levelOne'
      >
        <h1>
          <router-link 
            :to= "'/' + nav.text"
          >
            {{nav.text}}
          </router-link>
        </h1>
        <template 
          v-if= 'nav.subnav'
        >
          <div
            v-for= 'sub in nav.subnav'
            :key= 'nav.id + "-" + sub.id'   
            :class= 'nav.subnav.subnav? "levelThree": "levelTwo"'
          >
            <router-link 
              :to= "'/' + nav.text +'/'+ sub.text"
            >
              <h3 v-if= 'nav.subnav.subnav'>
                {{sub.text}}
              </h3>
              <h2 v-else>
                {{sub.text}}
              </h2>
            </router-link>
            <template 
              v-if= 'sub.subnav'
            >
              <div
                :key= "'/' + nav.text +'/'+ sub.text +'/'+ subs.text" 
                class= 'levelThree'
                v-for= 'subs in sub.subnav'
              >
                <router-link 
                  :to= "'/' + nav.text +'/'+ sub.text +'/'+ subs.text"
                >
                  <span v-html= 'subs.icon' class= 'fa-2x'/>
                  <!-- <h3>{{subs.text}}</h3> -->
                </router-link>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import vueImg from '@/components/UIComponents/Image/vueImg.vue'
  import { cookie } from '@/typeScript/cookie.js'
  import { mapState } from 'vuex';

  export default {
    name: 'index',

    mapState,

    data () {     
      const d_booleanTrue= false
      return {
        d_booleanTrue: d_booleanTrue,
        d_val: null,
      }
    }, //data

    mixins: [cookie],

    computed: {

      ...mapState(
        {
          d_navData: 'navigation',
        }
      )
    }, //computed
    
    components: {
           vueImg,
    }, //components
  }
</script>

<style lang="less" scoped>

  @import (reference) "../Less/customMixins.less";
  @import (reference) "../Less/customVariables.less";

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 32px;
    color: @textColor;

    > div {

      &.navIcons {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        & > div {
            display: flex;
            flex-direction: row;

          &.levelOne {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 8px 16px;

            .boxShadow(@three);

            & > h1 {

              & > a {
                font-weight: bold;
                color: @secondaryColor;
              }
            }

            & > div.levelTwo {
              display: flex;
              flex-direction: column;
              border-radius: 4px;
              padding: 8px 16px;
                         .boxShadow(@two);
            }

            & .levelThree {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-evenly;
              align-items:flex-start;
            }
          }

        }
      }
    }
  } 
</style>
