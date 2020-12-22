<template>
    <article id= 'icons'>
        <p>
            FONT AWESOME icons act as visual aids to help users complete tasks. They should be used purposefully.
        </p>
        <section id= "iconPrinciples">
            <header>
              <h3>Icon Principles</h3>
            </header>
            <p>
                FONT AWESOME icons are simple and informative. Each icon builds on the visual language of the design system.
            </p>
            <div class= 'subSection'>
                <h4>Simplified over detailed</h4>
                <p>
                    Detailed icons increase cognitive load. Focus on simplicity to help users:
                </p>
                <ul>
                    <li>understand the concept the icon represents</li>
                    <li>recognize the icon on smaller screens</li>
                </ul>
            </div>
            <div class= 'subSection'>
                <h4>Literal over abstract</h4>
                <p>
                    Literal symbols are easier to understand than abstract symbols. Whenever possible, use symbols that represent the most basic idea or concept instead of a metaphorical one.
                </p>
                <p>
                    Sometimes concepts can’t be represented literally, for example:
                </p>
                <ul>
                    <li>activities and actions, like gardening or eating</li>
                    <li>professions, like an artist or doctor</li>
                    <li>outcomes of an action, like right-aligned lines of text for a text alignment tool</li>
                </ul>
                <p>
                    When designing abstract concepts:
                </p>
                <ul>
                    <li>follow the simple over detailed principle</li>
                    <li>pick a logically related symbol, like a stethoscope for a doctor, or a shovel for gardening</li>
                </ul>
            </div>        
            <div class= 'subSection'>
                <h4>Professional over fun</h4>
                <p>
                    The design of an icon assists in communicating tone, much like the content it’s paired with. Focus on the effectiveness of the message instead of its ability to delight. In other words, prioritize representing the function, rather than how nice it looks.
                </p>
            </div>
        </section>
        <section id= "guidlines">
            <header>
              <h3>Icon guidlines</h3>
            </header>
            <div class= 'subSection'>
                <h4>User established icons</h4>
                <p>
                    Icons that have been used for a long time worldwide have a higher chance of being recognized and understood quickly. Don’t reinvent an icon that’s already been accepted as the convention.
                </p>
                <p>
                    For example, there are global, established conventions for concepts like “delete”, “settings”, and “search”. These symbols are effective, and don’t need to be redefined.
                </p>
            </div>
            <div class= 'subSection'>
                <h4>Limit icon variations</h4>
                <p>
                    Use a single icon to represent variations of the same concept. For example, shipping settings, store settings, account settings, and any new settings should use the cog icon. Don’t create a custom icon for each of these concepts—it bloats the icon library and makes it difficult for users to create strong connections around a concept.
                </p>
            </div>
            <div class= 'subSection'>
                <h4>Pair icons with text</h4>
                <p>
                    The purpose on an icon is to clarify the content by providing a visual cue and improve legibility and scannability of the user interface. In general, icons should be placed near a label or title. Never use an icon to replace a name of a product or feature.
                </p>
                <p>
                    There are rare exceptions where icons are universally understood actions, like with the trash can icon that represents deletions, and pin icons for pinning items like products. Whenever using an icon to represent an action, make sure to check that it’s commonly understood in other countries.
                </p>
            </div>
            <div class= 'subSection'>
                <h4>Keep internationalization in mind</h4>
                <p>
                    Whenever possible, use a universally recognized icon. However, there will be times where only a locally understood icon will work to communicate a concept. When deciding what symbol should be used, check that it will be understood at a glance by people from different cultures and backgrounds. For example, the $ (dollar sign) would only symbolize money in certain locations like North America, so a more general symbol should be used for global currency. However, when using an icon for currency conversion it’s better to use the local currency symbols that are being converted.
                </p>
            </div>
        </section>
        <section id= "usage">
            <header>
              <h3>When to use icons</h3>
            </header>
            <p>
                Icons are powerful visual helpers and should be used with care. Overuse quickly results in user interfaces that are visually overwhelming or distracting.
            </p>
            <p>
                Icons are commonly used:
            </p>
            <ul>
                <li>in primary navigation</li>
                <li>in page headers and section titles</li>
                <li>in banners to bring attention to a specific theme (an announcement, an error, etc.)</li>
                <li>inline with text to add clarity</li>
                <li>to direct a user’s attention to something they can take action on, or which results in an action</li>
            </ul>
        </section>
        <section id= "systemIcons">
            <header>
              <h3>System icons</h3>
            </header>
            <p>
                System icons are meant to help users wayfind and shouldn’t be ornamental.
            </p>
            <p>
                System icons:
            </p>
            <ul>
                <li>are 16 × 16 or 20 × 20 pixels (px) in size</li>
                <li>are within a 20 × 20px bounding box</li>
                <li>use a 2px stroke weight</li>
            </ul>
            <p>
                They’re smaller than spot icons because they’re always applied in product experiences where it’s important that they compliment the user experience and not overpower it. They should represent a specific action, object, or concept.
            </p>
            <p>
                For example, we wouldn’t use a discounts system icon to decorate a promotional announcement about discounts, but we would use the discounts icon in the COMET admin’s sidebar to help identify where to configure store discounts.
            </p>
        </section>
        <section id= "spotIcons">
            <header>
              <h3>Spot icons</h3>
            </header>
            <p>
            Spot icons are rarely used in product experiences since they have a marketing purpose. One instance where it might show up is on a sell page in product.
            </p>
            <p>
                Spot icons:
            </p>
            <ul>
                <li>are 41 × 41px in size</li>
                <li>are within a 45 × 45px bounding box</li>
                <li>use a 3px stroke weight</li>
            </ul>
            <p>
                Spot icons are bigger than system icons and have a stronger stroke weight to add visual balance to the layout of marketing focused pages. They help with wayfinding and sentiment.
            </p>
            <p>
                Spot icons can help with wayfinding by:
            </p>
            <ul>
                <li>helping users make quicker decisions when there are options available in front of them</li>
                <li>being paired with instructional text</li>
            </ul>
            <p>
                Spot icons can help with defining sentiment by:
            </p>
            <ul>
                <li>piquing interest in the concept they’re representing</li>
                <li>tieing a selling point/feature to a visual concept or emotion</li>
                <li>optimizing for engagement by being slightly more aspirational</li>
            </ul>
            <p>
                The paper with the graph does a good job of being professional over fun and literal over abstract. It would fit well as a system icon. But with spot icons in a marketing experience, being aspirational and abstract sparks emotion and engagement. In a marketing experience, the boost arrow does a better job of expressing the excitement of generating more sales.
            </p>
        </section>
        <section id= "systemIconUsage">
            <header>
              <h3>Using system icons in your design</h3>
            </header>
            <p>
                FONT AWESOME system icons come in two styles: minor and major.
            </p>
            <ul>
                <li>Minor icons are designed within a 16px square but are always given a 20 × 20px bounding box. Minor icons mainly use solid shapes and have a single color variant.</li>
                <li>Major icons are designed within a 20px square. They mainly use strokes and have a 2-tone variant that includes white highlights.</li>
            </ul>
            <p>
                Both major and minor icons are always displayed within a 20px square bounding box and should not be used at any other size.
            </p>
            <div class= 'subSection'>
                <h4>Major and minor usage exampless</h4>
                <p>
                    hen using FONT AWESOME icons, it’s important to identify their use case first, as this dictates the type of icon to be used.
                </p>
                <p>
                    Minor icons are used:
                </p>
                <ul>
                    <li>Inline, usually accompanying text, to add clarity to an action</li>
                    <li>In form elements (&lt;input&gt;, &lt;button&gt;, etc.)</li>
                </ul>
                <p>
                    Major icons are used:
                </p>
                <ul>
                    <li>In main navigation in apps, mobile web and web</li>
                    <li>To help promote, reinforce, or draw special attention to a specific area or metaphor</li>
                </ul>
                <p>
                    Apart from their use in main navigation, major icons are not actionable or clickable.
                </p>
            </div>
            <div class= 'subSection'>
                <h4>Color</h4>
                <p>
                    FONT AWESOME icons have two predefined color styles: monotone and duotone. The monotone variant is the default style.
                </p>
                <div class= 'subSection'>
                    <h5>Pair icons with text</h5>
                    <p>
                        Monotone:
                    </p>
                    <ul>
                        <li>#31373D for fills and strokes</li>
                        <li>Major icons don’t have fills in the monotone style</li>
                        <li>Use for both major and minor icons</li>
                    </ul>
                    <p>
                        Duotone:
                    </p>
                    <ul>
                        <li>#919EAB for strokes, and #FFF for fills</li>
                        <li>Use for major icons only</li>
                    </ul>
                    <p>
                        In some instances, major icons may require an active state. When this is necessary, use:
                    </p>
                    <ul>
                        <li>#5C6AC4 for strokes, and #5C6AC4 (50% opacity) for fills</li>
                    </ul>
                    <p>
                        In most cases, both major and minor icons should be used on a light background. In instances where a dark background is required, use:
                    </p>
                    <ul>
                        <li>Monotone color style using #FFF instead</li>
                    </ul>
                </div>
            </div>
        </section>
    </article>
</template>

<script>

    import vueButton from '@/components/UIComponents/Buttons'
    import vueCard from "@/components/UIComponents/Cards/vueCard"
    import vueClipboard from "@/components/Code/vueClipboard";

    export default {
        name: 'icons',

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
