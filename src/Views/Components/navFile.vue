<template>
    <div class= "navFile">
        <content-nav
            :attributes= 'd_file.attributes'
            :title= 'd_file.title'
        >  
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_fileUploadValue'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_fileUploadValue}}
                </div>
                <div 
                    v-if= 'd_danger'
                    class= 'error'
                >
                    <label>Error Returned:</label> {{d_danger}}
                </div>
                <div 
                    v-if= 'd_warning'
                    class= 'warning'
                >
                    <label>Warning Returned:</label> {{d_warning}}
                </div>
            </div>
            <div class= "FormElementsContent">
                <form>    
                    <component-details
                        :compData= 'd_file'
                    >
                        <file-input 
                            :label= "d_label"
                            :name= "d_name"
                            v-model= 'd_fileUploadValue'
                            :accept= "d_accept"
                            :multiple= 'd_booleanTrue'
                            :required= '!d_booleanTrue'
                            :disabled= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :inline= '!d_booleanTrue'
                            :mask= '!d_booleanTrue'
                            @alerts= 'd_alerts'
                        />
                    </component-details>
                </form>
            </div>
        </content-nav>
    </div>
</template>

<script>
    import componentDetails from "@/Views/componentDetails";
    import fileInput from "@/components/FormElements/fileInput";
    import contentNav from '@/Views/components/contentNav';

    export default {
        name: "navFile",

        components: {

            componentDetails,
            fileInput,
            contentNav
        }, //components

        methods: {

            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.d_danger= message;
                }
                else {
                    this.d_warning= message;
                }
            }, //alerts
        }, //methods

        data() {

            var d_label= "Upload File"

            var d_name= "fileUploadField"

            var d_value= ''

            var d_fileUploadValue= null

            var d_accept= ".pdf, .doc, .docx"

            var d_booleanTrue= true

            var d_alerts= this.alerts

            return {

                d_label: d_label,

                d_name: d_name,

                d_value: d_value,

                d_fileUploadValue: d_fileUploadValue,

                d_accept: d_accept,

                d_booleanTrue: d_booleanTrue,
                
                d_alerts: d_alerts,

                d_danger: null,

                d_warning: null,

                d_file: {

                    title: 'File Upload',

                    compName: 'file-input',

                    import: 'import fileInput from "@/components/FormElements/fileInput";',

                    description: '<p>The &lt;file-input"&gt; tag defines a file-select field and a "Browse" button for file uploads.</p>\
                                    <p>To define a file-select field that allows multiple files to be selected, add the "multiple" attribute.</p>',

                    attributes:[
                        {
                            type: "label",
                            value: d_label,
                            description: this.$store.state.navText.label,
                            text: this.$store.state.navText.labelText,
                        },
                        {
                            type: "name",
                            value: d_name,
                            description: this.$store.state.navText.name,
                            text: this.$store.state.navText.nameText,
                        },
                        {
                            type: "v-model",
                            value: 'd_fileUploadValue',
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "value",
                            value: d_value,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value for the &lt;file-input&gt element.",
                        },
                        {
                            type: "accept",
                            value: d_accept,
                            description: this.$store.state.navText.readonly,
                            text: 'Specifies the type of files the &lt;file-input&gt element will accpt as input'
                        },
                        {
                            type: "multiple",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.multiple,
                            text: this.$store.state.navText.multipleText,
                        },
                        {
                            type: "required",
                            value: d_booleanTrue,
                            description: this.$store.state.navText.required,
                            text: this.$store.state.navText.requiredText,
                        },
                        {
                            type: "disabled",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.disabled,
                            text: this.$store.state.navText.disabledText,
                        },
                        {
                            type: "autofocus",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.autofocus,
                            text: this.$store.state.navText.autofocusText,
                        },
                        {
                            type: "readonly",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.readonly,
                            text: this.$store.state.navText.readonlyText,
                        },
                        {
                            type: "inline",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.inline,
                            text: this.$store.state.navText.inlineText,
                        },
                        {
                            type: "mask",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.mask,
                            text: this.$store.state.navText.maskText,
                        },
                        {
                            type: "@alerts",
                            value: d_alerts,
                            description: this.$store.state.navText.alerts,
                            text: this.$store.state.navText.alertsText,
                        }
                    ]
                }, //d_file
            } //return
        }, //data
    } //default
</script>