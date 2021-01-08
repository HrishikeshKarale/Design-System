// https://serversideup.net/drag-and-drop-file-uploads-with-vuejs-and-axios/
<template>
  <div :class= '{fileInput: true, inline: inline}' >
    <label v-if= 'label' :class= '{maskField: mask}' >
      {{label}}
      <abbr v-if= 'required' title= 'Required Field'>*</abbr>
      <span v-else> - Optional field<abbr >*</abbr></span>
    </label>
    <div
      :class= '{
        warningContainer: alert? alert.warning: false,
        errorContainer: alert? alert.error: false,
        iconPadding: icon,
        maskField: mask
        }'
    >
      <span v-if= "icon" :class= "icon" />
      <input
        v-if= '!mask'
        type= 'file'
        :name= 'tag'
        :id= 'tag'
        :multiple= 'multiple'
        :accept= 'accept'
        :autofocus= 'autofocus'
        :disabled= 'disabled'
        :required= 'required'
        @change= 'fileList()'
      />
    </div>
    <div class= 'files' v-if= 'd_value.length > 0' >
      <div v-for= '(file, index) in d_value' :key= 'index' >
        <div>
          <span class= 'fas fa-file'/>
          <h5>{{file.name}}</h5>
        </div>
        <div>
          <span class= "fileSize" >{{file.size/100}}kb</span>
          <vue-button
            class= "removeFile"
            tag= "removeFile"
            icon= "fas fa-times"
            category= 'icon-sm'
            :ctx= 'removeFile.bind(this, index)'
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { vueButton } from "vue2-component-library"
  import { validator } from "@/typeScript/validator"
  import { alerts } from "@/typeScript/common/alerts";

  export default {
    name: 'fileInput',

    mixins: [validator, alerts], //mixins

    components: {
      vueButton
    }, //components

    data() {
      const d_value= [];
      return {
        d_value
      }
    }, //data

    methods: {
      //gets a list of selected files and stores it in d_value variable (data)
      fileList: function () {
        //temp array to store files
        var filelist= [];
        //loads files in temp variable tempFiles
        var tempid= '#'+this.tag
        var tempFiles= document.querySelector(tempid).files;
            //if tempFiles is not empty, load files in filelist array
        if (tempFiles && tempFiles.length>0) {
          for (var file in tempFiles) {
            //tempFiles is an object and contains key:value pairs other than files and their detais.
            //this would presreve only file details
            if (typeof tempFiles[file]== 'object') {
              filelist.push(tempFiles[file])
            }
          }
          //save list of files in d_value
          this.d_value=  filelist;
        }
      }, //fileList

      //removes file from d_value array
      removeFile: function (index) {
        //stores copy of d_value for code readability
        var files= this.d_value

        for (var file in files) {
          if (file== index) {
            var temp= files.splice(index, 1);
          }
        }
      }, //removeFile
    }, //methods

    props: {
      //sets heading/Label for the input field
      label: {
        required: false,
        type: String,
        default: ""
      },

      //sets name attribute for the input field (required field in case of forms)
      tag: {
        required: false,
        type: String,
        default: 'fileUploadInput'
      },

      //users can pass preset values for the input field
      value: {
        required: false,
        type: String,
        default: ""
      },

      //sets the accept attribute for the input field
      //this lets the use upload files with acceptable file formats mentioned in this field
      accept: {
        required: false,
        type: String,
        default: ""
      },

      //sets the multiple attribute for the input field
      //this lets the user select multiple files to upload
      multiple: {
        required: false,
        type: Boolean,
        default: false
      },

      //sets the manual alerts
      alert: {
        required: false,
        type: Object,
        default: () => {
          return {
            error: "",
            warning: ""
          }
        }
      },

      //sets the required attribute for the input field
      required: {
        required: false,
        type: Boolean,
        default: false
      },

      //sets the disabled attribute for the input field
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },

      //sets the autofocus attribute for the input field
      autofocus: {
        required: false,
        type: Boolean,
        default: false
      },

      //checks if label options should appear on the same line or not
      inline: {
        required: false,
        type: Boolean,
        default: false
      },

      //reserves space and created a mask if set to true
      mask: {
        required: false,
        type: Boolean,
        default: false
      },

    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: ""
    }
    }, //props

    created() {
      this.d_value = this.value;
    }
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) "./../../Less/customMixins.less";

  .fileInput {
  min-width: 160px;

  .inputcss();
  }
</style>

