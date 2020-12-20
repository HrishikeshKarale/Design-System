<template>
    <div class= "goodVsBad">
      <div 
        class= 'header'
      >
        {{message}}
        <vue-button 
          :buttonType= 'd_buttonType'
          buttonName= "togglecode"
          :buttonIcon= '!d_hidden? "fas fa-chevron-up":"fas fa-chevron-down"'
          :buttonStyle= 'd_buttonStyle[9]'
          :disabled= '!d_booleanTrue'
          :autofocus= '!d_booleanTrue'
          :formID= "d_form"
          :onClickAction= 'toggle.bind(this)'
        />
      </div>
      <div 
        class= 'content'
        v-if= '!d_hidden'
      >
        <card-background
          low= "1"
          class= 'good'
        >
          <span class="fas fa-check-circle"><em>Recomended</em></span>
          <div>
            <slot name= 'good'/>
          </div>
        </card-background>
        <card-background
          low= "1"
          class= 'bad'
        >
          <span class="fas fa-times-circle"><em>NOT Recomended</em></span>
          <div>
            <slot name= 'bad'/>
          </div>
        </card-background>
      </div>
    </div>
</template>

<script>

  import cardBackground from '@/components/UIComponents/Cards/cardBackground'
  import vueButton from "@/components/UIComponents/Buttons"

  export default {
    name: 'goodVsBad',

    data () {

      var d_buttonType= 'button'

      var d_buttonName= 'consoleTextButton'

      var d_buttonText= ''

      var d_buttonStyle= this.$store.state.buttonStyle

      var d_booleanTrue= true

      var d_form= ''

      var d_onClickAction= this.toggle

      var d_hidden= d_booleanTrue
      return {

        d_buttonType: d_buttonType,

        d_buttonName: d_buttonName,

        d_buttonStyle: d_buttonStyle,

        d_booleanTrue: d_booleanTrue,

        d_form: d_form,

        d_onClickAction: d_onClickAction,

        d_hidden: d_hidden,
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
            padding: @spaceMd @spaceLg;
            width: 100%;
            & > em {
              font-weight: bold;
              margin: @spaceMd;
            }
          }

          & > div {
            padding: @spaceMd @spaceLg;
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
