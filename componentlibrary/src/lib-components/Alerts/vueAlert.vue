<template>
  <div
    v-if= '!d_close'
    class= 'vueAlert'
    :class= 'type'
  >
    <div>
      <span
        :class= '[type, d_alertIcon]'
      />
      <div :class= 'type'>
        <div class= 'message'>
          <h5><b>{{type=="danger"? code+" - ":""}} {{message}}</b></h5>
          <p>
            {{description}}
          </p>
        </div>
      </div>
    </div>
    <vue-button
      v-if= 'dismissible'
      type= 'button'
      tag= "closeAlertButton"
      icon= "fas fa-times"
      category= 'icon'
      :ctx= 'closeAlertBox.bind(this)'
    />
  </div>
</template>

<script>

  import vueButton from '../UIComponents/Button/index.vue'

  export default {
    name: 'vueAlert',

    data () {
      const d_alertIcon= ''
      const d_close= false

      return {
        d_alertIcon,
        d_close,
      } //return
    }, //data

    components: {
      vueButton
    }, //components

    props: {

      type: {
        required: true,
        type: String,
        default: 'info',
        validator: function (value) {
          return ['info', 'success', 'warning', 'danger'].indexOf(value) !== -1;
        }
      },

      code: {
        required: function () {
          if(type== 'danger') {
            return true
          }
          return false
        },
        type: String,
      },

      message: {
        required: true,
        type: String,
        default: 'default/no alert message specified'
      },

      description: {
        required: true,
        type: String,
        default: 'default/no alert message specified'
      },

      dismissible: {
        required: false,
        type: Boolean,
        default: false
      },

      timeout: {
        required: false,
        type: Number,
        default: null
      },
    }, //props

    methods: {

      closeAlertBox() {
        this.d_close= true
      }, //closeAlertBox

      closeAlert: function () {
        document.getElementsByClassName('dangerAlert')
              .fadeTo(5000, 0)
                .slideUp(500, function () {
                  $(this).remove()
                }
            )//slideUp
      }, //closeAlert
    }, //methods

    created() {

      switch (this.type) {
        case 'warning': this.d_alertIcon= 'fas fa-exclamation-triangle'
          break;
        case 'info': this.d_alertIcon= 'fas fa-info-circle'
          break;
        case 'success': this.d_alertIcon= 'fas fa-check-circle'
          break;
        case 'danger': this.d_alertIcon= 'fas fa-exclamation-circle'
          break;
      }
    }, //created

    mounted () {
      var timeout= this.timeout

      if(timeout && timeout!=0) {
        setTimeout(this.closeAlertBox, timeout*1000);
      }
    }, //mounted
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) '../../Less/customVariables.less';

  .vueAlert{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: @borderRadius;
    border: 1px solid transparent;
    width: fit-content;
    background-color: @backgroundColor;
    border-left-width: 8px;
    padding: @spaceSm @spaceMd;

    & > p {
      color: @textColor;
    }

    &.danger {
      border-color: @dangerText;
           h5, span {
        color: @dangerText;
      }
    }
    &.warning {
      border-color:@warningText;

      h5, span {
        color: @warningText;
      }
    }
    &.success {
      border-color: @successText;

      h5, span {
        color: @successText;
      }
    }
    &.info {
      border-color: @infoText;

      h5, span {
        color: @infoText;
      }
    }

    & > div {
      display: flex;
      flex-direction: row;

      & > span {
        padding: @spaceSm*3+@spaceXs @spaceMd @spaceSm @spaceSm;
      }

      & > div {
        display: flex;
        flex-direction: column;

        & > .alertMessage {
                   & > p {
            font-size: 16px;
          }
        }

        & > .slot {
          display: flex;
          flex-direction: row-reverse;
        }
      }
    }
  }
</style>
