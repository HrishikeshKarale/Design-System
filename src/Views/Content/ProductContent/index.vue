<template>
    <div class= "productContent">
        https://polaris.shopify.com/content/product-content   
            <template slot= 'left'>
                <article id= 'productContent'>
                    <h1>Product content</h1>
                    <p>
                        Thoughtful, consistent interface content is a core element of a well-designed user experience.
                    </p>
                    <p>
                        Our content standards will help you understand how to think strategically about the language in your products and apps. They’ll also give you clear, tactical suggestions designed to help you use language to craft better experiences.
                    </p>
                    <p>
                        Each component also includes content guidelines about how to write for specific interface elements.
                    </p>
                    <sction id= "responseToNeeds">
                        <h3>Respond to User needs</h3>
                        <p>
                            Not everyone is a confident writer, but everyone can improve their content by making sure it responds to the needs of users. Keep in mind that real people rely on COMET every day to run their businesses. The product, feature, or app you’re building can make a big difference to the people using it. Take some time to learn about who they are, what they need, and the language they use.
                        </p>
                    </sction>
                    <section id= "readingLevel">
                        <h3>Write for a grade 7 reading level</h3>
                        <p>
                            COMET users are busy people who may be running their online business in addition to having a full-time job, managing their family life, and doing a million other things. They’re also located all over the world, have varying levels of literacy, and some may not speak English as their first language.
                        </p>
                        <p>
                            Writing for a grade 7 reading level doesn’t mean dumbing content down. It’s about making sure language is straightforward and communicates concepts as efficiently as possible.
                        </p>
                        <div
                            id= 'readingLevelTips'
                            class= 'subSection'
                        >
                            <h4>TIPS</h4>
                            <ul>
                                <li>Write short sentences (no more than 15–20 words).</li>
                                <li>Use headings and bullets to make your content easier to scan.</li>
                                <li>Avoid jargon and always choose a short, simple word over a long and complicated one</li>
                                <li>Only use industry-standard terminology when you have reason to believe it will improve merchant understanding. Spend time researching what words people use, rather than defaulting to what corporations call things.</li>
                                <li>Edit unnecessary or repeated words.</li>
                                <li>Write for small screens first. Constraints can help you focus on the most important message.</li>
                                <li>Read your content out loud. If you get tripped up or it doesn’t sound like something a human would say, your content needs to be edited.</li>
                            </ul>
                        </div>
                    </section>
                    <section id= "encourageActions">
                        <h3>Encourage action</h3>
                        <p>
                            People use COMET to get things done. Content should be written and structured to help users understand and take the most important actions.
                        </p>
                        <div
                            id= 'encourageActionsTips'
                            class= 'subSection'
                        >
                            <h4>TIPS</h4>
                            <ul>
                                <li>Calls to action on buttons and links should start with a strong verb that describes the action users will take when they click.</li>
                                <li>Always prioritize the most important information and task — don’t make users dig to find what they care about.</li>
                                <li>Break down complicated tasks into steps that help users focus on one thing at a time.</li>
                                <li>Use the active voice to clarify the subject and the action.</li>
                            </ul>
                        </div>
                    </section>
                    <section id= "consistency">
                        <h3>Be consistent</h3>
                        <p>
                            To help users understand key concepts and actions they can take, use consistent nouns (words used to identify people, places, or things) and verbs (action words) wherever possible.
                        </p>
                        <div
                            id= 'consistencyTips'
                            class= 'subSection'
                        >
                            <h4>TIPS</h4>
                            <ul>
                                <li>Get in the habit of making a list of all the most important verbs and nouns in the experience you’re building.</li>
                                <li>Look at your word list. Does each word clearly describe the object or action it represents in the simplest way possible?</li>
                                <li>Does your language reflect how users think and the words they use?</li>
                                <li>Identify synonyms (a word or phrase that means exactly or nearly the same as another word or phrase in the same language), and eliminate them. Each important object and action should have a single word to represent it.</li>
                            </ul>
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
        name: 'productContent',

        // store,

        data () {
            
            var d_type= 'button'

            var d_tag= 'consoleTextButton'

            var d_text= 'Click Me'

            var d_icon= 'fas fa-copy'

            var d_category= this.$store.state.category
            
            var d_form= ''
            
            return {

                d_type: d_type,

                d_tag: d_tag,

                d_text: d_text,

                d_icon: d_icon,

                d_category: d_category,

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
