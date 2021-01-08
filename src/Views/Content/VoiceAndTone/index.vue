//https://polaris.shopify.com/content/voice-and-tone#navigation
<template>
    <article id= 'voiceAndTone'>
        <p>
            Learn how to apply Shopify’s voice and choose the right tone, no matter what product, feature, or app you’re building.
        </p>
        <section id= "What">
            <header>
              <h3>What is voice and tone?
            </h3>
          </header>
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
        <section id= "guidlines">
            <header>
              <h3>Voice guidelines
            </h3>
          </header>
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
                <vue-img :src= "confidentNotArrogant" />
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
                    <vue-img :src= "EmpatheticNotOverprotective" />
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
                    <vue-img :src= "transparentNotBlunt" />
                </p>
            </div>
        </section>
        <section>
            <h3 id= "toneInAction">Tone in action
            </h3>
          </header>
            <p>
                Here are some examples of how COMET’s tone changes depending on the context. Positive, neutral, or negative situations will change the tone of our message.
            </p>
            <div
                id= 'positiveSituation'
                class= 'subSection'
            >
                <h4>Positive situations</h4>
                <p>
                    When everything is working as it should, our goal is to give people what they need to get work done, without getting in the way or drawing attention to ourselves. We want the audience to know what something is or that something has happened as expected.
                </p>
                <good-vs-bad low = "4">
                    <template slot="good">
                        <p>
                            Look for the simplest way to communicate information - words aren't always necesary.
                        </p>
                        <span class="fas fa-eye" />
                    </template>
                    <template slot="bad">
                        <p>
                            Use overly complicated or intimidating language.
                        </p>
                        <card-background>
                            <div class="securityContainer">
                                <span class="fas fa-arrow-left" />
                                <h3>
                                    Security
                                </h3>
                            </div>
                            <multi-toggle
                                class= "securityToggle"
                                name="toggleInputField"
                                label="Hide Sensitive Content:"
                                :value="security"
                                labelUnchecked="OFF"
                                labelChecked="ON"
                                @value= "val => security = val"
                            />
                        </card-background>
                    </template>
                </good-vs-bad>
                <good-vs-bad low = "4">
                    <template slot="good">
                        <p>
                            Be consistent for identical actions or destinations when possible.
                        </p>
                        <ul>
                            <li>Delete product</li>
                            <li>Delete collection</li>
                        </ul>
                    </template>
                    <template slot="bad">
                        <p>
                            Add extra text just to fill space.
                        </p>
                        <text-input
                            class= "noteText"
                            label="Notes"
                            :disabled= "d_booleanTrue"
                        />
                    </template>
                </good-vs-bad>
            </div>
            <div
                id= 'neutralSituation'
                class= 'subSection'
            >
                <h4>Neutral situations</h4>
                <p>
                    Sometimes it helps to give more explanation or education. In these situations, we want to make sure people feel confident in their actions and in our capabilities.
                </p>
                <p>
                    Some people will want to be guided step-by-step through the process, while others may just want to try it out and learn on their own. Look for ways to give them both options.
                </p>
                <p>
                    Remember, they may have sought this out specifically or we may have recommended it to them, so don’t assume that they want or need to use it.
                </p>
                <good-vs-bad low = "4">
                    <template slot="good">
                        <p>
                            Help people understand why they should do something, not just how.
                        </p>
                        <vue-img :src="neutral" />
                    </template>
                    <template slot="bad">
                        <p>
                            Oversell or overpromise.
                        </p>
                        <p>
                            Create a new campaign and you could double your sales this holiday season.
                        </p>
                    </template>
                </good-vs-bad>
                <good-vs-bad low = "4">
                    <template slot="good">
                        <p>
                            Break down complicated tasks into steps that help people focus on one thing at a time.
                        </p>
                        <vue-img :src="neutral2" />
                    </template>
                    <template slot="bad">
                        <p>
                            Be overly prescriptive about how someone should use a feature.
                        </p>
                        <p>
                            You need to add at least 10 products before opening your store.
                        </p>
                    </template>
                </good-vs-bad>
            </div>
            <div
                id= 'negativeSituation'
                class= 'subSection'
            >
                <h4>Negative situation</h4>
                <p>
                    While we do our best to be proactive and protect against unexpected events, they still happen. These are often simple mistakes or roadblocks to action that can easily be fixed. Although they aren’t necessarily errors or problems, they can feel that way at first.
                </p>
                <p>
                    n this case, our job is to help people understand what happened so that they can get back to work as quickly as possible
                </p>
                <small>
                    Read the error message guidelines for more detailed guidance.
                </small>
                <good-vs-bad low = "4">
                    <template slot="good">
                        <p>
                            Clearly explain the situation and how it can be resolved.
                        </p>
                        <p>
                            Product weight needs to be positive. Change the product weight to be greater than or equal to 0 and try again.
                        </p>
                    </template>
                    <template slot="bad">
                        <p>
                            Use overly dramatic or scary words for simple errors.
                        </p>
                        <p>
                            Bad request, forbidden, fatal, expectation failed, unresolved, invalid
                        </p>
                    </template>
                </good-vs-bad>
                <good-vs-bad low = "4">
                    <template slot="good">
                        <p>
                            Look for ways to help people resolve problems automatically.
                        </p>
                        <vue-img :src="negative" />
                    </template>
                    <template slot="bad">
                        <p>
                            Use error numbers or code unless they’re easily recognizable by people and help them solve the problem.
                        </p>
                        <vue-img :src="negative2" />
                    </template>
                </good-vs-bad>
            </div>
        </section>
    </article>
