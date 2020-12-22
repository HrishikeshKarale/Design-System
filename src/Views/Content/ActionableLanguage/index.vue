<template>
    <div class= "actionableLanguage">
        https://polaris.shopify.com/content/actionable-language#navigation   
            
                <article id= 'actionableLanguage'>
                    <h1>Actionable Language</h1>
                    <p>
                        Merchants use COMET to get things done. Content should be written and structured to help them understand and take the most important actions.
                    </p>
                    <section id= "sentences">
                        <h3>Sentences</h3>
                        <p>
                            Start sentences with imperative verbs when telling users what actions they can take (especially when introducing something new).
                        </p>
                        <p>
                            When a merchant reads a sentence that starts with an imperative verb it should sound like they’re being instructed what to do. Don’t use permissive language like “you can”.
                        </p>
                    </section>
                    <section id= "buttons">
                        <h3>Buttons</h3>
                        <p>
                            Buttons need to be clear and predictable. Merchants should be able to anticipate what will happen when they select a button. Never mislead someone by mislabeling a button.
                        </p>
                        <ul>
                            <li>Buttons should always lead with a strong verb that encourages action. To provide enough context to users, use the {verb} + {noun} content formula on buttons except in the case of common actions like “Done”, “Close”, “Cancel”, or “OK”</li>
                            <li>Always write button text in sentence case, which means the first word is capitalized and the rest are lowercase (unless a term is a proper noun).</li>
                            <li>Avoid unnecessary words and articles such as the, an, or a.</li>
                        </ul>
                    </section>
                    <section id= "links">
                        <h3>Links</h3>
                        <p>
                            Links need to be clear and predictable. Merchants should be able to anticipate what will happen when they select a link. Never mislead someone by mislabeling a link.
                        </p>
                        <p>
                            Links should never use “click here” or “here” as link text.
                        </p>
                        <div
                            id= 'linkInSectence'
                            class= 'subSection'
                        >
                            <h4>Links in a sentence</h4>
                            <p>
                                Links in full sentences shouldn’t link the entire sentence, only the text that describes where users go when they select the link.
                            </p>
                            <p>
                                It’s better for internationalization to have only single terms or small parts of phrases linked. Linking a full phrase is problematic because the word order might change, which would break the link into two parts.
                            </p>
                            <h4>Links outside of a sentence</h4>
                            <p>
                                Links that aren’t in full sentences should use the {verb + noun} pattern and not be punctuated, with the exception of question marks.
                            </p>
                        </div>
                    </section>
                    <section id= "confirmations">
                        <h3>Confirmations</h3>
                        <p>
                            Confirmations are presented for actions that can’t be undone or are difficult to undo.
                        </p>
                        <p>
                            Confirmation messages should:
                        </p>
                        <ul>
                            <li>Always give users the option to either confirm or cancel their action</li>
                            <li>Be used for a single, primary task</li>
                            <li>Keep body content to one line of text and not use more than two calls to action</li>
                        </ul>
                        <p>
                            Confirmation titles should:
                        </p>
                        <ul>
                            <li>Ask if users want to continue, using a concise {verb}+{noun} question</li>
                            <li>Be one sentence and avoid using punctuation, with the exception of question marks</li>
                            <li>Avoid articles (the, a, an) to keep content short and actionable</li>
                            <li>Be written in sentence case (the first word is capitalized, and the rest is lowercase)</li>
                        </ul>
                        <p>
                            Confirmation body content should:
                        </p>
                        <ul>
                            <li>Clearly explain if the action is irreversible or difficult to undo, using plain language.</li>
                            <li>Be concise: use only one line of text. Don’t start the sentence with, “Are you sure?”.</li>
                        </ul>
                        <p>
                            Confirmation primary and secondary actions should:
                        </p>
                        <ul>
                            <li>Be clear and predictable: users should be able to anticipate what will happen when they click a button</li>
                            <li>Scannable: avoid unnecessary words and articles such as the, an, or a</li>
                        </ul>
                        <p>
                            Since confirmation messages are placed in modals, the call to action in the title is in close context to the buttons. Because of this, the call to action text on the buttons doesn’t have to follow the &#123;verb&#125;+&#123;noun&#125; pattern. Instead, one word calls to action can be used, for example, &#91;Cancel&#93; &#91;Delete&#93;.
                        </p>
                        <div
                            id= 'deletions'
                            class= 'subSection'
                        >
                            <h4>Deletions</h4>
                            <p>
                                Before users can delete objects like collections, transfers, products, and variants, we present them with a confirmation message that has two calls to action, one to [Cancel] and one to [Delete]. We keep it short and don’t use {verb}+{noun} button copy.
                            </p>
                            <ul>
                                <li>Primary action:</li>
                                <li>Secondary action:</li>
                            </ul>
                        </div>
                        <div
                            id= 'discardingChanges'
                            class= 'subSection'
                        >
                            <h4>Discarding changes while on a page</h4>
                            <ul>
                                <li>Primary action:</li>
                                <li>Secondary action:</li>
                            </ul>
                        </div>
                        <div
                            id= 'unsavedChanges'
                            class= 'subSection'
                        >
                            <h4>Leaving a page with unsaved changes</h4>
                            <ul>
                                <li>Primary action:</li>
                                <li>Secondary action:</li>
                            </ul>
                        </div>
                    </section>
                    <section id= "saveVsDone">
                        <h3>Save vs. done</h3>
                        <p>
                            Use “Save” when a change is saved immediately to a database and “Done” for <a href= "#deferredSaves">deferred saves</a>.
                        </p>
                        <div
                            id= 'savingToDatabase'
                            class= 'subSection'
                        >
                            <h4>Saving immediately to a database</h4>
                            <p>
                                Use “Save” for web and iOS as the default for any action that saves immediately to a database. For Android, use a check mark.
                            </p>
                        </div>
                        <div
                            id= 'savingUsingContextBar'
                            class= 'subSection'
                        >
                            <h4>Saving using the context bar component</h4>
                            <p>
                                When users make changes on a page they’re sometimes presented with a context bar at the top. This context bar displays a status message on the left to indicate the state of the changes, like “Unsaved discount”. Since the status message provides context around the action being taken, the button doesn’t need to follow the common &#123;verb&#125; + &#123;noun&#125; content formula. For example, &#91;Save&#93; instead of &#91;Save product&#93;. In the context bar component, use the verb “Save” for web and iOS, and a check mark in Android.
                            </p>
                            <p>
                                Status messages in the context bar should be descriptive and follow the &#123;adjective&#125; + &#123;noun&#125; content formula.
                            </p>
                        </div>
                        <div
                            id= 'savingInModalsSheets'
                            class= 'subSection'
                        >
                            <h4>Saving in modals and sheets</h4>
                            <p>
                                For web and iOS, use the verb “Save” in modals and sheets when saving directly to the database. For Android, use a check mark to indicate “Save”.
                            </p>
                        </div>
                        <div
                            id= 'savingtaBottom'
                            class= 'subSection'
                        >
                            <h4>Saving at the bottom of a page in web</h4>
                            <p>
                                Use the &#123;Save&#125; + &#123;noun&#125; content formula when a save action doesn’t have the surrounding context of a modal or context bar. This applies to the save action at the bottom of pages in web.
                            </p>
                            <p>
                                For example, the action at the bottom of the Create discount page in web uses &#91;Save discount&#93;:
                            </p>
                            <ul>
                                <li>Android and iOS have one save action at the top of the screen in the nav bar. These platforms don’t use a save bar at the bottom of a page like in web.</li>
                            </ul>
                        </div>
                        <div
                            id= 'deferredSaves'
                            class= 'subSection'
                        >
                            <h4>deffered Saves</h4>
                            <p>
                                Sometimes, when users confirm a set of changes inside a modal or sheet, these changes are applied as unsaved changes to the current page. In other words, the changes made weren’t immediately saved to the database. When this happens, don’t use the verb “Save” as the call to action because it would be misleading.
                            </p>
                            <p>
                                Use the adjective “Done” in web, Android, and iOS for deferred saves. When the modal or sheet closes, then users can save all of the changes they made.
                            </p>
                            <p>
                                Most deferred saves happen when confirming changes in Add, Edit, Manage, and Select modals and sheets.
                            </p>
                        </div>
                        <div
                            id= 'datePickers'
                            class= 'subSection'
                        >
                            <h4>Datepickers</h4>
                            <p>
                                Use the adjective “Done” in web, Android, and iOS for datepickers.
                            </p>
                        </div>
                    </section>
                    <section id= "okVsAccept">
                        <h3>OK vs. accept</h3>
                        <p>
                            Use the adjective “OK” when users need to confirm they’ve read something, but aren’t required to legally accept terms of service before continuing. For example, use “OK” when presenting a security notification in a modal or sheet.
                        </p>
                        <p>
                            Use the adjective “Accept” when terms of service require legal confirmation before users can continue.
                        </p>
                    </section>
                    <section id= "closeVsCancel">
                        <h3>Close vs. cancel</h3>
                        <p>
                            Use “Close” in web and iOS, and an “X” in Android, as the call to action for modals and screens when:
                        </p>
                        <ul>
                            <li>the content is in a view-only state</li>
                        </ul>
                        <p>
                            Don’t use “Close” as the call to action when there’s the option for users to:
                        </p>
                        <ul>
                            <li>make any changes to the modal or screen</li>
                            <li>confirm they’ve read something or accept terms of service (see <a href= "#okVsAccept">OK vs. accept</a> )</li>
                        </ul>
                        <p>
                            Use “Cancel” as the option for users to back out of any changes made on a page, modal, or sheet. When the cancel button is pressed, changes automatically get discarded. “Cancel” is often paired with “Save” and “Done” actions (and is always placed to the left).
                        </p>
                    </section>
                    <section id= "selectVsChoose">
                        <h3>Select vs. choose</h3>
                        <p>
                            Use the verb “select”:
                        </p>
                        <ul>
                            <li>When telling users to pick something from a limited number of options of the same kind</li>
                            <li>When users need to make an easy or obvious decision that doesn’t require deep reflection or analysis</li>
                            <li>For defined lists and dropdown menus</li>
                            <li>When users are given the option to pick from a list of already existing objects, like products</li>
                        </ul>
                        <p>
                            Pair Select modals and screens with the “Done” call to action.
                        </p>
                        <p>
                            Use the verb “choose” when:
                        </p>
                        <ul>
                            <li>Encouraging users to make a decision that is more subjective, strategic, emotional, or open-ended</li>
                            <li>Merchants have to pick from a large inventory of items, like themes, or options that require strategic decision making, like pricing plans</li>
                        </ul>
                    </section>
                    <section id= "editVsManage">
                        <h3>Edit vs. manage</h3>
                        <p>
                            Use the verb “edit” when you can change the input of a field (letters, numbers, properties). Place as link text next to the field or area that is being edited. There’s no need for a noun unless it’s unclear what’s being edited.
                        </p>
                        <p>
                            Use the verb “manage” at a higher level to convey that multiple actions can be done, or sections and settings can be updated. Pair this verb with a noun if it’s in a button or if it’s unclear what is being managed.
                        </p>
                    </section>
                    <section id= "changeVsSwitch">
                        <h3>Change vs. switch</h3>
                        <p>
                            Use the verb “change” when users can replace an option, but not edit it. For example, they can change an image or theme, but the action doesn’t include editing its properties. Place as link text next to the field or area that is being changed. There’s no need for a noun unless it’s unclear what is being changed.
                        </p>
                        <p>
                            Use the verb “switch” when it’s important for users to know what they’re switching between, like users, accounts, locations, or modes. When the switch happens, the previous option is turned off, logged out, or deactivated. Always pair with a noun to prevent confusion.
                        </p>
                    </section>
                    <section id= "createVsAdd">
                        <h3>Create vs. add</h3>
                        <p>
                            Use the verb “create” when you’re encouraging users to generate something from scratch, like a collection.
                        </p>
                        <p>
                            Use the verb “add” when you’re encouraging users to bring something that already exists into COMET, like a product.
                        </p>
                    </section>
                    <section id= "viewVsSee">
                        <h3>View vs. see</h3>
                        <p>
                            Use the verb “view” when you’re encouraging users to go to a specific page or section for more details, or to reveal more information. Use “view” in buttons, calls to action, and link text.
                        </p>
                        <p>
                            Use the verb “see” in more general, conversational descriptions without a specific call to action.
                        </p>
                    </section>
                    <section id= "needVsMust">
                        <h3>Need vs. must</h3>
                        <p>
                            Use the verb “need” when you’re telling users something they’re required to do or should do.
                        </p>
                    </section>
                    <section id= "exportVsDownload">
                        <h3>Export vs. download</h3>
                        <p>
                            Use “export” as the call to action when users needs to transfer data from COMET and convert it into a different format.
                        </p>
                        <p>
                            Use “download” as the call to action when users need to copy data (of the same format) from COMET to a computer system.
                        </p>
                    </section>
                    <section id= "importVsUpload">
                        <h3>Import vs. upload</h3>
                        <p>
                            Use “import” as the call to action when users need to transfer data and convert it into a different format so it can be used in COMET.
                        </p>
                        <p>
                            Use “upload” as the call to action when users need to copy data of the same format from a computer system into COMET.
                        </p>
                    </section>
                </article>
    </div>
</template>

<script>

    import vueButton from '@/components/UIComponents/Buttons'
    import vueCard from "@/components/UIComponents/Cards/vueCard"
    import vueClipboard from "@/components/Code/vueClipboard";
    
    // import { store } from '@/store/store'

    export default {
        name: 'actionableLanguage',

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
