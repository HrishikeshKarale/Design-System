<template>
    <div class= "goodVsBad">
      <div
      v-if= "message"
        class= 'header'
      >
        {{message}}
        <vue-button
          tag= "toggleExample"
          :icon= '!d_hidden? "fas fa-chevron-up":"fas fa-chevron-down"'
          category= 'icon-sm'
          :ctx= 'toggle.bind(this)'
        />
      </div>
      <div
        class= 'content'
        v-show= '!d_hidden'
      >
        <card-background
          low= "1"
          class= 'good'
        >
          <span class= "fas fa-check-circle"><em>Recomended</em></span>
          <div>
            <slot name= 'good'/>
          </div>
        </card-background>
        <card-background
          low= "1"
          class= 'bad'
        >
          <span class= "fas fa-times-circle"><em>NOT Recomended</em></span>
          <div>
            <slot name= 'bad'/>
          </div>
        </card-background>
      </div>
    </div>
</template>

<script>

  import cardBackground from '@/components/UIComponents/Cards/cardBackground'
  import vueButton from "vue2-component-library"

  export default {
    name: 'goodVsBad',

    data () {
      const d_hidden= this.message? true : false;
      return {
        d_hidden,
      } //return
    }, //data

    methods: {

      toggle: function () {
        this.d_hidden= !this.d_hidden
      }
    }, //methods

    props: {

      message: {
        required: false,
        type: String,
      }
    }, //props

    components: {

      vueButton,
      cardBackground
    }, //components
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) '../Less/customVariables.less';

  .goodVsBad {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;

    & > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      padding: @spaceMd @spaceLg;

      &.content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-radius: 0 0 4px 4px;
        color: @textColor;
        font-size: 16px;
        justify-content: space-between;
        align-content: flex-end;

        & > div {
          max-width: 48%;

          & > span {
            align-self: center;
            border-radius: @borderRadius;
            padding: @spaceLg;
            width: 99%;
            /* min-width: fit-content; */
            margin: @spaceSm;
            border-radius: @borderRadius @borderRadius 0 0;
            margin: @spaceXs;
            & > em {
              font-weight: bold;
              margin: @spaceMd;
            }
          }
        &.good {
          & > span {
            color: @successText;
            background-color: @successBackground;
          }
        }

        &.bad {
          & > span {
            color: @dangerText;
            background-color: @dangerBackground;
          }
        }

          & > div {
            padding: @spaceMd @spaceLg;
          }
        }
      }

      &.header{
        flex-wrap: nowrap;
        background-color: @infoBackground;
        color: @infoText;
        padding: @spaceMd @spaceLg;
        border-radius: @borderRadius;
        color: @textColor;
      }
    }
  }
</style>