</template>

<script>
import { vueImg } from "vue2-component-library"
import goodVsBad from "@/Views/goodVsBad"
import { vueToggle as multiToggle } from "vue2-component-library"
import { vueText as textInput } from "vue2-component-library"
import cardBackground from "@/components/UIComponents/Cards/cardBackground"

    export default {
        name: 'voiceAndTone',

        data() {
            const security = "ON";
            const d_booleanTrue = true;
            const confidentNotArrogant = require("@/assets/content/voice/dce4ec487f1f20d516657aae34b575e4.svg");
            const EmpatheticNotOverprotective = require("@/assets/content/voice/8f80a89f902511220b8a3b5579804b0b.svg");
            const transparentNotBlunt = require("@/assets/content/voice/b8cae87c753b46c89aec550f3a911897.svg");
            const neutral = require("@/assets/content/voice/733692ef56c3377abf5cb44062c4605f.png");
            const neutral2 = require("@/assets/content/voice/190381fc2e7588a259e394f27893f7c8.png");
            const negative = require("@/assets/content/voice/7bec013cbaaea1e28c39db4aa5eaddbd.png");
            const negative2 = require("@/assets/content/voice/b53512dc5c4d8d7c80c59a237758bf3f.png");
            return {
                security,
                d_booleanTrue,
                confidentNotArrogant,
                EmpatheticNotOverprotective,
                transparentNotBlunt,
                neutral,
                neutral2,
                negative,
                negative2
            }
        }, //data

        components: {
            goodVsBad,
            multiToggle,
            textInput,
            cardBackground,
            vueImg
        }, //componnets
    } //default
</script>

<style lang="less" scoped>
@import (reference) "../../../Less/customVariables.less";
    .securityContainer {
        display: flex;
        flex-wrap: nowrap;
        background-color: @navBackground;
        padding: @spaceMd;
        border-radius: @borderRadius @borderRadius 0 0;
        & > h3 {
            color: @backgroundColor;
            margin: 0 @spaceMd;
        }
        & > span {
            align-self: center;
            margin: 0 @spaceMd;
            color: @backgroundColor;
        }
    }
    .securityToggle {
        padding: @spaceMd;
    }
    .noteText {
        border: 1px solid @textColor;
        padding: @spaceMd;
        border-radius: @borderRadiusSm;
    }
    ul {
        margin-left: @spaceXl;
        & > li {
            list-style-type: circle;
        }
    }
    img {
        width: 100%;
    }
</style>
