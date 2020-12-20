<template>
    <div class= "goodVsBad">
      <div 
        v-if= 'message'
        class= 'header'
      >
        <p>
          {{message}}
        </p>
        <div>
          Example
          <vue-button 
          :buttonType= 'd_buttonType'
          buttonName= "togglecode"
          buttonText= null
          :buttonIcon= '!d_hidden? "fas fa-chevron-up":"fas fa-chevron-down"'
          :buttonStyle= 'd_buttonStyle[9]'
          :disabled= '!d_booleanTrue'
          :autofocus= '!d_booleanTrue'
          :formID= "d_form"
          :onClickAction= 'toggle.bind(this)'
        />
        </div>
      </div>
      <div 
        class= 'content'
        v-if= '!d_hidden'
      >
      <card-background
        low= "3"
        class= 'good'
      >
        <div>
          <slot name= 'good'/>
        </div>
        <div>
          GOOD
        </div>
      </card-background>
      <card-background
        low= "3"
        class= 'bad'
      >
        <div>
          <slot name= 'bad'/>
        </div>
        <div>
          BAD
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

      var d_hidden= !d_booleanTrue
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
      align-items: flex-end;
      justify-content: space-around; 

      &.content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-radius: 0 0 4px 4px;
        color: @textColor;
        font-size: 16px;
        padding: @spaceMd @spaceLg;

        & > div {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          padding: @spaceLg @spaceXl;
          border: 1px solid transparent;
          border-top-width: 4px;
          border-radius: @borderRadius;
          align-self: flex-start;
          min-width: fit-content;
          
          & > div {
            display: flex;
            flex-direction: column;
            align-content: space-between;

            & > div {
              display: flex;
              flex-direction: column;
              align-content: space-between;
              margin: 0 16px 8px 16px;
             }
          }

          & > div {

            & > div {

              &:last-child {
                margin-top: 32px;
                padding: @spaceSm @spaceMd;
                text-align: center;
                border-radius: @borderRadius;
                font-weight: bold;
                color: @white;
              }
            }
          }
          max-width: 48%;
          
          &.good {
            border-top-color: @successText;
            
            & > div {

              & > div {

                &:last-child {
                  background-color: @successText;
                }
              }
            }
          }

          &.bad {
            border-top-color: @dangerText;
            
            & > div {
              
              & > div {

                &:last-child {
                  background-color: @dangerText;
                }
              }
            }
          }
        }
      } 

      &.header{
        justify-content: space-between;
        background-color: @infoBackground;
        color: @infoText;
        padding: @spaceMd @spaceLg;
        border-radius: 4px 4px 0 0 ;

        & > p {
          color: @textColor;
         }
      }
    }    
  }
</style>
