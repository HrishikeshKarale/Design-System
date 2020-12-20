<template>
    <div class= "spacing">   
            <template slot= 'left'>
                <article id= 'spacing'>
                    <h1>Spacing</h1>
                    <p>
                        Consistent spacing creates visual balance that makes the user interface (UI) easier for users to scan. Apply consistent spacing to improve the quality of the UI.
                    </p>
                    <section id= "system">
                        <h3>The spacing system</h3>
                        <p>
                            All spacing for components and typography is done in increments of 4 pixels. This 4 px value forms the basic unit of measurement for spacing.
                        </p>
                        <img src= "https://polaris.shopify.com/assets/7d7a7ef3f45d44619ef2e130bd238eac-components@2x.png">
                        <p>
                            Typography doesn’t use a traditional baseline grid. Instead, line heights are set in increments of 4 px and spacing is measured from the edges of the text boxes.
                        </p>
                        <img src= "https://polaris.shopify.com/assets/a58cbc6bc33beb4fadae7b041acf8635-typography@2x.png">
                        <p>
                            Many components are sized in increments of 20 px to match the line height of body text. This makes it easy to create harmonious arrangements of components and text.
                        </p>
                        <p>
                            For example, the standard sizes of the avatar component have been chosen match the line height of body text:
                        </p>
                        <img src= "https://polaris.shopify.com/assets/5155645c415f242388f0d5696f62abd1-components-and-type@2x.png">
                    </section>
                    <section id= "code">
                        <h3>Spacing in code</h3>
                        <p>
                            You can apply spacing in code in several ways:
                        </p>
                        <ul>
                            <li>Using stylesheets</li>
                            <li>Using utility components provided by Polaris React</li>
                        </ul>
                        <div class= 'subSection'>
                            <h4>Applying spacing with stylesheets</h4>
                            <p>
                                If you’re using Polaris with plain CSS, set values in increments of 4px. If you’re using Polaris’ built-in Sass library, you can use rem units or access common values via the spacing function.
                            </p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>CSS</th>
                                        <th>SASS(REM FUNCTION)</th>
                                        <th>SASS (SPACING FUNCTION)</th>
                                    </tr>
                                </thead>
                                <body>
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>spacing(none)</td>
                                    </tr>
                                    <tr>
                                        <td>4px</td>
                                        <td>rem(4px)</td>
                                        <td>spacing(extra-tight)</td>
                                    </tr>
                                    <tr>
                                        <td>8px</td>
                                        <td>rem(8px)</td>
                                        <td>spacing(tight)</td>
                                    </tr>
                                    <tr>
                                        <td>12px</td>
                                        <td>rem(12px)</td>
                                        <td>spacing(base-tight)</td>
                                    </tr>
                                    <tr>
                                        <td>16px</td>
                                        <td>rem(16px)</td>
                                        <td>spacing()</td>
                                    </tr>
                                    <tr>
                                        <td>20px</td>
                                        <td>rem(20px)</td>
                                        <td>spacing(loose)</td>
                                    </tr>
                                    <tr>
                                        <td>32px</td>
                                        <td>rem(32px)</td>
                                        <td>spacing(extra-loose)</td>
                                    </tr>
                                </body>
                            </table>
                        </div>
                        <div class= 'subSecion'>
                            <h4>Applying spacing with components</h4>
                            <div class= 'subSection'>
                                <h5>Text container</h5>
                                <p>
                                    Use the text container component to wrap and automatically add the correct spacing between a set of paragraphs, lists, or other textual components.
                                </p>
                                <img src= "https://polaris.shopify.com/assets/bb265b78ed07bcf1897b5b9b4748af19-text-container@2x.png" alt= "">
                            </div>
                            <div class= 'subSection'>
                                <h5>Stack</h5>
                                <p>
                                    The stack component can be used to arrange arbitrary components in a horizontal row or vertical stack with space in between.
                                </p>
                                <p>
                                    It accepts the same values as the Sass spacing function to control spacing between the items.
                                </p>
                                <img src= "https://polaris.shopify.com/assets/392f4cfb96fbc23e09f8758da818825e-stack@2x.png" alt= "">
                            </div>
                        </div>
                    </section>
                    <section id= "howToChoose">
                        <h3>How to choose spacing</h3>
                        <p>
                            Use less space between small components, or components that share a close functional relationship.
                        </p>
                        <img srcset= "https://polaris.shopify.com/assets/f2da072a1577c0e6ba7539dd242827cc-spacing-micro@2x.png 2x" alt= "">
                        <p>
                            Use more space between large components, or between components which are less functionally related.
                        </p>
                        <img srcset= "https://polaris.shopify.com/assets/6eb747ae735dc79314014c4d16e78e03-spacing-macro@2x.png 2x" alt= "">
                        <p>
                            Coordinate small and large values, along with structural components like cards, to create visual groupings of related things. This helps users understand the interface and find what they’re looking for.
                        </p>
                        <p>
                            For screens with specialized layouts, adjust overall spacing based on the density of the content. For example, a simple login screen on desktop display has more room to breathe, so more space can be used.
                        </p>
                    </section>
                    <section id= "commonValues">
                        <h3>Common values</h3>
                        <p>
                            4px (extra-tight) between icon and text
                        </p>
                        <p>
                            The button component has this spacing built in.
                        </p>
                        <img srcset= "https://polaris.shopify.com/assets/f3660e075f98e11181e8c5dc80b74977-icon-text-spacing@2x.png 2x" alt= "">
                        <p>
                            8px (tight) between buttons
                        </p>
                        <p>
                            The button group component has this spacing built in.
                        </p>
                        <img srcset= "https://polaris.shopify.com/assets/f3660e075f98e11181e8c5dc80b74977-icon-text-spacing@2x.png 2x" alt= "">
                        <p>
                            16 or 20px between form fields:
                        </p>
                        <p>
                            16px (base) vertically
                        </p>
                        <p>
                            20px (loose) horizontally
                        </p>
                        <p>
                            The form layout component has this spacing built in.
                        </p>
                        <img srcset= "https://polaris.shopify.com/assets/2cc376269ee87cd5c42d5dbdfde9780b-form-layout@2x.png 2x" alt= "">
                        <p>
                            20px (loose) padding in cards
                        </p>
                        <p>
                            16px (base) side padding on small screen
                        </p>
                        <p>
                            The card component has this built in.
                        </p>
                        <img srcset= "https://polaris.shopify.com/assets/80aad1ee53af5d357d520cc214ab84dd-card-padding@2x.png 2x" alt= "">
                        <img srcset= "https://polaris.shopify.com/assets/e84137a8520bbe36a0eaca708abe72b1-card-padding-small-screen@2x.png 2x" alt= "">
                        <p>
                            20px (loose) between cards
                        </p>
                        <p>
                            The card component automatically adds vertical space between it and any preceding card.
                        </p>
                        <p>
                            For horizontal spacing, use the layout component to create multi-column layouts.
                        </p>
                        <img srcset= "https://polaris.shopify.com/assets/f52cd017696b30045da3af93be1f66a3-card-spacing@2x.png 2x" alt= "">
                    </section>
                    <section id= "exceptions">
                        <h3>Exceptions</h3>
                        <p>
                            When text is vertically centered inside a component, the top and bottom padding can be any size.
                        </p>
                        <img src= "https://polaris.shopify.com/assets/9ad6611582014cf691e1ea71214e04c6-centering@2x.png" alt= "">
                        <p>
                            The side padding within pill shapes can also be an odd number to match the shape’s radius.
                        </p>
                        <img src= "https://polaris.shopify.com/assets/b2ee7700226949d18e2a8d0f8ef638ef-caps@2x.png" alt= "">
                        <p>
                            Allow the length of text to determine the width of components and where they fall horizontally when placed in a row.
                        </p>
                        <img src= "https://polaris.shopify.com/assets/e7bef23155ff9a8d1d372c880e90eaeb-natural-widths@2x.png" alt= "">
                    </section>
                    <section id= "opticalAdjustment">
                        <h3>Optical Adjustment</h3>
                        <p>
                            Sometimes an element is larger than it appears. Spacing based on the invisible edges of the element will feel wrong. Correct for these optical effects by adjusting the space in 4 px increments until it looks more balanced.
                        </p>
                        <p>
                            Without optical adjustment, the disclosure icon appears too far from the right edge of the button.
                        </p>
                        <img src= "https://polaris.shopify.com/assets/90cc9cd6fd36ca1979c06fe074058ec6-optical-uncorrected@2x.png" alt= "">
                        <p>
                            After optical correction, the perceived spacing is more balanced.
                        </p>
                        <img src= "https://polaris.shopify.com/assets/912602b121b2fafa19c5cf5df74ba526-optical-corrected@2x.png" alt= "">
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
        name: 'spacing',

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
