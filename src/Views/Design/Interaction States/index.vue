<template>
    <div class= "interactionStates">   
            <template slot= 'left'>
                <article id= 'interactionStates'>
                    <h1>Interaction states</h1>
                    <p>
                        Interaction states define a visual language for communicating the state of a component as users interact with it. These visual styles correspond to hover, focus, active, selected, disabled, and subdued states. They help users understand what to expect while interacting with COMET.
                    </p>
                    <hr>
                    <section id= "principles">
                        <h3>Principles</h3>
                        <p>
                            Interaction states should communicate the status of an action, establish confidence once an action is taken, and suggest the ability or inability to interact with an element.
                        </p>
                        <div class= 'subSection'>
                            <h4>Be subtle, but clear</h4>
                            <p>
                                Interaction state styles should be subtle, but clear about the message that’s being relayed. Successful interaction feedback should inform and is not decorative. Avoid elaborate transitions that create visual noise or intense color changes. Distracting animation can create disturbance and make an interface unpleasant to use. Instead, aim to empower users and help them feel confident when carrying out their tasks.
                            </p>
                            <img src= "https://polaris.shopify.com/assets/2d11b7285771077927f86c99622da852-subtle-but-clear@2x.png">
                        </div>
                        <div class= 'subSection'>
                            <h4>Be consistent</h4>
                            <p>
                                Consistent treatments for interaction feedback create recognizable patterns for users. If an interaction produces different feedback across COMET, it risks confusing users and deteriorates the integrity of the pattern.
                            </p>
                            <img src= "https://polaris.shopify.com/assets/88eda48c035dda14dd319e968871147b-consistent@2x.png">
                        </div>
                    </section>
                    <hr>
                    <section id= "designingInteractionState">
                        <h3>Designing interaction state</h3>
                        <p>
                            Merchants interact with interfaces differently depending on input device, so when designing your feature consider different input devices users use.
                        </p>
                        <div class= 'subSection'>
                            <h4>Input devices ot consider</h4>
                            <ul>
                                <li>Mouse</li>
                                <li>Touch screen</li>
                                <li>Keyboard</li>
                                <li>Scan guns (barcode, QR code etc.)</li>
                            </ul>
                            <p>
                                See the accessibility guidelines for further reading.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Use Signifiers</h4>
                            <p>
                                Signifiers are clues about how an interface should be used, typically provided by the component itself or its context. For example, Polaris buttons can have three kinds of signifiers:
                            </p>
                            <p>
                                <strong>Explicit</strong>, where content directs users to do the intended action, such as “Save”.
                            </p>
                            <p>
                                <strong>Hidden</strong>, where the clue isn’t revealed until users attempt to interact with it, such as hovering to see if the button is clickable.
                            </p>
                            <p>
                                <strong>Negative</strong>, where the action looks inactive because you are specifically trying to tell users that they can’t use it, such as the reduced contrast of the button’s disabled state.
                            </p>
                            <p>
                                Provide users with cues as to what the interface will do if they interact with it. By using signifiers we set expectations about what components can do, which creates a more intuitive interface that’s easier to use.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Behaviour</h4>
                            <p>
                                When users interact with a component, use feedback indicators like the progress bar component or the spinner component to let them know that the interface received their request, and if appropriate, provide information about the completion.
                            </p>
                            <p>
                                For non-disruptive feedback on the outcome of an action, use the toast component.
                            </p>
                            <p>
                                For an unsuccessful completion that requires the merchant to take action, provide information about what prevented the action from completing successfully and what the merchant can do to fix the problem. For example, use the validation error state of the text field component.
                            </p>
                        </div>
                    </section>
                    <hr>
                    <section id= "styles">
                        <h3>Styles</h3>
                        <p>
                            Polaris components have interaction state styles built in. Follow these guidelines when styling the interaction states of new components or custom features.
                        </p>
                        <p>
                            The following examples use a normal state with a white background. For components that have non-white normal states, colors may need adjustment. See the mixin docs for more information.
                        </p>
                        <div class= 'subSection'>
                            <h4>Hover</h4>
                            <p>
                                One method of applying a signifier to an element is to change its visual state when hovered. This communicates that an element is interactive. Disabled components shouldn’t have styled hover states. This is to reinforce that the normally interactive element isn’t available for interaction.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Focussed</h4>
                            <p>
                                The focused state shows that an element is ready to receive input from an input device, such as an assistive technology or a keyboard. Disabled components can’t receive focus states. This is to reinforce that the normally interactive element isn’t available for interaction.
                            </p>
                            <p>
                                For nested interactive elements, the parent element may maintain the focused background style, but not the visual marker (box-shadow) when an element within it is focused.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Active</h4>
                            <p>
                                The active state occurs when users press an element with an input device, such as a mouse click or keyboard press. Like hover, disabled elements don’t have styled active states. This is to reinforce that the normally interactive element isn’t available for interaction.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Selected</h4>
                            <p>
                                Shows that an element, such as an option in a selectable list, has been picked. Selectable components may contain additional elements such as checkboxes or radio buttons to add clarity to selected states.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Disabled</h4>
                            <p>
                                Use to show that an interactive element isn’t available for interaction.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Subdued</h4>
                            <p>
                                Use to indicate reduced importance of an element, such as an archived order on the order list page. A subdued element is available for interaction, but requires less attention than an element in a normal interaction state.
                            </p>
                        </div>
                    </section>
                </article>
            </template>
            <template slot= 'right'>
                <li
                    v-for= "col in colors"
                    :key= "col.id"
                    :index= "col.index"
                >
                    <a
                        :href= '"#"+col.subTitle'
                    >
                        {{col.subTitle}}
                    </a>
                    <ul 
                        v-if= "col.color[0].color!= null"
                    
                    >
                        <li
                            v-for= "color in col.color"
                            :key= "color.id"
                        >
                            <a :href= '"#"+color.subTitle'>
                                {{color.subTitle}}
                            </a>
                        </li>
                    </ul>
                </li>
            </template>
    </div>
</template>

<script>

    import vueButton from '@/components/UIComponents/Buttons'
    import vueCard from "@/components/UIComponents/Cards/vueCard"
    import vueClipboard from "@/components/Code/vueClipboard";
    
    // import { store } from '@/store/store'

    export default {
        name: 'interactionStates',

        // store,

        data () {
            
            var d_buttonType= 'button'

            var d_buttonName= 'consoleTextButton'

            var d_buttonText= 'Click Me'

            var d_buttonIcon= 'fas fa-copy'

            var d_buttonStyle= this.$store.state.buttonStyle
            
            var d_form= ''
            
            return {

                d_buttonType: d_buttonType,

                d_buttonName: d_buttonName,

                d_buttonText: d_buttonText,

                d_buttonIcon: d_buttonIcon,

                d_buttonStyle: d_buttonStyle,

                d_form: d_form,

                d_booleanTrue: true,
            
                colors: this.$store.state.colors
            } //return
        }, //data

        components: {

            vueButton,
            vueCard,
            vueClipboard
        }, //componnets

        methods: {

            hexToRgb: function (hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? [
                    parseInt(result[1], 16),
                    parseInt(result[2], 16),
                    parseInt(result[3], 16)
                 ] : null;
            }, //hexToRgb
        }, //methods
    } //default
</script>
