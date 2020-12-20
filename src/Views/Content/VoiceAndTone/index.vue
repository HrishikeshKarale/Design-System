<template>
    <div class= "voiceAndTone">
        https://polaris.shopify.com/content/voice-and-tone#navigation
        <content-subnav-layout>   
            <template slot= 'left'>
                <article id= 'voiceAndTone'>
                    <h1>Voice And Tone</h1>
                    <p>
                        Learn how to apply Shopify’s voice and choose the right tone, no matter what product, feature, or app you’re building.
                    </p>
                    <hr>
                    <section id= "What">
                        <h3>What is voice and tone?</h3>
                        <p>
                            COMET’s voice is a reflection of who we are. We should always sound like COMET. Our tone adapts appropriately to the context and situation. The best way to decide what tone to use is to ask yourself what users are likely feeling when they encounter your message so you can decide how to respond.
                        </p>
                        <p>
                            For example, when users make a sale for the first time, they might be feeling excited, accomplished, and maybe a little bit unsure of what to do next. We can respond to this by congratulating them and giving them the information they need to process their order.
                        </p>
                        <p>
                            When users encounter an error message, they might be feeling anxious, stressed out, and worried about the impact it could have on their business. We can respond to this by stating what went wrong and giving clear direction about how to fix the problem. We never want to use a negative or frightening tone.
                        </p>
                    </section>
                    <hr>
                    <section id= "guidlines">
                        <h3>Voice guidelines</h3>
                        <p>
                            COMET is always:
                        </p>
                        <h4>Confident, not arrogant</h4>
                        <p>
                            <ul>
                                <li>Use expertise to help users succeed, don’t talk down to them</li>
                                <li>Be plain-spoken, not pretentious</li>
                                <li>Be specific when explaining a merchant benefit without making a feature sound better than it is</li>
                            </ul>
                            <img src= "https://polaris.shopify.com/assets/945c3e69c9d95f9b27f75956f42fd297-confident@2x.png" alt= "">
                        </p>
                        <div
                            id= 'empahaticNotOverprotective'
                            class= 'subSection'
                        >
                            <h4>Empathetic, not overprotective</h4>
                            <p>
                                <ul>
                                    <li>Communicate in a way that respects merchant emotions and situations</li>
                                    <li>Offer users encouragement and practical advice</li>
                                    <li>Clearly explain how users will be impacted when something goes wrong, but don’t over-explain with redundant content</li>
                                </ul>
                                <img src= "https://polaris.shopify.com/assets/ff2c3377bf5206a6ded9790e2ad11c98-empathetic@2x.png" alt= "">
                            </p>
                        </div>
                        <div
                            id= 'transparentNotBlunt'
                            class= 'subSection'
                        >
                            <h4>Transparent, not blunt</h4>
                            <p>
                                <ul>
                                    <li>Be upfront and honest with users, even if we make a mistake</li>
                                    <li>Back up claims with facts and data</li>
                                    <li>Communicate with clarity and empathy—be direct, not insensitive</li>
                                </ul>
                                <img src= "https://polaris.shopify.com/assets/d260e7fbd1eccba84064dc0c51b7dfb7-transparent@2x.png" alt= "">
                            </p>
                        </div>
                    </section>
                    <hr>
                    <section>
                        <h3 id= "toneInAction">Tone in action</h3>
                        <p>
                            Here are some examples of how COMET’s tone changes depending on the context. Positive, neutral, or negative situations will change the tone of our message.
                        </p>
                        <div
                            id= 'positiveSituation'
                            class= 'subSection'
                        >
                            <h4>Positive situations</h4>
                        </div>
                        <div
                            id= 'neutralSituation'
                            class= 'subSection'
                        >
                            <h4>Neutral situations</h4>
                        </div>
                        <div
                            id= 'negativeSituation'
                            class= 'subSection'
                        >
                            <h4>Negative situation</h4>
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
                    <a :href= '"#"+col.subTitle'>
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
        </content-subnav-layout>
    </div>
</template>

<script>

    import vueButton from '@/components/UIComponents/Buttons'
    import vueCard from "@/components/UIComponents/Cards/vueCard"
    import vueClipboard from "@/components/Code/vueClipboard";
    import contentSubnavLayout from '@/components/Layout/contentSubnavLayout'
    
    // import { store } from '@/store/store'

    export default {
        name: 'voiceAndTone',

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
            vueClipboard,
            contentSubnavLayout
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
