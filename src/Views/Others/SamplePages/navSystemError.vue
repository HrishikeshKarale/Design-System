<template>
  <div class= 'navSystemError'>
    <system-error
      errorCode= '404'
      errorMessage= 'Something unexpected happened.'
      stackTrace=
      'stack
      trace
      bla
      bla
      bla
      bla
      bla
      bla'
      url= 'http.comet.com'
      date= "August 14, 2019 12:30 PM"
      app= "WMX Rochester"
      version= 'v1.19.1'
    />
    <vue-modal
      text= 'open Modal'
      tag= 'approveText'
      icon= 'fas fa-eject'
      :showModal= 'd_showModal'
    >
      <system-error
        errorCode= '404'
        errorMessage= 'Something unexpected happened.'
        stackTrace= 'stack trace bla bla bla stack trace bla bla bla stack trace bla bla bla'
        url= 'http.comet.com'
        date= "August 14, 2019 12:30 PM"
        app= "WMX Rochester"
        version= 'v1.19.1'
      />
    </vue-modal>
  </div>
</template>

<script>

  import { vuePageNotFound as systemError } from "vue2-component-library";
  import { vueModal } from "vue2-component-library";

  export default {
    name:'navSystemError',

    data () {
      const d_showModal= false
      return {
        d_showModal
      } //return
    }, //data

    components: {
      systemError,
      vueModal
    }
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) "../../../Less/customMixins.less";
  @import (reference) "../../../Less/customVariables.less";

  .navSystemError {
    display: flex;
    flex-direction: column;

  }
</style>

