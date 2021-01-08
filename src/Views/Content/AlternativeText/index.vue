        // https://polaris.shopify.com/content/alternative-text#navigation
<template>
    <article id= 'alternativeText'>
        <p>
            COMET aims to provide an inclusive experience. Alternative text (alt text) helps people with low or loss of vision use our products.
        </p>
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
        <section id= "imageAltText">
             <header>
               <h3>Alt text for images</h3>
            </header>
            <p>
                All <code>&#60;img&#62;</code> tags need an alt text attribute, even if it’s empty. We need to let the screen reader know to ignore the image.
            </p>
            <p>
                Empty alt text attribute for images: <code>&#60;img alt= "" /&#62;</code>
            </p>
        </section>
        <section id= "writingAltText">
             <header>
               <h3>Writing alt text</h3>
            </header>
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
        <section id= "WhyAltText">
             <header>
               <h3>Situations that need alt text</h3>
            </header>
            <div
                id= 'icons'
                class= 'subSection'
            >
                <h4>Icons</h4>
                <p>
                    Icons that could be misinterpreted need an explanation, so use the aria-label attribute.
                    <vue-img :src= "img1" />
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
                <vue-img :src= "img2" />
            </div>
            <div
                id= 'cimplexImages'
                class= 'subSection'
            >
                <h4>Complex images</h4>
                <p>
                    Images with a bit more complexity need more logic in the code.
                </p>
                <vue-img :src= "img3" />
            </div>
        </section>
        <section id= "pronunciationAndTranslation">
             <header>
               <h3>Pronunciation and translation</h3>
            </header>
            <p>
                Not only are we striving to make interactions with our products pleasurable, we also want to try to make the listening experience for our users pleasant as well. The HTML lang attribute helps speech synthesis tools figure out pronunciation and translation tools figure out what rules to use.
            </p>
        </section>
        <section id= "SEO">
             <header>
               <h3>SEO</h3>
            </header>
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

<script>
    import vueImg from "vue2-component-library"
    import vueClipboard from "vue2-component-library"

    export default {
        name: 'alternativeText',
        data () {
            const img1 = require("@/assets/content/alternative/b671c165f6ebc7eb7b8cd238fbe6b4be.png");
            const img2 = require("@/assets/content/alternative/0bcfdaf68cccac1c9fa6c8bbe7f4e11c.png");
            const img3 = require("@/assets/content/alternative/795a29691e6ff92609d0c129d76d411a.png");
            return {
                img1,
                img2,
                img3
            }
        }, //data

        components: {
            vueImg
        }, //componnets
    } //default
</script>
