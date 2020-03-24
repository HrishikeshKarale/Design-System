<template>
    <div class= "navInfo">
        <content-nav
            :attributes= 'd_info.attributes'
            :title= 'd_info.title'
        >  
            <div class= "FormElementsContent">
                <form>         
                    <component-details
                        :compData= 'd_info'
                    >
                        <vue-info 
                            :label= "d_label"
                            :value= 'd_value'
                            :mask= '!d_booleanTrue'
                        />
                    </component-details>  
                </form>
            </div>
        </content-nav>
    </div>
</template>

<script>
    import componentDetails from "@/Views/componentDetails";
    import vueInfo from "@/components/FormElements/vueInfo";
    import contentNav from '@/Views/components/contentNav';

    export default {
        name: "navInfo",

        components: {

            componentDetails,
            vueInfo,
            contentNav,
        }, //components


        data() {

            var d_label= 'Available Quantity'

            var d_value= '3200'

            var d_booleanTrue= true

            return {

                d_label: d_label,

                d_value: d_value,

                v: d_booleanTrue,

                d_info: {
                    
                    title: 'Info Field',

                    compName: 'vue-info',

                    import: 'import vueInfo from "@/components/FormElements/vueInfo";',

                    description: '<p>The &lt;vue-info&gt; tag specifies a non-interactive field where data passed to it are displayed as text</p>',

                    attributes:[
                        {
                            type: "label",
                            value: d_label,
                            description: this.$store.state.navText.label,
                            text: this.$store.state.navText.labelText,
                        },
                        {
                            type: "value",
                            value: d_value,
                            description: this.$store.state.navText.value,
                            text: 'specifies the value for the &lt;vue-info&gt; element',
                        },
                        {
                            type: "mask",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.mask,
                            text: this.$store.state.navText.maskText,
                        },
                    ]
                }, //info
            } //return
        }, //data
    }
</script>