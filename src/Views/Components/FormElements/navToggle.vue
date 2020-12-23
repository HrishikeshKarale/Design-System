//https://proto.io/freebies/onoff/

<template>
    <div class= "navToggle"> 
            <div class= 'FormElementsTitle'>
                <div 
                    v-if= 'd_toggle'
                    class= 'value'
                >
                    <label>Value Returned:</label> {{d_toggle}}
                </div>
            </div>
            <div class= "FormElementsContent">
                <form>                            <component-details
                        :compData= 'd_multiToggle'
                    >
                        <multi-toggle 
                            :label= "d_label"
                            :name= "d_name"
                            :value= "d_toggle"
                            :labelChecked= "d_labelChecked"
                            :labelUnchecked= "d_labelUnchecked"
                            :showLabels= 'd_booleanTrue'
                            :disabled= '!d_booleanTrue'
                            :inline= '!d_booleanTrue'
                            :mask= '!d_booleanTrue'
                            @value= "val => d_toggle= val"
                        />
                    </component-details>
                </form>
            </div>
           </div>
</template>

<script>

    import componentDetails from "@/Views/componentDetails";
    import multiToggle from "@/components/FormElements/multiToggle";
    

    export default {
        name: "navToggle",

        // store,

        components: {

            componentDetails,
            multiToggle
        }, //components

        data() {

                var d_label= 'Username'

                var d_name= 'toggleInputField'

                var d_value= 'qwerty'

                var d_toggle= null

                var d_booleanTrue= true
                               var d_labelChecked= "ON"
                               var d_labelUnchecked= "OFF"

                return {

                    d_label: d_label,

                    d_name: d_name,

                    d_value: d_value,

                    d_toggle: d_toggle,

                    d_labelChecked: d_labelChecked,

                    d_labelUnchecked: d_labelUnchecked,

                    d_booleanTrue: d_booleanTrue,

                d_multiToggle: {
                                       title: 'Multi-Toggle Input Field',

                    compName: 'multi-toggle',

                    import: 'import multiToggle from "@/components/FormElements/multiToggle";',

                    description: '<p>The <mark>&lt;multi-toggle&gt</mark>; tag specifies an input field where user can toggle between two states.</p>',

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
                            value: 'd_toggle',
                            description: this.$store.state.navText.vModel,
                            text: this.$store.state.navText.vModelText,
                        },
                        {
                            type: "value",
                            value: d_value,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value for the &lt;multi-toggle&gt element.",
                        },
                        {
                            type: "labelUnchecked",
                            value: d_labelUnchecked,
                            description: '<p>It sets the label for unchecked value if showLabel is true.</p>',
                            text: 'Specifies the value for the unchecked label'
                        },
                        {
                            type: "labelChecked",
                            value: d_labelChecked,
                            description: '<p>It sets the label for checked value if showLabel is true.</p>',
                            text: 'Specifies the value for the checked label'
                        },
                        {
                            type: "showLabels",
                            value: d_booleanTrue,
                            description: '<p>display the label as checked/unchecked state for toggle.</p>',
                            text: 'Specifies the if the labels should be displayed'
                        },
                        {
                            type: "disabled",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.disabled,
                            text: this.$store.state.navText.disabledText,
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
                    ]
                }, //multiToggle
            } //return
        }, //data
    }
</script>