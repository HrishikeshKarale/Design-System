<template>
    <div class= "alternativeText">
        https://polaris.shopify.com/content/alternative-text#navigation
        <content-subnav-layout>   
            <template slot= 'left'>
                <article id= 'alternativeText'>
                    <h1 id= "title">Alternative text</h1>
                    <dt>
                        COMET aims to provide an inclusive experience. Alternative text (alt text) helps people with low or loss of vision use our products.
                    </dt>
                    <p>
                        Generally, alt text is text replacement for an image and is often represented by the alt HTML element attribute, alt= "", but is also used in other scenarios.
                    </p>
                    <p>
                        Screen readers announce alt text to explain images to people with low or loss of vision. Alt text is also displayed if images fail to download for some reason (e.g. due to an unstable network connection).
                    </p>
                    <p>
                        Alt text should:
                    </p>
                    <ul>
                        <li>Help visitors navigate the site</li>
                        <li>Provide an inclusive experience</li>
                        <li>Be as specific and concise as possible</li>
                    </ul>
                    <hr>
                    <section id= "imageAltText">
                        <h3>Alt text for images</h3>
                        <p>
                            All <code>&#60;img&#62;</code> tags need an alt text attribute, even if it’s empty. We need to let the screen reader know to ignore the image.
                        </p>
                        <p>
                            Empty alt text attribute for images: <code>&#60;img alt= "" /&#62;</code>
                        </p>
                    </section>
                    <hr>
                    <section id= "writingAltText">
                        <h3>Writing alt text</h3>
                        <p>
                            Alt text should always be written in plain text.
                        </p>
                        <ul>
                            <li>Use the simplest words you can. Stuck on how to replace a complicated word? Check this A-Z list of alternative words or these plain language tips.</li>
                            <li>Avoid needless words. If you take out a word, is the phrase just as easy to understand? If yes, then cut that word.</li>
                            <li>Write concisely. Thinking about how to write for a small amount of space is a good shortcut.</li>
                            <li>Write in the active voice. Only use the passive voice if you want to hide who is doing the thing described.</li>
                        </ul>
                    </section>
                    <hr>
                    <section id= "WhyAltText">
                        <h3>Situations that need alt text</h3>
                        <div
                            id= 'icons'
                            class= 'subSection'
                        >
                            <h4>Icons</h4>
                            <p>
                                Icons that could be misinterpreted need an explanation, so use the aria-label attribute.
                                <img src= "https://polaris.shopify.com/assets/b3f6efe7826616c022884e110b293e37-accessibility-icons@2x.png" alt= "">
                            </p>
                        </div>
                        <div
                            id= 'actions'
                            class= 'subSection'
                        >
                            <h4>Actions</h4>
                            <p>
                                If space constraints require you to write calls to action without nouns, like “learn more” and “apply now”, give further indication of where users will be sent after they select.
                            </p>
                            <img src= "https://polaris.shopify.com/assets/82f9d1c8bdedc3f9da2e2c3284dbf169-calls-to-action@2x.png" alt= "">
                        </div>
                        <div
                            id= 'cimplexImages'
                            class= 'subSection'
                        >
                            <h4>Complex images</h4>
                            <p>
                                Images with a bit more complexity need more logic in the code.
                            </p>
                            <img src= "https://polaris.shopify.com/assets/63d59a2c7031ee7971bc54a8244a431b-complex-images@2x.png" alt= "">
                        </div>
                    </section>
                    <hr>
                    <section id= "pronunciationAndTranslation">
                        <h3>Pronunciation and translation</h3>
                        <p>
                            Not only are we striving to make interactions with our products pleasurable, we also want to try to make the listening experience for our users pleasant as well. The HTML lang attribute helps speech synthesis tools figure out pronunciation and translation tools figure out what rules to use.
                        </p>
                    </section>
                    <hr>
                    <section id= "SEO">
                        <h3>SEO</h3>
                        <p>
                            Alt text is a good way to increase site searchability. This applies outside of Shopify’s admin.
                        </p>
                        <ul>
                            <li>Use keywords (the words that people search for) logically</li>
                            <li>Never reduce the relevance or clarity of the alt text just to insert a keyword</li>
                        </ul>
                        <p>
                            For a deeper dive into coding and alt text standards, visit the <a href= "https://www.w3.org/WAI/intro/wcag.php"> Web Content Accessibility Guidelines (WCAG).</a>
                        </p>
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
        name: 'alternativeText',

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
