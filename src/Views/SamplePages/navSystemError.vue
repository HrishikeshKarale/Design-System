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
      :buttonText= 'd_buttonText'
      :buttonName= 'd_buttonName'
      :buttonIcon= 'd_buttonIcon'
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

      var d_modalTitle= 'Modal title'
      
      var d_buttonText= 'openModal'
      
      var d_buttonName= 'approveText'
      
      var d_buttonIcon= 'fas fa-eject'
      
      var d_onClickAction= this.consoleClick

      var d_showModal= false

      return {
        
        d_modalTitle: d_modalTitle,

        d_buttonText: d_buttonText,

        d_buttonName: d_buttonName,

        d_buttonIcon: d_buttonIcon,

        d_onClickAction: d_onClickAction,

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

  @import (reference) "./../../Less/customMixins.less";
  @import (reference) "./../../Less/customVariables.less";
  
  .navSystemError {
    display: flex;
    flex-direction: column;
    
  }
</style>

