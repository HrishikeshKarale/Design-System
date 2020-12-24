<template>
    <div class= "navInfo">
            <div class= "FormElementsContent">
                <form>                            <component-details
                        :compData= 'info'
                    >
                        <vue-info 
                            :label= "d_label"
                            :value= 'd_value'
                        />
                    </component-details>  
                </form>
            </div>
           </div>
</template>

<script>
    import componentDetails from "@/Views/componentDetails";
    import vueInfo from "@/components/FormElements/vueInfo";
    

    export default {
        name: "navInfo",

        components: {

            componentDetails,
            vueInfo,
                   }, //components


        data() {

            const label= 'Available Quantity'

            const value= '3200'

            const d_booleanTrue= true

            return {

                d_label: d_label,

                d_value: d_value,

                v: d_booleanTrue,

                info: {
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