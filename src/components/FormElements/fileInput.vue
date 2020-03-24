// https://serversideup.net/drag-and-drop-file-uploads-with-vuejs-and-axios/

<template>
    <div 
        class= 'fileInput'
        :class= '{inline: inline}'
    >
        <label 
            v-if= 'label'
            :class= '{maskField: mask}'
        >
            {{label}}
            <abbr v-if= 'required' title= 'Required Field'>*</abbr>
            <span v-else> - Optional field<abbr >*</abbr></span>
        </label>
        <div
            :class= '{
                        warningContainer: d_warning,
                        errorContainer: d_danger,
                        iconPadding: inputIcon,
                        maskField: mask 
                    }'
        >
            <input 
                v-if= '!mask'
                type= 'file'
                :name= 'name'
                :id= 'name'
                :multiple= 'multiple'
                :accept= 'accept'
                :autofocus= 'autofocus'
                :disabled= 'disabled'
                :required= 'required'
                @change= 'fileList()'
            />
        </div>
        <div 
            class= 'files' 
            v-if= 'd_fileValue'
        >
            <div
                v-for= '(file, index) in d_fileValue'
                :key= 'index'
            >
                <div>
                    <span class= 'fas fa-file'/>
                    <span>{{file.name}}</span>
                </div>
                <div>
                    <span>{{file.size/100}}kb</span>
                    <span>

                        <vue-button 
                            :buttonType= 'd_buttonType'
                            buttonName= "removeFile"
                            :buttonText= "d_buttonText"
                            buttonIcon= "fas fa-times"
                            :buttonStyle= 'd_buttonStyle[9]'
                            :disabled= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :formID= "d_form"
                            :onClickAction= 'removeFile.bind(this, index)'
                        />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import vueButton from "@/components/UIComponents/Buttons"


    export default {
        name: 'fileInput',
        
        data () {

            var d_buttonType= 'button'

            var d_buttonText= ''

            var d_buttonStyle= this.$store.state.buttonStyle

            var d_booleanTrue= true

            var d_form= ''

            return {

              d_buttonType: d_buttonType,

              d_buttonText: d_buttonText,

              d_buttonStyle: d_buttonStyle,

              d_booleanTrue: d_booleanTrue,

              d_form: d_form,
                
                //stores file uploaded values
                d_fileValue: null,
            } //return
        }, //data

        components: {

            vueButton
        }, //components

        methods: {

            //gets a list of selected files and stores it in d_fileValue variable (data)
            fileList: function () {
                //temp array to store files
                var filelist= [];
                //loads files in temp variable tempFiles
                var tempid= '#'+this.name
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
                    //save list of files in d_fileValue
                    this.d_fileValue=  filelist;
                }
            }, //fileList

            //removes file from d_fileValue array
            removeFile: function (index) {
                //stores copy of d_fileValue for code readability
                var files= this.d_fileValue

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
                default: null
            },

            //sets name attribute for the input field (required field in case of forms)
            name: {
                required: false,
                type: String,
                default: 'fileUploadInput'
            },

            //users can pass preset values for the input field 
            value: {
                required: false,
                type: String,
                default: null
            },

            //sets the accept attribute for the input field
            //this lets the use upload files with acceptable file formats mentioned in this field
            accept: {
                required: false,
                type: String,
                default: null
            },

            //sets the multiple attribute for the input field
            //this lets the user select multiple files to upload
            multiple: {
                required: false,
                type: Boolean,
                default: false
            },

            //sets the manual alerts
            alertMessage: {
                required: false,
                type: Object,
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
        }, //props

        created() {

            //store values passed as props into d_fileValue for future manipulation 
            if (this.value) {
                this.d_fileValue= this.value
            }
        }, //created

        beforeMount() {

            var alertMessage= this.alertMessage
            
            if (this.value)
            {
                this.validate()
            }

            if (alertMessage) {
                if (alertMessage['error']) {
                    this.d_danger= alertMessage['error']
                }
                else if (alertMessage['warning']) {
                    this.d_warning= alertMessage['warning']
                }
                else if (alertMessage['success']) {
                    this.d_success= alertMessage['success']
                }
                else if (alertMessage['info']) {
                    this.d_info= alertMessage['info']
                }
            }
        }, //beforeMount

        watch: {

            //send warning messages back to parent component
            d_warning: function (newValue) {
                this.$emit('alerts', 'warning', newValue)
            },

            //send error messages back to parent component
            d_danger: function (newValue) {
                this.$emit('alerts', 'error', newValue)
            },
        }, //watch
    } //default
</script>

<style lang= "less" scoped>
    
    @import (reference) "./../../Less/customMixins.less";

    .fileInput {
        min-width: 160px;

        .inputcss();
    }
</style>

