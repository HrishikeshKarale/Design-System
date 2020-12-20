<template>
    <div class= "helpDocumentation">
        <content-subnav-layout>   
            <template slot= 'left'>
                <article id= 'helpDocumentation'>
                    <h1>Help documentation</h1>
                    <p>
                        After you build an app or other integration, writing help documentation will show users how to use it.
                    </p>
                    <p>
                        These guidelines are based on our experience writing help documentation for the COMET Help Center. They’re all intended to serve the same goal: to educate and empower COMET users.
                    </p>
                    <p>
                        To include a link to help documentation in your app or channel, use the Footer help component.
                    </p>
                    <hr>
                    <section id= "planAudience">
                        <h3>Plan your audience</h3>
                        <p>
                            The way you write your help documentation should change depending on the type of audience and their expectations. Take some time to plan for your audience.
                        </p>
                        <div class= 'subSection'>
                            <h4>Audience Types</h4>
                            <p>
                                Write help documentation for its intended audience. For any given document, we can expect a wide spectrum of COMET users as an audience:
                            </p>
                            <div class= 'subSection'>
                                <h5>Prospective users</h5>
                                <ul>
                                    <li>Not signed up yet, possibly on a free trial</li>
                                </ul>
                            </div>
                            <div class= 'subSection'>
                                <h5>Novice users</h5>
                                <ul>
                                    <li>Signed up but might not have sold online before</li>
                                    <li>Possibly not very computer-literate</li>
                                    <li>New to COMET concepts and workflows</li>
                                </ul>
                            </div>
                            <div class= 'subSection'>
                                <h5>Experienced, confident users</h5>
                                <ul>
                                    <li>Have been using COMET for some time</li>
                                    <li>Familiar with the basic concepts and workflows</li>
                                    <li>Confident with computers</li>
                                    <li>Able to try some customizations with guidance</li>
                                </ul>
                            </div>
                            <div class= 'subSection'>
                                <h5>Highly technical users</h5>
                                <ul>
                                    <li>Experienced and confident</li>
                                    <li>Extensive computing experience</li>
                                    <li>Happy to experiment and take risks</li>
                                    <li>Experienced problem-solvers</li>
                                    <li>Self serve through forums and help documentation</li>
                                </ul>
                            </div>                    
                        </div>
                        <div class= 'subSection'>
                            <h4>Audience Expectations</h4>
                            <p>
                                Each of these different users will likely have different expectations for the same document. Let’s take a look at how that might play out:
                            </p>
                            <div class= 'subSection'>
                                <h5>Prospective users</h5>
                                <ul>
                                    <li>A quick-start guide</li>
                                    <li>Conceptual overviews</li>
                                </ul>
                            </div>
                            <div class= 'subSection'>
                                <h5>Novice users</h5>
                                <ul>
                                    <li>Lots of hand-holding</li>
                                    <li>Clear step-by-step instructions</li>
                                    <li>Conceptual overviews</li>
                                    <li>Definitions of terms</li>
                                    <li>Tutorials</li>
                                    <li>Context-sensitive help</li>
                                </ul>
                            </div>
                            <div class= 'subSection'>
                                <h5>Experienced, confident users</h5>
                                <ul>
                                    <li>Clear step-by-step instructions</li>
                                    <li>Conceptual overviews</li>
                                    <li>Definitions of terms</li>
                                    <li>More challenging tutorials</li>
                                    <li>Context-sensitive help</li>
                                </ul>
                            </div>
                            <div class= 'subSection'>
                                <h5>Highly technical users</h5>
                                <ul>
                                    <li>Procedural instructions (can be to-the-point)</li>
                                    <li>Code fragments</li>
                                    <li>Pointers to information sources</li>
                                </ul>
                            </div>                    
                        </div>
                        <p>
                            This is just one way to imagine the variety of users that fit into our audience. However we imagine their skill level, our aim for documentation remains the same: to accommodate a wide range of users and their objectives. We can do this by presenting information in a way that’s inclusive of different skill levels, different learning styles, and different workflows.
                        </p>
                    </section>
                    <hr>
                    <section id= "headingsToOrganizeDocument">
                        <h3>Use headings to organize your document</h3>
                        <p>
                            Readers come to help documentation with different expectations and in different usage settings. For example:
                        </p>
                        <ul>
                            <li>One might be working through a long, multi-stage setup process to connect a third-party app into her admin</li>
                            <li>Another might be using her tablet to check out the details of COMET POS and see if it could be used at her cafe</li>
                            <li>Another might be trying to make a quick edit to his storefront in the half hour he has left before going to pick up his kids from school</li>
                        </ul>
                        <p>
                            In all these different cases, the reader needs documentation that’s findable, usable, and relevant—in short, organized.
                        </p>
                        <div class= 'subSection'>
                            <h4>Effective Headings</h4>
                            <p>
                                Effective headings make it clear to readers which sections of a document are most relevant to their current tasks (findability). Headings also provide them with a good sense of progress while they move from one task to the next (usability).
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Low-level headings</h4>
                            <p>
                                As a general rule, the lower a heading is in the doc’s hierarchy, the more flexible you can be with its tone. For example, low-level headings can be longer and more specific, or less formal.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Heading hierarchy</h4>
                            <p>
                                Maintain the heading hierarchy throughout the doc, and don’t skip heading levels. For example, go directly from H1 to H2, then to H3, and so on. This helps the readers know where they are in the document, whether they’re going through a specific workflow or just scanning.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Tips</h4>
                            <ul>
                                <li>For page or topic-level headings, use short, gerund (ing-word) based statements.</li>
                                <li>For task-based headings within the document, use verb stems / imperatives.</li>
                                <li>Avoid pronouns and articles in headings to keep them short.</li>
                                <li>Avoid long strings of nouns in a heading.</li>
                                <li>Keep the key descriptors close to the front of a heading to make the heading easier to scan quickly. Don’t bury them under “How to”, or “To”, for example.</li>
                                <li>Try to keep parallel grammatical structure between headings of the same level.</li>
                                <li>In most cases, headings should be statements rather than questions. Save question-style headings for FAQs or low-level headings that address specific functions.</li>
                                <li>Use sentence case for all headings, but no periods at the end. Format and capitalize interface elements or buttons in the way they appear in the COMET admin.</li>
                                <li>Use parallel structure in lists, headings, and pretty much everywhere else to encourage comprehension and recall.</li>
                            </ul>
                        </div>
                    </section>
                    <hr>
                    <section id= "documentTasks">
                        <h3>Document tasks</h3>
                        <div class= 'subSection'>
                            <h4>Be task-oriented</h4>
                            <p>
                                Most help documentation is task-oriented: it’s designed to guide readers through the steps they need to follow to complete a task. The best documentation will save readers time by helping them complete their tasks quickly. The way that you present information has a big impact on how useful it will be to your readers.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Use introductions</h4>
                            <p>
                                In most cases, a document shouldn’t start with a set of instructions. Instead, offer context with an introductory comment or define a key concept about the topic. Decide what information readers need before they scan the instructions. This is also true for the document’s subsections.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Use numbered steps</h4>
                            <p>
                                Divide up the instructions in a way that reflects how the reader might think of the task. Use numbered steps for each part of the task. This helps to hold your reader’s attention, and makes it easier for them to switch between a help document and COMET to complete the task.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Start at the beginning of a workflow</h4>
                            <p>
                                Make sure that the instructions for major tasks in a longer document can stand alone. If the instructions for a task pick up abruptly where an earlier task left off, then the readers who begin at that point might struggle to figure out the workflow. Start documenting each task at the beginning of the workflow required to complete it
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Use short lists</h4>
                            <p>
                                In general, use short lists (either numbered steps or bullets), which are easier to read than long lists. If you have a task or a list that needs more than ten items, then break it up into two or more lists, each with their own subheading.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Make tasks actionable</h4>
                            <p>
                                Tell the user what they can do with your product, not what it can do. This means structuring documentation around user actions rather than product features. Readers aren’t there to read a spec: they want to keep their businesses up and running.
                            </p>
                            <ul>
                                <li>In general, avoid grouping multiple actions together in a single numbered step. Each step should include only one or two user actions.</li>
                                <li>Avoid telling the user to “find” or “locate” something in a task.</li>
                                <li>Use the action word “select” when you’re telling the reader to pick something from a set number of choices (like from a list or dropdown menu), and use “choose” when you’re telling the reader to make a choice that’s more open-ended (like “Choose what kind of store you want to open”).</li>
                                <li>Use consistent phrasing when referring to the reader’s choice. Use the most direct “If you want to…” instead of more formal options such as “If you would like to…” or “If you wish to…”</li>
                                <li>Avoid using “desired” in place of the more direct “want”.</li>
                            </ul>
                        </div>
                    </section>
                    <hr>
                    <section id= "structureConditionalStatements">
                        <h3>Structure conditional statements</h3>
                        <p>
                            For conditional cases, start the step with “if” so the reader doesn’t have to read the whole sentence only to find out that the condition does not apply to them. It often helps to add a “then” to help the reader identify the condition and the outcome.
                        </p>
                    </section>
                    <hr>
                    <section id= "clarifyResultsOfActions">
                        <h3>Clarify results of actions</h3>
                        <p>
                            Show results of actions in the same step as the task and be clear about where in the flow the reader is.
                        </p>
                        <div class= 'subSection'>
                            <h4>Put actions and results in the same step</h4>
                            <p>
                                If you need to mention the results of a user action, then do it in the same numbered step that describes that action (don’t use a separate numbered step). In general, omit results statements unless the result is surprising or unexpected.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Mention earlier steps to reinforce order of tasks</h4>
                            <p>
                                You can refer to an earlier step to reinforce the order of the steps.
                            </p>
                            <p>
                                For progress within a series of steps, use the phrase “When you’ve…” or “After you’ve…” Avoid using “Once you’ve…”
                            </p>
                            <p>
                                For progress between tasks, begin a section with “Now that you’ve…” or “After you’ve…” (referring back to the previous action or step).
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Use “make sure” and “confirm” for important tasks</h4>
                            <p>
                                When asking the reader to confirm something, use:
                            </p>
                            <ul>
                                <li>“Make sure” in cases where there’s still a related important task (instead of “check that” or “verify that”).</li>
                                <li>“Confirm” in cases where the reader has already been told to do something, and you’re now reminding them.</li>
                            </ul>
                        </div>
                        <div class= 'subSection'>
                            <h4>TIPS</h4>
                            <ul>
                                <li>For instructions, use the command form of the verb.</li>
                                <li>Limit the future tense to cases that actually refer to the future.</li>
                            </ul>
                        </div>
                    </section>
                    <hr>
                    <section id= "clarityWithScreenshots">
                        <h3>Use screenshots for clarity</h3>
                        <p>
                            Screenshots help visual learners understand complex tasks and add context to the tasks you’re documenting. Use them wisely.
                        </p>
                        <div class= 'subSection'>
                            <h4>Use screenshots for complex tasks</h4>
                            <p>
                                In general, don’t use a screenshot to illustrate every step in a task. Instead, save screenshots for places where the interface is complicated.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Make screenshots with equal margins</h4>
                            <p>
                                When highlighting an area of a screenshot, try to show an equal amount of space around the area that you want the reader to focus on.
                            </p>
                            <h4>Use consistent images in a workflow</h4>
                            <p>
                                Tell a story by being consistent with details in screenshots within a document. For example, you could follow a single order and keep the details the same from one screenshot to the next.
                            </p>
                        </div>
                    </section>
                    <hr>
                    <section id= "teachThroughDocumentation">
                        <h3>Teach through documentation</h3>
                        <p>
                            Documentation is an opportunity for education. Building context, making instructions clear, and encouraging learning are key.
                        </p>
                        <div class= 'subSection'>
                            <h4>Link to next steps</h4>
                            <p>
                                Offer links to the next steps. Choose the next steps based on reader profiles and feedback.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Encourage learning</h4>
                            <p>
                                Encourage the reader to learn more. Explain the benefits of the feature in the introduction of your document.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Make the first tasks easier</h4>
                            <p>
                                Where you can, give the readers “early wins”. Make the first step or two of the task short and easy.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Build context</h4>
                            <p>
                                Connect the current task to readers’ wider knowledge: other parts of COMET, the store-building process, and even the business-building process.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Try not to repeat information on the same page</h4>
                            <p>
                                In most cases, avoid repeating information on a page. You might need to repeat important points to make sure the reader notices them. For example, you might repeat a warning from the document’s introduction within a set of instructions.
                            </p>
                        </div>
                    </section>
                    <hr>
                    <section id= "useRightTone">
                        <h3>Use the right tone</h3>
                        <p>
                            Think of the context that the reader is in and what they might be feeling and thinking while they’re reading your documentation. This perspective will help you pick what type of tone to apply.
                        </p>
                        <div class= 'subSection'>
                            <h4>Instructional tone</h4>
                            <p>
                                Most people don’t want to spend time reading documentation. They want to learn what they need to know, and then move on. The language in documentation needs to be short, to the point, and task-oriented. That doesn’t mean your writing needs to be terse or dry.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Lighter tone</h4>
                            <p>
                                In general, you can begin a document using a lighter tone.
                            </p>
                        </div>  
                        <div class= 'subSection'>
                            <h4>Informal tone</h4>
                            <p>
                                When you introduce a task, an informal tone can help draw the reader in, offer context, and encourage the reader to keep going. You can also use a more informal tone when introducing sub-tasks, to give the reader a break from the instructions.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Direct tone</h4>
                            <p>
                                For actions and tasks, aim for a much more direct tone. Keep your tone approachable by using contractions (for example can’t, it’s) to link directions and results.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>TIPS</h4>
                            <ul>
                                <li>Use contractions.</li>
                                <li>Address the reader or user as “you”.</li>
                            </ul>
                            <p>
                                Keep tone in check by avoiding the following:
                            </p>
                            <ul>
                                <li>Sounding patronizing, chummy, cheery, childish, or otherwise inappropriate in an attempt to seem informal and relatable.</li>
                                <li>Colloquialisms, jokes, sarcasm, jargon, and slang. Avoid anything that’s too culturally specific.</li>
                                <li>Colloquialisms, jokes, sarcasm, jargon, and slang. Avoid anything that’s too culturally specific.</li>
                            </ul>
                        </div>
                    </section>
                    <hr>
                    <section id= "useActiveVoice">
                        <h3>Use the active voice</h3>
                        <p>
                            Use the active voice as much as possible, which generally sounds less formal than the passive voice. This means writing “what users do instead of “what is being done by users.” But in cases where the passive voice sounds more natural than the active voice, go ahead and use passive voice (like with verbs such as “publish” or “assign” and with nouns like “discount”).
                        </p>
                    </section>
                    <hr>
                    <section id= "improveReadability">
                        <h3>Improve readability</h3>
                        <p>
                            It’s important that the sentences you put together flow. Changing things up and knowing when things should be combined or separated will improve prose. Reading sentences that flow helps reader comprehension.
                        </p>
                        <div class= 'subSection'>
                            <h4>Avoid choppy writing</h4>
                            <p>
                                Use linking adverbs, conjunctions, and prepositions liberally to avoid choppy writing.
                            </p>
                        </div>
                        <div class= 'subSection'>
                            <h4>Change up sentence structures</h4>
                            <p>
                                Vary your sentence structure, especially in longer paragraphs. Try not to use more than two phrases with a “To x, do y” structure in a row—this gets repetitive and can cause the reader to lose interest. To break it up, add a short declarative sentence, if possible
                            </p>
                        </div>   
                        <div class= 'subSection'>
                            <h4>Break up complicated chunks</h4>
                            <p>
                                Use conjunctions (a word that joins words or groups of words) to break up complicated passages.
                            </p>
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
        name: 'helpDocumentation',

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
