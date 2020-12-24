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
      :text= 'd_text'
      :tag= 'd_tag'
      :icon= 'd_icon'
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
  
  import systemError from '@/components/Alerts/systemError.vue';

  import vueModal from  '@/components/UIComponents/Modal/vueModal.vue';

  export default {
    name:'navSystemError',

    data () {

      const modalTitle= 'Modal title'
           const text= 'openModal'
           const tag= 'approveText'
           const icon= 'fas fa-eject'
           const ctx= this.consoleClick

      const showModal= false

      return {
               d_modalTitle: d_modalTitle,

        d_text: d_text,

        d_tag: d_tag,

        d_icon: d_icon,

        d_ctx: d_ctx,

        d_showModal: d_showModal,
      } //return
    }, //data

    methods: {

      consoleClick: function () {
        this.d_showModal= false
        // console.log("ModalClick", this.d_showModal)
      }, // consoleClick

    }, //methods

    components: {

      systemError,
      vueModal,
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

