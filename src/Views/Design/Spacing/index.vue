<template>    
    <article id= 'spacing'>
        <p>
            Consistent spacing creates visual balance that makes the user interface (UI) easier for users to scan. Apply consistent spacing to improve the quality of the UI.
        </p>
        <section id= "spacingSystem">
            <header>
              <h3>The spacing system</h3>
            </header>
            <p>
                All spacing for components and typography is done in increments of 4 pixels. This 4 px value forms the basic unit of measurement for spacing.
            </p>
            <vue-img :src= "img1" />
            <p>
                Typography doesn’t use a traditional baseline grid. Instead, line heights are set in increments of 4 px and spacing is measured from the edges of the text boxes.
            </p>
            <vue-img :src= "img2" />
            <p>
                Many components are sized in increments of 20 px to match the line height of body text. This makes it easy to create harmonious arrangements of components and text.
            </p>
            <p>
                For example, the standard sizes of the avatar component have been chosen match the line height of body text:
            </p>
            <vue-img :src= "img3" />
        </section>
        <section id= "code">
            <header>
              <h3>Spacing in code</h3>
            </header>
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
                    <vue-img :src= "img4" />
                </div>
                <div class= 'subSection'>
                    <h5>Stack</h5>
                    <p>
                        The stack component can be used to arrange arbitrary components in a horizontal row or vertical stack with space in between.
                    </p>
                    <p>
                        It accepts the same values as the Sass spacing function to control spacing between the items.
                    </p>
                    <vue-img :src= "img5" />
                </div>
            </div>
        </section>
        <section id= "howToChoose">
            <header>
              <h3>How to choose spacing</h3>
            </header>
            <p>
                Use less space between small components, or components that share a close functional relationship.
            </p>
            <vue-img :src= "img6" />
            <p>
                Use more space between large components, or between components which are less functionally related.
            </p>
            <vue-img :src= "img7" />
            <p>
                Coordinate small and large values, along with structural components like cards, to create visual groupings of related things. This helps users understand the interface and find what they’re looking for.
            </p>
            <p>
                For screens with specialized layouts, adjust overall spacing based on the density of the content. For example, a simple login screen on desktop display has more room to breathe, so more space can be used.
            </p>
        </section>
        <section id= "commonValues">
            <header>
              <h3>Common values</h3>
            </header>
            <p>
                4px (extra-tight) between icon and text
            </p>
            <p>
                The button component has this spacing built in.
            </p>
            <vue-img :src= "img8" />
            <p>
                8px (tight) between buttons
            </p>
            <p>
                The button group component has this spacing built in.
            </p>
            <vue-img :src= "img9" />
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
            <vue-img :src= "img10" />
            <p>
                20px (loose) padding in cards
            </p>
            <p>
                16px (base) side padding on small screen
            </p>
            <p>
                The card component has this built in.
            </p>
            <vue-img :src= "img11" />
            <vue-img :src= "img12" />
            <p>
                20px (loose) between cards
            </p>
            <p>
                The card component automatically adds vertical space between it and any preceding card.
            </p>
            <p>
                For horizontal spacing, use the layout component to create multi-column layouts.
            </p>
            <vue-img :src= "img13" />
        </section>
        <section id= "exceptions">
            <header>
              <h3>Exceptions</h3>
            </header>
            <p>
                When text is vertically centered inside a component, the top and bottom padding can be any size.
            </p>
            <vue-img :src= "img14" />
            <p>
                The side padding within pill shapes can also be an odd number to match the shape’s radius.
            </p>
            <vue-img :src= "img15" />
            <p>
                Allow the length of text to determine the width of components and where they fall horizontally when placed in a row.
            </p>
            <vue-img :src= "img16" />
        </section>
        <section id= "opticalAdjustment">
            <header>
              <h3>Optical Adjustment</h3>
            </header>
            <p>
                Sometimes an element is larger than it appears. Spacing based on the invisible edges of the element will feel wrong. Correct for these optical effects by adjusting the space in 4 px increments until it looks more balanced.
            </p>
            <p>
                Without optical adjustment, the disclosure icon appears too far from the right edge of the button.
            </p>
            <vue-img :src= "img17" />
            <p>
                After optical correction, the perceived spacing is more balanced.
            </p>
            <vue-img :src= "img18" />
        </section>
    </article>
</template>

<script>
import vueImg from "@/components/UIComponents/Image/vueImg"

    export default {
        name: 'spacing',
        
        data() {
            const img1 = require("@/assets/design/spacing/77cbbfac15fc417248ff564e03cbe3a2.png");
            const img2 = require("@/assets/design/spacing/edee413a2250a2f7b9696096035c6601.png");
            const img3 = require("@/assets/design/spacing/c555cdf9647f5f8817fe8b1685fdade3.png");
            const img4 = require("@/assets/design/spacing/2ec5ec17dcb8b996ecf1f3ebec992e66.png");
            const img5 = require("@/assets/design/spacing/06cf82c565ebe0126717286e050f34bf.png");
            const img6 = require("@/assets/design/spacing/2b7241efdb4598599d53a08d50421db9.png");
            const img7 = require("@/assets/design/spacing/1bd4f319325809ce92e5d153f155a04b.png");
            const img8 = require("@/assets/design/spacing/858525cb0c3dcb84d827223c842a8f8e.png");
            const img9 = require("@/assets/design/spacing/a83a6350f0b45247b9348ee16cd6bcba.png");
            const img10 = require("@/assets/design/spacing/0f82da84cab264e5019abe4c676db759.png");
            const img11 = require("@/assets/design/spacing/a4e75f8f6a39ed53727da0a373f9de25.png");
            const img12 = require("@/assets/design/spacing/42aa486ef00cc52a2c2979c4eadd3ff0.png");
            const img13 = require("@/assets/design/spacing/446c269a3c0c16e25bf70327435ed807.png");
            const img14 = require("@/assets/design/spacing/32fbb59c4e996fc20e8b3d04431a7eb0.png");
            const img15 = require("@/assets/design/spacing/5af993743f52a65733e04f8b263d085a.png");
            const img16 = require("@/assets/design/spacing/9e497b70378eafc52827b5d17d820a86.png");
            const img17 = require("@/assets/design/spacing/025ac531ae2f3e735c1b744ed31b7e10.png");
            const img18 = require("@/assets/design/spacing/4582e5529e4037b61c38cdec6621eb8a.png");
            return{
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7,
                img8,
                img9,
                img10,
                img11,
                img12,
                img13,
                img14,
                img15,
                img16,
                img17,
                img18
            }
        }, //data

        components: {
            vueImg
        }, //componnets
    } //default
</script>

<<style lang="less">
    img {
        max-width: 480px;
    }
</style>