<template>
    <div class= "colors">
        <content-subnav-layout>   
            <template slot= 'left'>
                <article id= 'colors'>
                    <h1 id= "colors">Colors</h1>
                    <dt>
                        COMET uses colors purposefully to communicate how things function in the interface. This helps us create visual patterns that can make interacting with our product easier and more predictable.
                    </dt>
                    <hr>
                    <section id= "guidlines">
                        <h3>Guidlines</h3>
                        <p>
                            These guidelines are the framework upon which we have built our system for how color is used in COMET.
                        </p>
                        <div class= 'subSection'>
                            <h4>Communication over decoration</h4>
                            <p>
                                Although we value an aesthetically pleasing use of color, we place a higher value on clear communication. Our use of color should be purposeful, rational, and should serve to support the purpose of the content.
                            </p>
                            <img src= "https://polaris.shopify.com/assets/bf0ca0d72f41bb6b6313d0020bb364d5-colors-content-communication@2x.png">
                        </div>
                        <div class= 'subSection'>
                            <h4>Colors should be accessible</h4>
                            <p>
                                When choosing colors, consider users who are color blind or who have low vision. Never use color alone to convey information.
                            </p>
                            <img src= "https://polaris.shopify.com/assets/fa5bded4b7a78e3a68c788395826eb5a-colors-content-accessible@2x.png">
                        </div>
                        <div class= 'subSection'>
                            <h4>Colors should focus attention</h4>
                            <p>
                                The use of color should help bring attention to what matters most. Color should support the hierarchy of the page. Use restraint.
                            </p>
                            <img src= "https://polaris.shopify.com/assets/ab393324eb30e5fc2b09554ae3a77691-colors-content-focusattention@2x.png">
                        </div>
                    </section>
                    <hr>
                    <section id= "colorPalette">
                        <h3>Color Palette</h3>
                        <p>
                            Adhering to the following color reproduction guidelines will help in creating a consistent image and maintaining the visual impact of the visual identity.
                        </p>
                        <div
                            :id= 'col.subTitle'
                            class= 'subSection' 
                            v-for= "col in colors"
                            :key= "col.id"
                            :index= "col.index"
                        >
                            <h4>{{col.subTitle}}</h4>
                            <div class= 'section'>
                                <template
                                    v-for= "(color, index) in col.color"
                                >
                                    <div
                                        :key= "index"
                                        v-if= "Array.isArray(color.color) || typeof color.color== 'array'"
                                        :id= 'color.subTitle'
                                        class= 'subSection'
                                    >
                                        <h5>{{color.subTitle}}</h5>
                                        <div class= 'section'>
                                            <template 
                                                v-for= '(cols, index) in color.color'
                                            >
                                                <vue-card
                                                    class= 'palette'
                                                    :key= "index"
                                                    :cardTitle= 'cols.text'
                                                    cardLogo= 'fas fa-circle fa-5x'
                                                    :logoColor= '"#"+cols.hex'
                                                    :actionButtons= 'd_booleanTrue'
                                                    :cardData= '{ cols: ["Name", "HEX", "RGB"], data: [cols.name, cols.hex, hexToRgb(cols.hex)]}'
                                                    low= '2'
                                                    high= '1'
                                                >
                                                    <div slot= 'actionButtons'>
                                                        <vue-clipboard
                                                            :componentCode= 'cols.hex'
                                                            :buttonName= '"copy #"+ cols.hex +" Color"'
                                                            buttonIcon= 'fas fa-copy'
                                                            :id= 'cols.hex'
                                                        />
                                                    </div>
                                                </vue-card>
                                            </template>
                                        </div>
                                    </div>
                                    <vue-card
                                        :key= "index"
                                        v-else
                                        class= 'palette'
                                        :cardTitle= 'color.text'
                                        cardLogo= 'fas fa-circle fa-5x'
                                        :logoColor= '"#"+color.hex'
                                        :actionButtons= 'd_booleanTrue'
                                        :cardData= '{ cols: ["Name", "HEX", "RGB"], data: [color.name, color.hex, hexToRgb(color.hex)]}'
                                        low= '2'
                                        high= '1'
                                    >
                                        <div slot= 'actionButtons'>
                                            <vue-clipboard
                                                :componentCode= 'color.hex'
                                                :buttonName= '"copy #"+ color.hex +" Color"'
                                                buttonIcon= 'fas fa-copy'
                                                :id= 'color.hex'
                                            />
                                        </div>
                                    </vue-card>
                                </template>
                            </div>
                        </div>
                    </section>
                    <hr>
                    <section id= "combinations">
                        <h3>Color combinations</h3>
                        <p>
                            Use the following as a guide for how and when to use colors from our palette together.
                        </p>
                        <good-vs-bad message= ''>
                            <template slot= 'good'>
                                <p>
                                    Use any light background color with its corresponding text color 
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content'
                                        style= 'color: #333333;
                                                background-color: #FAFBFC;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'color: #3C763D;
                                                background-color: #D9EDF7;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'color: #31708F;
                                                background-color: #D9EDF7;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'color: #8A6D3B;
                                                background-color: #FCF8E3;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'color: #A94442;
                                                background-color: #F2DEDE;'
                                    >
                                        Hello
                                    </div>
                                </div>
                                <p>
                                    Use any primary background color with white text
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content'
                                        style= 'color: #ffffff;
                                                background-color: #003A65;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'color: #ffffff;
                                                background-color: #00B6A8;'
                                    >
                                        Hello
                                    </div>
                                </div>
                                <p>
                                    Use white background with any dark text color
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content'
                                        style= 'background-color: #ffffff;
                                                color: #015d9a;
                                                border: 1px solid #015d9a;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'background-color: #ffffff;
                                                color: #00B6A8;
                                                border: 1px solid #00B6A8;'
                                    >
                                        Hello
                                    </div>
                                </div>
                                <p>
                                    Use white background with any of our primary colors for an icon
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content icon fas fa-life-ring fa-2x'
                                        style= 'background-color: #ffffff;
                                                color: #015d9a;
                                                border: 1px solid #015d9a;'
                                    />
                                    <div
                                        class= 'content icon fas fa-life-ring fa-2x'
                                        style= 'background-color: #ffffff;
                                                color: #015D9A;
                                                border: 1px solid #015D9A;'
                                    />
                                </div>
                            </template>
                            <template slot= 'bad'>
                                <p>
                                    Mix any color from the palette with a text color from a different part of the palette. 
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content'
                                        style= 'color: #8A6D3B;
                                                background-color: #D9EDF7;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'color: #3C763D;
                                                background-color: #D9EDF7;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'color: #31708F;
                                                background-color: #FCF8E3;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'color: #3C763D;
                                                background-color: #F2DEDE;'
                                    >
                                        Hello
                                    </div>
                                </div>
                                <p>
                                    Use low contrast button with low contrast colors
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content'
                                        style= 'color: #ccd8e0;
                                                background-color: #51A4DB;'
                                    >
                                        Hello
                                    </div>
                                    <div
                                        class= 'content'
                                        style= 'color: #FAFBFC;
                                                background-color: #ccd8e0;'
                                    >
                                        Hello
                                    </div>
                                </div>
                                <p>
                                    Use black as a background color button with black background
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content'
                                        style= 'color: #ffffff;
                                                background-color: #333333;'
                                    >
                                        Hello
                                    </div>
                                </div>
                                <p>
                                    Use any dark color as a background button with dark background
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content icon fas fa-life-ring fa-2x'
                                        style= 'color: #ffffff;
                                                background-color: #015D9A;'
                                    />
                                    <div
                                        class= 'content icon fas fa-life-ring fa-2x'
                                        style= 'color: #ffffff;
                                                background-color: #015d9a;'
                                    />
                                </div>
                            </template>
                        </good-vs-bad>
                    </section>
                    <hr>
                    <section id= "usage">
                        <h3>Color usage</h3>
                        <p>
                            The following is a set of specific guidelines for when and how to use each color in our palette.
                        </p>
                        <div class= 'colorSamples'>
                            <div>
                                <span 
                                    class= 'fas fa-circle fa-5x'
                                    style= 'color: #003A65;'
                                />
                                COMET
                            </div>
                            <div>
                                <span 
                                    class= 'fas fa-circle fa-5x'
                                    style= 'color: #00B6A8;'
                                />
                                Active State
                            </div>
                            <div>
                                <span 
                                    class= 'fas fa-circle fa-5x'
                                    style= 'color: #51A4DB;'
                                />
                                Logo
                            </div>
                            <div>
                                <span 
                                    class= 'fas fa-circle fa-5x'
                                    style= 'color: #333333;'
                                />
                                Text
                            </div>
                            <div>
                                <span 
                                    class= 'fas fa-circle fa-5x'
                                    style= 'color: #FAFBFC;'
                                />
                                background
                            </div>
                            <div>
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #D9EDF7;'
                                />
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #3C763D;'
                                />
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #D6E9C6;'
                                />
                                Information
                            </div>
                            <div>
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #D9EDF7;'
                                />
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #31708F;'
                                />
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #BCE8F1;'
                                />
                                Success
                            </div>
                            <div>
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #FCF8E3;'
                                />
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #8A6D3B;'
                                />
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #FAEBCC;'
                                />
                                Warning
                            </div>
                            <div>
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #F2DEDE;'
                                />
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #A94442;'
                                />
                                <span 
                                    class= 'fas fa-circle fa-2x'
                                    style= 'color: #EBCCD1;'
                                />
                                Danger
                            </div>
                        </div>
                        <good-vs-bad message= ''>
                            <template slot= 'good'>
                                <p>
                                    Use @accentColor (#00B6A8) for headings (h1, h2, h3, h4, h5, h6), Labels etc to suggest brand identity/ownership.
                                </p>
                                <div class= 'container'>
                                    <h1>H1</h1>
                                    <h2>H2</h2>
                                    <h3>H3</h3>
                                    <h4>H4</h4>
                                    <h5>H1</h5>
                                    <h6>H3</h6>
                                </div>
                                <p>
                                    Use @accentColor (#003A65) for text links.
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content'
                                        style= 'background-color: @backgroundColor;'
                                    >
                                        <p>These <a href= "#">guidelines</a> are the framework upon which we have built our system for how color is used in COMET.</p>
                                    </div>
                                    
                                </div>
                                <p>
                                    Use @accentColor (#00B6A8) to suggest highlight and/or suggest active status.
                                </p>
                                <div class= 'container'>
                                    <multi-toggle 
                                        class= 'content'
                                        name= "toggleInputField"
                                        value= "ON"
                                        labelUnchecked= "OFF"
                                        labelChecked= "ON"
                                    />
                                </div>
                                <p>
                                    In case of alerts, user use proper colors (background/text/border) depending on the type of alert and its respective categories(success, information, warning and danger).
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content fas fa-info-circle'
                                        style= 'color: #3C763D;
                                                background-color: #D9EDF7;
                                                border: 1px solid #D6E9C6;'
                                    >
                                        Information
                                    </div>
                                    <div
                                        class= 'content fas fa-info-circle'
                                        style= 'color: #3C763D;
                                                border: 1px solid #D6E9C6;'
                                    >
                                        Information
                                    </div>
                                    <div
                                        class= 'content fas fa-thumbs-up'
                                        style= 'color: #31708F;
                                                background-color: #D9EDF7;
                                                border: 1px solid #BCE8F1;'
                                    >
                                        Success
                                    </div>
                                    <div
                                        class= 'content fas fa-thumbs-up'
                                        style= 'color: #31708F;
                                                border: 1px solid #BCE8F1;'
                                    >
                                        Success
                                    </div>
                                    <div
                                        class= 'content fas fa-exclamation-triangle'
                                        style= 'color: #8A6D3B;
                                                background-color: #FCF8E3;
                                                border: 1px solid #FAEBCC;'
                                    >
                                        Warning
                                    </div>
                                    <div
                                        class= 'content fas fa-exclamation-triangle'
                                        style= 'color: #8A6D3B;
                                                border: 1px solid #FAEBCC;'
                                    >
                                        Warning
                                    </div>
                                    <div
                                        class= 'content fas fa-exclamation-circle'
                                        style= 'color: #A94442;
                                                background-color: #F2DEDE;
                                                border: 1px solid #EBCCD1;'
                                    >
                                        Danger
                                    </div>
                                    <div
                                        class= 'content fas fa-exclamation-circle'
                                        style= 'color: #A94442;
                                                border: 1px solid #EBCCD1;'
                                    >
                                        Danger
                                    </div>
                                </div>
                            </template>
                            <template slot= 'bad'>
                                <p>
                                    Dont use @secondaryColor (#003A65) for text links or highlighting any kind of text.
                                </p>
                                <div 
                                    class= 'container'
                                    style= 'background-color: @backgroundColor;'
                                >
                                    <p class= 'content'>These <span style= 'color: #003A65;'>guidelines</span> are the framework upon which we have built our system for how color is used in COMET.</p>
                                </div>
                            </template>
                        </good-vs-bad>
                    </section>
                    <hr>
                    <section id= "accessibility">
                        <h3>Accessibility</h3>
                        <p>
                            It’s important for COMET to meet all web accessibility standards. We encourage meeting the minimum contrast ratios specified by <a href= "https://www.w3.org/TR/WCAG21/">WCAG 2.1</a> Level AA for text, icons, other indicators, and background colors.
                        </p>
                        <ul>
                            <li>7:1 contrast ratio of needs to be maintained for normal text.</li>
                            <li>4.5:1 contrast ratio needs to be maintained for large text.</li>
                        </ul>
                        <good-vs-bad message= ''>
                            <template slot= 'good'>
                                <p>
                                    Use @secondaryColor (#003A65) as Background for lightly colored (preferably white) text.
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content'
                                        style= 'color: #ffffff;
                                                background-color: #003A65;'
                                    >
                                        Hello
                                    </div>
                                </div>
                            </template>
                            <template slot= 'bad'>
                                <p>
                                    Do not use @accentColor (#00B6A8) for background color with lightly colored text on top.
                                </p>
                                <div class= 'container'>
                                    <div
                                        class= 'content'
                                        style= 'color: #ffffff;
                                                background-color: #00B6A8;'
                                    >
                                        Hello
                                    </div>
                                </div>
                            </template>
                        </good-vs-bad>
                        <div class= 'subSection'>
                            <h4>Exception to this rule</h4>
                            <p>
                                These examples in our visual language break this rule in favor of hierarchy or communication benefits.
                            </p>
                            <div class= 'container'>
                                <div
                                        class= 'content fas fa-info-circle'
                                        style= 'color: #3C763D;
                                                background-color: #D9EDF7;
                                                border: 1px solid #D6E9C6;'
                                    />
                                    <div
                                        class= 'content fas fa-thumbs-up'
                                        style= 'color: #31708F;
                                                background-color: #D9EDF7;
                                                border: 1px solid #BCE8F1;'
                                    />
                                    <div
                                        class= 'content fas fa-exclamation-triangle'
                                        style= 'color: #8A6D3B;
                                                background-color: #FCF8E3;
                                                border: 1px solid #FAEBCC;'
                                    />
                                    <div
                                        class= 'content fas fa-exclamation-circle'
                                        style= 'color: #A94442;
                                                background-color: #F2DEDE;
                                                border: 1px solid #EBCCD1;'
                                    />
                            </div>
                            <p>
                                Used to indicate importance.
                            </p>
                        </div>
                    </section>
                    <hr>
                    <section>
                        <h3>Resources</h3>
                        <ul>
                            <li>How to Meet WCAG 2.0 requirements? <a href= "https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0" target= '_blank' class= 'fas fa-external-link-alt'/></li>
                        </ul>
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
                    <ul v-if= "col.color[0].color!= null">
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
    import multiToggle from "@/components/FormElements/multiToggle";
    import goodVsBad from "@/Views/goodVsBad"
    import vueCard from "@/components/UIComponents/Cards/vueCard"
    import vueClipboard from "@/components/Code/vueClipboard";
    import contentSubnavLayout from '@/components/Layout/contentSubnavLayout'

    export default {
        name: 'colors',

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
            multiToggle,
            goodVsBad,
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

<style lang= "less" scoped>

    @import (reference) "./../../../Less/customMixins.less";
    @import (reference) "./../../../Less/customVariables.less";

    //mixin
    .section(){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .colors {
        
        #colorPalette {

            & > div {

                &#Primary,
                &#Other {
                    display: flex;
                    flex-direction: column;
                    
                    &.subSection {
                        
                        .section {
                            .section();
                        }
                    }
                }

                &#Alerts {
                    display: flex;
                    flex-direction: column;
                    
                    &.subSection {

                        .section {
                           
                            & > #Information, 
                            & > #Success,
                            & > #Warning,
                            & > #Danger {

                                & > .section {
                                    .section();
                                }
                            }
                        }
                    }
                }
            }
        }

        .palette {
            width: fit-content;
            margin-right: 16px;
            margin-bottom: 16px;

            & + &:last-child {
                margin-right: 0px;
            }
        }

        .container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;

            .content {
                margin: 8px 16px;
                padding: @spaceMd @spaceLg;
                width: fit-content;
                border-radius: @borderRadiusMd;

                &.icon {
                    padding: @spaceSm @spaceMd;
                }
            }
        }

        #usage {

            & > div {

                &.colorSamples {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-evenly;

                    & > div {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>